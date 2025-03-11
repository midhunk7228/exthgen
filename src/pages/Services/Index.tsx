import React from "react";
// import Vision from "../../components/Vision";
import NavBar from "../../components/NavBar";
import { FaArrowRightLong } from "react-icons/fa6";

function Services() {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-[#FFFFFF] relative">
        <NavBar />

        <div className="absolute inset-0 flex flex-col pb-2 pt-32">
          <div className="flex justify-center items-center flex-col font-hedvig-serif">
            <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400 whitespace-nowrap">
              <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4 shrink"></div>
              <h1 className="font-light grow sm:text-2xl text-sm">
                We Enjoy Doing
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4 shrink"></div>
            </div>
            <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
              Services
            </h1>
            <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal">
              <p className="text-center text-lg leading-7 gap-3 flex flex-col">
                At Exthgen, we strive to push the boundaries of technology
                through innovative solutions. Our mission is to deliver
                high-quality services that ensure customer satisfaction and
                foster long-term partnerships.
              </p>
            </div>
            <div className="mt-8 flex space-x-4 font-visby">
              <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
                Let’s Talk <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row">
        <div className="bg-white p-8 flex-1">
          <h1 className="text-2xl font-bold mb-4">Mobile Apps</h1>
          <p className="text-gray-600 mb-8">
            At Exthgen, we bring a wealth of expertise and a commitment to
            reliability in every project. Our tailored solutions ensure that
            your unique needs are met with precision and care.
          </p>

          <h1 className="text-2xl font-bold mb-4">Web Apps</h1>
          <p className="text-gray-600 mb-8">
            At Exthgen, we bring a wealth of expertise and a commitment to
            reliability in every project. Our tailored solutions ensure that
            your unique needs are met with precision and care.
          </p>
        </div>

        <div className="bg-gray-100 flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              poster="/api/placeholder/800/600"
            >
              <source src="/api/placeholder/video" type="video/mp4" />
            </video>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Services;
