import React from "react";

function BlogPostImg() {
  return (
    <div className="max-w-7xl mx-auto h-72 md:h-96 lg:h-[580px] md:w-10/12 lg:w-auto overflow-hidden rounded-sm px-10 xl:px-10 my-20">
      <img
        src="./images/blogPostBannerImg.png"
        alt="blogPostBannerImg-img"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default BlogPostImg;
