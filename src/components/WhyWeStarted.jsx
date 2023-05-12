import React from "react";

function WhyWeStarted() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0 my-20">
      <div className="flex items-center flex-col-reverse lg:flex-row gap-10">
        <div className="lg:w-1/2 md:w-10/12 w-full h-[400px] relative rounded-sm">
          <div className="h-full w-full overflow-hidden">
            <img
              src="./images/whyWeBlog.png"
              alt="team-img"
              className="h-full object-cover w-full hover:scale-[1.2] duration-300"
            />
          </div>
          <div className="h-16 w-20 bg-yellowColor absolute -top-5 right-5 lg:top-5 lg:-right-5 rounded-tr-lg lg:rounded-tl-none rounded-tl-lg lg:rounded-br-lg shadow-lg" />
        </div>

        <div className="lg:w-1/2 md:w-10/12 space-y-4 text-darkBlue">
          <h2 className="text-3xl font-bold">Why we started this Blog</h2>
          <h4 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyWeStarted;
