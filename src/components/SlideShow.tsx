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
        breakpoint: 1536, // 2xl breakpoint
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // xs breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 bg-gradient-to-r from-white to-transparent">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings} className="partner-logos-slider">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-2 sm:px-4"
            >
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="max-w-full max-h-20 sm:max-h-24 object-contain" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerLogosSlider;