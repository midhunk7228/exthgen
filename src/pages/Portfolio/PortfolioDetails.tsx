import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ProjectCard } from "../../components/ProjectList";
import BuyMeACoffee from "../../components/BuyMeACoffee";
import MenuItems from "../../components/MenuItems";

const PortfolioDetails = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const projects = [
    {
      image: "../Projects/englebook1.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App", "React"],
    },
    {
      image: "../Projects/englebook.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App", "React"],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Background Video with Light Overlay */}
      <div className="absolute inset-0 w-full h-[80vh] md:h-[70vh] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src="../ripple2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <img
          src="../Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6"
        />
        <MenuItems/>
      </div>

      {/* Title Section */}
      <div className="flex flex-col justify-center items-center pt-12 pb-16 md:pb-32 relative z-20">
        <h1 className="text-center text-[30px] md:text-[64px] leading-[38px] md:leading-[80px] font-normal font-hedvig-serif">
          The Queue
        </h1>

        {/* Tags */}
        <div className="flex gap-4 mt-6 font-light">
          <span className="bg-white rounded-full px-4 py-3 shadow-md text-sm">
            Mobile App
          </span>
          <span className="bg-white rounded-full px-4 py-3 shadow-md text-sm">
            Product
          </span>
        </div>

        {/* Description - Mobile View */}
        <div className="md:hidden px-6 mt-8">
          <p className="text-center font-light leading-relaxed">
            This project focused on creating an innovative mobile application
            designed to help users learn English effectively and efficiently.
          </p>
        </div>

        {/* Buttons - Mobile View */}
        <div className="md:hidden flex items-center justify-center space-x-4 font-visby">
          <button className="bg-exthgen-gradient font-hedvig-serif text-white py-3 px-6 hover:bg-pink-600 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
            Checkout <FaArrowRightLong className="ml-2" />
          </button>
          <button className="bg-transparent font-hedvig-serif text-black border border-[#1E2028] py-3 px-6 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
            Contact
          </button>
        </div>
      </div>

      {/* Description Card - Desktop View */}
      <div className="hidden md:block relative z-20 max-w-3xl mx-auto px-4">
        <div className="overflow-hidden -mt-32 text-center px-12 py-10">
          <p className="text-2xl leading-relaxed font-light mt-2 mb-8 text-[#323442]">
            This project focused on creating an innovative mobile application
            designed to help users learn English effectively and efficiently.
          </p>
          <div className="flex items-center justify-center space-x-4 font-visby">
            <button className="bg-exthgen-gradient font-hedvig-serif text-white py-3 px-6 hover:bg-pink-600 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
              Checkout <FaArrowRightLong className="ml-2" />
            </button>
            <button className="bg-transparent font-hedvig-serif text-black border border-[#1E2028] py-3 px-6 cursor-pointer rounded-full text-sm font-bold leading-6 flex items-center">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* App Image Section */}
      <div className="relative mt-6 md:mt-18 pb-0 flex flex-col max-w-7xl mx-auto gap-[100px] pb-16">
         <div className={`relative ${isMobile ? 'w-full aspect-square px-3' : 'w-full'}`}>
          <img
            src="../Projects/queue.png"
            alt="The Queue App Screenshots"
            className={`rounded-[32px] object-cover ${isMobile ? 'w-full h-full' : 'w-full'}`}
          />
        </div>

        {/* Project Info Section */}
        <div className={`relative w-full grid grid-cols-2 md:grid-cols-4 text-center md:text-center items-center justify-center place-items-center ${isMobile ? "gap-4" : ""}`}>
          <div className={`flex flex-col items-center justify-center ${isMobile ? "gap-0" : "gap-3"} `}>
            <h4 className="text-black text-lg md:text-xl">Project</h4>
            <p className="text-black text-sm font-light">E-commerce App</p>
          </div>
          <div className={`flex flex-col items-center justify-center ${isMobile ? "gap-0" : "gap-3"} `}>
            <h4 className="text-black text-lg md:text-xl">Client</h4>
            <p className="text-black text-sm font-light">Retail Brand</p>
          </div>
          <div className={`flex flex-col items-center justify-center ${isMobile ? "gap-0" : "gap-3"} `}>
            <h4 className="text-black text-lg md:text-xl">Duration</h4>
            <p className="text-black text-sm font-light">6 Months</p>
          </div>
          <div className={`flex flex-col items-center justify-center ${isMobile ? "gap-0" : "gap-3"} `}>
            <h4 className="text-black text-lg md:text-xl">Impact</h4>
            <p className="text-black text-sm font-light">Increased Sales</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className={`relative ${isMobile ? 'w-full aspect-square px-3' : 'w-full'}`}>
          <img
            src="../Projects/queue.png"
            alt="The Queue App Screenshots"
            className={`rounded-[32px] object-cover ${isMobile ? 'w-full h-full' : 'w-full'}`}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="w-full md:w-[50%]"></div>
          <div className="w-full md:w-[50%] font-light text-lg md:text-2xl text-[#1E2028] px-4 md:px-0">
            <p>
              We love working with small and medium businesses, helping them
              grow with tech that just works. Our goal is to keep things simple,
              scalable, and useful so every business, no matter how small, can
              reach its full potential.
            </p>
            <br />
            <p>Together, let’s grow, succeed, and build something amazing.</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className={`relative ${isMobile ? 'w-full aspect-square px-3' : 'w-full'}`}>
          <img
            src="../Projects/queue.png"
            alt="The Queue App Screenshots"
            className={`rounded-[32px] object-cover ${isMobile ? 'w-full h-full' : 'w-full'}`}
          />
        </div>

        {/* Image 4 */}
        <div className={`relative ${isMobile ? 'w-full aspect-square px-3' : 'w-full'}`}>
          <img
            src="../Projects/queue.png"
            alt="The Queue App Screenshots"
            className={`rounded-[32px] object-cover ${isMobile ? 'w-full h-full' : 'w-full'}`}
          />
        </div>

        {/* Latest Projects */}
        <div>
          <div className="flex items-center justify-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
            <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
            <h1 className=" font-light">See Also</h1>
            <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
          </div>
          <div>
            <div className="text-center pb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-3">
                Latest{" "}
                <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
            </div>
            <div className={`flex flex-wrap justify-between gap-8 ${isMobile ? 'px-4' : ''}`}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  image={project.image}
                  name={project.name}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <BuyMeACoffee url="../bottom_img.jpeg" />
    </div>
  );
};

export default PortfolioDetails;
