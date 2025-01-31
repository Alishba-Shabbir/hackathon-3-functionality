"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
      setFilteredProducts(fetchedProduct);

      const uniqueCategories = ["All", ...new Set(fetchedProduct.map((p) => p.category))];
      setCategories(uniqueCategories);
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    let filtered = product;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((prod) => prod.category === selectedCategory);
    }

    if (searchTerm !== "") {
      filtered = filtered.filter((prod) =>
        prod.productName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, product]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-10">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-600 pr-10"
        />
        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-3 sm:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm rounded-lg border ${
              selectedCategory === category
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((prod) => (
            <div
              key={prod._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div>
                <div className="relative w-full h-56 sm:h-64 lg:h-72">
                  {prod.image && (
                    <Image
                      src={urlFor(prod.image).url()}
                      alt={prod.productName}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-red-600 font-semibold">{prod.status}</h3>
                  <h3 className="text-black font-semibold">{prod.productName}</h3>
                  <p className="text-gray-500 mb-2">{prod.category}</p>
                  <p className="text-lg font-bold text-gray-800 mb-2">
                    MRP: ₹{prod.price}
                  </p>
                  <Link
                    href={`/product/${prod._id}`}
                    passHref
                    className="mt-4 block bg-gray-800 w-36 ml-32 text-white text-center py-2 rounded hover:bg-gray-900"
                  >
                    See Details &#x2192;
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found for &quot;{searchTerm}&quot;.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === page
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:bg-gray-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
