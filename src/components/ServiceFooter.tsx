import { useEffect, useState } from "react";
import mobile from "../assets/mobile.png"
import devops from "../assets/devops.png"
import bag from "../assets/bag.png"

function ServiceFooter() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardData= [
    {
        icon: mobile,
        title: "Mobile App Development Services",
        desc: "We create intuitive and engaging mobile applications that drive user engagement."
    },
    {
        icon: devops,
        title: "DevOps Solutions for Seamless Operations",
        desc: "Our DevOps services streamline your development and deployment processes."
    },
    {
        icon: bag,
        title: "Tech Consulting for Strategic Growth",
        desc: "We provide expert guidance to help you navigate the tech landscape."
    },
  ]
  return (
    <div className={`${isMobile ? "px-4 py-8" : "px-14 py-16"}`}>
      <div
        className={`w-full flex flex-col items-center justify-center gap-8 `}
      >
        <div className="flex justify-center items-center text-center w-full">
          <h1 className=" md:text-[44px] text-[26px] md:leading-[62px] leading-[34px] text-[#1E2028] font-light font-hedvig-serif ">
            Explore Our Specialized&nbsp;
            <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
              Service
            </span>
            &nbsp;Offerings
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center gap-8 sm:flex-col md:flex-row  w-full">
            {cardData.map((card, index) => (
              <div key={index} className="px-8 py-12 shadow-lg text-center flex flex-col gap-8 justify-center items-center w-full  h-[400px] rounded-3xl">
                <div><img src={card.icon} alt="image" className="w-16 sm:w-16 md:w-8 lg:w-16"/></div>
                <div><h1 className="font-medium text-2xl sm:text-2xl md:text-lg lg:text-2xl text-[#1E2028]">{card.title}</h1></div>
                <div><p className="text-[#323442] font-extralight text-lg sm:text-lg md:text-xs lg:text-lg">{card.desc}</p></div>
              </div>  
            ))}
            
        </div>
      </div>
    </div>
  );
}

export default ServiceFooter;
