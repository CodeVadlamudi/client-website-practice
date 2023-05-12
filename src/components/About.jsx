import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

function About() {
  return (
    <div className="max-w-7xl mx-auto bg-lavender py-20 px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:w-10/12 lg:w-auto gap-16 mx-auto">
        <div className="space-y-5">
          <h3 className="tracking-[3px] text-darkBlue uppercase font-medium">
            About Us
          </h3>
          <h2 className="text-3xl font-semibold">
            We are a community of content writers who share their learnings
          </h2>
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="flex items-center space-x-2 text-purpleColor">
            <h5 className="font-semibold text-lg">Read More</h5>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5">
          <h3 className="tracking-[3px] text-darkBlue uppercase font-medium">
            Our Mision
          </h3>
          <h2 className="text-3xl font-semibold">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
