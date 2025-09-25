"use client";

import { notFound } from "next/navigation";

// Common components
import CallToAction from "@/components/home/CallToAction";
import HeroSection from "@/components/services/HeroSection";

// Web Development components
import WebDevelopmentBenefits from "@/components/services/web-development/WebDevelopment";
import CustomCodedWebsites from "@/components/services/web-development/CustomCodedWebsites";
import ProcessFlow from "@/components/services/web-development/ProcessFlow";
import Packages from "@/components/services/web-development/Packages";
import OnePageWebsite from "@/components/services/web-development/OnePageWebsite";

// Google Ads components
import GoogleAdsBenefits from "@/components/services/google-ads/GoogleAds";
import GoogleAdsProcessFlow from "@/components/services/google-ads/GoogleAdsProcessFlow";

// SEO components
import SeoOverview from "@/components/services/seo/SeoOverview";

// Business Consulting components
import ConsultingBenefits from "@/components/services/business-consulting/ConsultingBenefits";
import ConsultingIntroductionSection from "@/components/services/business-consulting/ConsultingIntroductionSection";
import ExpertiseSection from "@/components/services/business-consulting/ExpertiseSection";
import ClosingSection from "@/components/services/business-consulting/ClosingSection";

// App Development components
import AppDevelopmentBenefits from "@/components/services/app-development/AppDevelopment";
import AppProcessFlow from "@/components/services/app-development/ProcessFlow";

// Data imports
import {
  serviceDetails,
  serviceCaseStudies,
  serviceSEOData,
} from "../../../data/serviceData";
import ServicesBar from "@/components/home/ServicesBar";
import FacebookAdsBenefits from "@/components/services/facebook-ads/FacebookAds";
import FacebookAdsProcessFlow from "@/components/services/facebook-ads/FacebookAdsProcessFlow";
import FacebookAdsIntroductionSection from "@/components/services/facebook-ads/FacebookAdsIntroductionSection";
import FBClosingSection from "@/components/services/facebook-ads/ClosingSection";
import LocalBusinessTargeting from "@/components/services/facebook-ads/LocalBusinessTargeting";
import GoogleAdsCaseStudyCard from "@/components/case-studies/google-ads/GoogleAdsCaseStudyCard";
import CaseStudiesList from "@/components/case-studies/web-development/CaseStudiesList";

export default function ServicePage({ params, isServicesOpen, isAboutOpen }) {
  const { slug } = params;

  // Get service details based on slug
  const service = {
    ...serviceDetails[slug],
    slug, // Add slug to service object for HeroSection component
  };
  const caseStudy = serviceCaseStudies[slug];
  const seoData = serviceSEOData[slug] || {};

  // Return 404 if service not found
  if (!service) {
    notFound();
  }

  // Handle scroll to next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Render service-specific content sections
  const renderServiceContent = () => {
    switch (service.heading) {
      case "Website Development":
        return (
          <>
            <WebDevelopmentBenefits />
            <CustomCodedWebsites />
            <ProcessFlow />
            <CaseStudiesList />
            <Packages />
            <OnePageWebsite />
          </>
        );

      case "Google Ads":
        return (
          <>
            <GoogleAdsBenefits />
            <GoogleAdsProcessFlow />
            <GoogleAdsCaseStudyCard
              heading={caseStudy?.heading}
              statistic={caseStudy?.statistic}
              description={caseStudy?.description}
              buttonLabel={caseStudy?.buttonLabel}
              imagePath={caseStudy?.imagePath}
              caseStudyPath={caseStudy?.caseStudyPath}
            />
          </>
        );

      case "Facebook Ads":
        return (
          <>
            <FacebookAdsIntroductionSection />
            <FacebookAdsBenefits />
            <FacebookAdsProcessFlow />
            <LocalBusinessTargeting />
            <FBClosingSection />
          </>
        );

      case "SEO/ Copywriting":
        return <SeoOverview />;

      case "Business Consulting":
        return (
          <>
            <ConsultingIntroductionSection />
            <ConsultingBenefits />
            <ExpertiseSection />
            <ClosingSection />
          </>
        );

      case "App Development":
        return (
          <>
            <AppDevelopmentBenefits />
            <AppProcessFlow />
          </>
        );

      default:
        return null;
    }
  };

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading,
    provider: {
      "@type": "Organisation",
      name: "GDC Digital Solutions",
      url: "https://gdcdigital.co.nz",
    },
    description: seoData.description,
    areaServed: "New Zealand",
    serviceType: service.heading,
    image: `https://gdcdigital.co.nz${service.image}`,
    offers: {
      "@type": "Offer",
      areaServed: "New Zealand",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seoData.canonical,
    },
  };

  return (
    <>
      {/* SEO Head */}
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta
          property="og:image"
          content={`https://gdcdigital.co.nz${service.image}`}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta
          name="twitter:image"
          content={`https://gdcdigital.co.nz${service.image}`}
        />

        <link rel="canonical" href={seoData.canonical} />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>

      {/* Hero Section Component */}
      <HeroSection
        service={service}
        isServicesOpen={isServicesOpen}
        isAboutOpen={isAboutOpen}
        onScrollDown={handleScrollDown}
      />

      <ServicesBar />

      {/* Service Content Section */}
      <section id="next-section">{renderServiceContent()}</section>

      {/* Common Call to Action Section */}
      <CallToAction />
    </>
  );
}
