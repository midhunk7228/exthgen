import { useState, useEffect } from "react";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false); 


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between relative z-20">
      <img
        src="./Logo/exthgen.svg"
        alt="Site Logo"
        className={`h-auto mb-6 ${isMobile ? "w-16" : "w-32"} hover:cursor-pointer`}
      />
      <img
        src={isMobile ? "./Logo/mobile_menu.svg" : "./Logo/menu.svg"}
        alt=""
        className={`h-auto mr-0 md:mr-16 ${isMobile ? "w-16" : "w-20"}`}
      />
    </div>
  );
}

export default NavBar;
