"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function CoolThings() {
  
  return (
    <div className="w-full">
      <div className={`flex flex-col pb-28 pt-12 px-4 md:px-0`}>
        <div className="flex justify-center items-center flex-col font-hedvig-serif">
          <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
            <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
            <h1 className={`font-light text-sm md:text-2xl`}>
              Cool Things
            </h1>
            <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
          </div>
          <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal max-w-2xl">
            Discover the Perks of Working at Exthgen
          </h1>
          <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal w-full max-w-2xl">
            <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col ">
              We believe great work starts with a great environment.
              From flexible hours to remote freedom, we make space for balance
              and creativity. Our culture encourages learning, growth, and
              collaboration — so you can evolve with every project and make
              waves that matter. When you thrive, the ripples of your impact
              travel far.
            </p>
          </div>
          <div className="mt-8 flex space-x-4 font-visby ">
            <Link href={"/GetInTouch"} className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-md font-hedvig-serif font-bold leading-6 flex items-center">
              Apply <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <Image
          src="/coolthings.png"
          alt=""
          width={0}
          height={0}
          className="w-full"
        />
      </div>

      <div
        className={`flex justify-center items-center flex-col font-hedvig-serif mb-12 pt-12 px-4 md:px-0`}
      >
        <h1 className="flex text-center md:text-[40px] text-[26px] md:leading-[84px] leading-[34px] font-normal max-w-2xl">
          Join Our Dynamic Team Today
        </h1>
        <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal w-full max-w-xl">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col ">
            We’re looking for passionate individuals ready to make an impact.
            Apply now and grow with us!
          </p>
        </div>
        <div className="mt-8 flex space-x-4 font-visby ">
          <Link href={"/GetInTouch"} className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-md font-hedvig-serif font-bold leading-6 flex items-center">
            Join Us <FaArrowRightLong className="ml-2" />
          </Link>
          <Link href={"/GetInTouch"} className="bg-transparent text-black py-3 px-6  rounded-full text-md font-hedvig-serif font-bold leading-6 flex items-center border border-[#1E2028]">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoolThings;
