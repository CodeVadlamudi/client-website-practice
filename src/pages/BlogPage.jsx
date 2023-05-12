import React from "react";
import Header from "../components/Header";
import BlogBanner from "../components/BlogBanner";
import BlogPost from "../components/BlogPost";
import BlogCategories from "../components/BlogCategories";
import Join from "../components/Join";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <div>
      <Header />
      <BlogBanner />
      <BlogPost />
      <BlogCategories />
      <Join />
      <Footer />
    </div>
  );
}

export default BlogPage;
