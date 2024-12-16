import Link from "next/link"
import Image from "next/image"
import one from "@/app/public/one.png"
import two from "@/app/public/two.png"
import three from "@/app/public/three.png"
import four from "@/app/public/four.png"
import five from "@/app/public/five.png"
import six from "@/app/public/six.png"
import seven from "@/app/public/seven.png"
import eight from "@/app/public/eight.png"
import nine from "@/app/public/nine.png"
import ten from "@/app/public/ten.png"
import eleven from "@/app/public/eleven.png"
import tweleve from "@/app/public/tweleve.png"
import thirteen from "@/app/public/thirteen.png"
import fourteen from "@/app/public/fourteen.png"
import fifteen from "@/app/public/fifteen.png"
import sixteen from "@/app/public/sixteen.png"
import seventeen from "@/app/public/seventeen.png"
import eighteen from "@/app/public/seventeen.png"
import nineteen from "@/app/public/nineteen.png"
import twenty from "@/app/public/twenty.png"
import twentyone from "@/app/public/twenty-one.png"
import twentytwo from "@/app/public/twenty-two.png"
import twentythree from "@/app/public/twenty-three.png"
import twentyfour from "@/app/public/twenty-four.png"
import twentyfive from "@/app/public/twenty-five.png"
import twentysix from "@/app/public/twenty-six.png"
import twentyseven from "@/app/public/twenty-seven.png"
import twentyeight from "@/app/public/twenty-eight.png"
import twentynine from "@/app/public/twenty-nine.png"
import thirty from "@/app/public/thirty.png"
import lastcontent from "@/app/public/last content.png"


export default function Blog (){
    return(
        
<div className="h-[100%] w-[1092px] ">

<div className=" flex flex-wrap max-w-full h-auto">
  {/* First Row */}
  <Link href="/blog1">
    <Image className="m-4" src={one} alt="Blog1" height={300} width={330} />
  </Link>

  <Link href="/blog1">
    <Image className="m-4" src={two} alt="Blog2"  height={300} width={330} />
  </Link>

  <Link href="/blog1">
    <Image className="m-4" src={three} alt="Blog3" height={300} width={330} />
  </Link>

  {/* Second Row */}
  <Link href="/blog1">
    <Image className="m-4" src={four} alt="Blog4" height={300} width={330} />
  </Link>

  <Link href="/blog1">
    <Image className="m-4" src={five} alt="Blog5" height={300} width={330} />
  </Link>

  <Link href="/blog1">
    <Image className="m-4" src={six} alt="Blog6" height={300} width={330} />
  </Link>

  {/* third row */}

  <Link href="/blog1">
              <Image className="m-4" src={seven} alt="Blog1" height={300} width={330}/>
            </Link>

 <Link href="/blog1">
              <Image className="m-4" src={eight} alt="Blog1" height={300} width={330}/>
            </Link>

 <Link href="/blog1">
              <Image className="m-4" src={nine} alt="Blog1"  height={300} width={330}/>
            </Link>

 {/* forth row */}

 
<Link href="/blog1">
              <Image className="m-4" src={ten} alt="Blog1"  height={300} width={330}/>
            </Link>

 <Link href="/blog1">
              <Image className="m-4" src={eleven} alt="Blog1"  height={300} width={330}/>
            </Link>                

  <Link href="/blog1">
              <Image className="m-4" src={tweleve} alt="Blog1" height={300} width={330}/>
            </Link>

{/* fifth row */}
<Link href="/blog1">
              <Image className="m-4" src={thirteen} alt="Blog1" height={300} width={330}/>
            </Link>

 <Link href="/blog1">
              <Image className="m-4" src={fourteen} alt="Blog1" height={300} width={330}/>
            </Link>                

  <Link href="/blog1">
              <Image className="m-4" src={fifteen} alt="Blog1" height={300} width={330}/>
            </Link>

{/* sixth row */}

<Link href="/blog1">
              <Image className="m-4" src={sixteen} alt="Blog1" height={300} width={330}/>
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={seventeen} alt="Blog1" height={300} width={330}/>
            </Link>

            <Link href="/blog1">
              <Image className="m-4" src={eighteen} alt="Blog1" height={300} width={330}/>
            </Link>


{/* seventh row */}

<Link href="/blog1">
              <Image className="m-4" src={nineteen} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twenty} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentyone} alt="Blog1"  height={300} width={330} />
            </Link>

{/* eighth row */}

<Link href="/blog1">
              <Image className="m-4" src={twentytwo} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentythree} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentyfour} alt="Blog1"  height={300} width={330} />
            </Link>

            {/* nineth row */}
            <Link href="/blog1">
              <Image className="m-4" src={twentyfive} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentysix} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentyseven} alt="Blog1"  height={300} width={330} />
            </Link>


            {/* tenth row */}

            <Link href="/blog1">
              <Image className="m-4" src={twentyeight} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={twentynine} alt="Blog1"  height={300} width={330} />
            </Link>

  <Link href="/blog1">
              <Image className="m-4" src={thirty} alt="Blog1"  height={300} width={330} />
            </Link>       
       

</div>



<div>

<Image className="m-10 max-w-full h-auto" src={lastcontent} alt="content" height={259} width={1000}/>
</div>

</div>
    )
}