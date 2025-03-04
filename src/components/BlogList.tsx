import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.www.exthgen.com/api/blogs?populate=*");
      const data = await response.json();
      setBlogs(data?.data);
      setLoading(false);
    } catch (error : any) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs, "blogs")

  
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something Went wrong</div>;
  }

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
        {blogs?.map((blog: any) => (
          <div className="w-full flex justify-between items-center gap-12 sm:gap-12 md:gap-18 lg:gap-24 xl:gap-32 flex-col md:flex-row lg:flex-row ">
            <img
              src={`https://api.www.exthgen.com${blog?.blogCoverImage?.url}`}
              alt=""
              className="cursor-pointer"
              onClick={() => navigate(`/blogs-details/${blog.id}`,  { state: { blog }})}
            />
            <div className="flex flex-col gap-4 justify-start items-start">
              <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-start font-light text-[#1E2028] font-hedvig-serif mb-3">
                {blog?.blogTitle}
              </h1>
              <p className="text-start text-[#444444] text-sm sm:text-md md:text-sm lg:text-lg font-medium leading-9 gap-3 flex flex-col">
                {blog?.Author} | {new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-start text-[#323442] text-sm sm:text-lg md:text-sm lg:text-lg font-extralight leading-7 gap-3 text-[#323442] flex flex-col">
                {blog?.blogDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
