import { FaArrowRightLong } from "react-icons/fa6";

const TeamPage = () => {
  const teamMembers = [
    {
      image: "saleeq-statue.png",
      name: "Saleeq",
      role: "Director of everything",
    },
    {
      image: "shaheed-statue.png",
      name: "Shaheed",
      role: "Angel Richie",
    },
    {
      image: "rishad-statue.png",
      name: "Rishad",
      role: "Tech Mavrerick",
    },
    {
      image: "sana-statue.png",
      name: "Sana",
      role: "Design and Culture Curator",
    },
    {
      image: "dilshad-statue.png",
      name: "Dilshad",
      role: "Cool Dev",
    },
    {
      image: "nabeel-statue.png",
      name: "Nabeel",
      role: "Design and Culture Curator",
    },
    // {
    //   image: "shaima.png",
    //   name: "Shaima",
    //   role: "Design and Culture Curator",
    // },
    // {
    //   image: "arshak.png",
    //   name: "Arshak",
    //   role: "Logical Systems Analyst",
    // },
    // {
    //   image: "midhun.png",
    //   name: "Midhun",
    //   role: "Code Artisan",
    // },
    // {
    //   image: "dilshad.png",
    //   name: "Dilshad",
    //   role: "Cool Dev",
    // },
    
    // {
    //   image: "shahadil.png",
    //   name: "Shahadil",
    //   role: "DevOps Architect",
    // },
    // {
    //   image: "sahal.png",
    //   name: "Sahal",
    //   role: "Master of Analytics and Discipline",
    // },
    // {
    //   image: "afeefa.png",
    //   name: "Afeefa",
    //   role: "App Wizard",
    // },
    // {
    //   image: "rafa.png",
    //   name: "Rafath",
    //   role: "Search Sorcerer",
    // },
    // {
    //   image: "irshad.png",
    //   name: "Irshad",
    //   role: "Vibe Dev",
    // },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif mb-9">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">
              Team
            </span>
          </h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className={`w-96 h-72 rounded-[32px] object-cover transition-transform duration-300 hover:scale-105 `}
                  src={`./Team/${member.image}`}
                  alt={member.name}
                />
                <h3 className="mt-4 text-2xl font-normal font-hedvig-serif">
                  {member.name}
                </h3>
                <p className="text-base font-medium bg-gradient-to-r from-[#FD169C] via-[#FE497A] to-[#FE7B59] bg-clip-text text-transparent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 mb-24 flex space-x-4 font-visby justify-center">
          <button className="bg-exthgen-gradient text-white py-3 px-6 hover:bg-pink-600 rounded-full text-base font-bold leading-6 flex items-center">
            Join The Team <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
