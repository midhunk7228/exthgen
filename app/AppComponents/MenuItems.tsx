"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { TbMenu } from "react-icons/tb";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "Careers", link: "/Careers" },
  { title: "Services", link: "/Services" },
  { title: "Portfolio", link: "/Portfolio" },
  { title: "Blogs", link: "/Blogs" },
  { title: "Contact", link: "/GetInTouch" },
];

function MenuItems() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <style jsx>{`
        .menu-enter {
          transform: translateX(100%);
          opacity: 0;
        }
        .menu-enter-active {
          transform: translateX(0);
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        .menu-item {
          opacity: 0;
          transform: translateY(20px);
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        body.menu-open {
          overflow: hidden;
        }
      `}</style>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Menu */}
      <div
        className={`
        fixed top-0 right-0 h-full w-full bg-white z-50 flex flex-col justify-center shadow-xl
        transition-transform duration-300 ease-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <nav className="px-12 flex flex-col items-end gap-8">
          {menuItems.map((item, i) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-right text-[#1E2028] text-4xl md:text-5xl font-hedvig-serif hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
              style={{
                animationDelay: isMenuOpen ? `${i * 0.1}s` : "0s",
              }}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Toggle Button */}
      <div className="relative z-50">
        <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between">
          <button
            onClick={toggleMenu}
            className="h-12 md:h-16 w-12 md:w-16 rounded-full bg-white shadow-md flex items-center justify-center transition-transform hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IoMdClose className="text-3xl text-[#171718]" />
            ) : (
              <TbMenu className="text-3xl text-[#171718]" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuItems;
