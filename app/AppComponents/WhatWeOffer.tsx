// // import "react-slideshow-image/dist/styles.css";

// function WhatweOffer() {
//   return (
//     <div className="flex flex-col justify-center bg-[#FFFFFF66] pt-20 md:pt-48  font-hedvig-serif w-full">
//       <div className="flex items-center justify-center text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
//         <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
//         <h1 className=" font-light">Hello!</h1>
//         <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10 pt-12">
//         <div className="flex md:flex-col justify-center md:items-center font-visby gap-4 md:gap-20 md:pl-20">
//           {/* <div className="bg-white md:rotate-[5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs ">
//             Design systems
//           </div> */}
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="bg-white md:rotate-[5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs md:text-base">
//               Design systems
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-2 items-center pb-28 md:pb-0">
//             <span className="bg-white rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs md:text-base">
//               UI/UX
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="bg-white md:rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs md:text-base">
//               Research
//             </span>
//           </div>
//           {/* <div className="bg-white w-20 rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 mr-6 ">
//             UI/UX
//           </div>
//           <div className="bg-white w-24 md:rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 mr-7">
//             Research
//           </div> */}
//         </div>
//         <div className="flex justify-center items-center flex-col">
//           <h1 className="flex text-center text-[26px] md:text-[56px] leading-[34px] md:leading-[73px] font-normal">
//             Exthgen creates apps, <br />
//             builds backends, and offers <br />
//             tech consulting.
//           </h1>
//         </div>
//         <div className="flex md:flex-col justify-between items-center font-visby gap-4 md:gap-20 md:pr-20">
//           {/* <div className="bg-white w-[105px] md:rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300">
//             Animation
//           </div>
//           <div className="bg-white w-[111px] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 ml-6">
//             Prototyping
//           </div>
//           <div className="bg-white w-24 md:rotate-[5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 ml-7">
//             Strategy
//           </div> */}
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="bg-white md:rotate-[-5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs md:text-base">
//               Animation
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-2 items-center pt-28 md:pt-0">
//             <span className="bg-white rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 ml-6 text-xs md:text-base">
//               Prototyping
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-2 items-center">
//             <span className="bg-white md:rotate-[5deg] rounded-2xl shadow-md px-4 py-2 inline-block hover:shadow-lg transition-all duration-300 text-xs md:text-base">
//               Strategy
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatweOffer;

function WhatweOffer() {
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
}

export default WhatweOffer;
