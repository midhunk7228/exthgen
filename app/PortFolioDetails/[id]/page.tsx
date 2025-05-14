// import PortfolioContent from "./PortfolioContent";

// const projects = [
//   {
//     image: "../Projects/englebook1.png",
//     name: "EngleBook",
//     tags: ["UI/UX", "Mobile App", "React"],
//   },
//   {
//     image: "../Projects/englebook.png",
//     name: "EngleBook",
//     tags: ["UI/UX", "Mobile App", "React"],
//   },
// ];

// export function generateStaticParams() {
//   const projects = [
//     {
//       id: 1,
//       image: "queue.png",
//       name: "The Queue",
//       charecteristics: [
//         "Mobile Apps",
//         "Innovative Solutions",
//         "User Experience",
//       ],
//     },
//     {
//       id: 2,
//       image: "queue.png",
//       name: "Directify",
//       charecteristics: ["E-Commerce", "Web Development", "Responsive Design"],
//     },
//     {
//       id: 3,
//       image: "manifest.png",
//       name: "Money Manifest",
//       charecteristics: ["UI/UX", "Mobile App"],
//     },
//     {
//       id: 4,
//       image: "royalDrive.png",
//       name: "Royal Drive",
//       charecteristics: ["UI/UX", "Mobile App"],
//     },
//   ];
//   return projects.map((item) => ({
//     id: item.id.toString(),
//   }));
// }

// const PortfolioDetails = () => {
//   return <PortfolioContent projects={projects} />;
// };

// export default PortfolioDetails;



import { notFound } from "next/navigation";
import PortfolioContent from "./PortfolioContent";

// Define the Portfolio interface
interface Portfolio {
  id: number;
  portfolioTitle: string;
  portfolioDescription: string;
  detailDescription: string;
  portfolioContent: any;
  createdAt: string;
  portfolioCoverImage: { url: string, name: string };
  portfolioFeatures: string[];
  projectClient: string;
  portfolioImages: { url: string; name: string; id: number }[];
  projectType: string;
  projectImpact: string;
  projectDuration: string;
  duration: string;
  impact: string;
  url: string;
}

// Fixed generateStaticParams function that fetches all portfolio IDs
export async function generateStaticParams() {
  try {
    // Fetch all portfolios to get their IDs
    const res = await fetch(
      "http://localhost:1337/api/portfolios/?populate=*",
      {
        next: { revalidate: 0 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch portfolios for static params");
    }
    const data = await res.json();
    const portfolios = data?.data || [];

    // Return an array of objects with the 'id' property
    return portfolios.map((portfolio: any) => ({
      id: portfolio.id.toString(), // Make sure ID is a string
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return []; // Return empty array as fallback
  }
}

export const revalidate = 3600;

async function getPortfolioDetail(id?: string): Promise<Portfolio | null> {
  try {
    const res = await fetch(
      `http://localhost:1337/api/portfolios/?populate=*`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    const data = await res.json();
    return data?.data.filter((e: any) => e.id == id)[0] || null;
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
    return null;
  }
}

// Function to fetch related projects
async function getRelatedProjects() {
  try {
    const res = await fetch(
      "http://localhost:1337/api/portfolios/?populate=*",
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch related projects");
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Failed to fetch related projects:", error);
    return [];
  }
}

export default async function PortfolioDetails({
  params,
}: {
  params: { id: string };
}) {
  const portfolio = await getPortfolioDetail(params.id);
  const relatedProjects = await getRelatedProjects();

  if (!portfolio) {
    notFound();
  }

  // Format related projects for the PortfolioContent component
  const formattedRelatedProjects = relatedProjects
    .filter((project: any) => project.id != params.id) // Exclude current project
    .map((project: any) => ({
      image: project.portfolioCoverImage 
        ? `http://localhost:1337${project.portfolioCoverImage.url}`
        : "/placeholder.jpg",
      name: project.portfolioTitle,
      tags: project.portfolioFeatures || [],
      id: project.id
    }));


  return (
    <PortfolioContent 
      projects={formattedRelatedProjects} 
      currentPortfolio={portfolio} 
    />
  );
}