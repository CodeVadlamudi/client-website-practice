import React from "react";

function Form() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 border-2 border-mediumGrey outline-none border-opacity-40 rounded-sm placeholder:text-darkBlue"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-4 border-2 border-mediumGrey outline-none border-opacity-40 rounded-sm placeholder:text-darkBlue"
      />
      <input
        type="tel"
        placeholder="Your Phone Number"
        className="w-full p-4 border-2 border-mediumGrey outline-none border-opacity-40 rounded-sm placeholder:text-darkBlue"
      />

      <textarea
        placeholder="Message"
        className="p-4 h-36 w-full outline-none border-2 border-mediumGrey border-opacity-40 rounded-sm placeholder:text-darkBlue"
      />

      <button
        type="submit"
        className="bg-yellowColor w-full h-14 rounded-sm text-lg font-semibold text-darkBlue hover:bg-[#EDC14A] duration-200"
      >
        Send Message
      </button>
    </form>
  );
}

export default Form;
