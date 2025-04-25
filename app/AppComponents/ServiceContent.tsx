"use client";

import { useEffect, useState } from "react";
function ServicesContent() {
  const [isMobile, setIsMobile] = useState(false); 


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const services = [
    {
      id: "mobile-apps",
      title: "Mobile Apps",
      description:
        "We combine deep expertise with a passion for precision to craft mobile apps that truly resonate. From concept to launch, our custom solutions are designed to meet your unique needs — ensuring performance, reliability, and a seamless user experience that creates ripples in the digital world.",
      videoUrl: "/Videos/mobile-app.mp4",
    },
    {
      id: "web-apps",
      title: "Web Apps",
      description:
        "We build web applications that blend functionality, performance, and elegance. With a strong foundation of expertise and a commitment to reliability, we craft tailored solutions that align perfectly with your goals — delivering seamless digital experiences that leave a lasting impact.",
      videoUrl: "/Videos/web-app.mp4",
    },
    {
      id: "backend-solutions",
      title: "Backend Solutions",
      description:
        "We architect robust, scalable backend systems that power seamless digital experiences. With deep technical expertise and a commitment to precision, our tailored backend solutions ensure performance, security, and reliability — so your product flows smoothly from front to back, every time.",
      videoUrl: "/Videos/backend.mp4",
    },
  ];

  return (
    <div className="w-full">
      {isMobile ? (
        <>
          {services.map((service, index) => (
            <div key={index} className="">
                <div className="bg-gray-100 flex items-center justify-center order-2 md:order-1 px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                  <video
                    src={service.videoUrl}
                    className="max-w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="flex flex-col justify-center bg-white order-1 md:order-2 px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                  <h2 className="text-3xl font-light mb-4 text-[#1E2028] font-hedvig-serif">
                    {service.title}
                  </h2>
                  <p className="text-[#323442] font-light text-md md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {services.map((service, index) => (
            <div key={service.id} className="grid md:grid-cols-2">
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col justify-center bg-white px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                    <h2 className="text-3xl font-light mb-4 text-[#1E2028] font-hedvig-serif">
                      {service.title}
                    </h2>
                    <p className="text-[#323442] font-light text-md md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="bg-gray-100 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                    <video
                      src={service.videoUrl}
                      className="max-w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-gray-100 flex items-center justify-center order-2 md:order-1 px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                    <video
                      src={service.videoUrl}
                      className="max-w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div className="flex flex-col justify-center bg-white order-1 md:order-2 px-4 sm:px-8 md:px-16 lg:px-28 aspect-square w-full">
                    <h2 className="text-3xl font-light mb-4 text-[#1E2028] font-hedvig-serif">
                      {service.title}
                    </h2>
                    <p className="text-[#323442] font-light text-md md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ServicesContent;
