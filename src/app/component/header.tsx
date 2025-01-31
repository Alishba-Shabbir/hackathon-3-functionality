import Image from "next/image";
import logo from "@/app/public/logo.png";
import nikelogo from "@/app/public/nike-logo.png";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
      {/* Top Header */}
      <div className="top-header flex justify-between items-center px-4 py-2 bg-gray-100">
        {/* First logo */}
        <div>
          <Image
            className="first-logo"
            src={logo}
            alt="logo"
            height={18}
            width={19}
          />
        </div>
        {/* Navigation Links */}
        <div className="top-buttons">
          <ul className="flex space-x-4 text-sm font-medium text-gray-700">
            <li>
              <Link href="/store">Find a Shoe</Link>
            </li>
            <li>
              <Link href="/help">Help</Link>
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

      {/* Main Header */}
      <div className="w-full bg-white shadow-md">
        <div className="flex justify-between items-center px-4 md:px-20 py-4 h-[96px] mx-auto">
          {/* Nike Logo */}
          <div className="flex items-center">
            <Image
              src={nikelogo}
              alt="Nike"
              className="w-[50px] md:w-[78px] object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-8 text-gray-700 font-medium text-sm md:text-base">
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
          <div className="lg:hidden">
          <button title="Open Menu">
  <FaBars className="text-2xl text-gray-700 hover:text-black" />
</button>

          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            {/* Wishlist Icon */}
            <a href="/wishlist">
  <FaHeart className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-red-500" />
  <span className="sr-only">Go to Wishlist</span>
</a>

            {/* Cart Icon */}
            <a href="/cart" aria-label="Go to Cart">
  <FaBagShopping className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-gray-400" />
</a>

          </div>
        </div>
      </div>
    </div>
  );
}