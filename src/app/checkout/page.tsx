"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle order placement (e.g., send data to server, etc.)
    // After successful order placement, clear cart and navigate to success page
    clearCart();
    router.push("/order-success");
  };
  return (
    <div className="max-w-6xl mx-auto py-10 px-6 ml-28">
      <h1 className="text-4xl font-bold mb-8 ">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before checking out.  </p>
            
      
        
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img
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
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-bold">PKR {totalPrice.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded hover:bg-green-700"
              >
                Place Order
              </button>
            </form>
          </div>
          
        </div>
      )}
      <div className=" mt-6">
            <Link
                href="/store"
                className="bg-black text-white px-4 py-2 rounded hover:bg-blue-900"
              >
                Continue Shopping
              </Link>
            </div>
    </div>
  );
}
