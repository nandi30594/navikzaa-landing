"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
        ? "glass py-3 border-border/50"
        : "bg-white/30 backdrop-blur-[2px] py-5 border-border/10"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-105">
          <img
            src="/navikzaa-logo.png"
            alt="Navikzaa Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-7 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-all duration-300 hover:text-accent group ${pathname === item.href ? "text-accent" : "text-muted-foreground"
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-left ${pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn-premium bg-brand text-brand-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-accent/40"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-2xl ${menuOpen ? "max-h-[500px] border-t border-border/50" : "max-h-0 border-t-0"
        }`}>
        <div className="px-6 py-8 space-y-6 flex flex-col">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition-all ${pathname === item.href ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center bg-brand text-brand-foreground py-4 rounded-xl font-bold btn-premium"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}