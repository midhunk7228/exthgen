interface LoadingStateProps {
  className?: string;
}

export default function LoadingState({ className = "" }: LoadingStateProps) {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${className}`}>
      <div className="animate-pulse">
        <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-8"></div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}