import axios from "axios";
import { BACKEND_URL } from "../../config";
import { NotebookIcon } from "../../icons/notebook";
import { ShareIcon } from "../../icons/shareIcon";
import { TrashIcon } from "../../icons/trash";
import { Tweet } from "react-tweet";
interface CardProps {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
  refresh: () => void;
}
export function Card({ _id, title, link, type, refresh }: CardProps) {
  const getTweetId = (url: string) => {
    const parts = new URL(url).pathname.split("/");
    return parts[parts.length - 1];
  };
  const tweetId = type === "twitter" ? getTweetId(link) : "";
  const getEmbedLink = (url: string) => {
    try {
      const parsedUrl = new URL(url);

      // youtu.be link
      if (parsedUrl.hostname === "youtu.be") {
        const videoId = parsedUrl.pathname.slice(1);
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // youtube.com/watch?v=...
      if (parsedUrl.hostname.includes("youtube.com")) {
        const videoId = parsedUrl.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      }

      return "";
    } catch {
      return "";
    }
  };

  async function Delete() {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          contentId: _id,
        },
      });

      refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete content.");
    }
  }

  const embedLink = getEmbedLink(link);
  return (
    <div>
      <div className="bg-white rounded-md shadow-md border-slate-100 w-80 p-4 ">
        <div className="flex justify-between">
          <div className="flex justify-start gap-2">
            <div>
              <NotebookIcon />
            </div>
            {title}
          </div>
          <div className="flex justify-end gap-4">
            <div
              onClick={async (e) => {
                e.preventDefault();

                try {
                  await navigator.clipboard.writeText(link);
                  alert("Link copied!");
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              <ShareIcon />
            </div>

            <div className="hover:cursor-pointer" onClick={Delete}>
              <TrashIcon />
            </div>
          </div>
        </div>
        {/* const tweetId = getTweetId(link); */}
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full rounded"
              src={embedLink}
              title={title}
              allowFullScreen
            />
          )}
          {type === "twitter" && <Tweet id={tweetId} />}
        </div>
      </div>
    </div>
  );
}
