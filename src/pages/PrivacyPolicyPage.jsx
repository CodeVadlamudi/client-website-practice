import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivacyBanner from "../components/PrivacyBanner";
import PrivacyText from "../components/PrivacyText";

function PrivacyPolicyPage() {
  return (
    <div>
      <Header />
      <PrivacyBanner />
      <PrivacyText />
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
