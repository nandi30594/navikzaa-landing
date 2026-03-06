export const metadata = {
  title: "Terms of Service | Navikzaa",
  description:
    "Review the Terms of Service governing use of Navikzaa business management platform.",
};

export default function TermsPage() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-10">Terms of Service</h1>

      <p className="mb-6 text-gray-600">
        These Terms govern your use of Navikzaa (“Service”), operated from India.
        By accessing or using our platform, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Use of Service</h2>
      <p className="text-gray-600">
        Navikzaa provides appointment scheduling and business management
        software. You agree to use the platform only for lawful business purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Subscription & Billing</h2>
      <p className="text-gray-600">
        Access to Navikzaa is provided on a paid subscription basis.
        Fees are billed in advance and must be paid before account activation.
        Failure to pay may result in suspension.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Data Ownership</h2>
      <p className="text-gray-600">
        Clients retain ownership of their business and customer data.
        Navikzaa processes such data solely to provide services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Limitation of Liability</h2>
      <p className="text-gray-600">
        Navikzaa shall not be liable for indirect, incidental, or consequential
        damages arising from use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Termination</h2>
      <p className="text-gray-600">
        We may suspend or terminate accounts for violation of these Terms
        or non-payment of fees.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Governing Law</h2>
      <p className="text-gray-600">
        These Terms are governed by the laws of India. Any disputes
        shall be subject to the jurisdiction of Indian courts.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact</h2>
      <p className="text-gray-600">
        For questions regarding these Terms, contact hello@navikzaa.com
      </p>
    </main>
  );
}