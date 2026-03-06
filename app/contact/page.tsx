export const metadata = {
  title: "Contact Navikzaa",
  description:
    "Book a demo or contact Navikzaa to learn how our appointment automation platform can support your business.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden min-h-screen">

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 mesh-bg text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gradient">
            Experience the Future <br /> of Your Business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized walkthrough with our team and see how Navikzaa can elevate your operations.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Work Email</label>
                <input
                  type="email"
                  placeholder="alex@business.com"
                  className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Business Name</label>
              <input
                type="text"
                placeholder="Lumina Salon & Spa"
                className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">Message</label>
              <textarea
                placeholder="Tell us about your current operational challenges..."
                rows={4}
                className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
              />
            </div>

            <button className="w-full btn-premium bg-brand text-brand-foreground py-5 rounded-xl text-lg font-bold shadow-xl">
              Request VIP Demo Access
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}