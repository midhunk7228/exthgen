const WhatweOffer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white pt-20 md:pt-32 font-hedvig-serif w-full">
      {/* Hello with divider lines */}
      <div className="flex items-center justify-center text-gray-400 gap-4 text-2xl font-light">
        <div className="w-20 h-px bg-gradient-to-l from-gray-400 to-transparent"></div>
        <h1>Hello!</h1>
        <div className="w-20 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
      </div>

      {/* Main heading */}
      <div className="mt-16 mb-16 text-center">
        <h1 className="text-3xl md:text-6xl md:leading-[1.5] font-normal text-black max-w-4xl">
          We create apps, design UI/UX,
          <br /> and build systems that spark digital waves.
        </h1>
      </div>

      {/* First row of service pills */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-12 mb-6">
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          Backend Solution
        </div>
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          AI Model Trainee
        </div>
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          Data Scraping
        </div>
      </div>

      {/* Second row of service pills */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-12 mb-2 md:mb-16">
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          Mobile Apps
        </div>
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          Web Apps
        </div>
        <div className="bg-white rounded-full shadow-md text-xs md:text-lg px-2 md:px-6 py-1 md:py-3 hover:shadow-lg transition-all duration-300">
          Data Analysis
        </div>
      </div>
    </div>
  );
};

export default WhatweOffer;
