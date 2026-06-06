"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { serviceDetails } from "@/components/landing/data";
import { SectionTitle } from "@/components/landing/section-title";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="px-5 py-12 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionTitle
          eyebrow="What We Do"
          title="Websites, CRMs, voice, email, and workflows—built together."
          description="ClientFlow implements custom websites, GoHighLevel and HubSpot CRMs, inbound/outbound call automation, email and SMS follow-up, and n8n/Make integrations so your entire lead flow runs as one system."
        />

        <div className="mt-12 space-y-8">
          {serviceDetails.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-blue-400/35 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm text-blue-200">
                    <span className="font-semibold text-blue-100">Best for: </span>
                    {service.idealFor}
                  </p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm leading-6 text-slate-300"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-xl border border-blue-400/25 bg-gradient-to-r from-blue-600/15 to-cyan-500/10 p-6 sm:p-8"
        >
          <h3 className="text-xl font-semibold text-white">
            How it all works together
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            A prospect clicks your ad or finds your site → submits a form or calls →
            gets instant voice or SMS response → lands in GoHighLevel or HubSpot with
            the right tags → receives automated email/SMS nurture → gets outbound
            reminders or reactivation if needed → books a call on your calendar. n8n
            or Make keeps every tool in sync. We design, build, and wire each step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
