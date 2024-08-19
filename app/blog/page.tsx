"use client"
import React from 'react'
import { useRouter } from "next/navigation";

export default function TrangChu() {
     const post = [
       {
         id: 1,
         title: "ABCD",
         slug: "ABCD",
       },
       {
         id: 2,
         title: "1234",
         slug: "1234",
       },
     ];
      const router = useRouter();
     const handleSlug = (slug:string) => {
       router.push(`/blog/${slug}`);
       console.log(slug);
     };
  return (
    <div>
      <div className="post-list">
        {post.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <button onClick={() => handleSlug(post.slug)}>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
}
