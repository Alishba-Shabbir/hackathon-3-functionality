"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For navigation
import { client } from "@/sanity/lib/client"; // Sanity client setup
import { urlFor } from "@/sanity/lib/image"; // Sanity image helper
import { useCart } from "../../context/CartContext"; // Import CartContext
import { useWishlist } from "../../context/WishlistContext"; // Import WishlistContext

interface Product {
  _id: string;
  productName: string;
  _type: "product";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description?: string;
  colors: string;
  status: string;
  category: string;
}

interface Params {
  id: string;
}

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // For quantity selection
  const { addToCart } = useCart(); // Access addToCart from CartContext
  const { addToWishlist } = useWishlist(); // Access addToWishlist from WishlistContext
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const resolvedParams = await params; // Unwrapping params promise
        const { id } = resolvedParams; // Get product ID from params

        const query = `*[_type == "product" && _id == "${id}"][0]`;
        const fetchedProduct = await client.fetch(query);

        if (!fetchedProduct) {
          setError("Product not found. Please go back and select a valid product.");
          return;
        }

        setProduct(fetchedProduct);
      } catch {
        setError("Failed to fetch product data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [params]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity,
      image: product.image ? urlFor(product.image).url() : "",
    });

    // Navigate to the cart page
    router.push("/cart");
  };

  const handleAddToWishlist = () => {
    if (!product) return;

    addToWishlist({
      id: product._id,
      name: product.productName,
      price: product.price,
      image: product.image ? urlFor(product.image).url() : "",
    });

    // Navigate to the wishlist page
    router.push("/wishlist");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return (
      <div>
        Product not found.{" "}
        <a href="/store" className="text-blue-500">
          Go back to products
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={500}
            height={500}
            className="w-full h-auto object-contain"
          />
        )}
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-bold mt-3">{product.productName}</h1>
        <p className="text-xl text-black font-serif mt-2 mb-1">{product.category}</p>
        <p className="text-lg text-black font-light mt-2 mb-3">{product.description}</p>
        <p className="text-lg text-black font-bold ml-2 mt-2 mb-3">PKR: {product.price}</p>
        <p className="text-lg text-black font-semibold mt-2 mb-2">Color: {product.colors}</p>
        {/* Quantity Selection */}
        <div className="mt-1 mb-2">
          <label className="text-lg text-blue-900 font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="5"
            className="mt-2 px-4 py-2 border rounded-lg w-20"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded w-full sm:w-48"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-red-300 text-red-800 px-4 py-2 rounded w-full sm:w-48 flex items-center justify-center"
          >
            Add to Wishlist <span className="pl-1 text-2xl">&#9829;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
