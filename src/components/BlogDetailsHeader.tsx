import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const BlogDetailsHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socailMedia = [
    {
      icon: <CiFacebook />,
      link: "/",
      colour: "#3B5999",
    },
    {
      icon: <SlSocialTwitter />,
      link: "/",
      colour: "#55ACEE",
    },
    {
      icon: <MdOutlineWhatsapp />,
      link: "/",
      colour: "#3AAF85",
    },
    {
      icon: <FiYoutube />,
      link: "/",
      colour: "#BD081C",
    },
    {
      icon: <CiLinkedin />,
      link: "/",
      colour: "#0077B5",
    },
    {
      icon: <FaInstagram />,
      link: "/",
      colour: "#E4405F",
    },
  ];

  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <img
          src="../Logo/exthgen.svg"
          alt="Site Logo"
          className="w-32 h-auto mb-6"
        />
        <img
          src={isMobile ? "../Logo/mobile_menu.svg" : "../Logo/menu.svg"}
          alt=""
          className="w-20 h-auto mr-0 md:mr-16"
        />
      </div>

      <div className="flex flex-col gap-6 pb-24 pt-12 max-w-4xl mx-auto">
        <div className="flex justify-center items-center flex-col font-hedvig-serif">
          <h1 className="flex text-start md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-light text-[#111827]">
            How to Create a Great Website Hero Section
          </h1>
          <div className="flex flex-col  justify-center gap-4 pt-6 font-visby font-normal w-full ">
            <p className="text-start text-[#323442] text-lg font-medium leading-7 gap-3 flex flex-col ">
              Rick Mess | May 31, 2024
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {socailMedia.map((item, index) => (
            <div
              key={index}
              className={`flex items-center jyustify-center gap-4 text-2xl cursor-pointer p-2 shadow-md rounded-full  transition-all duration-300`}
              style={{ color: item.colour }}
            >
              <a href={item.link}>{item.icon}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHeader;
