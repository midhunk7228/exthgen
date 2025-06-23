"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  LiaFacebookSquare,
  LiaInstagram,
  LiaLinkedin,
  LiaWhatsapp,
} from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";

const BuyMeACoffee = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px", // Start loading when 50px away from viewport
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only try to play video when it's loaded and in viewport
    if (videoRef.current && videoLoaded && isIntersecting) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      }
    }
  }, [videoLoaded, isIntersecting]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.error("Video failed to load:", e);
  };

  return (
    <div
      ref={componentRef}
      className="relative flex flex-col text-white md:pt-52 pt-32 overflow-hidden"
    >
      {/* Video background - only load when in viewport */}
      {isIntersecting && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          loop
          muted
          playsInline
          preload="metadata" // Only load metadata initially
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23000000'/%3E%3C/svg%3E" // Placeholder
        >
          <source src="./Videos/footer-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay to ensure text is readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center items-center flex-col font-hedvig-serif">
        <h1 className="flex text-center md:text-[64px] text-[32px] md:leading-[84px] leading-[40px] font-normal">
          {`Let's Have a Coffee`}
        </h1>
        <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal">
          <p className="text-center md:text-lg text-sm leading-7 gap-3 flex flex-col text-[#A7ACC1]">
            We believe that true innovation creates ripples that go beyond the
            ordinary. We specialize in crafting digital solutions that are as
            unique as your vision. From building intuitive apps to designing
            seamless user experiences, we're here to help you make waves in your
            industry. Connect with us today, and let's create something that
            moves the world forward, one ripple at a time.
          </p>
        </div>
        <div className="mt-8 flex space-x-4 font-visby md:pt-16 pt-4">
          <Link
            href={"/GetInTouch"}
            className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-sm font-hedvig-serif font-bold leading-6 flex items-center"
            prefetch={false} // Optimize link prefetching
          >
            Free Brainstorm
            <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="relative z-20 flex w-full justify-between md:px-20 px-6 pb-12 pt-28">
        <a
          href="https://www.facebook.com/exthgen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#666666] rounded-full px-2 py-1 hover:border-gray-400 transition-colors duration-200"
          aria-label="Facebook"
        >
          <LiaFacebookSquare className="text-2xl text-[#666666]" />
        </a>
        <a
          href="https://www.instagram.com/exthgen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#666666] rounded-full px-2 py-1 hover:border-gray-400 transition-colors duration-200"
          aria-label="Instagram"
        >
          <LiaInstagram className="text-2xl text-[#666666]" />
        </a>
        <div className="flex border border-[#666666] rounded-full px-2 py-1 hover:border-gray-400 transition-colors duration-200 cursor-pointer">
          <LiaWhatsapp className="text-2xl text-[#666666]" />
        </div>
        <div className="flex border border-[#666666] rounded-full px-3 py-1 pt-2 hover:border-gray-400 transition-colors duration-200 cursor-pointer">
          <RiTwitterXLine className="text-base text-[#666666]" />
        </div>
        <a
          href="https://www.linkedin.com/company/exthgen/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#666666] rounded-full px-2 py-1 hover:border-gray-400 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <LiaLinkedin className="text-2xl text-[#666666]" />
        </a>
      </div>
    </div>
  );
};

export default BuyMeACoffee;
