// app/case-studies/web-development/page.js
import CaseStudiesList from "@/components/case-studies/web-development/CaseStudiesList";
import PageTitle from "@/components/PageTitle";

// Metadata for the index page
export const metadata = {
  title: "Web Development Case Studies | GDC Digital Solutions",
  description:
    "Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.",

  // Basic Meta Tags
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph
  openGraph: {
    title: "Web Development Case Studies | GDC Digital Solutions",
    description:
      "Explore our web development case studies at GDC Digital Solutions. See how our custom websites boost traffic, improve user experience, and drive business growth.",
    url: "https://gdcdigital.co.nz/case-studies/web-development",
    siteName: "GDC Digital Solutions",
    type: "website",
  },
};

export default function WebDevelopmentCaseStudiesPage() {
  return (
    <>
      <PageTitle />
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-customYellow mb-8">
            Web Development Case Studies
          </h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
            Explore our portfolio of successful web development projects,
            showcasing our expertise in creating responsive, user-friendly, and
            high-performing websites.
          </p>
          <CaseStudiesList />
        </div>
      </main>
    </>
  );
}
