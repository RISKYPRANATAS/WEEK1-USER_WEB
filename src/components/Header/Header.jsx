import React from "react";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <div className="p-2 lg:py-2 lg:px-0 lg:mx-8">
      <div className="flex justify-between items-center">
        <img src="/Logo.svg" alt="Logo" />
        {children}
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
