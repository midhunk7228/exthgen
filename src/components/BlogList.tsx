import { useEffect, useState } from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate();
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogss = [
    {
      id: 1,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      author: "Rick  Mess",
      date: "May 31, 2024",
      desc:"At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      image: blog1,
    },
    {
      id: 2,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      author: "Rick  Mess",
      date: "May 31, 2024",
      desc:"At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      image: blog2,
    },
    {
      id: 3,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      author: "Rick  Mess",
      date: "May 31, 2024",
      desc:"At Exthgen, we bring a wealth of expertise and a commitment to reliability in every project. Our tailored solutions ensure that your unique needs are met with precision and care.",
      image: blog3,
    },
  ]

  return (
    <div className="bg-white py-8 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-3">
            Our 
            <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
            &nbsp;Latest news{" "}
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-4 font-visby font-normal max-w-xl mx-auto">
          <p className="text-center text-[#323442] text-lg font-light leading-7 gap-3 flex flex-col">
          The best articles for you to learn and read
          </p>
        </div>
      </div>
        <div className="flex flex-col gap-12 pt-12 lg:max-w-[85vw] md:max-w-[98vw] sm:max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 ">
        {blogss.map((blog:any) => (
        <div className="w-full flex justify-between items-center gap-12 sm:gap-12 md:gap-18 lg:gap-24 xl:gap-32 flex-col md:flex-row lg:flex-row ">
            <img src={blog.image} alt="" className="cursor-pointer" onClick={() => navigate('/blogs-details/1')}/>
            <div className="flex flex-col gap-4 justify-start items-start">
            <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-start font-light text-[#1E2028] font-hedvig-serif mb-3">
            {blog.title}
            </h1>
            <p className="text-start text-[#444444] text-sm sm:text-md md:text-sm lg:text-lg font-medium leading-9 gap-3 flex flex-col">
            {blog.author} | {blog.date}
            </p>
            <p className="text-start text-[#323442] text-sm sm:text-lg md:text-sm lg:text-lg font-extralight leading-7 gap-3 text-[#323442] flex flex-col">
            {blog.desc}
            </p>
            </div>
        </div>
        ))}
        </div>
    </div>
  );
};

export default BlogList;
