import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Let's Build Your Next Website
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2">
          {/* Left Card */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                Get in Touch
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Whether you're starting a new business, redesigning your
                website, or looking for a custom web solution, we'd love to
                hear about your project.
              </p>
            </div>

            <div className="mt-10 space-y-5 flex-1">
              {/* Email */}
              <a
                href="mailto:hello@opcode.co.za"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-[#5465FF] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5465FF]/10">
                  <Mail className="text-[#5465FF]" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    hello@opcode.co.za
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-[#5465FF] hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5465FF]/10">
                  <Phone className="text-[#5465FF]" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>

                  <a
                    href="tel:+27793316193"
                    className="block text-gray-600 hover:text-[#5465FF]"
                  >
                    +27 79 331 6193
                  </a>

                  <a
                    href="tel:+27656174352"
                    className="block text-gray-600 hover:text-[#5465FF]"
                  >
                    +27 65 617 4352
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/27793316193"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-green-500 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <MessageCircle className="text-green-600" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    WhatsApp
                  </h4>

                  <p className="text-green-600">
                    Chat with us instantly
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-5 transition hover:border-[#5465FF] hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5465FF]/10">
                  <MapPin className="text-[#5465FF]" size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Location
                  </h4>

                  <p className="text-gray-600">
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="mt-8 rounded-2xl bg-[#5465FF] p-6 text-white">
              <h3 className="text-xl font-bold">
                Ready to start your project?
              </h3>

              <p className="mt-2 text-white/90">
                Let's build a modern website that helps your business attract
                more customers and grow online.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900">
              Send a Message
            </h3>

            <p className="mt-3 text-gray-600">
              Fill in the form below and we'll get back to you shortly.
            </p>

            <form className="mt-8 flex-1 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#5465FF] focus:ring-2 focus:ring-[#5465FF]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#5465FF] focus:ring-2 focus:ring-[#5465FF]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={7}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#5465FF] focus:ring-2 focus:ring-[#5465FF]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#5465FF] py-4 font-semibold text-white transition hover:bg-[#4354F5]"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                We usually respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};