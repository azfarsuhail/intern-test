import Image from "next/image";
import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Features from "./Features/page";
import Product from "./Products/page";
import phoneImage from "../../public/phone.png";
import Demo from "./Demo/page";

import mobile_preview from "../../public/mobile-preview.png";
import FeaturesGridPage from "./Features Grid/page";
import HowPage from "./How/page";
import CustomerLifecyclePage from "./Customer Lifecycle/page";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Section */}
      <Features />

      {/* Products Section */}
      <Product />

      {/* Features Grid Section */}
      <FeaturesGridPage />

      {/* How it Works Section */}
      <HowPage />

      {/* Customer Lifecycle Section */}
      <CustomerLifecyclePage  />

      {/* Schedule a Demo Section */}
      <Demo />

      {/* Footer Section */}
      <footer className="bg-black text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <p className="text-sm mb-4">Creating a Personalized Experience</p>
            <div className="flex gap-4">
              <Image
                src="/google-play-badge.png"
                alt="Google Play"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
              <Image
                src="/app-store-badge.png"
                alt="App Store"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">QUICK LINK</h4>
            <ul className="text-sm space-y-1">
              <li>• Home</li>
              <li>• About Product</li>
              <li>• Features</li>
              <li>• Contact Us</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={mobile_preview}
              alt="Mobile App Preview"
              width={240}
              height={360}
              className="object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center text-xs">
          <div className="font-bold">LOGO</div>
          <p>© 2022. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>


    </main>
  );
}
