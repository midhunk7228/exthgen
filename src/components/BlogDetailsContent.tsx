import blogdetail from "../assets/blogDetail.png";

function BlogDetailsContent() {

  const blogContent = [
    {
      heading:"Don’t lose sight of Hero Section goals",
      desc:"Amidst this entrepreneurial boom, lies an often overlooked yet critical component for startup success, sound financial management. Regardless of the product or service they offer, startups rely heavily on their finance and accounting departments to ensure financial stability, manage cash flow, and make strategic decisions."
    },
    {
      heading:"Don’t lose sight of Hero Section goals",
      desc:"Amidst this entrepreneurial boom, lies an often overlooked yet critical component for startup success, sound financial management. Regardless of the product or service they offer, startups rely heavily on their finance and accounting departments to ensure financial stability, manage cash flow, and make strategic decisions."
    },
    {
      heading:"Don’t lose sight of Hero Section goals",
      desc:"Amidst this entrepreneurial boom, lies an often overlooked yet critical component for startup success, sound financial management. Regardless of the product or service they offer, startups rely heavily on their finance and accounting departments to ensure financial stability, manage cash flow, and make strategic decisions."
    },

  ]
  return (
    <div className="flex flex-col justify-center items-center gap-12 pb-12">
      <div className="max-w-4xl">
        <p className="text-[#323442] text-xl font-extralight leading-7">
          We love working with small and medium businesses, helping them grow
          with tech that just works. Our goal is to keep things simple,
          scalable, and useful so every business, no matter how small, can reach
          its full potential. Together, let’s grow, succeed, and build something
          amazing.
        </p>
      </div>
      <div className="max-w-7xl">
        <img src={blogdetail} alt="image" className="w-full" />
      </div>
      <div className="max-w-4xl">
        <p className="text-[#323442] text-xl font-extralight leading-7">
          The Hero Image is the first thing people see when they open your page.
          It’s your unique chance to win them over — or lose them forever.It
          takes mere seconds for the user to process the first screen. But
          behind the scenes, there’s a lot of painstaking work by marketers,
          designers, and developers. How can you quickly find the right solution
          and pick the perfect image? I have compiled the best practices for
          creating an effective Hero Image to share with you. Let us learn from
          the best
        </p>
      </div>
      <div className="max-w-4xl flex flex-col gap-6">
        {blogContent.map((item,index)=>(
          <div className="flex flex-col gap-3">
          <h1 className="text-[#323442] text-2xl font-medium leading-7">{index +1}. {item?.heading}</h1>
          <p className="text-[#323442] text-xl font-extralight leading-7">{item?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetailsContent;
