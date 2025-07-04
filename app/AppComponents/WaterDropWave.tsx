"use client";

import React from "react";
import { useAnimation } from "framer-motion";
// import { FaArrowRightLong } from "react-icons/fa6";
// import MenuItems from "./MenuItems";
import logo from "../Assets/exthgen.svg";
import Image from "next/image";
import Link from "next/link";

import dynamic from "next/dynamic";
const MenuItems = dynamic(() => import("./MenuItems"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const WaterDropWave = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#E8ECEE]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-20 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="./Videos/ripple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Overlay to improve text readability */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div> */}

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between items-center">
          <Image
            src={logo}
            alt="Site Logo"
            className="w-24 md:w-32 h-auto mb-6"
            height={0}
            width={0}
          />
          <MenuItems />
        </div>

        <div className="flex flex-col justify-center items-center flex-grow text-white">
          <h1 className="flex text-center md:text-[64px] text-[30px] md:leading-[80px] leading-[38px] font-normal font-hedvig-serif text-[#1E2028]">
            Crafting Digital Ripples
            <br />
            for Tomorrow
          </h1>

          <div className="mt-8 flex space-x-4 font-visby mx-6 my-4">
            <Link
              href={"/GetInTouch"}
              className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-lg font-bold leading-6 flex items-center"
            >
              Think With Us
              {/* <FaArrowRightLong className="ml-2" /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterDropWave;
