import React from "react";
import HeroRightBox from "../components/HeroRightBox";
import Footer from "../components/Footer";
import TrendingSong from "../components/TrendingSong";

function HeroRight() {
  return (
    <div className="h-[90vh] w-full bg-[#121212] rounded-2xl overflow-auto no-scrollbar px-4">
      <TrendingSong />
      <HeroRightBox />
      <TrendingSong />

      <HeroRightBox />
      <TrendingSong />

      <HeroRightBox />
      <TrendingSong />

      <HeroRightBox />
      <TrendingSong />

      <HeroRightBox />
      <TrendingSong />

      <HeroRightBox />
      <Footer />
    </div>
  );
}

export default HeroRight;
