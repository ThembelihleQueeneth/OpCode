import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "R2 500",
    priceNote: "Starting from",
    features: ["1–3 pages", "Responsive design", "Contact form", "Basic SEO"],
    cta: "Choose plan",
    featured: false,
  },
  {
    name: "Standard",
    price: "R5 000",
    priceNote: "Starting from",
    features: [
      "4–6 pages",
      "Responsive design",
      "Contact form",
      "SEO optimization",
      "Google Maps",
    ],
    cta: "Choose plan",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "R9 000+",
    priceNote: "Custom quote",
    features: [
      "7+ pages",
      "Custom features",
      "CMS integration",
      "Advanced SEO",
      "Priority support",
    ],
    cta: "Request quote",
    featured: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#5465FF]/10 px-4 py-2 text-sm font-semibold text-[#5465FF]">
            Pricing
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Affordable website packages
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Whether you're launching a new business or upgrading your online
            presence, we have a package that suits your goals and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "relative rounded-3xl border-2 border-[#5465FF] bg-white p-8 shadow-xl lg:-my-4 lg:py-12"
                  : "rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              }
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#5465FF] px-4 py-2 text-sm font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>

              <p className="mt-3 text-5xl font-bold text-[#5465FF]">
                {plan.price}
              </p>

              <p className="text-gray-500">{plan.priceNote}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#5465FF]/10">
                      <Check size={12} className="text-[#5465FF]" strokeWidth={3} />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={
                  plan.featured
                    ? "mt-10 w-full rounded-xl bg-[#5465FF] py-3 font-semibold text-white shadow-lg shadow-[#5465FF]/25 transition hover:bg-[#4354F5]"
                    : "mt-10 w-full rounded-xl border border-gray-300 py-3 font-semibold text-gray-900 transition hover:border-[#5465FF] hover:text-[#5465FF]"
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-20 flex flex-col items-center gap-6 rounded-3xl bg-[#5465FF] p-10 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold lg:text-3xl">
              Need something custom?
            </h3>
            <p className="mt-2 max-w-xl text-white/80">
              We also offer AI integration, booking systems, e-commerce,
              maintenance, website redesigns and custom web applications.
            </p>
          </div>

          <div className="flex-shrink-0 rounded-2xl bg-white/10 px-6 py-4">
            <p className="text-sm text-white/70">Add-ons from</p>
            <p className="text-3xl font-bold">R500</p>
          </div>
        </div>
      </div>
    </section>
  );
};