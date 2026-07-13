import laptop from "../assets/laptop.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-[#5465FF]/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-[#5465FF]/5 blur-3xl"></div>
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
              <span className="h-2 w-2 rounded-full bg-[#5465FF]"></span>
              Professional Web Development
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Websites That Help Your Business{" "}
              <span className="text-[#5465FF]">Grow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              We design and develop modern, responsive websites that help
              businesses establish credibility, attract customers and grow
              their online presence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-[#5465FF] px-8 py-4 text-center font-semibold text-white shadow-lg shadow-[#5465FF]/20 transition hover:-translate-y-1 hover:bg-[#4354F5]"
              >
                Schedule Appointment
              </a>

              <a
                href="#pricing"
                className="rounded-xl border border-gray-300 bg-white px-8 py-4 text-center font-semibold text-gray-900 transition hover:border-[#5465FF] hover:text-[#5465FF]"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden justify-center lg:flex">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-[#5465FF]/10 blur-3xl"></div>

              {/* Image */}
              <img
                src={laptop}
                alt="Laptop displaying a website"
                className="relative w-full max-w-xl rounded-3xl border border-white/50 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};