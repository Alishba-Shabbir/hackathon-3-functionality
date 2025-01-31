"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

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

interface Review {
  rating: number;
  text: string;
}

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [reviewText, setReviewText] = useState<string>(""); // For review text
  const [rating, setRating] = useState<number>(0); // For rating
  const [reviews, setReviews] = useState<Review[]>([]); // Store reviews temporarily
  const router = useRouter();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const resolvedParams = await params;
        const { id } = resolvedParams;

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

  // Load saved reviews from localStorage when the component mounts
  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviews-${product?._id}`);
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, [product]);

  // Handle Review Text Change
  const handleReviewTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  // Handle Rating Change
  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(e.target.value));
  };

  // Submit Review (store it temporarily in localStorage)
  const handleSubmitReview = () => {
    if (!reviewText || rating === 0) {
      alert("Please provide a review and a rating.");
      return;
    }

    const newReview = { rating, text: reviewText };

    // Add the new review to the existing reviews
    const updatedReviews = [...reviews, newReview];

    // Save updated reviews to localStorage
    localStorage.setItem(`reviews-${product?._id}`, JSON.stringify(updatedReviews));

    // Update the state
    setReviews(updatedReviews);
    setReviewText("");
    setRating(0);
  };

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
  
    // Show notification with confirm dialog
    const confirmNavigation = confirm("Product added to cart! Do you want to view your cart?");
    if (confirmNavigation) {
      router.push("/cart");
    }
  };
  
  const handleAddToWishlist = () => {
    if (!product) return;

    addToWishlist({
      id: product._id,
      name: product.productName,
      price: product.price,
      image: product.image ? urlFor(product.image).url() : "",
    });

    router.push("/wishlist");
  };

  // Render Stars Based on Rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">&#9733;</span>
        ))}
        {halfStars > 0 && <span className="text-yellow-500">&#9733;</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">&#9733;</span>
        ))}
      </>
    );
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
      {/* Product Image Section */}
      <div className="flex justify-start">
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
        {/* Product Name and Details */}
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

        {/* Add to Cart and Wishlist Buttons */}
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

      {/* Reviews Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Rating (1 to 5)</label>
          <select
            value={rating}
            onChange={handleRatingChange}
            className="px-4 py-2 border rounded-lg w-full sm:w-48"
          >
            <option value={0}>Select Rating</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Review</label>
          <textarea
            value={reviewText}
            onChange={handleReviewTextChange}
            className="px-4 py-2 border rounded-lg w-full sm:w-48"
            rows={4}
          />
        </div>
        <button
          onClick={handleSubmitReview}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <p className="font-bold">{renderStars(review.rating)}</p>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
