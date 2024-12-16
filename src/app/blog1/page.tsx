import Image from "next/image"
import Blog from "@/app/public/blog1.png"

export default function Blog1 (){
    return(
        <div className="flex justify-center">
            <Image className="max-w-full h-auto" src={Blog} alt="blog-1" height={1125} width={1000}/>
        </div>
    )
}
