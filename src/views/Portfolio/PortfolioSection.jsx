import React from "react";
import CardPortfolio from "../../components/UI/CardPortfolio";

const portfolios = [
  {
    id: 1,
    NIP: 176498,
    Name: "Prajogo Pangestu",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    NIP: 109632,
    Name: "Low Tuck Kwong",
    image: "/images/project1.jpg",
  },
  {
    id: 3,
    NIP: 139240,
    Name: "Robert Budi Hartono",
    image: "/images/project1.jpg",
  },
  {
    id: 4,
    NIP: 609243,
    Name: "Michael Hartono",
    image: "/images/project1.jpg",
  },
  {
    id: 5,
    NIP: 237169,
    Name: "Sri Prakash Lohia",
    image: "/images/project1.jpg",
  },
  {
    id: 6,
    NIP: 395431,
    Name: "Chairul Tanjung",
    image: "/images/project1.jpg",
  },
  {
    id: 7,
    NIP: 476529,
    Name: "Dewi Kam",
    image: "/images/project1.jpg",
  },
  {
    id: 8,
    NIP: 511298,
    Name: "Djoko Susanto",
    image: "/images/project1.jpg",
  },
  {
    id: 9,
    NIP: 789901,
    Name: "Lim Hariyanto Wijaya Sarwono",
    image: "/images/project1.jpg",
  },
  {
    id: 10,
    NIP: 898241,
    Name: "Agus Wijaya Dirgantara",
    image: "/images/project1.jpg",
  },
];

const PortfolioSection = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="p-5 mt-16 md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {portfolios.map((portfolio) => (
          <CardPortfolio
            key={portfolio.id}
            nip={portfolio.NIP}
            nama={portfolio.Name}
            link={`${portfolio.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
