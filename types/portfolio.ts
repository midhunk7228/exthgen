export interface Project {
  id: number;
  image: string;
  name: string;
  tags: string[];
  description?: string;
  client?: string;
  duration?: string;
  impact?: string;
}

export interface ProjectDetails extends Project {
  videoUrl?: string;
  screenshots: string[];
  fullDescription: string;
  projectInfo: {
    title: string;
    detail: string;
  }[];
}
