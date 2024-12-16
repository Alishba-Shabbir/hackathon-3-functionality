import Image from "next/image";
import nikelogotwo from "@/app/public/nike-logo-two.png"; // Ensure the path is correct

export default function SignUp() {
  return (
    <div>
      <div className="sign-up-container">
        <div className="sign-up-content">
          <Image 
            src={nikelogotwo} 
            alt="Nike Logo" 
            width={324} 
            height={17} 
          />
          <p className="account-text">YOUR ACCOUNT FOR EVERYTHING NIKE</p>

          <form className="sign-up-form">
            <input
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <div className="options">
              <label>
                <input type="checkbox" /> Keep me signed in
              </label>
              <span className="forgot-password">Forgot your password?</span>
            </div>

            <p className="privacy-text">
              By logging in, you agree to Nike&apos;s <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.
            </p>

            <button type="submit" className="submit-button">Sign In</button>

            <p className="join-text">
              Not a Member? <a href="#">Join Us</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}