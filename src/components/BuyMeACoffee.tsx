import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaFacebookSquare, LiaInstagram, LiaLinkedin, LiaWhatsapp } from "react-icons/lia";

function BuyMeACoffee() {
  return (
    <div
      className="flex flex-col bg-cover bg-center text-white md:pt-52 pt-32"
      style={{ backgroundImage: "url('./bottom_img.jpeg')" }}
    >
      <div className="flex justify-center items-center flex-col font-hedvig-serif">
        <h1 className="flex text-center md:text-[64px] text-[32px] md:leading-[84px] leading-[40px] font-normal">
          {`Let’s Have a Coffee`}
        </h1>
        <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal">
          <p className="text-center md:text-lg text-lg leading-7 gap-3 flex flex-col text-[#A7ACC1]">
            Englebook is a fun and engaging English learning app. It offers
            interactive lessons, real-time feedback, and a community of learners
            to help users improve their vocabulary, grammar, and pronunciation.
            With gamified quizzes and personalized learning paths, Englebook
            adapts to each user's skill level, making it perfect for beginners
            and those looking to refine their skills.
          </p>
        </div>
        <div className="mt-8 flex space-x-4 font-visby md:pt-16 pt-4">
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
            Free Brainstorm <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between md:px-20 px-6 pb-12 pt-28">
        <div className="flex border border-[#666666] rounded-full px-2 py-1">
          <LiaFacebookSquare className="text-2xl text-[#666666]" />
        </div>
        <div className="flex border border-[#666666] rounded-full px-2 py-1">
          <LiaInstagram className="text-2xl text-[#666666]" />
        </div>
        <div className="flex border border-[#666666] rounded-full px-2 py-1">
          <LiaWhatsapp className="text-2xl text-[#666666]" />
        </div>
        <div className="flex border border-[#666666] rounded-full px-2 py-1">
          <LiaFacebookSquare className="text-2xl text-[#666666]" />
        </div>
        <div className="flex border border-[#666666] rounded-full px-2 py-1">
          <LiaLinkedin className="text-2xl text-[#666666]" />
        </div>
      </div>
    </div>
  );
}

export default BuyMeACoffee;
