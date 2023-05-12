import React from "react";
import Header from "./Header";
import Banner from "./Banner";

function Hero() {
  return (
    <div className="bg-[url('/images/hero.png')] h-screen bg-cover bg-center relative">
      <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-60" />

      <div className="z-10">
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default Hero;
