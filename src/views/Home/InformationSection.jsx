import React from "react";
import CardHome from "../../components/UI/CardHome";

const academics = [
  {
    id: 1,
    title: "Why Tel-U?",
    description:
      "Tel-U has been accredited superior, and the study program is already accredited Superior or A.",
  },
  {
    id: 2,
    title: "About Study Program",
    description:
      "About the Study Program. Telkom University has 8 vocational programs, 23 undergraduate programs, and 9 post-graduate programs that have been accredited by BAN-PT and International.",
  },
  {
    id: 3,
    title: "Why Tel-U?",
    description:
      "Telkom University provides qualified and superior learning support facilities in online learning systems.",
  },
];

const InformationSection = () => {
  return (
    <div className="my-10 lg:mt-52">
      <h1 className="uppercase text-secondary text-2xl font-bold text-center mb-10">
        Academic
      </h1>
      <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-20 lg:mb-32">
        {academics.map((academic) => (
          <CardHome
            key={academic.id}
            title={academic.title}
            description={academic.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InformationSection;
