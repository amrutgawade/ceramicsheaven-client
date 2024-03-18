import React from "react";
import slide1 from "../../assets/frontend/img/slide/slide-1.jpg";
import slide2 from "../../assets/frontend/img/slide/slide-2.jpg";
import slide3 from "../../assets/frontend/img/slide/slide-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "hidden slick-arrow slick-next absolute right-5 sm:flex justify-center items-center px-5 rounded h-20 bg-black/50 hover:bg-black/50"
      }
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={
        "hidden slick-arrow slick-prev absolute z-10 left-5 sm:flex justify-center items-center px-5 rounded h-20 bg-black/50 hover:bg-black/50"
      }
      onClick={onClick}
    />
  );
}

function MainCarousel() {
  const mainCarouselData = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
  ];

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {mainCarouselData.map((item, index) => (
        <div className="flex w-full h-[560px] items-center">
          <img
            key={index}
            className="object-cover w-full h-full"
            role="presentation"
            src={item.image}
            alt=""
          />
        </div>
      ))}
    </Slider>
  );
}

export default MainCarousel;
