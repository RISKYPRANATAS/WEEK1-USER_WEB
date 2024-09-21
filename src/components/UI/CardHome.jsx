import React from "react";
import PropTypes from "prop-types";

const CardHome = ({ title, description }) => {
  return (
    <div className="bg-gray-100 lg:bg-transparent lg:hover:bg-gray-100 p-5 rounded-lg flex flex-col items-center gap-y-5">
      <h1 className="text-secondary font-bold">{title}</h1>
      <p className="text-center whitespace-break-spaces">{description}</p>
    </div>
  );
};

CardHome.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardHome;
