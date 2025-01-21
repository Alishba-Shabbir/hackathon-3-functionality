"use client";

import React from "react";
import { useWishlist } from "@/app/context/WishlistContext"; // Import Wishlist context
import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Access wishlist and remove function

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-lg text-gray-600">Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id + item.name} // Ensure a unique key by combining item.id and item.name or another unique value
              className="flex justify-between items-center p-4 border-b"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                  priority={false} // Optimize for lazy loading
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Price: {item.price} PKR</p>
                  <Link
                    href={`/product/${item.id}`}
                    className="text-blue-950 font-semibold bg-slate-200 p-2 rounded hover:bg-slate-500 mt-2 inline-block"
                  >
                    View Product
                  </Link>
                </div>
              </div>
              <button
                onClick={() => removeFromWishlist(item.id)} // Handle remove item
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <br />
      <Link
        href="/store"
        className="bg-black text-white px-4 py-2 rounded hover:bg-blue-900"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default WishlistPage;
