"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogCard from "./BlogCard"; // We'll create this component

interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  Author: string;
  blogContent: any;
  createdAt: string;
  blogCoverImage: { url: string };
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
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
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
