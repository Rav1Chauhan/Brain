import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/shareIcon";
import { Card } from "../components/ui/card";
import { CreateContentModal } from "../components/CreateContentModal";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/sideBar/sidebar";
import { useContent } from "../components/hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { content, fetchContent } = useContent();
  useEffect(() => {
    fetchContent();
  }, [modalOpen]);

  async function Share() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;

      await navigator.clipboard.writeText(shareUrl);

      alert("Share link copied to clipboard!");
    } catch (error) {
      console.error(error);
      alert("Failed to generate share link.");
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen">
      <div>
        <Sidebar fetchContent={fetchContent} />
      </div>
      <div className="p-4 ml-72 border-0 ">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4 px-8 py-6">
          <Button
            startIcon={<ShareIcon size="md" />}
            variant="primary"
            size="md"
            text="Share Brain"
            onClick={Share}
          />

          <Button
            startIcon={<PlusIcon size="md" />}
            variant="secondary"
            size="md"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </div>
        <div className="flex justify-start flex-wrap gap-5 ">
          {content.map((item) => (
            <Card
              key={item._id}
              _id={item._id}
              title={item.title}
              link={item.link}
              type={item.type}
              refresh={fetchContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
