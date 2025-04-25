"use client";

import CareerAccordion from "./CareerAccordion";

const CareerMain = () => {

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
        <div className="flex flex-col justify-center gap-4 font-visby font-normal max-w-xl mx-auto pb-4">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col">
          Whether you're a developer, designer, strategist, or storyteller — your journey can start with a single drop.Explore open roles and become part of the ripple.
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
