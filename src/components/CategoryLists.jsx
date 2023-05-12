import React from "react";

function CategoryLists() {
  const categoryItems = [
    { img: "./images/shuttle.png", heading: "Startup" },
    { img: "./images/icon-1.png", heading: "Business" },
    { img: "./images/economy.png", heading: "Economy" },
    { img: "./images/group.png", heading: "Technology" },
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
        {categoryItems.map((item) => (
          <div className="flex items-center bg-yellowColor p-3 rounded-md space-x-4">
            <div className="w-10 h-10 bg-lightYellow flex items-center justify-center rounded-md">
              <img src={item.img} alt="items-img" />
            </div>
            <h3 className="text-lg font-semibold">{item.heading}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryLists;
