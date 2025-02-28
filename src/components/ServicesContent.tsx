import mobileApp from "../assets/mobile-app.mp4";
import webApp from "../assets/web-app.mp4";
import backend from "../assets/backend.mp4";
import { useEffect, useState } from "react";
function ServicesContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
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
        "At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      videoUrl: mobileApp,
    },
    {
      id: "web-apps",
      title: "Web Apps",
      description:
        "At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      videoUrl: webApp,
    },
    {
      id: "backend-solutions",
      title: "Backend Solutions",
      description:
        "At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      videoUrl: backend,
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
