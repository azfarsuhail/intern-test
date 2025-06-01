export default function Navbar() {
  return (
      <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold">LOGO</div>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">About Product</a></li>
          <li><a href="#" className="hover:text-black">Features</a></li>
          <li><a href="#" className="hover:text-black">Contact Us</a></li>
        </ul>
      </nav>
  );
}