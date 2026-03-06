import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Solutions", href: "/solutions" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ]
    }
  ];

  return (
    <footer className="bg-brand text-brand-foreground relative overflow-hidden pt-16 pb-10">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-12">

          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-6 group transition-transform hover:scale-105 origin-left">
              <img
                src="/navikzaa-logo.svg"
                alt="Navikzaa Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-foreground/60 leading-relaxed max-w-sm text-base font-medium">
              The intelligent operating system for premium service brands. Designed for clarity, control, and effortless scale.
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-accent">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-brand-foreground/50 hover:text-white transition-all duration-300 text-base font-medium inline-block hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-sm text-brand-foreground/40 font-medium">
            <p>© {currentYear} Navikzaa</p>
            <span>•</span>
            <p>Built for the Elite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}