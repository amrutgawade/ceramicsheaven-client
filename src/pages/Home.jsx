import React from "react";
import MainCarousel from "../components/client/MainCarousel";
import BrandCardCarousel from "../components/client/BrandCardCarousel";
import CategorySectionCarousel from "../components/client/CategorySectionCarousel";

function Home() {
  return (
    <>
      <MainCarousel />
      <div className="space-y-10 py-20">
        <BrandCardCarousel />
        {/* <CategorySectionCarousel /> */}
      </div>
    </>
  );
}

export default Home;
