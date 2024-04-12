import React, { useState } from "react";
import category1 from "../../../assets/frontend/img/categories/bathroom.jpg";
import category2 from "../../../assets/frontend/img/categories/hall.jpg";
import category3 from "../../../assets/frontend/img/categories/indoor.jpg";
import category4 from "../../../assets/frontend/img/categories/kitchen.jpeg";
import category5 from "../../../assets/frontend/img/categories/outdoor.jpg";
import CategoryCard from "../Cards/CategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategorySectionCarousel() {
  const category = [
    {
      imageUrl: category1,
      name: "Bathroom Tiles",
      category: "bathroomtiles",
    },

    {
      imageUrl: category2,
      name: "Room Tiles",
      category: "roomtiles",
    },

    {
      imageUrl: category3,
      name: "Kitchen Tiles",
      category: "kitchentiles",
    },

    {
      imageUrl: category4,
      name: "Outdoor Tiles",
      category: "outdoortiles",
    },
    {
      imageUrl: category5,
      name: "Hall Tiles",
      category: "halltiles",
    },

    {
      imageUrl: category3,
      name: "Kitchen Tiles",
      category: "kitchentiles",
    },

    {
      imageUrl: category4,
      name: "Outdoor Tiles",
      category: "outdoortiles",
    },
    {
      imageUrl: category2,
      name: "Indoor Tiles",
      category: "indoor",
    },
  ];

  function NextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        className={`${
          slideCount / currentSlide == 2 ? "hidden" : "block"
        } slick-arrow slick-next flex justify-center items-center px-5 rounded h-20 bg-black/50 hover:bg-black/50`}
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
        } slick-arrow slick-prev z-10 flex justify-center items-center px-5 rounded h-20 bg-black/50 hover:bg-black/50`}
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
          infinite: false,
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
      <h2 className="text-3xl font-extrabold text-center text-gray-800">
        Categories
      </h2>
      <div className="w-16 h-[5px] bg-red-500 mx-auto mb-8"></div>
      <Slider {...settings}>
        {category.map((item, idx) => (
          <CategoryCard product={item} key={idx} />
        ))}
      </Slider>
    </div>
  );
}

export default CategorySectionCarousel;
