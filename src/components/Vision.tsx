import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col bg-[#E8ECEE] w-full relative overflow-hidden">
      {/* Background Video with Red Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          {/* <source src="./path/to/your/background-video.mp4" type="video/mp4" /> */}
          <source src="./multiple_ripple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <img
          src="./Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6"
        />
        <img
          src={isMobile ? "./Logo/mobile_menu.svg" : "./Logo/menu.svg"}
          alt=""
          className="w-20 h-auto mr-0 md:mr-16"
        />
      </div>

      <div className="flex flex-col justify-center items-center pb-32 pt-12 relative z-20">
        <h1 className="flex text-center md:text-[64px] text-[30px] md:leading-[80px] leading-[38px] font-normal font-hedvig-serif">
          Vision Matters
        </h1>

        <div className="md:hidden">
          <p className="text-lg leading-relaxed text-center font-normal mt-4 px-4">
            We love working with small and medium businesses, helping them grow
            with tech that just works. Our goal is to keep things simple,
            scalable, and useful so every business, no matter how small, can
            reach its full potential. Together, let's grow, succeed, and build
            something amazing.
          </p>
          <div className="mt-8 flex justify-center space-x-4 font-visby">
            <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
              Free Brainstorm <FaArrowRightLong className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center bg-white relative z-20 pb-5">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="bg-white rounded-[36px] shadow-lg overflow-hidden -mt-20 ">
            <div className="px-20 py-8">
              <p className="text-lg leading-relaxed text-center font-normal mt-44">
                We love working with small and medium businesses, helping them
                grow with tech that just works. Our goal is to keep things
                simple, scalable, and useful so every business, no matter how
                small, can reach its full potential. Together, let's grow,
                succeed, and build something amazing.
              </p>
              <div className="mt-8 flex justify-center space-x-4 font-visby">
                <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
                  Join Us <FaArrowRightLong className="ml-2" />
                </button>
                <button className="bg-white text-gray-800 py-3 px-6 border border-gray-300 hover:bg-gray-100 rounded-full text-base font-bold leading-6">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
