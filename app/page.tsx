import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 mesh-bg bg-muted/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Premium Business Platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient">
              Elevate Your Operations. <br />
              <span className="text-accent">Navigate Success.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              The intelligent operating system for premium salons, clinics, and service-based brands. Centralize bookings, staff, and inventory in one high-performance interface.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-premium bg-brand text-brand-foreground px-8 py-4 text-lg font-bold rounded-full flex items-center justify-center group"
              >
                Experience Navikzaa
                <ArrowRight />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 text-lg font-semibold rounded-full border border-border hover:bg-muted/10 transition-colors flex items-center justify-center"
              >
                View Solutions
              </Link>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
            <img
              src="/hero_visual_premium.png"
              alt="Navikzaa Platform Visual"
              className="relative z-10 w-full max-w-2xl rounded-2xl shadow-2xl border border-white/20 glass"
            />
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="py-32 px-6 bg-background relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Enterprise Controls for Growing Brands</h2>
            <div className="w-20 h-1 accent-gradient mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engineered for precision and scale. Everything you need to manage a high-end service business at your fingertips.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Booking Intelligence",
                desc: "Automated scheduling with smart availability logic and real-time synchronization.",
                icon: "📅"
              },
              {
                title: "Elite Client CRM",
                desc: "Deep profiles with history, preferences, and automated loyalty tracking.",
                icon: "👤"
              },
              {
                title: "Operational Workflows",
                desc: "Standardize every process from intake to checkout with custom automations.",
                icon: "⚡"
              },
              {
                title: "Advanced Inventory",
                desc: "Precision tracking for products and back-bar supplies with auto-restock alerts.",
                icon: "📦"
              },
              {
                title: "Unified Staff Hub",
                desc: "Complex commission logic, roster management, and performance insights.",
                icon: "👥"
              },
              {
                title: "Multi-Brand Scale",
                desc: "Centralized controls for multiple locations with aggregated reporting.",
                icon: "🏢"
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-8 glass rounded-2xl group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / TRUST SECTION */}
      <section className="py-32 px-6 bg-brand text-brand-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Purpose-Built for Service Excellence</h2>
              <p className="text-xl text-brand-foreground/70 mb-12 leading-relaxed">
                Whether you're a boutique salon or a nationwide clinic network, Navikzaa provides the architectural support needed for premium operations.
              </p>

              <div className="space-y-6">
                {["Luxury Grooming & Beauty", "Wellness & Medical Aesthetics", "Physical Therapy & Specialized Clinics"].map(item => (
                  <div key={item} className="flex items-center space-x-4">
                    <div className="p-1 rounded-full bg-accent/20 border border-accent/40">
                      <CheckIcon />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Scalability", value: "Unlimited Locations" },
                { title: "Security", value: "Bank-Grade Encryption" },
                { title: "Support", value: "24/7 Premium Concierge" },
              ].map(stat => (
                <div key={stat.title} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-accent text-sm font-bold uppercase tracking-widest mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-32 px-6 bg-muted/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Structured Performance Plans</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Transparent pricing designed to grow with your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional",
                price: "299",
                popular: false,
                features: ["Online appointment booking", "Client management (CRM)", "Staff management", "Basic leave tracking", "Automated reminders", "Basic reporting", "1 Branch"]
              },
              {
                title: "Business",
                price: "499",
                popular: true,
                features: ["Everything in Professional", "Inventory management", "Workflow automation", "Advanced analytics", "Up to 3 Branches", "Priority support"]
              },
              {
                title: "Enterprise",
                price: "999",
                popular: false,
                features: ["Everything in Business", "Up to 10 Branches", "Custom workflows", "API access", "Dedicated onboarding", "Premium support"]
              },
            ].map((p) => (
              <div
                key={p.title}
                className={`p-10 rounded-3xl border transition-all duration-500 relative ${p.popular
                  ? "bg-white shadow-2xl scale-105 border-accent z-10"
                  : "bg-transparent border-border hover:border-black/20"
                  }`}
              >
                {p.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-6">{p.title}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold tracking-tight">$</span>
                  <span className="text-6xl font-extrabold tracking-tighter mx-1">{p.price}</span>
                  <span className="text-muted-foreground font-medium">/mo</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {p.features.map(bullet => (
                    <li key={bullet} className="flex items-center text-sm font-medium text-left">
                      <CheckIcon />
                      <span className="ml-3 text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${p.popular
                    ? "bg-accent text-white shadow-lg hover:shadow-accent/40"
                    : "bg-brand text-brand-foreground hover:opacity-90"
                    }`}
                >
                  View Plan Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-90"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/20 blur-[100px] rounded-full animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Navigate the Future of Your Business.</h2>
          <p className="text-xl mb-12 text-white/80 leading-relaxed font-medium">
            Join the elite service brands transforming their operations with Navikzaa's intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-brand px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:-translate-y-1 transition-all"
            >
              Request a VIP Demo
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}