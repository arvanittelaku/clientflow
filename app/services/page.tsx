import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="min-h-screen bg-slate-950 px-5 py-20 text-slate-100 sm:px-8">
      <section className="mx-auto max-w-6xl">
        <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
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

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
        {servicePages.map((service) => (
          <article
            key={service.slug}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {service.shortDescription}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-5 inline-flex rounded-full border border-blue-400/40 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-500/25"
            >
              Read service details
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
