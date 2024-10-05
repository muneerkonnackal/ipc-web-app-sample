"use client"
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from "next/image";
import logo from '../assets/logo.png'
function MobileNav() {
  const [showIndiaDropdown, setShowIndiaDropdown] = useState(false);
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);

  return (
    <Sheet className="">
      <SheetTrigger>
        <AiOutlineMenu className="text-[32px]" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="flex flex-col items-center gap-5 text-xl text-white mt-12">

            <div className="flex justify-center flex-col items-center">
                <Image src={logo} alt="logo" height={150 } width={150 }/>
                <h2 className="font-semibold text-lg">THE INDIA PENTACOSTAL CHURCH OF GOD</h2>
            </div>
           <div className="flex flex-col items-center gap-4 text-xl text-white ">
                <nav>Home</nav>
    
                {/* India Dropdown */}
                <nav
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowIndiaDropdown(!showIndiaDropdown)}
                >
                  India
                  <TiArrowSortedDown className="font-bold text-xl ml-1 mt-1" />
                </nav>
                {/* India Dropdown Menu */}
                {showIndiaDropdown && (
                  <div className="custom-scrollbar text-base  flex flex-col bg-white/90 p-3 text-black drop-shadow-lg h-[180px] rounded   overflow-y-auto">
                    <a className="mt-0  p-2 hover:bg-gray-500 hover:text-white">Andhra Pradesh</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Arunachal Pradesh</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Bihar</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Gujarat</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Jammu & Kashmir</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Karnataka</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Madhya Pradesh</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Meghalaya</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Telangana</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Tripura</a>
                    <a className="mt-4  p-2 hover:bg-gray-500 hover:text-white">Uttar Pradesh</a>
                    <a className="mt-4 p-2 mb-4 hover:bg-gray-500 hover:text-white">West Bengal</a>
                  </div>
                )}
    
                {/* International */}
                <nav>International</nav>
    
                {/* About Us Dropdown */}
                <nav
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowAboutUsDropdown(!showAboutUsDropdown)}
                >
                  About us
                  <TiArrowSortedDown className="font-bold text-xl ml-1 mt-1" />
                </nav>
                {/* About Us Dropdown Menu */}
                {showAboutUsDropdown && (
                  <div className="text-base flex bg-white/80 text-black p-3 flex-col drop-shadow-lg w-auto h-auto rounded-md ">
                    <a className="mt-0  hover:bg-gray-500 hover:text-white">Who we are</a>
                    <a className="mt-4  hover:bg-gray-500 hover:text-white">Our history</a>
                    <a className="mt-4 mb-4 p-2  hover:bg-gray-500 hover:text-white">Statement of Faith</a>
                  </div>
                )}
    
                {/* Other nav items */}
                <nav>Accounts</nav>
                <nav>Staff</nav>
                <nav>Media</nav>
                <nav>Contact</nav>
           </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
