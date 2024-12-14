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
    <div className="flex justify-center items-center h-dvh bg-[#FFFFFF66]">
      <h1 className="flex text-center text-[64px] leading-[80px] font-normal font-hedvig-serif">Crafting Digital Ripples
         <br />
         for Tomorrow</h1>
      {/* <motion.div
        variants={waveVariants}
        initial="hidden"
        animate={controls}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#0077b6',
          marginRight: '20px',
        }}
      />
      <motion.div
        variants={waveVariants}
        initial="hidden"
        animate={controls}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#0077b6',
          marginLeft: '20px',
        }}
      /> */}
    </div>
  );
};

export default WaterDropWave;
