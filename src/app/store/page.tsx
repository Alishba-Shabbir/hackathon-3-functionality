import Blog from "../component/blogs";

export default function Product (){
    return(
<div className=" flex">


<div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
<h2 className="text-lg font-bold mb-4">New (500)</h2><ul className="space-y-2">
    <li className="text-gray-700 font-medium">Shoes</li><li className="text-gray-700 font-medium">Sports Bras</li>
    <li className="text-gray-700 font-medium">Tops &amp; T-Shirts</li><li className="text-gray-700 font-medium">Hoodies &amp; Sweatshirts</li>
    <li className="text-gray-700 font-medium">Jackets</li><li className="text-gray-700 font-medium">Trousers &amp; Tights</li>
    <li className="text-gray-700 font-medium">Shorts</li><li className="text-gray-700 font-medium">Tracksuits</li>
    <li className="text-gray-700 font-medium">Jumpsuits &amp; Rompers</li><li className="text-gray-700 font-medium">Socks</li>
    </ul><h3 className="text-lg font-bold mt-6">Gender</h3><ul className="space-y-2"><li className="text-gray-700">Men</li>
    <li className="text-gray-700">Women</li><li className="text-gray-700">Unisex</li></ul><h3 className="text-lg font-bold mt-6">Kids</h3>
    <ul className="space-y-2"><li className="text-gray-700">Boys</li><li className="text-gray-700">Girls</li></ul>
    <h3 className="text-lg font-bold mt-6">Shop by Price</h3><ul className="space-y-2"><li className="text-gray-700">Under ₹ 2,500.00</li>
    <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li></ul></div>



   
<Blog/>













  







</div>


    )
}