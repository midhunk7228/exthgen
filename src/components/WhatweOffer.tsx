import React from "react";
import "react-slideshow-image/dist/styles.css";
import Slideshow from "./SlideShow";

function WhatweOffer() {
  
  return (
    <div className="flex flex-col md:flex-row justify-center bg-[#FFFFFF66] pt-48 font-hedvig-serif gap-20">
      <div className="flex md:flex-col justify-between font-visby">
        <div className="bg-white rotate-[5deg] w-[111px] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300">
          Design systems
        </div>
        <div className="bg-white w-20 rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 mr-6">
          UI/UX
        </div>
        <div className="bg-white w-24 rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 mr-7">
          Research
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center pb-10 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
          <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
          <h1 className=" font-light">Hello!</h1>
          <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
        </div>
        <h1 className="flex text-center text-[26px] md:text-[56px] leading-[34px] md:leading-[73px] font-normal">
          Exthgen creates apps, <br />
          builds backends, and offers <br />
          tech consulting.
        </h1>
      </div>
      <div className="flex flex-col justify-between font-visby">
        <div className="bg-white w-[105px] rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300">
          Animation
        </div>
        <div className="bg-white w-[111px] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 ml-6">
          Prototyping
        </div>
        <div className="bg-white w-24 rotate-[5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 ml-7">
          Strategy
        </div>
      </div>
    </div>
  );
}

export default WhatweOffer;
