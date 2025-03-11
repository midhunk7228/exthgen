import { useState, useEffect, useRef } from "react";

export const Marquee = ({
  items = [
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Item",
  ],
  speed = 20,
  gap = "gap-4",
}: {
  items?: string[];
  speed?: number;
  gap?: string;
}) => {
  const [duplicateItems, setDuplicateItems] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDuplicateItems([...items, ...items]);
  }, [items]);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const scrollContent = () => {
      if (!isPaused && containerRef.current && contentRef.current) {
        if (
          containerRef.current.scrollLeft >=
          contentRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scrollContent, speed);
    return () => clearInterval(interval);
  }, [speed, isPaused]);

  return (
    <div className="w-full bg-white relative">
      {/* Left shadow gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Right shadow gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap opacity-40"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={contentRef} className={`inline-flex items-center ${gap} py-2 sm:py-4`}>
          {duplicateItems.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Logo ${index + 1}`}
              className="h-6 sm:h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
