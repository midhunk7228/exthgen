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
      <div className="flex pl-20 py-5">
        <img
          src="./ClientLogos/cartoon-network.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6" // Customized style for the logo
        />
      </div>
      <div className="flex flex-col justify-center items-center py-56">
        <h1 className="flex text-center text-[64px] leading-[80px] font-normal font-hedvig-serif">
          Crafting Digital Ripples
          <br />
          for Tomorrow
        </h1>

        <div className="mt-8 flex space-x-4 font-visby pt-8 mx-6 my-4">
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-lg font-bold leading-6 flex items-center">
            Think With Us <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterDropWave;
