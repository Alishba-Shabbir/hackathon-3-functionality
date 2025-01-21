


"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">Your cart is currently empty.</p>
          
          
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded shadow"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      PKR {item.price} x {item.quantity}
                    </p>
                  </div>
                  
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
              
              
            ))}
            <div>
          <Link
            href="/store"
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Continue Shopping
          </Link>
          </div>
          </div>
          
          

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-bold">PKR {totalPrice.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <button
              onClick={clearCart}
              className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 mb-4"
            >
              Clear Cart
            </button>
            <button
              className="bg-black text-white w-full py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
