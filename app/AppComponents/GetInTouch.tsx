"use client";

import { BsArrowUpRight } from "react-icons/bs";
import MenuItems from "./MenuItems";
import Image from "next/image";
import logo from "../assets/exthgen.svg"


const GetInTouch = () => {
  
  return (
    <div className="flex min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 md:pl-20 pl-6 flex justify-between items-center  py-4 bg-transparent z-10">
        <Image
          src={logo}
          alt="Site Logo"
          className="w-24 md:w-32 h-auto mb-6"
          height={0}
          width={0}
        />
        <MenuItems/>
      </div>

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row w-full ">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col mt-24">
          <div className="mb-12">
            <div className="flex items-center justify-center sm:justify-center md:justify-start lg:justify-start pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400 ">
              <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
              <h1 className=" font-light">Contact</h1>
              <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-center sm:text-center md:text-start lg:text-start mb-6 text-[#1E2028] mt-4">
              Get in Touch
            </h1>
            <p className="text-center sm:text-center md:text-start lg:text-start text-lg w-full md:w-1/2 lg:w-1/2 text-gray-700 mb-12">
              Get in touch to learn more about our automation platform and how
              we can help you achieve your business goals.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-16">
            <div>
              <p className="font-extralight text-[#323442] text-xl mb-2">
                Get in touch
              </p>
              <div className="flex items-center justify-between w-full md:w-1/2 lg:w-1/2">
                <a href="mailto:info@exthgen.com" className="text-2xl">
                  info@exthgen.com
                </a>
                <BsArrowUpRight className="text-4xl" />
              </div>
            </div>

            <div>
              <p className="font-extralight text-[#323442] text-xl mb-2">
                Phone
              </p>
              <a href="tel:+911233212300" className="text-2xl">
                +91 123 32 123 00
              </a>
            </div>

            <div>
              <p className="font-extralight text-[#323442] text-xl mb-2">
                Address
              </p>
              <p className="text-2xl">
                LLP, #2531, 5th Floor,
                <br />
                Hilite Business Park,
                <br />
                Calicut, Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Right section - 3D Illustration */}
        <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center p-8">
          <Image
            src="/Images/getInTouch.png"
            alt="3D illustration of automation platform"
            className="w-full max-w-2xl"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
