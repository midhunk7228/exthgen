import Link from "next/link";
// import { FaArrowRightLong } from "react-icons/fa6";

const WhyWe = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center bg-[#E8ECEE] py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 w-full h-full md:h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
        >
          <source src="/ripple2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:pr-8 relative z-30">
        {" "}
        {/* Added z-30 to place above the image */}
        <div className="hidden lg:block"></div>
      </div>
      <div className="lg:w-1/2 w-full lg:-ml-20 lg:pr-4 relative z-30">
        {" "}
        {/* Added z-30 to place above the image */}
        <div className="bg-white rounded-2xl md:rounded-[36px] shadow-lg overflow-hidden max-w-xl lg:max-w-3xl mx-auto">
          <div className="px-6 md:px-12 py-12 md:py-16 lg:py-20">
            <h2 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-left">
              Empower
            </h2>
            <h2 className="text-2xl md:text-4xl font-normal font-hedvig-serif mb-4 md:mb-6 text-left">
              Why Choose Exthgen for Your Development Needs?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-left text-[#323442] mb-6 md:mb-8">
              At Exthgen, we bring a wealth of expertise and a commitment to
              reliability in every project. Our tailored solutions ensure that
              your unique needs are met with precision and care.
            </p>
            <div className="flex flex-row items-center justify-start gap-4 font-visby">
              <Link
                href={"/Careers"}
                className="bg-exthgen-gradient text-white py-2 md:py-3 px-4 md:px-6 hover:bg-pink-600 rounded-full text-sm md:text-base font-bold leading-6 flex items-center"
              >
                Join Us
                {/* <FaArrowRightLong className="ml-2" /> */}
              </Link>
              <Link
                href={"/GetInTouch"}
                className="bg-white text-gray-800 py-2 md:py-3 px-4 md:px-6 border border-[#1E2028] hover:bg-gray-100 rounded-full text-sm md:text-base font-bold leading-6"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
