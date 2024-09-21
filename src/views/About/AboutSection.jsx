import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-y-8 mb-10 md:mb-20">
      <h1 className="text-primary font-bold text-xl lg:text-2xl">
        Sistem Informasi Portofolio
      </h1>
      <p className="text-justify w-11/12 lg:w-full hyphens-auto md:hyphens-none md:whitespace-break-spaces">
        Platform ini adalah wadah yang berisi koleksi komprehensif dari
        portofolio dosen-dosen terbaik di Telkom University. Dibangun dengan
        tujuan untuk memberikan layanan yang memudahkan masyarakat untuk
        menjelajahi dan mengakses portofolio serta prestasi yang telah dicapai
        oleh dosen-dosen unggul di universitas ini. Melalui berbagai macam
        informasi yang tersedia, platform ini memungkinkan untuk melihat beragam
        karya, penelitian, proyek, dan kontribusi yang telah diberikan oleh
        dosen-dosen terbaik Telkom University dalam bidangnya masing-masing.
        Dengan demikian, masyarakat dapat lebih mengenal dan mengapresiasi
        kontribusi serta keahlian yang dimiliki oleh para pendidik yang menjadi
        kebanggaan institusi ini.
      </p>
    </div>
  );
};

export default AboutSection;
