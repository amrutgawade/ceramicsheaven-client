import React from "react";
import product1 from "../../../assets/frontend/img/products/tiles/tiles-1.jpg";
import product2 from "../../../assets/frontend/img/products/tiles/tiles-2.jpg";
import product3 from "../../../assets/frontend/img/products/tiles/tiles-3.jpg";
import product4 from "../../../assets/frontend/img/products/tiles/tiles-4.jpg";
import product5 from "../../../assets/frontend/img/products/tiles/tiles-5.jpg";
import product6 from "../../../assets/frontend/img/products/tiles/tiles-6.jpg";
import product7 from "../../../assets/frontend/img/products/tiles/tiles-7.jpg";
import product8 from "../../../assets/frontend/img/products/tiles/tiles-8.jpg";
import product9 from "../../../assets/frontend/img/products/tiles/tiles-9.jpg";
import product10 from "../../../assets/frontend/img/products/tiles/tiles-10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Cards/ProductCard";

function ProductCarousel() {
  const products = [
    {
      imageUrl: product1,
      product: "Kajaria Ceramics",
    },

    {
      imageUrl: product2,
      product: "Somany Ceramics",
    },

    {
      imageUrl: product3,
      product: "Asian Granito India",
    },

    {
      imageUrl: product4,
      product: "H&R Johnson (India)",
    },
    {
      imageUrl: product5,
      product: "Asian Granito India",
    },

    {
      imageUrl: product6,
      product: "H&R Johnson (India)",
    },
    {
      imageUrl: product7,
      product: "Kajaria Ceramics",
    },

    {
      imageUrl: product8,
      product: "Somany Ceramics",
    },

    {
      imageUrl: product9,
      product: "Asian Granito India",
    },

    {
      imageUrl: product10,
      product: "H&R Johnson (India)",
    },
  ];

  function NextArrow(props) {
    const { onClick, currentSlide, slideCount } = props;
    return (
      <div
        className={`${
          slideCount % 4 == currentSlide ? "hidden" : "block"
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
    slidesToShow: 5,
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
      <h2 className="text-3xl font-extrabold ml-10 text-gray-800">
        New <span className="text-red-500">Arrivings</span>
      </h2>
      <div className="w-16 h-1 mt-1 bg-red-500 ml-10 mb-8"></div>
      <Slider {...settings}>
        {products.map((item) => (
          <ProductCard product={item} key={item} />
        ))}
      </Slider>
      {/* <h1 className="sm:hidden text-center mt-2 font-semibold">Swipe</h1> */}
    </div>
  );
}

export default ProductCarousel;
