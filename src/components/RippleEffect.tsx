import React from 'react';

const RippleWave = () => {
  return (
    <div className="relative w-full bg-gray-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Multiple wave layers with different animations and opacities */}
        <div className="absolute w-0 h-0 bg-white rounded-full animate-ripple-1 opacity-70"></div>
        <div className="absolute w-0 h-0 bg-white rounded-full animate-ripple-2 opacity-50"></div>
        <div className="absolute w-0 h-0 bg-white rounded-full animate-ripple-3 opacity-30"></div>
      </div>
      <div className="z-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Ripple Wave Effect</h1>
      </div>
    </div>
  );
};

export default RippleWave;