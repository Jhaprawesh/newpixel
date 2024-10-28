import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Contribute from "./Contribute";

function ComponentList() {
  return (
    <>
      <div className="">
        <HeroSection />
        <AboutUs />
        <Contribute />
      </div>
    </>
  );
}

export default ComponentList;
