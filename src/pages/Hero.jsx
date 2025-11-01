import React from "react";
import HeroLeft from "../components/HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <div className="bg-[#000000] flex items-center justify-between py-8 md:py-4 h-auto w-full gap-2  ">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}

export default Hero;
