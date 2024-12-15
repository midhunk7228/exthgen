import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerLogosSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const partnerLogos = [
    "./ClientLogos/burger-king-24690.svg",
    "./ClientLogos/cartoon-network.svg",
    "./ClientLogos/harley-davidson-3.svg",
    "./ClientLogos/kuwait-airways-1.svg",
    "./ClientLogos/tripadvisor-logo-circle-green-vertical-lockup-registered-rgb.svg",
    "./ClientLogos/tv-azteca.svg",
  ];

  return (
    <div className="container mx-auto px-96 pt-16 pb-28 bg-gradient-to-r from-white to-transparent">
      <Slider {...settings} className="partner-logos-slider flex items-center">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-4 ">
            <img 
              src={logo} 
              alt={`Partner logo ${index + 1}`} 
              className="max-w-full max-h-24 object-contain" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerLogosSlider;
