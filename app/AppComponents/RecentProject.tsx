"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RecentProjectPage = () => {
  // Initialize with false, then update in useEffect
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value after component mounts
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-3">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 font-visby font-normal">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col">
            Explore our diverse range of completed projects.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-center mt-16">
                <Link
                  href={`/PortfolioDetails/${project.id}`}
                  className={`relative ${
                    isMobile ? "w-full aspect-square" : "w-full"
                  } cursor-pointer`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      className={`rounded-[32px] object-cover ${
                        isMobile ? "w-full h-full" : "w-full"
                      }`}
                      src={`/Projects/${project.image}`}
                      alt={project.name}
                      width={0}
                      height={0}
                      layout="responsive"
                    />
                  </div>
                </Link>
                <h3 className="mt-4 text-3xl font-normal font-hedvig-serif">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 pt-5 flex-wrap justify-center">
                  {project.charecteristics.map((characteristic, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-light bg-white px-3 py-2 shadow-xl rounded-full"
                    >
                      <p className="">{characteristic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjectPage;
