// import relatedblog1 from "../assets/relatedblog1.png";
// import relatedblog2 from "../assets/relatedblog2.png";
// import relatedblog3 from "../assets/relatedblog3.png";
// function RelatedBlogs() {
//     const blogsCardDetails = [
//         {
//             image: relatedblog1,
//             title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
//             desc:"Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
//         },
//         {
//             image: relatedblog2,
//             title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
//             desc:"Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
//         },
//         {
//             image: relatedblog3,
//             title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
//             desc:"Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
//         },

//     ]
//   return (
//     <div className="flex flex-col gap-4 px-20 pb-28">
//         <div className="flex items-center gap-4">
//            {blogsCardDetails.map((card, index) => (
//             <div key={index} className="flex flex-col gap-4 shadow-md  rounded-lg">
//                 <img src={card.image} alt="" className="w-full h-40 object-cover" />
//                 <div className="flex flex-col gap-2">
//                     <h3 className="text-lg font-bold">{card.title}</h3>
//                     <p className="text-sm">{card.desc}</p>
//                 </div>
//             </div>
//            ))} 
//         </div>
//     </div>
//   )
// }

// export default RelatedBlogs


import relatedblog1 from "../assets/relatedblog1.png";
import relatedblog2 from "../assets/relatedblog2.png";
import relatedblog3 from "../assets/relatedblog3.png";

function RelatedBlogs() {
  const blogsCardDetails = [
    {
      image: relatedblog1,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
    },
    {
      image: relatedblog2,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
    },
    {
      image: relatedblog3,
      title: "Transform Your Ideas into Engaging Mobile Applications with Our Expertise",
      desc: "Lorem ipsum dolor sit amet consectetur. Eget quisque ullamcorper amet lacus quam fringilla eros. Diam facilisis ante nisi nam mi ."
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-light text-center mb-12 font-hedvig-serif">Related blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {blogsCardDetails.map((card, index) => (
          <div 
            key={index} 
            className="flex flex-col rounded-[30px] overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={card.image} 
                alt={`Blog ${index + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl text-[#1F2937] font-hedvig-serif">{card.title}</h3>
              <p className="text-[#374151] font-extralight">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedBlogs;