import React from "react";

import HeroSection from "../views/Home/HeroSection";
import InformationSection from "../views/Home/InformationSection";

const HomeLayout = () => {
  return (
    <section className="p-2 lg:p-0 lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto">
      <HeroSection />
      <InformationSection />
    </section>
  );
};

export default HomeLayout;
