"use client";

// import MenuItems from "./MenuItems";
import logo from "../Assets/exthgen.svg";
import Image from "next/image";

import dynamic from "next/dynamic";
const MenuItems = dynamic(() => import("./MenuItems"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const PortfolioSection = () => {
  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <Image
          src={logo}
          alt="Site Logo"
          className="w-24 md:w-32 h-auto mb-6"
        />
        <MenuItems />
      </div>

      <div className="flex flex-col pb-28 pt-12">
        <div className="flex justify-center items-center flex-col font-hedvig-serif">
          <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
            <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
            <h1 className=" font-light">Portfolio</h1>
            <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
          </div>
          <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
            Innovative <br />
            App Solutions
          </h1>
          <div className="flex flex-col w-full items-center px-4 md:w-2/4 justify-center gap-4 pt-6 font-visby font-normal">
            <p className="text-center text-[#323442] text-lg font-light leading-7 ">
              Dive into our portfolio and explore a collection of projects that
              blend creativity, technology, and purpose. From intuitive mobile
              apps to dynamic web platforms, each solution is crafted to spark
              impact and ripple across industries — redefining what’s possible
              through design and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
