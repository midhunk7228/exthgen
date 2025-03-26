import PortfolioContent from "./PortfolioContent";

const projects = [
  {
    image: "../Projects/englebook1.png",
    name: "EngleBook",
    tags: ["UI/UX", "Mobile App", "React"],
  },
  {
    image: "../Projects/englebook.png",
    name: "EngleBook",
    tags: ["UI/UX", "Mobile App", "React"],
  },
];

export function generateStaticParams() {
  const projects = [
    {
      id: 1,
      image: "queue.png",
      name: "The Queue",
      charecteristics: [
        "Mobile Apps",
        "Innovative Solutions",
        "User Experience",
      ],
    },
    {
      id: 2,
      image: "queue.png",
      name: "Directify",
      charecteristics: ["E-Commerce", "Web Development", "Responsive Design"],
    },
    {
      id: 3,
      image: "manifest.png",
      name: "Money Manifest",
      charecteristics: ["UI/UX", "Mobile App"],
    },
    {
      id: 4,
      image: "royalDrive.png",
      name: "Royal Drive",
      charecteristics: ["UI/UX", "Mobile App"],
    },
  ];
  return projects.map((item) => ({
    id: item.id.toString(),
  }));
}

const PortfolioDetails = () => {
  return <PortfolioContent projects={projects} />;
};

export default PortfolioDetails;
