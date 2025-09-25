import AboutHeader from "@/components/about/AboutHeader";
import PageTitle from "@/components/PageTitle";
import TeamPage from "@/components/about/TeamPage";
import CallToAction from "@/components/home/CallToAction";
import ServicesBar from "@/components/home/ServicesBar";

// Method 1: Using metadata object (for Next.js 13+)
export const metadata = {
  title: "About GDC Digital Solutions | Digital Marketing Experts",
  description:
    "GDC Digital Solutions: New Zealand's leading digital marketing agency. Experts in SEO, Google Ads & web development services.",
  keywords:
    "digital marketing agency, SEO, Google Ads, web development, New Zealand, digital strategies, GDC Digital Solutions",
  openGraph: {
    title: "About GDC Digital Solutions | Digital Marketing Experts",
    description:
      "GDC Digital Solutions: New Zealand's leading digital marketing agency. Experts in SEO, Google Ads & web development services.",
    url: "https://gdcdigital.co.nz/about",
    siteName: "GDC Digital Solutions",
    images: [
      {
        url: "https://gdcdigital.co.nz/assets/images/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GDC Digital Solutions | Digital Marketing Experts",
    description:
      "GDC Digital Solutions: New Zealand's leading digital marketing agency. Experts in SEO, Google Ads & web development services.",
    images: ["https://gdcdigital.co.nz/assets/images/og-image.jpg"], // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gdcdigital.co.nz/about",
  },
};

export default function AboutUs() {
  return (
    <>
      <PageTitle />
      <ServicesBar />
      {/* Main content */}
      <div className={`relative z-10 transition-all duration-300`}>
        <AboutHeader/>
        <TeamPage />
        <CallToAction />
      </div>
    </>
  );
}
