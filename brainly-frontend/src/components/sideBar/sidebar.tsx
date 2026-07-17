import { TwitterIcon } from "../../icons/twitterIcon";
import { YoutubeIcon } from "../../icons/youyubeIcon";
import { SidebarItems } from "./sidebarItem";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface SidebarProps {
  fetchContent: (type?: "twitter" | "youtube") => void;
}

export function Sidebar({ fetchContent }: SidebarProps) {
  return (
    <div className="h-screen bg-white border-r w-72 fixed border-0 rounded-br-3xl">
      <div
        className=" flex text-2xl text-blue-500 pl-4 pt-3 items-center cursor-pointer"
        onClick={() => fetchContent()}
      >
        <AcademicCapIcon className=" h-10 w-10 text-blue-500" />
        <h1 className="px-2 py-6">Brain</h1>
      </div>

      <div className="pt-4">
        <div onClick={() => fetchContent("twitter")}>
          <SidebarItems text="Twitter" icon={<TwitterIcon />} />
        </div>

        <div onClick={() => fetchContent("youtube")}>
          <SidebarItems text="Youtube" icon={<YoutubeIcon />} />
        </div>
      </div>
    </div>
  );
}