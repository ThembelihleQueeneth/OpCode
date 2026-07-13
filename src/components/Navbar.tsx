import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Left Side */}
        <div className="flex items-center gap-16">

          {/* Logo */}
          <a href="#" className="text-3xl font-black">
            Op<span className="text-[#5465FF]">Code</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
            <li>
              <a
                href="#"
                className="transition hover:text-[#5465FF]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-[#5465FF]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                className="transition hover:text-[#5465FF]"
              >
                Pricing
              </a>
            </li>

           
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-xl border border-[#5465FF] px-5 py-2.5 font-medium text-[#5465FF] transition hover:bg-[#5465FF] hover:text-white"
          >
            Contact Us
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-[#5465FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#5465FF]/20 transition hover:bg-[#4354F5]"
          >
            Schedule Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-3xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6">

          <ul className="space-y-5 text-lg font-medium">
            <li>
              <a href="#" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#pricing" onClick={closeMenu}>
                Pricing
              </a>
            </li>

           
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl border border-[#5465FF] py-3 text-center font-semibold text-[#5465FF] transition hover:bg-[#5465FF] hover:text-white"
            >
              Contact Us
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl bg-[#5465FF] py-3 text-center font-semibold text-white transition hover:bg-[#4354F5]"
            >
              Schedule Appointment
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};