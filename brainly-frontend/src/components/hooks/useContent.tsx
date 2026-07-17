import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../config";


interface Content {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function useContent() {
  const [content, setContent] = useState<Content[]>([]);
  const [filter, setFilter] = useState<"twitter" | "youtube" | undefined>();
  async function fetchContent(type?: "twitter" | "youtube") {
    setFilter(type);
    try {
      const url = type
        ? `${BACKEND_URL}/api/v1/content/${type}`
        : `${BACKEND_URL}/api/v1/content`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setContent(response.data.content);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchContent(filter);
  }, [filter]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchContent(filter);
    }, 10000);

    return () => clearInterval(interval);
  }, [filter]);

  return { content, fetchContent };
}
