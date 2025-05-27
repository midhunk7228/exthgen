"use client";

import React from "react";
import MenuItems from "./MenuItems";
import logo from "../Assets/exthgen.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative z-20 flex flex-col h-full">
        <div className="flex md:pl-20 pl-6 md:py-5 py-3 justify-between items-center">
          <Image
            src={logo}
            alt="Site Logo"
            className="w-32 h-auto mb-6"
            height={0}
            width={0}
          />
          <MenuItems />
        </div>
    </div>
  );
};

export default Navbar;
