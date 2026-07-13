import { Code2, Globe, Smartphone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>
            <span className="inline-flex rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
              About OpCode
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
              Building Modern Websites That Make Businesses Stand Out
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              OpCode is a South African web development studio focused on
              creating modern, responsive and user-friendly websites for
              businesses of all sizes. We combine clean design with reliable
              technology to build websites that help businesses establish a
              strong online presence.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you need a business website, landing page or custom web
              application, our goal is to deliver solutions that are fast,
              secure and designed with your customers in mind.
            </p>
          </div>

          {/* Right */}

          <div className="grid gap-6">

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <Code2 className="text-[#5465FF]" size={36} />
              <h3 className="mt-4 text-xl font-semibold">
                Modern Development
              </h3>
              <p className="mt-2 text-gray-600">
                Built using modern technologies to ensure performance,
                scalability and reliability.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <Smartphone className="text-[#5465FF]" size={36} />
              <h3 className="mt-4 text-xl font-semibold">
                Mobile-First Design
              </h3>
              <p className="mt-2 text-gray-600">
                Every website is designed to look great and work smoothly on
                desktops, tablets and smartphones.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <Globe className="text-[#5465FF]" size={36} />
              <h3 className="mt-4 text-xl font-semibold">
                Built for Growth
              </h3>
              <p className="mt-2 text-gray-600">
                Our websites are created with SEO, speed and user experience
                in mind to help businesses grow online.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};