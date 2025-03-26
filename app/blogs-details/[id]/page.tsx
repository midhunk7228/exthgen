import { notFound } from "next/navigation";
import Image from "next/image";
import { generateEntityStaticParams } from "@/utils/staticParams";

interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  Author: string;
  createdAt: string;
  blogCoverImage: { url: string };
}

// Add generateStaticParams function
export async function generateStaticParams() {
  return generateEntityStaticParams({
    endpoint: "blogs",
  });
}

export const revalidate = 3600;

async function getBlogDetail(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `https://api.www.exthgen.com/api/blogs/${id}?populate=*`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlogDetail(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Image
        src={`https://api.www.exthgen.com${blog.blogCoverImage.url}`}
        alt={blog.blogTitle}
        width={1000}
        height={500}
        className="w-full h-auto rounded-lg shadow-lg mb-8"
      />
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-hedvig-serif font-light text-[#1E2028]">
          {blog.blogTitle}
        </h1>
        <div className="text-[#444444] text-sm md:text-base">
          <span className="font-medium">{blog.Author}</span> |{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="prose max-w-none">
          <p className="text-[#323442] text-base md:text-lg font-light leading-relaxed">
            {blog.blogDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
