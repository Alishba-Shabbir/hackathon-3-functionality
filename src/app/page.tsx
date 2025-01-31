import Image from 'next/image';
import Link from 'next/link';
import SHOES from './component/shoes/page';


const products = [
  {
    category: "Men's",
    items: [
      {
        image: "/mens-shirt.png", // Replace with your image paths
        title: "Nike Dri-FIT ADV TechKnit Ultra",
        description: "Men's Short-Sleeve Running Top",
        price: "₹ 3,895",
      },
      {
        image: "/mens-shorts.png",
        title: "Nike Dri-FIT Challenger",
        description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
        price: "₹ 2,495",
      },
    ],
  },
  {
    category: "Women's",
    items: [
      {
        image: "/womens-top.png",
        title: "Nike Dri-FIT ADV Run Division",
        description: "Women's Long-Sleeve Running Top",
        price: "₹ 5,295",
      },
      {
        image: "/womens-leggings.png",
        title: "Nike Fast",
        description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
        price: "₹ 3,795",
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col space-y-8">
      {/* Nike Bar Section */}
      <div className=" text-center px-4 py-8 bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold">Hello Nike App</h1>
        <p className="mt-2 text-sm md:text-xs">
          Download the app to access everything Nike&apos;s{" "}
          <span className="font-semibold text-blue-500">Get Your Great</span>
        </p>
      </div>

      <Image
        className="home-image"
        src="/homeimage.png"
        alt="Shoe"
        height={700}
        width={1344}
        priority
      />

        {/* First Look Section */}
      <div className=" px-2 text-center">
        <h2 className="text-sm md:text-xl font-serif mb-2">First Look</h2>
        <h1 className="text-xl md:text-3xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
        <p className="text-lg md:text-xl font-sans ml-72 mr-80 mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/help"><button className=" bg-black text-white px-6 py-2 rounded-3xl">Notify Me</button></Link>
          <Link href="/store"><button className=" bg-black text-white px-6 py-2 rounded-3xl">Shop Air Max</button></Link>
        </div>
      </div>

      </div>

      <div className="bar">
        <div className="left-side">
          <p>Best of Air Max</p>
        </div>
        <div className="right-side">
          <span className="shop-text">Shop</span>
          <button className="circle-button">
          &lt;
          </button>
          <button className="circle-button">
          &gt;
          </button>
        </div>
      </div>



      <SHOES/>

{/* Featured Section */}
<div className="feature-page">
        <Link href="/store">
          <Image src="/Feature.png" alt="Featured products" width={1344} height={700} />
        </Link>
      </div>
    

      

    

<div className="py-10 px-6 md:px-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Gear Up</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((category, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg ml-9 font-semibold">{`Shop ${category.category}`}</h3>
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                  &lt;
                </button>
                <button className="w-8 h-8 rounded-full border flex items-center justify-center">
                  &gt;
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                  <h4 className="text-md font-medium mt-4">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <p className="font-bold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>



{/* Essential Section */}
<div className="essential-page">
  
          <Image src="/essential.png" alt="essential" width={1344} height={700} />
      </div>

      
       
      <div className=" px-2 text-center mt-20">
        <h2 className="text-sm md:text-3xl font-bold mb-6">FlIGHT ESSENTIAL</h2>
        
        <p className="text-sm md:text-xl font-medium ml-62 mr-62 mb-6">
         Your build-to-last,all-week wears-but with style only Jordan Brand can deliver
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/store"><button className=" bg-black text-white px-5 py-1 rounded-3xl">Shop</button></Link>
        </div>
      </div>

      <div className="clothes">
       <Link href="/store">
         <Image src="/clothes.png" alt="clothes products" width={1344} height={700} 
        /></Link>
        <div  className="m-10 max-w-full h-auto">
          <Image src="/categories.png" alt="categories" width={1344} height={700} />
        </div>
      </div>
    </div>
  );
}
