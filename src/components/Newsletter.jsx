import React from "react";

function Newsletter() {
  return (
    <div className="p-10 bg-mediumGrey/20 rounded grid grid-cols-1 lg:grid-cols-2 space-y-5 lg:space-y-0 my-10">
      <h2 className="text-2xl md:text-3xl text-lightGrey font-medium">
        Subscribe to our news letter to get latest updates and news.
      </h2>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-3 rounded-sm outline-none border-2 border-darkGrey bg-transparent text-mediumGrey placeholder:text-mediumGrey md:w-8/12 h-12"
        />
        <input
          type="button"
          value="Subscribe"
          className="py-2 px-3 rounded-sm outline-none bg-yellowColor hover:bg-[#EDC14A] text-lg cursor-pointer duration-200 text-darkBlue font-bold md:w-4/12 h-12"
        />
      </div>
    </div>
  );
}

export default Newsletter;
