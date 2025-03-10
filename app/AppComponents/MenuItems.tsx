// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { TbMenu } from "react-icons/tb";


// function MenuItems() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  

//   useEffect(() => {
//     if (isMenuOpen) {
//       const originalStyle = window.getComputedStyle(document.body).overflow;
//       document.body.style.overflow = "hidden";
      
//       return () => {
//         document.body.style.overflow = originalStyle;
//       };
//     }
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const menuItems = [
//     { title: "Home", link: "/" },
//     { title: "About", link: "/about" },
//     { title: "Careers", link: "/careers" },
//     { title: "Services", link: "/services" },
//     { title: "Portfolio", link: "/portfolio" },
//     { title: "Blogs", link: "/blogs" },
//     { title: "Contact", link: "/get-in-touch" },
//   ];

//   const menuVariants = {
//     hidden: { 
//       opacity: 0,
//       x: "100%"
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       x: "100%",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.3 + i * 0.1,
//         duration: 0.5
//       }
//     })
//   };

//   return (
//     <div>
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="fixed inset-0 bg-white z-[999] flex flex-col justify-center shadow-xl"
//             variants={menuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <div className="px-12 py-8 h-full flex flex-col justify-center">
//               <nav className="flex flex-col items-end">
//                 {menuItems.map((item, i) => (
//                   <motion.a
//                     key={item.title}
//                     href={item.link}
//                     className="text-right text-[#1E2028] text-4xl md:text-5xl font-hedvig-serif mb-8 hover:text-gray-600 transition-colors"
//                     custom={i}
//                     variants={itemVariants}
//                     initial="hidden"
//                     animate="visible"
//                   >
//                     {item.title}
//                   </motion.a>
//                 ))}
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-[9999] flex flex-col h-full">
//         <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between">
//           <motion.div 
//             className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-white mr-6 md:mr-16 shadow-md flex items-center justify-center cursor-pointer "
//             onClick={toggleMenu}
//             whileTap={{ scale: 0.95 }}
//           >
//             <AnimatePresence mode="wait">
//               {isMenuOpen ? (
//                 <motion.div
//                   key="close"
//                   initial={{ rotate: -90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: 90, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <IoMdClose className="text-3xl text-[#171718]" />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="menu"
//                   initial={{ rotate: 90, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -90, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <TbMenu className="text-3xl text-[#171718]" />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default MenuItems



"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

function MenuItems() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "Careers", link: "/Careers" },
    { title: "Services", link: "/Services" },
    { title: "Portfolio", link: "/Portfolio" },
    { title: "Blogs", link: "/Blogs" },
    { title: "Contact", link: "/GetInTouch" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[999] flex flex-col justify-center shadow-xl"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-12 py-8 h-full flex flex-col justify-center">
              <nav className="flex flex-col items-end gap-6">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.link}
                      className="text-right text-[#1E2028] text-4xl md:text-5xl font-hedvig-serif mb-8 hover:text-gray-600 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Button */}
      <div className="relative z-[9999] flex flex-col h-full">
        <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between">
          <motion.div
            className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-white mr-6 md:mr-16 shadow-md flex items-center justify-center cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoMdClose className="text-3xl text-[#171718]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TbMenu className="text-3xl text-[#171718]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
