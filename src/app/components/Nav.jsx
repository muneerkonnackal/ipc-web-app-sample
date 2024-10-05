import React from "react"
import { TiArrowSortedDown } from "react-icons/ti";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


function Nav() {


  return (
    <div className='flex gap-8 font-semibold xl:text-lg lg:text-[10px]'>
        <nav>Home</nav>
        <nav className="relative flex items-center group">
        India
        <TiArrowSortedDown className="font-bold text-xl ml-1 mt-1" />

        {/* Dropdown menu */}
        <div className="absolute  top-full text-base hidden group-hover:flex flex-col bg-white drop-shadow-lg w-[200px]">
          <a className="mt-3 ml-6  hover:bg-black p-2 hover:text-white mr-6">Andhra Pradesh</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Arunachal Pradesh</a>
          <a className="mt-1 ml-6  hover:bg-black p-2 hover:text-white mr-6">Bihar</a>
          <a className="mt-1 ml-6  hover:bg-black p-2 hover:text-white mr-6">Gujarat</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Jammu & Kashmir</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Karnataka</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Madhya Pradesh</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Meghalaya</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Telangana</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Tripura</a>
          <a className="mt-1  ml-6 hover:bg-black p-2 hover:text-white mr-6">Uttar Pradesh</a>
          <a className="mt-1  ml-6 mb-4 hover:bg-black p-2 hover:text-white mr-6">West Bengal</a>
        </div>
      </nav>
       
        <nav>International</nav>
        <nav className="relative flex items-center group">About us
        <TiArrowSortedDown className="font-bold text-xl ml-1 mt-1" />
        <div className="absolute left-0 top-full text-base hidden group-hover:flex flex-col bg-white drop-shadow-lg w-[200px]">
          <a className="mt-4 ml-6 hover:bg-black hover:text-white p-2 ">Who we are </a>
          <a className="mt-4  ml-6 hover:bg-black hover:text-white p-2">Our history</a>
          <a className="mt-4 ml-6 mb-4  hover:bg-black hover:text-white p-2">Statement of Faith</a>
          
        </div>
        </nav>
        <nav>Accounts</nav>
        <nav>Staff</nav>
        <nav>Media</nav>
        <nav>Contact</nav>

    </div>
  )
}

export default Nav