import Image from "next/image";
import logo from "@/app/public/logo.png"
import nikelogo from "@/app/public/nike-logo.png"
import Link from "next/link"
import React from "react";
import { FaSearch  } from "react-icons/fa";
import {FaBagShopping } from "react-icons/fa6";
import {FaRegHeart } from "react-icons/fa6";
import {FaBars } from "react-icons/fa6";

export default function Header() {
    return(
       <div>
 
 {/*  Top Header Use Custom CSS */}

         <div className="top-header">
          
          <div >
            {/* first logo */}
            <Image className="first-logo"
            src={logo}
            alt="logo"
            height={17.97}
            width={19.2}/>
          </div>
          {/* Navigation Links */}
          <div className="top-buttons">
            <ul>
            <li>
        <Link href="/store">Find a Store</Link>
      </li>
      <li>
        <Link href="/help">Help </Link>
      </li>
      <li>
        <Link href="/join">Join Us</Link>
      </li>
      <li>
        <Link href="/sign-up">Sign Up</Link>
      </li>
            </ul>

          </div>

        </div>


    <div className="w-[1440px]">
        <div className="flex justify-between items-center px-4 md:px-20 py-4 h-[96px]  w-[1440px] mx-auto ">
        {/* Nike Logo */}
        <div className="flex items-center">
          <Image
            src={nikelogo}
            alt="Nike"
            className="w-[50px] md:w-[78px] object-contain"
          />
        </div>
      
        {/* Navigation Links */}
        <nav className="hidden lg:flex gap-4 text-gray-700 font-medium text-sm md:text-base ">
          {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-black whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>
      
        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden">
          <button>
            <FaBars className="text-2xl text-gray-700 hover:text-black" />
          </button>
        </div>
      
        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Search Input (Hidden on Small Screens) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
      
          {/* Wishlist Icon */}
          <FaRegHeart className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-black" />
      
          {/* Cart Icon */}
          <FaBagShopping className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>






 











       </div>
    )
}