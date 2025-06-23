"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WhyWe = () => {
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
        rootMargin: "100px 0px", // Start loading when 100px away from viewport
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
      className="relative flex flex-col lg:flex-row items-center justify-center bg-[#E8ECEE] py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Video background - only load when in viewport */}
      <div className="absolute inset-0 w-full h-full md:h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
        {isIntersecting && (
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23E8ECEE'/%3E%3C/svg%3E"
          >
            <source src="/Videos/ripple2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Fallback background when video isn't loaded */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8ECEE] to-[#d0d5d8]" />
        )}
      </div>

      {/* Left side - empty space for layout */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:pr-8 relative z-30">
        <div className="hidden lg:block"></div>
      </div>

      {/* Right side - content card */}
      <div className="lg:w-1/2 w-full lg:-ml-20 lg:pr-4 relative z-30">
        <div className="bg-white rounded-2xl md:rounded-[36px] shadow-lg overflow-hidden max-w-xl lg:max-w-3xl mx-auto">
          <div className="px-6 md:px-12 py-12 md:py-16 lg:py-20">
            <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-left">
              Empower
            </h2>
            <h2 className="text-2xl md:text-4xl font-normal font-hedvig-serif mb-4 md:mb-6 text-left">
              Why Choose Exthgen for Your Development Needs?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-left text-[#323442] mb-6 md:mb-8">
              At Exthgen, we bring a wealth of expertise and a commitment to
              reliability in every project. Our tailored solutions ensure that
              your unique needs are met with precision and care.
            </p>
            <div className="flex flex-row items-center justify-start gap-4 font-visby">
              <Link
                href="/Careers"
                className="bg-exthgen-gradient text-white py-2 md:py-3 px-4 md:px-6 hover:bg-pink-600 rounded-full text-sm md:text-base font-bold leading-6 flex items-center transition-colors duration-200"
                prefetch={false}
                aria-label="Join our careers page"
              >
                Join Us
                <FaArrowRightLong className="ml-2" />
              </Link>
              <Link
                href="/GetInTouch"
                className="bg-white text-gray-800 py-2 md:py-3 px-4 md:px-6 border border-[#1E2028] hover:bg-gray-100 rounded-full text-sm md:text-base font-bold leading-6 transition-colors duration-200"
                prefetch={false}
                aria-label="Contact us"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
