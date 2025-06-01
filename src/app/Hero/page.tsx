import carImage from "../../../public/car.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-black text-white px-6 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light leading-relaxed">
              With The Help Of <br /> Technology, Automotive <br /> Retailers Can Now Create A <br />
              <span className="font-bold">Personalized Experience</span> <br /> For Their Customers.
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="border bg-white text-black  border-white px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                Signup Dealership
              </button>
              <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                Download the App
              </button>
            </div>
          </div>
          <div className="w-full h-auto">
            <Image src={carImage} alt="Car Internal View" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
  );
}