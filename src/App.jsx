import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import HomeLayout from "./layouts/HomeLayout";
import AboutLayout from "./layouts/AboutLayout";
import PortfolioLayout from "./layouts/PortfolioLayout";
import PortfolioDetailSection from "./views/Portfolio/PortfolioDetailSection";
import PortfolioSection from "./views/Portfolio/PortfolioSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeLayout />} />
        <Route path="tentang" element={<AboutLayout />} />
        <Route path="portofolio" element={<PortfolioLayout />}>
          <Route index element={<PortfolioSection />} />
          <Route path=":id" element={<PortfolioDetailSection />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
