import MenuItems from "./MenuItems";
import logo from "../Assets/exthgen.svg"
import Image from "next/image";

const BlogHeader = () => {
  

  return (
    <div className="flex flex-col bg-white w-full relative overflow-hidden">
      {/* Content */}
      <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
        <Image
          src={logo}
          alt="Site Logo"
          className="w-24 md:w-32 h-auto mb-6"
        />
        <MenuItems/>
      </div>

      <div className="flex flex-col pb-28 pt-12">
      <div className="flex justify-center items-center flex-col font-hedvig-serif">
        <div className="flex items-center pb-4 text-[#A7ACC1] gap-4 text-2xl font-normal decoration-neutral-400">
          <div className="w-20 h-px bg-gradient-to-l from-neutral-400 to-transparent ml-4"></div>
          <h1 className=" font-light">Articles</h1>
          <div className="w-20 h-px bg-gradient-to-r from-neutral-400 to-transparent mr-4"></div>
        </div>
        <h1 className="flex text-center md:text-[64px] text-[26px] md:leading-[84px] leading-[34px] font-normal">
        Blogs
        </h1>
        <div className="flex flex-col w-2/3 justify-center gap-4 pt-6 font-visby font-normal w-full max-w-2xl">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col ">
          Stay updated on the latest technology trends and insights with our curated collection of thought-provoking articles.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogHeader;
