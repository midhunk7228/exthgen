"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import MenuItems from "./MenuItems";
import logo from "../Assets/exthgen.svg";
import Image from "next/image";
import Link from "next/link";

const ServiceHeader = () => {

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
            <h1 className=" font-light text-sm md:text-2xl">We Enjoy Doing</h1>
            <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
          </div>
          <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
            Services
          </h1>
          <div className="flex flex-col w-full px-3 md:w-2/3 justify-center gap-4 pt-6 font-visby font-normal">
            <p className="text-center text-[#323442] text-sm md:text-lg lg:text-lg font-light leading-7 gap-3 flex flex-col">
              We don’t just deliver services — we craft experiences.
              From custom app development and seamless UI/UX to powerful backend
              solutions, every project we take on is a step toward meaningful
              innovation. We push boundaries, exceed expectations, and build
              lasting partnerships through high-quality, future-ready solutions.
            </p>
          </div>
          <Link href={"/GetInTouch"} className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center mt-8">
            Let’s Talk <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
