import React from "react";
import MainCarousel from "../components/client/Carousels/MainCarousel";
import BrandCardCarousel from "../components/client/Carousels/BrandCardCarousel";
import CategorySectionCarousel from "../components/client/Carousels/CategorySectionCarousel";

function Home() {
  return (
    <>
      <MainCarousel />
      <div className="space-y-10 py-20">
        <BrandCardCarousel />
        <CategorySectionCarousel />
      </div>
    </>
  );
}

export default Home;
