import React from 'react';

const WhyWe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#E8ECEE] py-16">
      <div className="md:w-1/2"></div>
      <div className="md:w-1/2 mt-12 md:mt-0">
        <div className="bg-white rounded-full shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="px-12 py-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Why Choose Exthgen for Your Development Needs?
            </h2>
            <p className="text-lg leading-relaxed text-center">
              At Exthgen, we bring a wealth of expertise and a commitment to
              reliability in every project. Our tailored solutions ensure that
              your unique needs are met with precision and care.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
              >
                Join Us
              </a>
              <a
                href="#"
                className="border border-gray-700 hover:bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-full transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;