export default function Features() {
    return (
        <section className="bg-white px-6 py-16 md:py-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl  mb-6 leading-tight">
        It Makes <br /><span className="text-black font-extrabold">Communication</span> Easier!
      </h2>
      <p className="text-base text-gray-700 leading-relaxed">
        The app easily connects vehicle owners directly to their dealership team. We provide a direct line of communication to make life easier for asking questions, scheduling service appointments, and even shopping for new, leased, or previously owned vehicles.
      </p>
    </div>

    {/* Right Content */}
    <div className="space-y-12">
      {/* Dealerships */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">For Dealerships</h3>
        <p className="text-base text-gray-700 mb-5">
          Partner with us to stay connected with your customers.
        </p>
        <button className="bg-black text-white px-6 py-2 text-base font-medium border border-black hover:bg-white hover:text-black transition-colors duration-200">
          Schedule A Demo
        </button>
      </div>

      {/* Vehicle Owners */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">For Vehicle Owners</h3>
        <p className="text-base text-gray-700 mb-5">
          Having a vehicle is time-consuming & can be stressful. Not only when you're looking for a vehicle but also when you're maintaining it. We help remind you when your next service is, reward you points to save on your next service or part, and provide you a direct link to your dealership.
        </p>
        <button className="bg-black text-white px-6 py-2 text-base font-medium border border-black hover:bg-white hover:text-black transition-colors duration-200">
          Download the App
        </button>
      </div>
    </div>
  </div>
</section>

    )
}