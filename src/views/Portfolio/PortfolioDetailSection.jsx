import React from "react";
import { useParams } from "react-router-dom";

const portfolios = [
  {
    id: 1,
    NIP: 176498,
    Name: "Prajogo Pangestu",
    image: "/CV.pdf",
  },
  {
    id: 2,
    NIP: 109632,
    Name: "Low Tuck Kwong",
    image: "/CV-2.jpg",
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

const PortfolioDetailSection = () => {
  const { id } = useParams();

  // Convert id from useParams() to number
  const portfolioId = parseInt(id, 10);

  // Find portfolio based on the ID
  const portfolio = portfolios.find(
    (portfolio) => portfolio.id === portfolioId
  );

  if (!portfolio) {
    return <div className="text-center mt-10 text-xl">Portfolio not found</div>;
  }

  // Check file extension
  const isPdf = portfolio.image.endsWith(".pdf");
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/.test(portfolio.image);

  return (
    <div className="relative bg-white shadow-lg p-3 rounded-b-xl before:content-[''] before:bg-primary before:absolute before:-top-8 before:left-0 before:w-full before:h-8 before:rounded-t-xl my-20">
      <div className="grid grid-cols-3 lg:grid-cols-12 items-center">
        <h1>NIP</h1>
        <span className="text-start">:</span>
        <h1>{portfolio.NIP}</h1>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-12 items-center">
        <h1>NAMA</h1>
        <span className="text-start">:</span>
        <h1>{portfolio.Name}</h1>
      </div>
      {isPdf && (
        <iframe
          title={portfolio.id}
          src={portfolio.image}
          className="w-full h-96 my-5"
        ></iframe>
      )}
      {isImage && (
        <img
          src={portfolio.image}
          alt={portfolio.Name}
          className="w-full object-cover my-5"
        />
      )}
    </div>
  );
};

export default PortfolioDetailSection;
