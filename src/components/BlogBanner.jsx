import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function BlogBanner() {
  return (
    <div className="bg-lavender py-20">
      <div className="max-w-7xl mx-auto md:w-10/12 lg:w-full px-10 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-7/12 text-darkBlue space-y-4">
            <h3 className="tracking-[3px] uppercase font-medium">
              Featured Post
            </h3>
            <h2 className="text-3xl font-semibold">
              Step-by-step guide to choosing great font pairs
            </h2>
            <h5 className="text-lg">
              By{" "}
              <span className="text-purpleColor font-semibold">John Doe</span> |
              May 02, 2022
            </h5>
            <p className="text-mediumGrey">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <a href="/blogPost" className="flex items-center justify-center w-52 bg-yellowColor h-14 text-darkBlue space-x-2 rounded-sm hover:bg-[#EDC14A] duration-200">
              <h5 className="font-semibold text-lg">Read More</h5>
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="lg:w-5/12 flex lg:justify-end overflow-hidden w-full h-[360px]">
            <img
              src="./images/blog-banner.png"
              alt="blog-banner-img"
              className="object-cover mx-auto w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogBanner;
