import Image from "next/image"
import cartimg from "@/app/public/cartimg.png"
import Link from "next/link"

export default function Cart(){
    return(
        <div className="flex max-w-full h-auto">

<div  className="ml-[60px] m-15 "><Image className="max-w-full h-auto" src={ cartimg} alt="cart" height={546} width={733}/></div>

<div className="h-295 w-350">
    <h1 className="h-33 w-96 ml-8 text-lg font-bold">Summary</h1>
    <h3 className="flex justify-between items-center mt-5 ml-8">
  <span className="text-gray-700 ">Subtotal</span>
  <span className="text-gray-900 font-bold">&#8377;20890.00</span>
</h3>
    <h3 className="flex justify-between items-center mt-5 ml-8">
  <span className="text-gray-700 ">Estimated Delivery &amp; Handling</span>
  <span className="text-gray-900 ">Free</span>
</h3>


<h3 className="flex justify-between items-center w-[334.67px] h-[62px] mt-[50px] ml-[18px] border-t border-b pt-[17px] pr-[4.38px] pb-[17px] gap-[216.3px]">
<span className="text-gray-700 ">Total</span>
<span className="text-gray-900 ">&#8377;20890.00</span>
</h3>

<Link href="/member-checkout"><button className="w-[334.67px] h-[60px] mt-[45px] ml-[8px] rounded-[30px] pt-[18px] pr-[100.8px] pb-[18px] pl-[100.88px] bg-black text-white">
  Member Checkout
</button></Link>


</div>
        </div>
    )
}