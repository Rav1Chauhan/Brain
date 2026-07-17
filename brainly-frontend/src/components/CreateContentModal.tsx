import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Input } from "./Input";
// import { useState } from "react";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value ?? "";

    const type = link.includes("youtu")
      ? ContentType.YouTube
      : link.includes("x.com")
        ? ContentType.Twitter
        : null;
    if (!type) {
      alert("Please enter a valid YouTube or Twitter link");
      return;
    }
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
    onClose();
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-500/60">
          <div className="flex flex-col justify-center ">
            <div className="relative z-10000 bg-white p-4 rounded">
              <div className="flex justify-end">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder="Title" />
                <Input ref={linkRef} placeholder="Link" />
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={addContent}
                  startIcon={<PaperAirplaneIcon className="h-5 w-5 " />}
                  variant={"secondary"}
                  text="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
