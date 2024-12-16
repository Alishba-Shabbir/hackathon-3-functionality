import Image from "next/image"
import contact from "@/app/public/contact.png"
export default function Help (){
    return(
        <div>
            <Image src={contact} alt="help-content"/>
        </div>
    )
}