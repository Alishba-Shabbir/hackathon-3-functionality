import Image from 'next/image';
import homeimage from '@/app/public/homeimage.png';
import img1 from "@/app/public/img1.png";
import img2 from "@/app/public/img2.png";
import img3 from "@/app/public/img3.png";
import img4 from "@/app/public/img4.png";
import Feature from "@/app/public/Feature.png";
import Gear from "@/app/public/Gear.png";
import essential from "@/app/public/essential.png";
import clothes from "@/app/public/clothes.png";
import categories from "@/app/public/categories.png";

export default function Home() {
  return (
    <div>
      <div className="home-page">
        <div className="nike-bar">
          <h1>Hello Nike App</h1>
          <p>
            Download the app to access everything Nike&apos;s <span>Get Your Great</span>
          </p>
        </div>

        <Image
          className="home-image"
          src={homeimage}
          alt="shoe"
          height={700}
          width={1344}
        />

        <div className="first-look">
          <h2>First Look</h2>
          <h1>NIKE AIR MAX PULSE</h1>
          <p>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
          </p>

          <div className="buttons">
            <button className="one-button">Notify Me</button>
            <button className="one-button">Shop Air Max</button>
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

      <div className="blog-container">
        <div className="blog">
          <Image src={img1} alt="Blog Image 1" className="blog-image" width={441} height={441} />
        </div>
        <div className="blog">
          <Image src={img2} alt="Blog Image 2" className="blog-image" width={441} height={441} />
        </div>
        <div className="blog">
          <Image src={img3} alt="Blog Image 3" className="blog-image" width={441} height={441} />
        </div>
        <div className="blog">
          <Image src={img4} alt="Blog Image 4" className="blog-image" width={441} height={441} />
          <p className="blog-text">Nike Air Max SYSTM</p>
          <h3>Womens Shoes</h3>
        </div>
      </div>

      <div className="feature-page">
        <Image src={Feature} alt="feature" />
      </div>

      <div className="Gear-up-page">
        <Image src={Gear} alt="products" />
      </div>

      <div className="essential-page">
        <Image src={essential} alt="essential" />
      </div>

      <div className="clothes">
        <Image src={clothes} alt="essentials" />
        <div className="categories">
          <Image src={categories} alt="categories" />
        </div>
      </div>
    </div>
  );
}
