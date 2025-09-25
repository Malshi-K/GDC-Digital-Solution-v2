// app/case-studies/web-development/[slug]/page.js
import WebsiteDevelopmentCaseStudy from '@/components/case-studies/web-development/WebsiteDevelopmentCaseStudy';
import { getCaseStudyById } from '@/data/caseStudiesData';
import { notFound } from 'next/navigation';

// Generate Metadata based on the case study
export async function generateMetadata({ params }) {
  const { slug } = params;
  const caseStudy = getCaseStudyById(slug);
  
  // If case study doesn't exist, return default metadata
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | GDC Digital Solutions',
      description: 'The requested case study could not be found.',
    };
  }
  
  const siteUrl = 'https://gdcdigital.co.nz';
  const pageUrl = `${siteUrl}/case-studies/web-development/${slug}`;
  const imageUrl = caseStudy.hero.imageSrc || `${siteUrl}/assets/images/web-development-case-study.jpg`;
  const title = `${caseStudy.hero.title} | GDC Digital Solutions`;
  const description = caseStudy.hero.description;
  
  return {
    title,
    description,
    
    // Basic Meta Tags
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    
    // Keywords and Author
    keywords: `${caseStudy.clientOverview.companyName}, ${caseStudy.clientOverview.industry}, web development case study, custom website development, web design portfolio, NZ web developers, website case studies`,
    author: 'GDC Digital Solutions',
    
    // Canonical URL
    alternates: {
      canonical: pageUrl,
    },
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'GDC Digital Solutions',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.hero.imageAlt || caseStudy.hero.title,
        },
      ],
      type: 'article',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    
    // JSON-LD structured data
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        publisher: {
          '@type': 'Organisation',
          name: 'GDC Digital Solutions',
          url: siteUrl,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        articleSection: 'Case Studies',
        articleBody: `Web development case study for ${caseStudy.clientOverview.companyName} in the ${caseStudy.clientOverview.industry} industry.`,
        about: {
          '@type': 'Service',
          name: 'Web Development',
          provider: {
            '@type': 'Organisation',
            name: 'GDC Digital Solutions',
          },
        },
      }),
    },
  };
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  // You can import and use getAllCaseStudies here to get all case study IDs
  // This is just a placeholder example
  return [
    { slug: 'gdc-consultants' },
    { slug: 'twilson-builders' },
    // Add more slugs as you add more case studies
  ];
}

// Main Component
export default function WebDevelopmentCaseStudyPage({ params }) {
  const { slug } = params;
  const caseStudy = getCaseStudyById(slug);
  
  // If case study doesn't exist, return 404
  if (!caseStudy) {
    notFound();
  }
  
  return (
    <main>
      <WebsiteDevelopmentCaseStudy caseStudyId={slug} />
    </main>
  );
}