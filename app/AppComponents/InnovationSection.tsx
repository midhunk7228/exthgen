import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const InnovationSection = () => {
  return (
    <div className="flex flex-col pb-28">
      <div className="flex justify-center items-center flex-col font-hedvig-serif">
        <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
          <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
          <h1 className=" font-light">Innovation</h1>
          <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
        </div>
        <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
          Our Commitment to <br />
          Excellence and Innovation
        </h1>
        <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal">
          <p className="text-center text-lg leading-7 gap-3 flex flex-col">
            At Exthgen, we push the boundaries of technology to craft innovative
            solutions that exceed expectations. Our mission is to deliver
            high-quality services that drive customer satisfaction and build
            lasting partnerships.
          </p>
        </div>
        <div className="mt-8 flex space-x-4 font-visby">
          <Link href={"/GetInTouch"} className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
            Join Us <FaArrowRightLong className="ml-2" />
          </Link>
          <Link href={"/GetInTouch"} className="bg-white text-gray-800 py-3 px-6 border border-gray-300 hover:bg-gray-100 rounded-full text-base font-bold leading-6">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
