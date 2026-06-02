import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsScripts } from "@/app/analytics";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ClientFlow | Website, CRM, Voice, and Automation Systems",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "ClientFlow builds conversion websites, GoHighLevel and HubSpot CRM systems, AI inbound/outbound call automation, and n8n/Make workflows to increase booked calls.",
  keywords: [
    "GoHighLevel automation",
    "HubSpot implementation",
    "AI voice agents",
    "n8n automation",
    "Make automation",
    "conversion website agency",
    "lead generation automation",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  category: "business",
  icons: {
    icon: "/clientflow-logo.png",
  },
  openGraph: {
    title: "ClientFlow | Lead Conversion Systems for Service Businesses",
    description:
      "Websites, CRM systems, inbound/outbound voice automation, and workflow orchestration built to convert more leads.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: ["/clientflow-logo.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClientFlow | CRM + Voice + Automation",
    description:
      "Build a complete lead capture and booking system with ClientFlow.",
    images: ["/clientflow-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
