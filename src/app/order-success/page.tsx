"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after 10 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-10">
        <div className="text-center">
          {/* Success Message */}
          <h1 className="text-5xl font-semibold text-green-600 mb-6">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your purchase! We are processing your order, and you will be redirected to the homepage shortly.
          </p>
          
          {/* Order Details */}
          <div className="mb-8 text-sm text-gray-500">
            <p>
              <strong>Order ID:</strong> <span className="font-semibold text-black">#12345</span>
            </p>
            <p>
              <strong>Estimated Delivery:</strong> <span className="font-semibold text-black">3-5 business days</span>
            </p>
          </div>

          {/* Success Icon */}
          <div className="mb-6">
            <svg
              className="mx-auto h-20 w-20 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Additional Info */}
          <p className="text-gray-600 mb-6">
            Your order is confirmed and is being processed by our team. You will receive a confirmation email shortly.
          </p>

          {/* Redirect Button */}
          <button
            onClick={() => router.push("/")}
            className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Homepage
          </button>
          <p className="text-sm text-gray-400 mt-4">
            If you are not redirected in a few seconds, click the button above.
          </p>
        </div>
      </div>
    </div>
  );
}
