import React from "react";
import Newsletter from "./Newsletter";
import FooterBottom from "./FooterBottom";

function Footer() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Author", link: "/author" },
    { name: "Category", link: "/category" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy" },
  ];
  return (
    <footer className="bg-darkBlue py-10 px-10 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 pt-10">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="logo-img"
              className="w-36 h-7 object-contain"
            />
          </a>

          <div className="lg:space-x-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            {Links.map((link) => (
              <a
                href={link.link}
                className="text-white hover:text-yellowColor duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <Newsletter />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
