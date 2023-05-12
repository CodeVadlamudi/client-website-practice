import React from "react";
import { SocialIcon } from "react-social-icons";

function AuthorBanner() {
  return (
    <div className="bg-lavender min-h-[550px] relative w-full py-20 px-10 xl:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:w-10/12 lg:w-full">
        <img
          src="./images/a3.jpg"
          alt="user-img"
          className="w-[350px] mx-auto h-96 object-cover rounded-lg lg:w-4/12"
        />
        <div className="space-y-4 lg:w-8/12">
          <h1 className="text-3xl font-bold text-start">
            Hey there, I am Name-None and welcome to my Blog
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
          <div className="text-start">
            <SocialIcon
              network="facebook"
              bgColor="transparent"
              fgColor="#232536"
            />
            <SocialIcon
              network="twitter"
              bgColor="transparent"
              fgColor="#232536"
            />
            <SocialIcon
              network="instagram"
              bgColor="transparent"
              fgColor="#232536"
            />
            <SocialIcon
              network="linkedin"
              bgColor="transparent"
              fgColor="#232536"
            />
          </div>

          <div className="flex items-center">
            <div className="h-4 w-8/12 bg-yellowColor" />
            <div className="h-4 w-4/12 bg-purpleColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorBanner;
