// components/Reviews.tsx
'use client'; // Add this line at the top of your file

import { useState } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  productId: number;
}

export default function Reviews({ productId }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Alice",
      rating: 4,
      comment: "Great product, highly recommend!",
    },
    {
      id: 2,
      name: "Bob",
      rating: 5,
      comment: "Exceeded my expectations, love it!",
    },
  ]);

  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="mb-4">
        <p className="text-lg">
          Average Rating: {averageRating.toFixed(1)} ⭐
        </p>
      </div>
      <div>
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 mb-4">
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(review.rating)}
            </p>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
