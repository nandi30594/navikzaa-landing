export const metadata = {
  title: "About Navikzaa",
  description:
    "Learn about Navikzaa, a premium business operations platform designed for luxury, wellness, and high-growth service brands worldwide.",
};

export default function AboutPage() {
  const values = [
    { title: "Simplicity First", desc: "Technology should simplify complex operations, exposing only what matters for your success." },
    { title: "Operational Intelligence", desc: "We build systems that work for you, providing the clarity needed to scale confidently." },
    { title: "Premium Experience", desc: "Our platform matches the excellence you deliver to your elite clients every day." },
    { title: "Scalable Growth", desc: "From boutique studios to global networks, Navikzaa architecture is built to expand with you." },
  ];

  return (
    <main className="overflow-hidden">

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 mesh-bg text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-bold text-accent mb-6">Our Mission</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            Elevating the World's <br /> Finest Service Brands
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Navikzaa is the intelligent operating system designed for businesses that value precision, excellence, and effortless growth.
          </p>
        </div>
      </section>

      {/* STORY & VISION */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">The Navikzaa Vision</h2>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <p className="text-muted-foreground leading-relaxed">
                Many service businesses struggle with fragmented tools and operational noise. Navikzaa was created to bring everything into one high-performance interface.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We empower owners of high-end salons, clinics, and wellness centers with the same architectural sophistication found in elite enterprise software, tailored for the service sector.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {values.map(val => (
                <div key={val.title} className="p-6 glass rounded-2xl">
                  <h3 className="text-lg font-bold mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SECTION */}
      <section className="py-24 px-6 bg-brand text-brand-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-8">A Global Partner for Growth</h2>
          <p className="text-xl text-brand-foreground/70 leading-relaxed mb-12">
            Operating across multiple timezones and supporting diverse service categories, Navikzaa is the world-class choice for growing service brands.
          </p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
            <div className="font-bold text-2xl tracking-tighter">PREMIUM</div>
            <div className="font-bold text-2xl tracking-tighter">ELITE</div>
            <div className="font-bold text-2xl tracking-tighter">GLOBAL</div>
          </div>
        </div>
      </section>

    </main>
  );
}