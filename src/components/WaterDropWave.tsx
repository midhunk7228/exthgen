import React from "react";
import { useAnimation } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const WaterDropWave = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="flex flex-col bg-[#E8ECEE] w-full">
      <div className="flex md:pl-20 pl-6 md:py-5 py-3">
        <img
          src="./Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6" // Customized style for the logo
        />
      </div>
      <div className="flex flex-col justify-center items-center py-56">
        <h1 className="flex text-center md:text-[64px] text-[30px] md:leading-[80px] leading-[38px] font-normal font-hedvig-serif">
          Crafting Digital Ripples
          <br />
          for Tomorrow
        </h1>

        <div className="mt-8 flex space-x-4 font-visby mx-6 my-4">
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-lg font-bold leading-6 flex items-center">
            Think With Us <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterDropWave;
