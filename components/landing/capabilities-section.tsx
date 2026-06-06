"use client";

import { motion } from "framer-motion";
import { capabilities, techStack } from "@/components/landing/data";
import { SectionTitle } from "@/components/landing/section-title";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="px-5 py-12 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionTitle
          eyebrow="Capabilities"
          title="The stack we implement and connect for you."
          description="From your website to your CRM to voice and workflow automation—we build and wire the full system so your team stops juggling disconnected tools."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/15 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-blue-400/35"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
