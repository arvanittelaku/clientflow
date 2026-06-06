import type { Metadata } from "next";
import Link from "next/link";
import { serviceSummariesBySlug } from "@/components/landing/data";
import { servicePages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Automation Services",
  description:
    "Explore ClientFlow services: conversion websites, GoHighLevel and HubSpot CRM systems, AI voice automation, follow-up systems, and n8n/Make workflows.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-slate-100 sm:px-8 md:py-20">
      <section className="mx-auto max-w-[1100px]">
        <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
          Service Hub
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Growth Automation Services
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Each service page is structured for SEO and explains outcomes,
          deliverables, and use cases so both visitors and search engines can
          understand exactly what ClientFlow offers.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:grid-cols-2">
        {servicePages.map((service) => {
          const homeSummary = serviceSummariesBySlug[service.slug];

          return (
            <article
              key={service.slug}
              className="rounded-xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-blue-400/35"
            >
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              {homeSummary ? (
                <p className="mt-3 text-sm leading-7 text-slate-300">{homeSummary}</p>
              ) : (
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {service.shortDescription}
                </p>
              )}
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex rounded-full border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/25"
              >
                Read service details
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
