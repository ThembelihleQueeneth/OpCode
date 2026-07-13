import { Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Op<span className="text-[#5465FF]">Code</span>
            </h2>

            <p className="mt-4 leading-7">
              We design and develop modern, responsive websites that help
              businesses establish a strong online presence and grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
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

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#5465FF]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:hello@opcode.co.za"
                className="flex items-center gap-3 transition hover:text-[#5465FF]"
              >
                <Mail size={18} />
                hello@opcode.co.za
              </a>

              <a
                href="https://wa.me/27793316193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-[#25D366]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">OpCode</span>. All
            rights reserved.
          </p>

          <p>Designed &amp; Developed by OpCode</p>
        </div>
      </div>
    </footer>
  );
};