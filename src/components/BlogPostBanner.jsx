import React from "react";

function BlogPostBanner() {
  return (
    <div className="md:w-10/12 mx-auto px-10 flex flex-col my-20 space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <img
          src="./images/a3.jpg"
          alt="blogPost-img"
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <h3 className="text-xl text-purpleColor font-bold">Andrew Jonson</h3>
          <h5 className="text-mediumGrey">Posted on 27th January 2022</h5>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center">Step-by-step guide to choosing great font pairs</h1>
      <div className="flex items-center justify-center space-x-2">
        <img src="./images/shuttle.png" alt="icon-img" />
        <h3 className="text-lg font-bold">Startup</h3>
      </div>
    </div>
  );
}

export default BlogPostBanner;
