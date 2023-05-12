import React from "react";
import { SocialIcon } from "react-social-icons";

function FooterBottom() {
  return (
    <div className="flex items-center justify-between">
      <a href="/" className="text-3xl font-medium text-lightGrey">
        Finstreet
      </a>
      <div>
        <SocialIcon
          network="facebook"
          bgColor="transparent"
          fgColor="#6D6E76"
        />
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          fgColor="#6D6E76"
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          fgColor="#6D6E76"
        />
        <SocialIcon network="twitter" bgColor="transparent" fgColor="#6D6E76" />
      </div>
    </div>
  );
}

export default FooterBottom;
