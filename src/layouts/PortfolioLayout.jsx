import React from "react";
import { Outlet } from "react-router-dom";

const PortfolioLayout = () => {
  return (
    <div className="p-2 lg:p-10">
      <h1 className="text-primary font-bold text-center text-xl lg:text-2xl lg:text-start">
        PORTOFOLIO DOSEN
      </h1>
      <Outlet />
    </div>
  );
};

export default PortfolioLayout;
