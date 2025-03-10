"use client";

import { useRouter } from "next/navigation"; // ✅ Correct
import Image from "next/image";

interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  Author: string;
  createdAt: string;
  blogCoverImage: { url: string };
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  const router = useRouter();

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

      <div className="flex flex-col gap-12 pt-12 lg:max-w-[85vw] md:max-w-[98vw] sm:max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="w-full flex justify-between items-center gap-12 sm:gap-12 md:gap-18 lg:gap-24 xl:gap-32 flex-col md:flex-row lg:flex-row"
          >
            <Image
              src={`https://api.www.exthgen.com${blog.blogCoverImage.url}`}
              alt={blog.blogTitle}
              width={500}
              height={300}
              className="cursor-pointer"
              onClick={() =>
                router.push(`/blogs-details/${blog.id}`)
              }

            />
            <div className="flex flex-col gap-4 justify-start items-start">
              <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-start font-light text-[#1E2028] font-hedvig-serif mb-3">
                {blog.blogTitle}
              </h1>
              <p className="text-start text-[#444444] text-sm sm:text-md md:text-sm lg:text-lg font-medium leading-9 gap-3 flex flex-col">
                {blog.Author} |{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-start text-[#323442] text-sm sm:text-lg md:text-sm lg:text-lg font-extralight leading-7 gap-3 text-[#323442] flex flex-col">
                {blog.blogDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
