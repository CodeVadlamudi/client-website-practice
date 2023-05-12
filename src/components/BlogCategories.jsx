import React from "react";
import { catagoryData } from "../data/CatagoryData";

function BlogCategories() {
  return (
    <div className="max-w-7xl mx-auto px-10 xl:px-0 my-20">
      <h2 className="text-left font-bold text-3xl mb-10">All Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {catagoryData.map((catagory) => (
          <div
            key={catagory.id}
            className="p-6 border-2 rounded space-y-2 hover:bg-yellowColor hover:border-yellowColor duration-200 group"
          >
            <div className="w-16 h-16 bg-lightYellow flex items-center justify-center rounded-xl">
              <img src={catagory.img} alt="img" />
            </div>
            <h3 className="text-2xl font-bold">{catagory.heading}</h3>
            <p className="text-lg text-mediumGrey group-hover:text-darkBlue">
              {catagory.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCategories;
