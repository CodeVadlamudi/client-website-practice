import React from "react";
import Hero from "../components/Hero";
import Post from "../components/Post";
import About from "../components/About";
import Catagory from "../components/Catagory";
import Started from "../components/Started";
import Authors from "../components/Authors";
import Testimonial from "../components/Testimonial";
import Join from "../components/Join";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Hero />
      <Post />
      <About />
      <Catagory />
      <Started />
      <Authors />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default HomePage;
