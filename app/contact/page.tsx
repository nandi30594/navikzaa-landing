"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    website: "", // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", business: "", message: "", website: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

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
          {status === "success" ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground">Thank you!</h2>
              <p className="text-lg text-muted-foreground">Our team will contact you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-brand font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@business.com"
                    className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="business" className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">
                  Business Name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Lumina Salon & Spa"
                  className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>

              {/* Honeypot field */}
              <div className="hidden">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground/60 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current operational challenges..."
                  className="w-full bg-white/50 border border-border p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full btn-premium bg-brand text-brand-foreground py-5 rounded-xl text-lg font-bold shadow-xl transition-all ${status === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
                  }`}
              >
                {status === "submitting" ? "Sending request..." : "Request VIP Demo Access"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}