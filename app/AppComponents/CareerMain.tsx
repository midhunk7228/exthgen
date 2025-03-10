"use client";

import { useEffect, useState } from "react";
import CareerAccordion from "./CareerAccordion";

const CareerMain = () => {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-3">
            <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
              Job{" "}
            </span>
            Openings
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 font-visby font-normal max-w-xl mx-auto">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          </p>
        </div>
        <div className="">
          <CareerAccordion />
        </div>
      </div>
    </div>
  );
};

export default CareerMain;
