import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://navikzaa.com"),
  title: {
    default: "Navikzaa | Business Automation for Premium Service Brands",
    template: "%s | Navikzaa",
  },
  description:
    "Navikzaa is a premium business automation platform for salons, clinics, and service-based businesses. Manage bookings, staff, inventory, and workflows in one intelligent system.",
  keywords: [
    "salon software",
    "appointment booking system",
    "clinic management software",
    "business automation platform",
    "multi-branch management software",
  ],
  alternates: {
    canonical: "https://navikzaa.com",
  },
  openGraph: {
    title: "Navikzaa | Premium Business Automation Platform",
    description:
      "Navigate bookings, staff, inventory, and workflows in one intelligent system.",
    url: "https://navikzaa.com",
    siteName: "Navikzaa",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Navikzaa Business Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navikzaa | Premium Business Automation",
    description:
      "The operating system for modern service businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}