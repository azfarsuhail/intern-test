import Image from 'next/image';
import how1 from "../../../public/how1.png";
import how2 from "../../../public/how2.png";
import how3 from "../../../public/how3.png";
import how4 from "../../../public/how4.png";
import how5 from "../../../public/how5.png";
export default function HowPage() {
  return (
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
  );
}