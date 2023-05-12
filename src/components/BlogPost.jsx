import React from "react";
import { blogPostData } from "../data/BlogPostData";

function BlogPost() {
  return (
    <div className="max-w-7xl md:w-10/12 lg:w-full mx-auto my-20 px-10 xl:px-0">
      <h2 className="text-2xl font-bold">All Posts</h2>
      {blogPostData.map((blogPost) => (
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
          key={blogPost.id}
        >
          <div className="w-full lg:w-6/12 overflow-hidden mt-10">
            <img
              src={blogPost.img}
              alt="blog-post-img"
              className="h-80 w-full object-cover hover:scale-[1.2] duration-300"
            />
          </div>

          <div className="w-full lg:w-6/12 space-y-3">
            <h3 className="text-purpleColor uppercase tracking-[3px] font-semibold">
              {blogPost.title}
            </h3>
            <h2 className="text-2xl text-darkBlue font-bold">
              {blogPost.heading}
            </h2>
            <p className="text-mediumGrey">{blogPost.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
