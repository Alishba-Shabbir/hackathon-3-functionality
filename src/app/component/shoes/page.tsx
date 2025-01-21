"use client"
import React,{ useEffect, useState} from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import {  four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";



const SHOES =() =>{
const [product, setProduct] =useState<Product[]>([])

useEffect(() =>{
   async function fetchproduct (){
     const fetchedProduct : Product[] = await client.fetch(four)
      setProduct(fetchedProduct)
   }
   fetchproduct()



},[])

    return(
        <div className=" max-w-4xl mx-auto px-4 py-8 justify-start">
  <h1 className="text-2xl font-extrabold mb-3 text-center ">
    Our Trending Products
  </h1>
  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
  
<div>
    
  </div>
   {product.map((product) =>(
    <div
     key={product._id}
     className="border rounded-lg shadow-md p-2 hover:shadow-lg transition duration-200">
        {product.image &&(
            <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200}
            />

        )}

        <h1 className="text-lg font-semibold mt-4">
        {product.productName}
        </h1>
        <p className="text-gray-300 mt-2 p-2">
        ${product.price}
        </p>
       
</div>


    


    
   ))}


        </div>
        </div>
    )
}; 
export default SHOES;