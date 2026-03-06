export const metadata = {
  title: "Privacy Policy | Navikzaa",
  description:
    "Read the Privacy Policy of Navikzaa, outlining how we collect, use, and protect business and customer data globally.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-10">Privacy Policy</h1>

      <p className="mb-6 text-gray-600">
        Navikzaa (“we”, “our”, or “us”) is a business operations platform
        operated from India. This Privacy Policy explains how we collect,
        use, process, and protect information when businesses use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>Business contact details (name, email, phone, company name)</li>
        <li>Account login credentials</li>
        <li>Business operational data (appointments, staff data, inventory)</li>
        <li>End-customer data entered by our clients</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. Role as Data Processor</h2>
      <p className="text-gray-600">
        Navikzaa acts as a Data Processor for end-customer information stored
        by our clients. The business using Navikzaa remains the Data Controller
        and is responsible for obtaining necessary customer consents.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Information</h2>
      <ul className="list-disc ml-6 text-gray-600 space-y-2">
        <li>To provide and maintain our platform</li>
        <li>To improve system performance and security</li>
        <li>To provide customer support</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Security</h2>
      <p className="text-gray-600">
        We implement appropriate technical and organizational security measures
        to protect data from unauthorized access, disclosure, or loss.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. International Data Transfers</h2>
      <p className="text-gray-600">
        As we operate from India and serve clients globally, data may be
        processed in different jurisdictions. We take reasonable steps to
        ensure adequate data protection safeguards.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Data Retention</h2>
      <p className="text-gray-600">
        We retain data for as long as necessary to provide services or comply
        with legal obligations. Clients may request deletion of their account data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. User Rights</h2>
      <p className="text-gray-600">
        Depending on applicable laws (including GDPR for EU/UK users),
        individuals may request access, correction, or deletion of their data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">8. Contact</h2>
      <p className="text-gray-600">
        For privacy-related inquiries, contact us at: hello@navikzaa.com
      </p>
    </main>
  );
}