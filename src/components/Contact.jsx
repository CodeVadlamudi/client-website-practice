import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto my-20 px-10 xl:px-0 space-y-10">
      <div className="text-center space-y-4">
        <h3 className="uppercase font-bold tracking-[3px]">Contact Us</h3>
        <h2 className="text-3xl font-bold">Let{"'"}s Start a Conversation</h2>
        <p className="text-mediumGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-purpleColor p-10 gap-10">
        <div className="text-white">
          <h3 className="text-white/60 border-b border-white/50 pb-5">
            Working hours
          </h3>
          <h2 className="text-2xl pt-5">Monday To Friday</h2>
          <h2 className="text-2xl">9:00 AM to 8:00 PM</h2>
          <h6 className="text-white/60">Our Support Team is available 24/7</h6>
        </div>

        <div className="text-white">
          <h3 className="text-white/60 border-b border-white/50 pb-5">
            Contact Us
          </h3>
          <h2 className="text-2xl pt-5">09876 54321</h2>
          <h6 className="text-white/60">example@gamil.com</h6>
        </div>
      </div>

      <Form />
    </div>
  );
}

export default Contact;
