import Banner from "@/components/home/Banner";
import Services from "@/components/home/Services";
import CallToAction from "@/components/home/CallToAction";
import ServicesBar from "@/components/home/ServicesBar";
import CaseStudies from "@/components/home/CaseStudies";

export async function generateMetadata() {
  // Base metadata
  const metadata = {
    title: "GDC Digital Solutions | Expert Web Design, Google Ads & SEO",
    description: "Boost your business with GDC Digital Solutions. Expert services in Google Ads, SEO, social media marketing & web development.",
    keywords: "digital marketing agency, SEO services, Google Ads management, web development, social media marketing, digital strategy, NZ digital agency, digital solutions",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      type: "website",
      siteName: "GDC Digital Solutions",
      title: "GDC Digital Solutions | Expert Web Design, Google Ads & SEO",
      description: "Boost your business with GDC Digital Solutions. Expert services in Google Ads, SEO, social media marketing & web development.",
      url: "https://gdcdigital.co.nz/",
      images: [
        {
          url: "https://gdcdigital.co.nz/assets/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "GDC Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "GDC Digital Solutions | Expert Web Design, Google Ads & SEO",
      description: "Boost your business with GDC Digital Solutions. Expert services in Google Ads, SEO, social media marketing & web development.",
      images: ["https://gdcdigital.co.nz/assets/images/og-image.jpg"],
    },
    alternates: {
      canonical: "https://gdcdigital.co.nz/",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GDC Digital Solutions",
    "url": "https://gdcdigital.co.nz",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gdcdigital.co.nz/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return {
    ...metadata,
    other: {
      'script:ld+json': [
        JSON.stringify(websiteSchema)
      ]
    }
  };
}

export default function Home() {
  return (
    <main>
      <Banner />
      <ServicesBar />
      <Services />
      <CaseStudies />
      <CallToAction />
    </main>
  );
}