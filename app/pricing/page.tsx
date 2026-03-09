import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const metadata = {
  title: "Pricing | Navikzaa",
  description:
    "Premium pricing plans for salons, clinics, and service businesses using Navikzaa to manage bookings, staff, inventory, and operations in one unified platform.",
};

export default function PricingPage() {
  const plans = [
    { title: "Professional", popular: false, features: ["Online appointment booking", "Client management (CRM)", "Staff management", "Basic leave tracking", "Automated reminders", "Basic reporting", "1 Branch"] },
    { title: "Business", popular: true, features: ["Everything in Professional", "Inventory management", "Workflow automation", "Advanced analytics", "Up to 3 Branches", "Priority support"] },
    { title: "Enterprise", popular: false, features: ["Everything in Business", "Up to 10 Branches", "Custom workflows", "API access", "Dedicated onboarding", "Premium support"] },
  ];

  return (
    <main className="overflow-hidden">

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 mesh-bg text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            Scalable Plans for <br /> Serious Brands
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing designed to grow with your business, from boutique studios to global networks.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.title}
              className={`p-10 rounded-3xl border transition-all duration-500 relative ${p.popular
                ? "bg-white shadow-2xl scale-105 border-accent z-10"
                : "bg-transparent border-border hover:border-foreground/10"
                }`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h2 className="text-xl font-bold mb-6 tracking-tight">{p.title}</h2>
              <div className="mb-8 text-sm font-semibold text-accent uppercase tracking-wider">
                Contact for Pricing
              </div>

              <ul className="space-y-4 mb-10">
                {p.features.map(feature => (
                  <li key={feature} className="flex items-center text-sm font-medium">
                    <CheckIcon />
                    <span className="ml-3 text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${p.popular
                  ? "bg-accent text-white shadow-lg hover:shadow-accent/40"
                  : "bg-brand text-brand-foreground hover:opacity-90"
                  }`}
              >
                Contact Sales
              </Link>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}