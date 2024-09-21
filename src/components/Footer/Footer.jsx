import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary text-white text-sm p-2 flex flex-col gap-y-5 lg:p-10">
      <div>
        <h1>Kontak</h1>
      </div>
      <div>
        <img src="/Brand.svg" alt="" />
      </div>
      <div className="flex flex-col gap-y-3">
        <h1>
          Gedung Bangkit Telkom University Jl. Telekomunikasi Terusan Buah Batu
          Indonesia 40257, Bandung, Indonesia
        </h1>
        <p>(022) 7566456</p>
        <span>info@telkomuniversity.ac.id</span>
      </div>
    </div>
  );
};

export default Footer;
