"use client";

import { FaArrowRightLong } from "react-icons/fa6";
// import MenuItems from "./MenuItems";

import logo from "../Assets/exthgen.svg";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const MenuItems = dynamic(() => import("./MenuItems"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const CareerHeader = () => {
  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <Image
          src={logo}
          alt="Site Logo"
          className="w-24 md:w-32 h-auto mb-6"
          height={0}
          width={0}
        />
        <MenuItems />
      </div>

      <div className="flex flex-col pb-28 pt-12">
        <div className="flex justify-center items-center flex-col font-hedvig-serif">
          <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
            <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
            <h1 className=" font-light">Join</h1>
            <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
          </div>
          <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
            Join Our Team
          </h1>
          <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 px-6 md:px-0 font-visby font-normal w-full max-w-2xl">
            <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col ">
              We’re more than a tech company — we’re a collective of creators,
              thinkers, and builders shaping tomorrow’s digital waves. If you're
              passionate about pushing boundaries, designing impactful
              experiences, and leaving a lasting ripple in the tech world,
              you’ll feel right at home here.
            </p>
          </div>
          <div className="mt-8 flex space-x-4 font-visby ">
            <Link
              href={"/GetInTouch"}
              className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-md font-hedvig-serif font-bold leading-6 flex items-center"
            >
              Let's Talk <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeader;
