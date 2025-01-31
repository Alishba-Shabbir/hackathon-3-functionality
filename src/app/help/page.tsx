// import Image from "next/image"
// import contact from "@/app/public/contact.png"
// export default function Help (){
//     return(
//         <div>
//             <Image src={contact} alt="help-content"/>
//         </div>
//     )
// }

import Link from "next/link";
import React from "react";

const HelpPage = () => {
  return (
    <div className="bg-gray-50 justify-center ml-20 min-h-screen p-6 w-[1440]">
      <header className="text-center border-b border-gray-300 pb-4 mb-8">
        <h1 className="text-xl font-semibold">GET HELP</h1>
        <input
          type="text"
          placeholder="What can we help you with?"
          className="mt-4 w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </header>

      <main className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <section className="md:col-span-2 space-y-6">
          <h2 className="text-lg font-bold">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="text-gray-700">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
            <li>Visa Electron, Maestro</li>
            <li>
              PayTM or a local credit or debit card (with PAN information)
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-gray-700">
            Nike Members can store multiple debit or credit cards in their
            profile for faster checkout. If youre not already a Member,{" "}
            <a href="#" className="text-blue-600 underline">
              join us
            </a>{" "}
            today.
          </p>
          <div className="flex space-x-4">
            <Link href="/join">
            <button className="bg-black text-white px-6 py-2 rounded-md">
              JOIN US
            </button>
            </Link>
            <Link href="/store">
            <button className="bg-black text-white px-6 py-2 rounded-md">
              SHOP NIKE
            </button>
            </Link>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FAQs</h3>
            <div>
              <h4 className="font-semibold">
                Does my card need international purchases enabled?
              </h4>
              <p className="text-gray-700">
                Yes, we recommend asking your bank to enable international
                purchases on your card.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Can I pay for my order with multiple methods?
              </h4>
              <p className="text-gray-700">
                No, payment for Nike orders cant be split between multiple payment methods.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                What payment method is accepted for SNKRS orders?
              </h4>
              <p className="text-gray-700">
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Why dont I see Apple Pay as an option?
              </h4>
              <p className="text-gray-700">
                To see Apple Pay as an option, ensure youre using a compatible Apple device
                with the latest OS and have a supported card in your Wallet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <aside className="space-y-6">
          <h2 className="text-lg font-bold">CONTACT US</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>000 800 919 0566</strong>
              <br /> Products & Orders: 24 hours a day, 7 days a week
              <br /> Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xl">💬</span>
              <p>24 hours a day, 7 days a week</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">📧</span>
              <p>Well reply within five business days</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">📍</span>
              <p>Find Nike retail stores near you</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HelpPage;
