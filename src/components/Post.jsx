import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { postData } from "../data/PostData";

function Post() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:w-10/12 lg:w-auto mx-auto gap-10">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold mb-5">Featured Post</h2>
          <img
            src="./images/post.png"
            alt="post-img"
            className="w-[670px] sm:h-[352px] bg-cover"
          />
          <h5 className="text-lg">
            By <span className="text-purpleColor">John Doe</span> | May 23, 2022
          </h5>
          <h3 className="text-2xl font-semibold text-darkBlue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h3>
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id
            magnam corporis nisi itaque fugit qui dolor porro mollitia tempore?
          </p>
          <button className="flex items-center justify-center w-52 bg-yellowColor h-14 text-darkBlue space-x-2 rounded-sm hover:bg-[#EDC14A] duration-200">
            <h5 className="font-semibold text-lg">Read More</h5>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-5">All Post</h2>
          {postData.map((post) => (
            <div
              key={post.id}
              className="p-6 hover:bg-lightYellow duration-300 cursor-pointer space-y-2 rounded"
            >
              <h5 className="text-lg">
                By <span className="text-purpleColor">John Deo</span> | Aug 23,
                2021
              </h5>
              <h3 className="text-2xl font-semibold">{post.heading}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
