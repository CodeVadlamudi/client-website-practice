import React from "react";
import Header from "../components/Header";
import BlogPostBanner from "../components/BlogPostBanner";
import BlogPostImg from "../components/BlogPostImg";
import BlogPostText from "../components/BlogPostText";
import BlogOtherPost from "../components/BlogOtherPost";
import Join from "../components/Join";
import Footer from "../components/Footer";

function BlogPostPage() {
  return (
    <div>
      <Header />
      <BlogPostBanner />
      <BlogPostImg />
      <BlogPostText />
      <BlogOtherPost />
      <Join />
      <Footer />
    </div>
  );
}

export default BlogPostPage;
