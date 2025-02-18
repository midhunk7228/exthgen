import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import vector from "../../public/Projects/Vector.png";

function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote:
        "Exthgen transformed our app idea into a user-friendly reality, exceeding our expectations every step of the way",
      avatar: "./Team/user.png",
    },
    {
      quote:
        "Exthgen transformed our app idea into a user-friendly reality, exceeding our expectations every step of the way",
      avatar: "./Team/user.png",
    },
    {
      quote:
        "Exthgen transformed our app idea into a user-friendly reality, exceeding our expectations every step of the way",
      avatar: "./Team/user.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-6 mb-24">
      <div className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-light font-hedvig-serif">
          Testimonials
        </h1>
      </div>

      {/* Testimonial cards container */}
      <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
        {testimonials
          .slice(0, isMobile ? 1 : testimonials.length)
          .map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Testimonial box */}
              <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-xl shadow-lg p-8 mb-12">
                {/* Quote marks */}
                <div className="text-gray-200 mb-4">
                  <img src={vector} alt="vector" />
                </div>

                {/* Testimonial content */}
                <p className="text-sm text-[#323442] font-light text-center pb-4">
                  {testimonial.quote}
                </p>
              </div>

              {/* Avatar positioned at the bottom of the card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8">
                <img
                  src={testimonial.avatar}
                  alt="Testimonial avatar"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Stars positioned below the avatar */}
              <div className="flex justify-center mt-10 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm text-orange-400" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Testimonials;
