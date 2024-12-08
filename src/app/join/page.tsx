import React from "react";
import Image from "next/image";
import joinUsImage from "@/app/public/nike-logo-two.png"; // Replace with your image

export default function JoinUs() {
  return (
    <div className="join-page">
      <div className="join-us-page">
        {/* Text Section */}
        <div className="join-us-content">
          {/* Image */}
          <div className="join-us-image">
            <Image src={joinUsImage} alt="Join Us" width={380} height={833} />
          </div>
          <h1>BECOME A NIKE MEMBER</h1>
          <p>
            Create your Nike Member profile and get first access to the very best
            of Nike products, inspiration, and community.
          </p>

          {/* Form Section */}
          <form className="join-form">
            <input type="email" placeholder="Email Address" className="input-box" />
            <input type="password" placeholder="Password" className="input-box" />
            <input type="text" placeholder="First Name" className="input-box" />
            <input type="text" placeholder="Last Name" className="input-box" />
            <input type="text" placeholder="Date of Birth" className="input-box" />
            <p>Get a Nike Member Reward every year on your Birthday</p>

            {/* Country Dropdown */}
            <select className="input-box">
              <option>India</option>
              <option>Pakistan</option>
              <option>USA</option>
              <option>UK</option>
            </select>

            {/* Gender Selection */}
            <div className="gender-selection">
              <input type="text" placeholder="Male" className="input-box" />
              <input type="text" placeholder="Female" className="input-box" />
            </div>

            {/* Email Subscription */}
            <div className="email-subscription">
              <input type="checkbox" id="email" />
              <label htmlFor="email">
                Sign up for emails to get updates from Nike on products, offers, and
                your Member benefits.
              </label>
            </div>

            {/* Terms of Use */}
            <p className="terms-text">
              By creating an account, you agree to Nike&apos;s Privacy Policy and Terms
              of Use.
            </p>

            {/* Submit Button */}
            <button className="join-button">JOIN US</button>
          </form>
        </div>
      </div>
    </div>
  );
}
