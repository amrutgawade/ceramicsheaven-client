import React, { useState } from "react";
import brand1 from "../../assets/frontend/img/brands/agl.png";
import brand2 from "../../assets/frontend/img/brands/jhonson.png";
import brand3 from "../../assets/frontend/img/brands/kajaria.png";
import brand4 from "../../assets/frontend/img/brands/somany.png";
import BrandCard from "./BrandCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandCardCarousel() {
  const brands = [
    {
      imageUrl: brand1,
      brand: "Kajaria Ceramics",
    },

    {
      imageUrl: brand2,
      brand: "Somany Ceramics",
    },

    {
      imageUrl: brand3,
      brand: "Asian Granito India",
    },

    {
      imageUrl: brand4,
      brand: "H&R Johnson (India)",
    },
    {
      imageUrl: brand3,
      brand: "Asian Granito India",
    },

    {
      imageUrl: brand4,
      brand: "H&R Johnson (India)",
    },
  ];

  function NextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        className={`${
          slideCount % 4 == currentSlide ? "hidden" : "block"
        } slick-arrow slick-next flex justify-center items-center px-6 rounded h-20 bg-black/50 hover:bg-black/50`}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { onClick, currentSlide } = props;
    return (
      <div
        className={`${
          currentSlide == 0 ? "hidden" : "block"
        } slick-arrow slick-prev z-10 flex justify-center items-center px-6 rounded h-20 bg-black/50 hover:bg-black/50`}
        onClick={onClick}
      />
    );
  }

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-center text-gray-800 py-5">
        Popular Brand's
      </h2>
      <Slider {...settings}>
        {brands.map((item) => (
          <BrandCard product={item} key={item} />
        ))}
      </Slider>
      {/* <h1 className="sm:hidden text-center mt-2 font-semibold">Swipe</h1> */}
    </div>
  );
}

export default BrandCardCarousel;
