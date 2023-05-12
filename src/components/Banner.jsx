import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function Banner() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0">
      <div className="lg:w-1/2 absolute top-1/2 -translate-y-1/2 text-white space-y-10">
        <h6 className="text-lg uppercase font-medium tracking-[3px]">
          Posted on <span className="font-bold">startup</span>
        </h6>
        <h1 className="text-4xl lg:text-5xl font-semibold">
          Step-by-step guide to choosing great font pairs
        </h1>
        <h6 className="text-lg">
          By <span className="text-yellowColor font-semibold">James West </span>| May 01, 2023
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          sunt nisi veniam. Enim, minus error repellat dignissimos autem beatae
          non facilis odio totam praesentium voluptate rerum est pariatur
          voluptatum nulla.
        </p>
        <button className="flex items-center justify-center w-52 bg-yellowColor h-14 text-darkBlue space-x-2 rounded-sm hover:bg-[#EDC14A] duration-200">
          <h5 className="font-semibold text-lg">Read More</h5>
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>  
  );
}

export default Banner;
