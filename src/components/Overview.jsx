import React from "react";

function Overview() {
  const View = [
    { view: "12+", text: "Blogs Published" },
    { view: "18K+", text: "Views on Finsweet" },
    { view: "30K+", text: "Total active Users" },
  ];
  return (
    <div className="md:w-10/12 mx-auto lg:w-auto">
      <div className="h-[444px] relative">
        <img
          src="./images/about-img.png"
          alt="about-img"
          className="object-cover w-full h-full"
        />

        <div className="w-full lg:w-1/2 absolute bottom-0 bg-yellowColor flex items-center justify-around gap-4 p-6 md:p-10">
          {View.map((view) => (
            <div className="text-darkBlue">
              <h2 className="text-2xl lg:text-3xl font-bold">{view.view}</h2>
              <h5 className="text-xs md:text-lg">{view.text}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-4 w-4/12 bg-purpleColor" />
        <div className="h-4 w-8/12 bg-yellowColor" />
      </div>
    </div>
  );
}

export default Overview;
