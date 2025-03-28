// import { useState, useEffect } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";
// import MenuItems from "../../AppComponents/MenuItems";
// import { ProjectCard } from "../../AppComponents/PojectList";
// import BuyMeACoffee from "../../AppComponents/BuyMeACoffee";
"use client"

import { useEffect, useState } from "react";

// const projects = [
//   {
//     image: "../Projects/englebook1.png",
//     name: "EngleBook",
//     tags: ["UI/UX", "Mobile App", "React"],
//   },
//   {
//     image: "../Projects/englebook.png",
//     name: "EngleBook",
//     tags: ["UI/UX", "Mobile App", "React"],
//   },
// ];

// const PortfolioDetails = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex flex-col bg-white w-full relative overflow-hidden">
//       <div className="absolute inset-0 w-full h-[80vh] md:h-[70vh] z-0 overflow-hidden">
//         <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
//         >
//           <source src="../ripple2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
//         <img src="../Logo/exthgen.svg" alt="Site Logo" className="w-32 h-auto mb-6" />
//         <MenuItems />
//       </div>

//       <div className="flex flex-col justify-center items-center pt-12 pb-16 md:pb-32 relative">
//         <h1 className="text-center text-[30px] md:text-[64px] leading-[38px] md:leading-[80px] font-normal font-hedvig-serif">The Queue</h1>
//         <div className="flex gap-4 mt-6 font-light">
//           {['Mobile App', 'Product'].map((tag, i) => (
//             <span key={i} className="bg-white rounded-full px-4 py-3 shadow-md text-sm">{tag}</span>
//           ))}
//         </div>
//       </div>

//       <div className="relative max-w-3xl mx-auto px-4 hidden md:block text-center px-12 py-10">
//         <p className="text-2xl leading-relaxed font-light mt-2 mb-8 text-[#323442]">
//           This project focused on creating an innovative mobile application designed to help users learn English effectively and efficiently.
//         </p>
//         <div className="flex items-center justify-center space-x-4 font-visby">
//           <button className="bg-exthgen-gradient font-hedvig-serif text-white py-3 px-6 hover:bg-pink-600 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
//             Checkout <FaArrowRightLong className="ml-2" />
//           </button>
//           <button className="bg-transparent font-hedvig-serif text-black border border-[#1E2028] py-3 px-6 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
//             Contact
//           </button>
//         </div>
//       </div>

//       <div className="relative mt-6 md:mt-18 pb-16 max-w-7xl mx-auto gap-[100px] flex flex-col">
//         {["../Projects/queue.png", "../Projects/queue.png"].map((src, i) => (
//           <div key={i} className={`relative ${isMobile ? 'w-full aspect-square px-3' : 'w-full'}`}>
//             <img src={src} alt="The Queue App Screenshots" className="rounded-[32px] object-cover w-full h-full" />
//           </div>
//         ))}

//         <div className="grid grid-cols-2 md:grid-cols-4 text-center items-center justify-center place-items-center">
//           {[{ title: "Project", detail: "E-commerce App" }, { title: "Client", detail: "Retail Brand" }, { title: "Duration", detail: "6 Months" }, { title: "Impact", detail: "Increased Sales" }].map((info, i) => (
//             <div key={i} className="flex flex-col items-center justify-center gap-3">
//               <h4 className="text-black text-lg md:text-xl">{info.title}</h4>
//               <p className="text-black text-sm font-light">{info.detail}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left px-4 md:px-0">
//           <div className="w-full md:w-[50%]"></div>
//           <div className="w-full md:w-[50%] font-light text-lg md:text-2xl text-[#1E2028]">
//             <p>We love working with small and medium businesses, helping them grow with tech that just works.</p>
//             <br />
//             <p>Together, let’s grow, succeed, and build something amazing.</p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="flex items-center justify-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal">
//           <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
//           <h1 className="font-light">See Also</h1>
//           <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
//         </div>
//         <div className="text-center pb-4">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-light font-hedvig-serif mb-3">
//             Latest <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">Projects</span>
//           </h1>
//         </div>
//         <div className="flex flex-wrap justify-between gap-8 px-4">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//       <BuyMeACoffee url="../bottom_img.jpeg" />
//     </div>
//   );
// };

// export default PortfolioDetails;
const PortFolioDetails = ({ params }: any) => {
  // const params = useParams();
  const { id } = params; // Get the dynamic id from URL
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>Portfolio Detail for IDss: {id}</h1>
    </div>
  );
};

export default PortFolioDetails;

export function generateStaticParams() {
  const projects = [
    {
      id: 1,
      image: "queue.png",
      name: "The Queue",
      charecteristics: [
        "Mobile Apps",
        "Innovative Solutions",
        "User Experience",
      ],
    },
    {
      id: 2,
      image: "queue.png",
      name: "Directify",
      charecteristics: ["E-Commerce", "Web Development", "Responsive Design"],
    },
    {
      id: 3,
      image: "manifest.png",
      name: "Money Manifest",
      charecteristics: ["UI/UX", "Mobile App"],
    },
    {
      id: 4,
      image: "royalDrive.png",
      name: "Royal Drive",
      charecteristics: ["UI/UX", "Mobile App"],
    },
  ];
  return projects.map((item) => ({
    id: item.id.toString(),
  }));
}
