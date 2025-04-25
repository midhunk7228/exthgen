import { FaLeaf, FaUsersRays } from "react-icons/fa6";
import { PiDiamondsFourBold } from "react-icons/pi";
import { TbHexagonLetterWFilled } from "react-icons/tb";

const WhatWeOfferLogos = () => {
  const logos = [
    {
      name: "Luminous",
      icon: <PiDiamondsFourBold className="text-gray-400 text-sm md:text-2xl lg:text-3xl" />,
    },
    {
      name: "Network",
      icon: <FaUsersRays className="text-gray-400 text-sm md:text-2xl lg:text-3xl" />,
    },
    {
      name: "Leafe",
      icon: <FaLeaf className="text-gray-400 text-sm md:text-2xl lg:text-3xl" />,
    },
    {
      name: "Waveless",
      icon: <TbHexagonLetterWFilled className="text-gray-400 text-sm md:text-2xl lg:text-3xl" />,
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 flex justify-center pb-2 md:pb-12">
      <div className="flex items-center gap-4 md:gap-10 lg:gap-20 opacity-30">
        {logos.map((logo, index) => (
          <div key={index} className="flex gap-1 md:gap-2 items-center ">
            <span>{logo.icon}</span>
            <span className="text-gray-400 text-xs md:text-sm lg:text-2xl  font-semibold">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOfferLogos;
