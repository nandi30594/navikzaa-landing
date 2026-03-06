export const metadata = {
  title: "Solutions | Navikzaa",
  description:
    "Navikzaa supports salons, spas, wellness centers, clinics, consultants, and service businesses with smart scheduling and automation.",
};

export default function SolutionsPage() {
  const solutions = [
    { title: "Salons & Beauty Clinics", desc: "Manage appointments, staff schedules, inventory, and customer experience in one cohesive platform.", icon: "✂️" },
    { title: "Wellness & Spa Centers", desc: "Coordinate multiple therapists, treatment rooms, and complex service packages seamlessly.", icon: "💆" },
    { title: "Medical Aesthetics & Clinics", desc: "Streamline patient scheduling, consent forms, and specialist availability with precision.", icon: "🏥" },
    { title: "Fitness & Wellness Studios", desc: "Simplify session bookings, trainer rosters, and student memberships effortlessly.", icon: "🧘" },
    { title: "Consultants & Professional Services", desc: "Professional scheduling and client management for individual practitioners and teams.", icon: "📈" },
    { title: "Multi-Location Enterprise", desc: "Centralized operational control across dozens of locations with aggregated insights.", icon: "🌍" },
  ];

  return (
    <main className="overflow-hidden">

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 mesh-bg text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            Solutions Built for <br /> Service Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navikzaa provides the architectural foundation for high-end service brands to scale with clarity and control.
          </p>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="p-8 glass rounded-2xl group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
              <h2 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}