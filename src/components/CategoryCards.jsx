import React from "react";

function CategoryCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 my-10 first-of-type:mt-0 last-of-type:mb-0">
      <img
        src="./images/p2.png"
        alt="img"
        className="w-full h-80 object-cover"
      />
      <div className="space-y-4">
        <h3 className="tracking-[3px] text-purpleColor font-semibold uppercase">
          Business
        </h3>
        <h2 className="text-2xl font-bold">
          Top 6 free website mockup tools 2022
        </h2>
        <p className="text-mediumGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec.
        </p>
      </div>
    </div>
  );
}

export default CategoryCards;
