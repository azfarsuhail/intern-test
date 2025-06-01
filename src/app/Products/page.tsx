import Image from "next/image";
import services from "../../../public/services.png";
import protection from "../../../public/protection.png";
import vehicles from "../../../public/vehicles.png";
import rewards from "../../../public/rewards.png";
export default function Product() {
    return (
              <section className="bg-zinc-50 px-6 py-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
    
    {/* Left: Text */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Products</h2>
      <p className="text-base text-gray-700 mb-10 max-w-xl">
        We want to make your automotive shopping and maintenance easier. You can communicate with your dealership, book a service appointment, and even find your next car.
      </p>
    </div>

    {/* Right: Images */}
    <div className="flex-1 grid grid-cols-2 gap-4">
      <Image src={services} alt="Services" className="rounded shadow-md cursor-pointer w-full h-auto" />
      <Image src={protection} alt="Protection Plan" className="rounded shadow-md cursor-pointer w-full h-auto" />
      <Image src={vehicles} alt="Vehicles" className="rounded shadow-md cursor-pointer w-full h-auto" />
      <Image src={rewards} alt="Rewards" className="rounded shadow-md cursor-pointer w-full h-auto" />
    </div>
    
  </div>
</section>

    )
}