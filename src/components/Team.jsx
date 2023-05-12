import React from "react";

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-4 text-darkBlue md:w-10/12 mx-auto">
          <h2 className="text-3xl font-bold">Our team of creatives</h2>
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

        <div className="h-[400px] md:w-10/12 mx-auto relative rounded-sm">
          <div className="h-full w-full overflow-hidden">
            <img
              src="./images/team-img.png"
              alt="team-img"
              className="h-full object-cover w-full hover:scale-[1.2] duration-300"
            />
          </div>
          <div className="h-16 w-20 bg-yellowColor absolute -top-5 left-5 lg:top-5 lg:-left-5 rounded-tr-lg lg:rounded-tr-none rounded-tl-lg lg:rounded-bl-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Team;
