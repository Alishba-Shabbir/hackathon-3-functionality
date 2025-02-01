// components/ReviewForm.tsx

'use client'; // Add this line at the top to mark it as a client-side component

import { useState } from "react";

interface ReviewFormProps {
  onSubmit: (review: { name: string; rating: number; comment: string }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      onSubmit({ name, rating, comment });
      setName("");
      setRating(1);
      setComment("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-4"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full border rounded py-2 px-4"
          >
            {[1, 2, 3, 4, 5].map((rate) => (
              <option key={rate} value={rate}>
                {rate} Stars
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border rounded py-2 px-4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded hover:bg-blue-900"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
