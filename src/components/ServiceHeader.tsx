import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import MenuItems from "./MenuItems";

const ServiceHeader = () => {
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <img
          src="./Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6"
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
              At Exthgen, we strive to push the boundaries of technology through
              innovative solutions. Our mission is to deliver high-quality
              services that ensure customer satisfaction and foster long-term
              partnerships.{" "}
            </p>
          </div>
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center mt-8">
          Let’s Talk <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
