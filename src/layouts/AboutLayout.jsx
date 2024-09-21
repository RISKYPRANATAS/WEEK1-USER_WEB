import React from "react";
import AboutSection from "../views/About/AboutSection";

const AboutLayout = () => {
  return (
    <div className="p-2 lg:p-10">
      <AboutSection />
      <div className="flex justify-center mb-10">
        <img src="/Telkom.svg" alt="" className="w-[200px]" />
      </div>
    </div>
  );
};

export default AboutLayout;
