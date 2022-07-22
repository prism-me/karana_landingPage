import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection5";
import AboutSection from "../components/AboutUs/AboutUs5";
import PromoSection from "../components/PromoSection/Promo2";
import FeatureSection from "../components/Features/Feature2";
import VideoSection from "../components/Video";
import Testimonial from "../components/Testimonial";
import TeamMember from "../components/TeamMember";
// import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import KarnaBook from "../components/KarnaBook";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <AboutSection />
          <PromoSection removeTopMargin={true} />
          <VideoSection showDownloadBtn={true} />
          <FeatureSection bgColor="gray" />
          <TeamMember />
          <Testimonial bgColor="gray" />
          <KarnaBook />
          {/* <ContactSection bgColor="white" /> */}
        </div>
        <FooterSection noSubscription={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
