import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardPortfolio = ({ nip, nama, link }) => {
  return (
    <div className="relative bg-white shadow-lg p-3 rounded-b-xl before:content-[''] before:bg-primary before:absolute before:-top-8 before:left-0 before:w-full before:h-8 before:rounded-t-xl mb-20">
      <div className="grid grid-cols-5 2xl:grid-cols-7 items-center">
        <h1>NIP</h1>
        <span className="text-start">:</span>
        <h1>{nip}</h1>
      </div>
      <div className="grid grid-cols-5 2xl:grid-cols-7 items-center">
        <h1>NAMA</h1>
        <span className="text-start">:</span>
        <h1>{nama}</h1>
      </div>
      <div className="flex justify-end mt-7">
        <Link to={link}>
          <p className="bg-primary text-white p-2 rounded-xl">Portofolio</p>
        </Link>
      </div>
    </div>
  );
};

CardPortfolio.propTypes = {
  nip: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardPortfolio;
