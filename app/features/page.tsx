export const metadata = {
  title: "Features | Navikzaa",
  description:
    "Explore Navikzaa features including appointment scheduling, workflow automation, inventory management, staff tracking, and multi-branch support.",
};

export default function FeaturesPage() {
  const features = [
    { title: "Appointment Scheduling", desc: "Manage bookings effortlessly with online scheduling, reminders, and calendar integrations.", icon: "📅" },
    { title: "Client Management", desc: "Track customer history, preferences, notes, and communication in one centralized system.", icon: "👤" },
    { title: "Workflow Automation", desc: "Automate repetitive business tasks, approvals, and operational workflows seamlessly.", icon: "⚡" },
    { title: "Inventory Management", desc: "Monitor stock levels, manage supplies, receive alerts, and maintain accurate inventory.", icon: "📦" },
    { title: "Staff Tracking", desc: "Manage team schedules, permissions, leave tracking, and performance insights.", icon: "👥" },
    { title: "Multi-Branch Support", desc: "Operate multiple locations efficiently with centralized business control.", icon: "🏢" },
    { title: "Advanced Analytics", desc: "Gain real-time visibility into revenue, performance, and growth trends.", icon: "📈" },
    { title: "Smart Reporting", desc: "Generate detailed financial and operational reports to make informed decisions.", icon: "📋" },
  ];

  return (
    <main className="overflow-hidden">

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 mesh-bg text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            Powerful Features for <br /> Modern Businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navikzaa helps wellness, beauty, healthcare, and service businesses streamline operations, automate workflows, and grow with precision.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 glass rounded-2xl group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-3xl mb-6 grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
              <h2 className="text-xl font-bold mb-4 tracking-tight">{f.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}