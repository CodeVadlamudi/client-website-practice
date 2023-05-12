import React from "react";
import { blogPostOtherData } from "../data/BlogPostOtherData";

function BlogOtherPost() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0 my-20">
      <h2 className="text-3xl font-bold mb-10">What to read next</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10">
        {blogPostOtherData.map((blogPostOther) => (
          <div key={blogPostOther.id} className="shadow-md rounded-md overflow-hidden group">
            <img
              src={blogPostOther.img}
              alt="blogPostOther-img"
              className="h-80 w-full object-cover"
            />
            <div className="p-8 space-y-4 group-hover:bg-lightYellow duration-200">
              <h4>
                By{" "}
                <span className="font-semibold text-purpleColor">John Doe</span>{" "}
                | Aug 23, 2021
              </h4>
              <h3 className="text-2xl font-semibold">
                {blogPostOther.heading}
              </h3>
              <p>{blogPostOther.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogOtherPost;
