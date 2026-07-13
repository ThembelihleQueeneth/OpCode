import laptop from "../assets/laptop.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#5465FF]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5465FF]" />
              Professional web development
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 lg:text-7xl">
              Websites that help your business
              <span className="text-[#5465FF]"> grow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We design and develop fast, modern and mobile-friendly websites
              that help businesses build credibility, attract customers and
              grow online.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-[#5465FF] px-8 py-4 font-semibold text-white shadow-lg shadow-[#5465FF]/25 transition hover:bg-[#4354F5]">
                Schedule appointment
              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:border-[#5465FF] hover:text-[#5465FF]">
                View pricing
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden justify-center lg:flex">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#5465FF]/20 to-transparent blur-2xl" />
              <img
                src={laptop}
                alt="Laptop with website mockup"
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};