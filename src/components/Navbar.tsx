import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-black">
          Op<span className="text-[#5465FF]">Code</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-600">
          <li className="hover:text-[#5465FF] cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-[#5465FF] cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-[#5465FF] cursor-pointer transition">
            About
          </li>
          
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-xl border border-[#5465FF] text-[#5465FF] hover:bg-[#5465FF] hover:text-white transition">
            Contact Us
          </button>

          <button className="px-6 py-3 rounded-xl bg-[#5465FF] text-white hover:bg-[#4354F5] transition">
            Schedule Appointment
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 bg-white border-t border-gray-100">

          <ul className="flex flex-col gap-5 py-6 text-lg font-medium">
            <li className="hover:text-[#5465FF] cursor-pointer">Home</li>
            <li className="hover:text-[#5465FF] cursor-pointer">Services</li>
            <li className="hover:text-[#5465FF] cursor-pointer">Pricing</li>
            <li className="hover:text-[#5465FF] cursor-pointer">Portfolio</li>
            <li className="hover:text-[#5465FF] cursor-pointer">About</li>
            <li className="hover:text-[#5465FF] cursor-pointer">Contact</li>
          </ul>

          <div className="flex flex-col gap-3">
            <button className="w-full rounded-xl border border-[#5465FF] py-3 text-[#5465FF] font-semibold hover:bg-[#5465FF] hover:text-white transition">
              Contact Us
            </button>

            <button className="w-full rounded-xl bg-[#5465FF] py-3 text-white font-semibold hover:bg-[#4354F5] transition">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};