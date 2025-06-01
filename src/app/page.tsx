import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Features from "./Features/page";
import Product from "./Products/page";
import Demo from "./Demo/page";
import FeaturesGridPage from "./Features Grid/page";
import HowPage from "./How/page";
import CustomerLifecyclePage from "./Customer Lifecycle/page";
import Footer from "./Footer/page";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <FeaturesGridPage />
      <HowPage />
      <CustomerLifecyclePage  />
      <Demo />
      <Footer />
    </main>
  );
}
