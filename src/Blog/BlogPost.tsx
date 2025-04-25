// src/blog/BlogPost.tsx

// Polyfill Buffer for browser
import { Buffer } from "buffer";
if (!window.Buffer) window.Buffer = Buffer;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [data, setData] = useState<{ title: string; date: string } | null>(
    null
  );

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        console.log("Fetch status:", res.status); // ✅ log fetch status
        if (!res.ok) throw new Error("Markdown file not found");
        return res.text();
      })
      .then((text) => {
        const { content, data } = matter(text);
        console.log("Parsed data:", data); // ✅ check frontmatter
        setContent(content);
        setData(data as any);
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
      });
  }, [slug]);

  if (!data && content === "") return <div>Loading...</div>;
  if (!data)
    return <div className="p-8 text-red-500">Blog post not found.</div>;

  return (
    <div className="relative min-h-screen w-full font-sans flex justify-center md:py-8 sm:py-4 py-0 px-0 md:px-8 sm:px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none" />

      <div className="prose prose-lg dark:prose-invert ">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
