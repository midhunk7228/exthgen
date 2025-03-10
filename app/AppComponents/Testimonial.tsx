"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vector from "../../public/Projects/Vector.png";
import Image from "next/image";


const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Exthgen Technologies LLP delivered an excellent software solution. Their expertise streamlined our operations and enhanced efficiency. Highly recommended!",
      author: "siddique",
      rating: 5,
      avatar: "siddique.jpeg"
    },
    {
      id: 2,
      text: "Exthgen transformed our app idea into a user-friendly reality, exceeding our expectations every step of the way.",
      author: "swopnil",
      rating: 5,
      avatar: "swopnil.jpeg"
    },
    {
      id: 3,
      text: "Exthgen Technologies LLP delivered the Brickly Construction Management app with exceptional quality. Their solution streamlined our processes and improved project efficiency. Highly reliable team!",
      author: "shaheed",
      rating: 5,
      avatar: "shaheed.png"
    },
    {
      id: 4,
      text: "How to Speak English offers outstanding language learning features. Its speech recognition and immersive exercises make learning engaging. Highly recommend for improving English skills!",
      author: "mohammed yaseen",
      rating: 5,
      avatar: "unnamed.webp"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <div className="py-28 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-normal font-hedvig-serif mb-8 text-center">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 w-full">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mb-28 shadow-md relative w-full h-[260px]"> {/* Added h-[350px] for fixed height */}
                {/* <LuQuote className="rotate-180 text-6xl text-[#E1E3EE]" /> */}
                <Image src={vector} alt="vector" />
                <p className="text-gray-800 text-center mb-11 mt-9">
                  {testimonial.text}
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <img
                    src={`./Testimonials/${testimonial.avatar}`}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center mt-16">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;