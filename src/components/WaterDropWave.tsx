import React from "react";
import { motion, useAnimation } from "framer-motion";

const WaterDropWave = () => {
  const controls = useAnimation();

  // Animation configuration
  const waveVariants = {
    visible: {
      y: [0, -20, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Trigger the animation when the component mounts
  React.useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    // <div className="flex justify-center items-center bg-[#FFFFFF66] h-[859px]">
    <div className="flex justify-center items-center bg-[#E8ECEE] py-80">
      <h1 className="flex text-center text-[64px] leading-[80px] font-normal font-hedvig-serif">Crafting Digital Ripples
         <br />
         for Tomorrow</h1>
    </div>
  );
};

export default WaterDropWave;
