import BlogHeader from "../AppComponents/BlogHeader";
import BlogList from "../AppComponents/BlogList";
import BuyMeACoffee from "../AppComponents/BuyMeACoffee";
import JoinUs from "../AppComponents/JoinUs";


interface Blog {
  id: number;
  blogTitle: string;
  blogDescription: string;
  Author: string;
  createdAt: string;
  blogCoverImage: { url: string };
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch("https://api.www.exthgen.com/api/blogs?populate=*", {
      cache: "no-store", // Ensures fresh data on every request
    });
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function Blogs() {
  const blogs = await getBlogs(); // Fetch data inside the component

  return (
    <div className="flex flex-col">
      <BlogHeader />
      <BlogList blogs={blogs} />
      <JoinUs />
      <BuyMeACoffee url="./bottom_img.jpeg" />
    </div>
  );
}
