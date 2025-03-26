import Link from 'next/link';

interface NotFoundStateProps {
  title?: string;
  message?: string;
  backLink?: string;
  backText?: string;
}

export default function NotFoundState({
  title = "Not Found",
  message = "The item you're looking for doesn't exist.",
  backLink = "/",
  backText = "Back to Home"
}: NotFoundStateProps) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-hedvig-serif mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{message}</p>
      <Link 
        href={backLink}
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {backText}
      </Link>
    </div>
  );
}