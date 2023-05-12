import React from "react";
import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner";
import Overview from "../components/OverviewMission";
import Team from "../components/Team";
import WhyWeStarted from "../components/WhyWeStarted";
import ListAuthors from "../components/ListAuthors";
import Join from "../components/Join";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <AboutBanner />
      <Overview />
      <Team />
      <WhyWeStarted />
      <ListAuthors />
      <Join />
      <Footer />
    </div>
  );
}

export default AboutPage;
