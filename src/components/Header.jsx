import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggle, setToggle] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];
  return (
    <header className="relative bg-darkBlue">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 leading-[80px] px-10 xl:px-0">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="logo-img"
            className="w-36 h-7 object-contain"
          />
        </a>

        <nav
          className={`flex lg:items-center lg:space-x-6 absolute lg:relative top-20 lg:top-0 flex-col lg:flex-row p-5 lg:p-0 bg-darkBlue border-t-[1px] lg:border-t-0 lg:bg-transparent left-0 right-0 lg:w-auto space-y-5 lg:space-y-0 duration-200 z-50 ${
            toggle ? "top-0" : "top-[-500%]"
          }`}
        >
          <div className="lg:space-x-8 flex flex-col lg:flex-row leading-none">
            {Links.map((link) => (
              <a
                href={link.link}
                className="text-white hover:bg-yellowColor hover:text-darkBlue py-4 px-4 lg:p-2 rounded duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="w-full sm:w-44 h-14 bg-white font-bold text-xl hover:bg-yellowColor hover:text-darkBlue duration-300 rounded-sm"
          >
            Subscibe
          </button>
        </nav>

        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-white cursor-pointer lg:hidden"
        >
          {toggle ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
