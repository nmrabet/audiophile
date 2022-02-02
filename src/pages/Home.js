import React from "react";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import SpeakerBanner from "../components/SpeakerBanner";
import Banner from "../components/Banner";
import EarphoneBanner from "../components/EarphoneBanner";

function Home() {
  return (
    <div>
      <Hero />
      <Shop />
      <SpeakerBanner />
      <Banner />
      <EarphoneBanner />
    </div>
  );
}

export default Home;
