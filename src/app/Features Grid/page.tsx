import Image from 'next/image';
import phoneImage from '../../../public/phone.png';
import communictions from '../../../public/icons/communication.png';
import specials from '../../../public/icons/specials.png';
import rewards from '../../../public/icons/rewards.png';
import appointments from '../../../public/icons/appointments.png';
import multiCar from '../../../public/icons/multi-car.png';
import reminder from '../../../public/icons/reminder.png';
export default function FeaturesGridPage() {
  const features = [
    {
      icon: communictions,
      title: "Communication",
      desc: "Built-in chat lets you talk directly to your dealership.",
    },
    {
      icon: '/icons/specials.png',
      title: "Specials",
      desc: "Access discounts on vehicles, plans, and services.",
    },
    {
      icon: '/icons/rewards.png',
      title: "Reward Program",
      desc: "Earn and redeem loyalty rewards easily.",
    },
    {
      icon: '/icons/appointments.png',
      title: "Service Appointments",
      desc: "Schedule maintenance directly through the app.",
    },
    {
      icon: '/icons/multi-car.png',
      title: "Multi Car Management",
      desc: "Manage all your vehicles in one place.",
    },
    {
      icon: '/icons/reminder.png',
      title: "Maintenance Reminder",
      desc: "Never miss a service with helpful reminders.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Phone Image */}
        <div>
            <span className="text-black font-extrabold text-3xl md:text-4xl  mb-6 leading-tight">Features</span> 
            <p>The App That Takes Away Your Stress <br />
and Gives You Back Your Time</p>
          <Image
            src={phoneImage}
            alt="Phone Feature"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right: Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map(({ icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <Image
                src={icon}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="mb-3"
              />
              <h4 className="font-bold text-base mb-1">{title}</h4>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
