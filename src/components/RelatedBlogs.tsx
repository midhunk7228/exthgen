import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RelatedBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.www.exthgen.com/api/blogs?populate=*");
      const data = await response.json();
      const shuffledBlogs = data?.data?.sort(() => Math.random() - 0.5) || [];
      
      setBlogs(shuffledBlogs);
      // setBlogs(data?.data);
      setLoading(false);
    } catch (error : any) {
      setError(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchBlogs();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-light text-center mb-12 font-hedvig-serif">Related blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {blogs.slice(0, 3).map((card:any, index:any) => (
          <div 
            key={index} 
            className="flex flex-col rounded-[30px] overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/blogs-details/${card.id}`,  { state: { blog: card }})}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={`https://api.www.exthgen.com${card?.blogCoverImage?.url}`}
                alt={`Blog ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl text-[#1F2937] font-hedvig-serif">{card.blogTitle}</h3>
              <p className="text-[#374151] font-extralight">{card.blogDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedBlogs;