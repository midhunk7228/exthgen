import { useEffect, useState } from "react";

function ProjectList() {

  

  const projects = [
    {
      image: "./Projects/test.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App", "React"],
    },
    {
      image: "./Projects/englebook.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App"],
    },
    {
      image: "./Projects/the_queue.png",
      name: "The Queue",
      tags: ["UI/UX", "Mobile App", "Flutter"],
    },
    {
      image: "./Projects/money_manifest.png",
      name: "Money Manifest",
      tags: ["UI/UX", "Mobile App"],
    },
    {
      image: "./Projects/royal_drive.png",
      name: "Royal Drive",
      tags: ["UI/UX", "Mobile App", "Website"],
    },
    {
      image: "./Projects/test.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App"],
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 pt-40">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-12">
        Latest{" "}
        <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-24 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}

export const ProjectCard = ({ image, name, tags }: { image: string; name: string; tags: string[] }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="rounded-3xl overflow-hidden w-full aspect-[3/2] md:aspect-[5/3] bg-gray-100 shadow-xl">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full  transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className={`flex  ${isMobile ? "flex-col" : "flex-row"} gap-2 items-center justify-between mt-5`}>
        <h3 className="text-xl font-normal">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white shadow-md text-gray-700 px-4 py-3 rounded-full text-xs font-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;