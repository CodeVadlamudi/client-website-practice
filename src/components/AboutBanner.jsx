import React from "react";

function AboutBanner() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:p-0 my-20 md:w-10/12 lg:w-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="text-darkBlue space-y-4">
          <h3 className="tracking-[3px] uppercase font-medium">About Us</h3>
          <h1 className="text-3xl md:text-4xl font-bold">We are a team of content writers who share their learnings</h1>
        </div>
        <p className="text-darkGrey text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default AboutBanner;
