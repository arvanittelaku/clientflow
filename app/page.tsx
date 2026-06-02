import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { LandingPage } from "@/components/landing/landing-page";
import { BOOKING_URL, SITE_URL } from "@/lib/site-config";
import { websiteSchema } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "ClientFlow | Website, CRM, Voice, and Automation Systems",
  description:
    "ClientFlow helps service businesses scale booked calls through conversion websites, GoHighLevel and HubSpot CRM systems, AI voice automation, and n8n/Make workflows.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClientFlow",
    url: SITE_URL,
    logo: `${SITE_URL}/clientflow-logo.png`,
    email: "hello@clientflow.ai",
    sameAs: [
      "https://www.linkedin.com",
      "https://x.com",
      "https://www.youtube.com",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ClientFlow",
    url: SITE_URL,
    areaServed: "Worldwide",
    serviceType: [
      "Conversion Website Development",
      "GoHighLevel CRM Implementation",
      "HubSpot CRM Implementation",
      "Inbound and Outbound Call Automation",
      "n8n and Make Workflow Automation",
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: BOOKING_URL,
      name: "Book Free Strategy Call",
    },
  };

  return (
    <>
      <JsonLd
        data={[organizationSchema, serviceSchema, websiteSchema()]}
      />
      <LandingPage />
    </>
  );
}
