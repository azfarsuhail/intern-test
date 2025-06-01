export default function Demo(){
    return(
        <section className="bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="font-extrabold">Schedule</span> a Demo!
                  </h2>
                  <p className="text-sm mb-10 max-w-2xl">
                    Don’t hesitate to offer your customers the latest way to communicate with you. We will be in touch with you very soon!
                  </p>
                  <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <input type="text" placeholder="Name" className="border-b p-2 outline-none" />
                    <input type="text" placeholder="Dealership" className="border-b p-2 outline-none" />
                    <input type="email" placeholder="Email" className="border-b p-2 outline-none" />
                    <input type="tel" placeholder="Phone number" className="border-b p-2 outline-none" />
                    <input type="text" placeholder="City" className="border-b p-2 outline-none" />
                    <input type="text" placeholder="Select your State" className="border-b p-2 outline-none" />
                  </form>
                  <button className="bg-black float-right text-white px-6 py-2 hover:opacity-90">Send now</button>
                </div>
              </section>
    )
}