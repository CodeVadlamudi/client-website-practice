import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Started() {
  return (
    <div className="max-w-7xl mx-auto px-10 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:w-10/12 lg:w-full mx-auto">
        <div className="overflow-hidden">
          <img
            src="./images/started.png"
            alt="started-img"
            className="w-[900px] h-[500px] block object-cover hover:scale-[1.2] duration-300"
          />
        </div>
        <div className="h-[500px] flex flex-col items-start p-10 justify-center bg-lightGrey space-y-4">
          <h5 className="tracking-[3px] uppercase font-medium">
            Why We Started
          </h5>
          <h2 className="text-2xl font-bold">
            It started out as a simple idea and evolved into our passionIt
            started out as a simple idea and evolved into our passion
          </h2>
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="flex items-center justify-center w-60 hover:w-64 bg-yellowColor h-14 text-darkBlue space-x-2 rounded-sm hover:bg-[#EDC14A] duration-200">
            <h5 className="font-semibold text-lg">Discover our story</h5>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Started;
