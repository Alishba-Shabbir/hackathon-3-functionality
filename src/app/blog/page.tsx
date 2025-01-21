
// "use client";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types/products";
// import { client } from "@/sanity/lib/client";
// import { allProducts } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";
// import { Image } from "next-sanity/image";
// import Link from "next/link";
// import { FaSearch } from "react-icons/fa";

// const Blog = () => {
//   const [product, setProduct] = useState<Product[]>([]); // All products
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Search term
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products

//   useEffect(() => {
//     // Fetch products from your API or sanity
//     async function fetchProduct() {
//       const fetchedProduct: Product[] = await client.fetch(allProducts);
//       console.log(fetchedProduct); // Log the fetched product to ensure data is correct
//       setProduct(fetchedProduct);
//       setFilteredProducts(fetchedProduct); // Set initial filtered products
//     }
//     fetchProduct();
//   }, []);

//   useEffect(() => {
//     // Only filter when searchTerm is updated
//     if (searchTerm === "") {
//       setFilteredProducts(product); // If search is empty, show all products
//     } else {
//       const filtered = product.filter((prod) => {
//         // Check if product fields contain the search term
//         return (
//           prod.productName?.toLowerCase().includes(searchTerm.toLowerCase()) || // Match product name
//           prod.category?.toLowerCase().includes(searchTerm.toLowerCase()) || // Match category
//           prod.status?.toLowerCase().includes(searchTerm.toLowerCase()) // Match status
//         );
//       });
//       setFilteredProducts(filtered); // Set filtered products
//     }
//   }, [searchTerm, product]); // Run filter when searchTerm or product list changes

//   return (


//     <div className="min-h-screen bg-white p-6">
//       {/* Search Bar */}
//       <div className="mb-6 relative">
//   <input
//     type="text"
//     placeholder="Search products by name"
//     value={searchTerm}
//     onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
//     className="w-full px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-gray-600 pr-10" // Added padding to the right for the icon
//   />
//   <FaSearch className="absolute right-8 top-1/2 transform -translate-y-1/4 text-black" />
// </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((prod) => (
//             <div
//               key={prod._id}
//               className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
//             >
//               <div>
//                 <div className="relative h-[300px] w-[300px]">
//                   {prod.image && (
//                     <Image
//                       src={urlFor(prod.image).url()}
//                       alt={prod.productName}
//                       width={300}
//                       height={300}
//                       className="object-cover"
//                     />
//                   )}
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-red-600 font-semibold">{prod.status}</h3>
//                   <h3 className="text-black font-semibold">{prod.productName}</h3>
//                   <p className="text-gray-500 mb-2">{prod.category}</p>
//                   <p className="text-lg font-bold text-gray-800 mb-2">
//                     MRP: ₹{prod.price}
//                   </p>
//                   <Link
//                     href={`/product/${prod._id}`}
//                     passHref
//                     className="mt-4 ml-40 bg-gray-200 text-black p-2 shadow-md hover:bg-gray-400 rounded"
//                   >
//                     See Details &#x2192;
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No products found for "{searchTerm}".
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blog;

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
  const [product, setProduct] = useState<Product[]>([]); // All products
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products

  useEffect(() => {
    // Fetch products from your API or sanity
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      console.log(fetchedProduct); // Log the fetched product to ensure data is correct
      setProduct(fetchedProduct);
      setFilteredProducts(fetchedProduct); // Set initial filtered products
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    // Only filter when searchTerm is updated
    if (searchTerm === "") {
      setFilteredProducts(product); // If search is empty, show all products
    } else {
      const filtered = product.filter((prod) => {
        // Check if product fields contain the search term
        return (
          prod.productName?.toLowerCase().includes(searchTerm.toLowerCase()) || // Match product name
          prod.category?.toLowerCase().includes(searchTerm.toLowerCase()) || // Match category
          prod.status?.toLowerCase().includes(searchTerm.toLowerCase()) // Match status
        );
      });
      setFilteredProducts(filtered); // Set filtered products
    }
  }, [searchTerm, product]); // Run filter when searchTerm or product list changes

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search products by name" // Correct placeholder
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          className="w-full px-4 py-2 border border-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-gray-600 pr-10" // Added padding to the right for the icon
        />
        <FaSearch className="absolute right-8 top-1/2 transform -translate-y-1/2 text-black" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <div
              key={prod._id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div>
                <div className="relative h-[300px] w-[300px]">
                  {prod.image && (
                    <Image
                      src={urlFor(prod.image).url()}
                      alt={prod.productName}
                      width={300}
                      height={300}
                      className="object-cover"
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
                    className="mt-4 ml-40 bg-gray-200 text-black p-2 shadow-md hover:bg-gray-400 rounded"
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
    </div>
  );
};

export default Blog;
