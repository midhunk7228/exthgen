import React from "react";

function ProjectList() {
  const projects = [
    {
      image: "./Projects/englebook1.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App", "React"],
    },
    {
      image: "./Projects/englebook.png",
      name: "EngleBook",
      tags: ["UI/UX", "Mobile App", "React"],
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
    <div className="flex flex-col items-center justify-center px-20 pb-28">
      <h1 className="text-3xl font-light font-hedvig-serif mb-9">
        Latest{" "}
        <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-x-24 gap-y-16">
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

export default ProjectList;

const ProjectCard = ({ image, name, tags }) => {
  return (
    <div className="flex flex-col">
      <div className="rounded-[36px] shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-96 object-cover " />
      </div>
      <div className="flex justify-between p-4">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white shadow-md text-gray-700 px-3 py-2 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
