import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthorBanner from "../components/AuthorBanner";
import MyPosts from "../components/MyPosts";

function AuthorPage() {
  return (
    <div>
      <Header />
      <AuthorBanner />
      <MyPosts />
      <Footer />
    </div>
  );
}

export default AuthorPage;
