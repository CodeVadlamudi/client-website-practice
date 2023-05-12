import React from "react";

function Testimonial() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-10 bg-lightYellow">
      <div className="md:w-9/12 mx-auto lg:w-full flex flex-col lg:flex-row">
        <div className="lg:w-5/12 space-y-4 text-darkBlue lg:border-r lg:border-darkBlue px-10">
          <h3 className="tracking-[3px] uppercase font-medium">Testimonials</h3>
          <h2 className="text-2xl font-bold">
            What people say about our blogWhat people say about our blog
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="lg:w-7/12 mx-auto space-y-10 px-10 mt-10">
          <h4 className="font-bold text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="flex items-center space-x-4 snap-center">
            <img
              src="./images/a1.jpg"
              alt="user-img"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">Jonathan Vallem</h3>
              <i>New york, USA</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
