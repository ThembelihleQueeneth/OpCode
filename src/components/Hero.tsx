import laptop from "../assets/laptop.jpg"

export const Hero = () => {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
              Professional Web Development
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Websites That Help Your Business
              <span className="text-[#5465FF]"> Grow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600 leading-8">
              We design and develop fast, modern and mobile-friendly websites
              that help businesses build credibility, attract customers and
              grow online.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-xl bg-[#5465FF] px-8 py-4 font-semibold text-white hover:bg-[#4354F5] transition">
                Schedule Appointment
              </button>

              <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:border-[#5465FF] hover:text-[#5465FF] transition">
                View Pricing
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex justify-center">
            <img src={laptop} alt="Laptop with website mockup" />
          </div>

        </div>
      </div>
    </section>
  );
};