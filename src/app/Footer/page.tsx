import Image from 'next/image';
import mobile_preview from '../../../public/mobile-preview.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-8 md:grid-rows-6 gap-0">

        {/* div1 */}
        <div className="md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3 flex flex-col md:flex-row justify-between items-center p-6 border-b border-gray-500">
          <p className="text-lg font-semibold mb-4 md:mb-0">Creating a Personalized Experience</p>
          <Image
            src="/btn.png"
            alt="Download Button"
            width={300}
            height={100}
          />
        </div>

{/* div2 */}
<div className="md:col-start-1 md:col-end-6 md:row-start-3 md:row-end-6 p-6 border-b border-gray-500">
  <h4 className="font-bold text-2xl md:text-3xl mb-4 tracking-wide">QUICK LINK</h4>
  <ul className="text-sm flex flex-col md:flex-row md:justify-between md:space-y-0 space-y-2">
    <li>• Home</li>
    <li>• About Product</li>
    <li>• Features</li>
    <li>• Contact Us</li>
  </ul>
</div>


        {/* div3 */}
        <div className="md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-6 flex justify-center items-center border-b border-gray-500 py-6 md:py-0">
          <Image
            src={mobile_preview}
            alt="Mobile App Preview"
            width={240}
            height={360}
            className="object-contain"
          />
        </div>

        {/* div8 */}
        <div className="md:col-start-1 md:col-end-5 md:row-start-6 md:row-end-7 flex items-center border-b border-gray-500 py-4">
          <p className="text-xl font-bold px-4">LOGO</p>
          <p className="text-sm px-2">© 2022. All rights reserved</p>
        </div>

        {/* div7 */}
        <div className="md:col-start-5 md:col-end-6 md:row-start-6 md:row-end-7 flex items-center justify-center border-b border-gray-500 py-4">
          <Image src="/icons/Twitter.png" alt="Twitter" width={40} height={40} />
        </div>

        {/* div4 */}
        <div className="md:col-start-6 md:col-end-7 md:row-start-6 md:row-end-7 flex items-center justify-center border-b border-gray-500 py-4">
          <Image src="/icons/Facebook.png" alt="Facebook" width={40} height={40} />
        </div>

        {/* div5 */}
        <div className="md:col-start-7 md:col-end-8 md:row-start-6 md:row-end-7 flex items-center justify-center border-b border-gray-500 py-4">
          <Image src="/icons/LinkedIn.png" alt="LinkedIn" width={40} height={40} />
        </div>

        {/* div6 */}
        <div className="md:col-start-8 md:col-end-9 md:row-start-6 md:row-end-7 flex items-center justify-center border-b border-gray-500 py-4">
          <Image src="/icons/Instagram.png" alt="Instagram" width={40} height={40} />
        </div>
      </div>
    </footer>
  );
}
