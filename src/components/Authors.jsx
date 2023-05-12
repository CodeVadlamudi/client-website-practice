import React from "react";
import { authorsData } from "../data/AuthorsData";
import { SocialIcon } from "react-social-icons";

function Authors() {
  return (
    <div className="max-w-7xl mx-auto my-20 px-10 xl:p-0">
      <h2 className="text-3xl font-bold text-center mb-10">List of Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {authorsData.map((author) => (
          <div
            key={author.id}
            className="flex flex-col items-center bg-lightGrey p-10 hover:bg-lightYellow duration-200 group"
          >
            <img
              src={author.img}
              alt="author-img"
              className="w-24 h-24 object-cover rounded-full group-hover:scale-[1.2] duration-300"
            />
            <h3 className="text-2xl font-bold mt-4">{author.heading}</h3>
            <h5 className="text-mediumGrey text-sm mt-1">{author.title}</h5>
            <div className="flex items-center mt-4">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Authors;
