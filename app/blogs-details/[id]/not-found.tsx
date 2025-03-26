import NotFoundState from "@/components/shared/NotFoundState";

export default function NotFound() {
  return (
    <NotFoundState 
      title="Blog Not Found"
      message="The blog post you're looking for doesn't exist."
      backLink="/Blogs"
      backText="Back to Blogs"
    />
  );
}
