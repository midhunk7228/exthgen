import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Vision = () => {
  return (
    <div className="flex flex-col bg-[#E8ECEE] w-full relative">
      <div className="flex md:pl-20 pl-6 md:py-5 py-3">
        <img
          src="./Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6"
        />
      </div>
      <div className="flex flex-col justify-center items-center pb-32 pt-12">
        <h1 className="flex text-center md:text-[64px] text-[30px] md:leading-[80px] leading-[38px] font-normal font-hedvig-serif">
          Vision Matters
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[36px] shadow-lg overflow-hidden -mt-20 ">
            <div className="px-20 py-8">
              <p className="text-lg leading-relaxed text-center font-normal mt-44">
                We love working with small and medium businesses, helping them
                grow with tech that just works. Our goal is to keep things
                simple, scalable, and useful so every business, no matter how
                small, can reach its full potential. Together, let’s grow,
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

export default Vision;
