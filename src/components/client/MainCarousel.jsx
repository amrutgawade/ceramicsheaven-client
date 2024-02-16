import React from "react";
import slide1 from "../../assets/frontend/img/slide/slide-1.jpg";
import slide2 from "../../assets/frontend/img/slide/slide-2.jpg";
import slide3 from "../../assets/frontend/img/slide/slide-3.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCarousel() {
  const mainCarouselData = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
  ];
  const items = mainCarouselData.map((item, index) => (
    <div className="flex w-full h-[650px] items-center">
      <img
        key={index}
        className="cursor-pointer object-cover w-full h-full"
        role="presentation"
        src={item.image}
        alt=""
      />
    </div>
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      // disableDotsControls
      autoPlayInterval={2500}
      infinite
    />
  );
}

export default MainCarousel;
