"use client";
import { useState, useEffect } from "react";

export function useResponsive(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false); 


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
