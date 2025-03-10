import Image from "next/image";


function ProjectList() {
    const projects = [
      {
        image: "/Projects/englebook1.png",
        name: "EngleBook",
        tags: ["UI/UX", "Mobile App", "React"],
      },
      {
        image: "/Projects/englebook.png",
        name: "EngleBook",
        tags: ["UI/UX", "Mobile App", "React"],
      },
      {
        image: "/Projects/the_queue.png",
        name: "The Queue",
        tags: ["UI/UX", "Mobile App", "Flutter"],
      },
      {
        image: "/Projects/money_manifest.png",
        name: "Money Manifest",
        tags: ["UI/UX", "Mobile App"],
      },
      {
        image: "/Projects/royal_drive.png",
        name: "Royal Drive",
        tags: ["UI/UX", "Mobile App", "Website"],
      },
      {
        image: "/Projects/englebook1.png",
        name: "EngleBook",
        tags: ["UI/UX", "Mobile App"],
      },
    ];
  
    return (
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-9">
          Latest{" "}
          <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-y-16 lg:gap-x-7 justify-center">
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
    return (
      <div className="flex flex-col w-full max-w-full sm:max-w-md lg:max-w-lg mx-auto">
        <div className="rounded-2xl sm:rounded-[36px] shadow-md overflow-hidden w-full aspect-video">
          <Image 
            src={image} 
            alt={name} 
            width={0}
            height={0}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-6 space-y-2 sm:space-y-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
            {name}
          </h3>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white shadow-md text-gray-700 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
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