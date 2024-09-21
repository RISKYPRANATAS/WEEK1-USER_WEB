import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:gap-20 lg:mt-20">
      <div className="flex flex-col gap-y-8 items-center lg:items-start">
        <h1 className="text-primary font-bold text-2xl">Telkom University</h1>
        <p className="text-justify pr-1 w-8/12">
          Best private university, Tel-U has several times ranked as the top
          private university in Indonesia and has been ranked to be one of The
          Best Universities in Indonesia. Tel-U also became Indonesia&apos;s
          First Private University to be accredited &quot;Excellent&quot; by
          BAN-PT.
        </p>
      </div>
      <div className="">
        <img
          src="/Telkom.svg"
          alt="Telkom"
          className="hidden lg:block lg:w-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
