import React from "react";

function ProjectList() {

    const projects = [
        {
          image: './Projects/englebook.png',
          name: 'EngleBook',
          tags: ['UI/UX', 'Mobile App', 'React'],
        },
        {
          image: './Projects/englebook.png',
          name: 'EngleBook',
          tags: ['UI/UX', 'Mobile App'],
        },
        {
          image: './Projects/englebook.png',
          name: 'EngleBook',
          tags: ['UI/UX', 'Mobile App'],
        },
        {
          image: './Projects/englebook.png',
          name: 'PassBook',
          tags: ['UI/UX', 'Mobile App'],
        },
      ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-light font-hedvig-serif mb-8">
        Latest <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">Projects</span>
      </h1>
      <div className="grid grid-cols-2 gap-8">
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };