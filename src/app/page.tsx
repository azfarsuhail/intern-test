import Image from "next/image";
import carImage from "@/public/car.png";
import phoneImage from "@/public/phone.png";
import services from "@/public/services.png";
import protection from "@/public/protection.png";
import vehicles from "@/public/vehicles.png";
import rewards from "@/public/rewards.png";
import how1 from "@/public/how1.png";
import how2 from "@/public/how2.png";
import how3 from "@/public/how3.png";
import how4 from "@/public/how4.png";
import how5 from "@/public/how5.png";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">LOGO</div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">About Product</a></li>
          <li><a href="#" className="hover:text-black">Features</a></li>
          <li><a href="#" className="hover:text-black">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-black text-white px-6 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light leading-relaxed">
              With The Help Of <br /> Technology, Automotive <br /> Retailers Can Now Create A <br />
              <span className="font-bold">Personalized Experience</span> <br /> For Their Customers.
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
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

      {/* Feature Section */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl mb-4">
              It Makes <span className="font-bold">Communication</span> Easier!
            </h2>
            <p className="text-sm leading-relaxed">
              The app easily connects vehicle owners directly to their dealership team. We provide a direct line of communication to make life easier for asking questions, scheduling service appointments, and even shopping for new, leased, or previously owned vehicles.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-bold mb-2">For Dealerships</h3>
              <p className="text-sm mb-4">Partner with us to stay connected with your customers.</p>
              <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                Schedule A Demo
              </button>
            </div>
            <div>
              <h3 className="font-bold mb-2">For Vehicle Owners</h3>
              <p className="text-sm mb-4">
                Having a vehicle is time-consuming & can be stressful. Not only when you're looking for a vehicle but also when you're maintaining it. We help remind you when your next service is, reward you points to save on your next service or part, and provide you a direct link to your dealership.
              </p>
              <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                Download the App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Products</h2>
          <p className="text-sm mb-10 max-w-xl">
            We want to make your automotive shopping and maintenance easier. You can communicate with your dealership, book a service appointment, and even find your next car.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Image src={services} alt="Services" className="rounded shadow-md cursor-pointer" />
            <Image src={protection} alt="Protection Plan" className="rounded shadow-md cursor-pointer" />
            <Image src={vehicles} alt="Vehicles" className="rounded shadow-md cursor-pointer" />
            <Image src={rewards} alt="Rewards" className="rounded shadow-md cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src={phoneImage} alt="Phone Feature" className="w-full h-auto object-contain" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Communication", desc: "With a built-in chat feature you can communicate with your Dealership." },
              { title: "Specials", desc: "Access Dealer specials on vehicles, protection plans, and service needs." },
              { title: "Reward Program", desc: "Earn redeemable rewards." },
              { title: "Service Appointments", desc: "Use the app to schedule your benefits and upcoming service appointments." },
              { title: "Multi Car Management", desc: "The app keeps your different vehicles in their own “garages”." },
              { title: "Maintenance Reminder", desc: "The app reminds you of upcoming maintenance needs." },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">How it Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { img: how1, text1: "Receive Your Membership", text2: "Invite From Your Dealer" },
              { img: how2, text1: "Register Your Account", text2: "" },
              { img: how3, text1: "Add Vehicles to Your", text2: "Garage" },
              { img: how4, text1: "Communicate Directly With", text2: "Your Dealership Team" },
              { img: how5, text1: "Earn Redeemable", text2: "Reward Points" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Image src={item.img} alt={`Step ${i + 1}`} className="w-20 h-20 mb-2" />
                <p className="text-sm font-semibold">{item.text1}</p>
                <p className="text-sm text-gray-600">{item.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Lifecycle Section */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">Extend Your</h2>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">Customer Lifecycle!</h3>
          <p className="text-sm max-w-2xl mx-auto mb-10">
            Hop on the ride and start your journey towards exponential growth!
          </p>
          <div className="space-y-6 text-sm">
            <p>✤ Multiply your reach and increase your competitive edge to propel your business.</p>
            <p>✤ Communicate directly with your customers to provide customer service, offer specials, and ultimately build loyalty.</p>
            <p>✤ Plan for future staff and supply needs! Manage load through scheduled customer visits.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
