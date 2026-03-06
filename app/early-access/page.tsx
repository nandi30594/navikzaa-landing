export const metadata = {
  title: "Early Access | Navikzaa",
  description:
    "Join early access for Navikzaa business automation platform.",
};

export default function EarlyAccessPage() {
  return (
    <main className="py-20 px-6 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">
        Get Early Access to Navikzaa
      </h1>

      <p className="text-gray-600 mb-8">
        We are onboarding selected wellness and service
        businesses. Request early access and we’ll
        personally guide your setup.
      </p>

      <a
        href="/contact"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Request Access
      </a>
    </main>
  );
}