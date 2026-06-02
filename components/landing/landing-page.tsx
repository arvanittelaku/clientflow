"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  ChevronDown,
  Clock3,
  Globe2,
  MessageSquareMore,
  Phone,
  PhoneOff,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Chatbot } from "@/components/landing/chatbot";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import {
  benefits,
  caseStudies,
  faqs,
  navLinks,
  painPoints,
  processSteps,
  solutions,
  testimonials,
} from "@/components/landing/data";
import { SectionTitle } from "@/components/landing/section-title";
import { WhatWeDoSection } from "@/components/landing/what-we-do-section";
import { BOOKING_URL } from "@/lib/site-config";
import { insightPosts } from "@/lib/insights-data";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  website: string;
  message: string;
  hpField: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const painPointIcons = [PhoneOff, Clock3, Workflow, Phone];
const solutionIcons = [Globe2, Building2, Bot, Zap];
const benefitIcons = [Phone, Building2, Workflow, MessageSquareMore];
const solutionLinks = [
  "/services/conversion-websites",
  "/services/go-high-level-crm",
  "/services/ai-voice-agents",
  "/services/n8n-make-automation",
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_25px_70px_-35px_rgba(37,99,235,0.6)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/clientflow-logo.png"
            alt="ClientFlow logo"
            width={180}
            height={48}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/30"
        >
          Book a Call
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-20 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[18rem] w-[18rem] rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            <Sparkles className="h-4 w-4" />
            Websites · GHL · HubSpot · Voice AI · n8n & Make
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            AI Systems That Capture, Qualify, and Convert More Leads
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We build conversion websites, configure GoHighLevel and HubSpot,
            automate inbound and outbound calls, run email and SMS follow-up, and
            connect everything with n8n and Make.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/35 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <GlassCard className="sm:col-span-2">
            <p className="text-sm text-slate-300">Average response time</p>
            <p className="mt-3 text-4xl font-semibold text-white">{"< 60s"}</p>
            <p className="mt-2 text-sm text-slate-400">
              Automated voice and messaging engages leads instantly.
            </p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm text-slate-300">Booked calls</p>
            <p className="mt-3 text-3xl font-semibold text-white">+38%</p>
          </GlassCard>
          <GlassCard>
            <p className="text-sm text-slate-300">Manual tasks removed</p>
            <p className="mt-3 text-3xl font-semibold text-white">-22 hrs/wk</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="The Problem"
          title="Great leads still get lost in broken handoffs."
          description="Most service businesses lose opportunities because calls, forms, CRM pipelines, and follow-up are not connected."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((item, index) => {
            const Icon = painPointIcons[index];
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="h-full transition hover:-translate-y-1 hover:border-blue-400/30">
                  <Icon className="h-6 w-6 text-blue-300" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Solutions"
          title="We build the full revenue system, not one isolated tool."
          description="Website, CRM, inbound/outbound voice, and automation architecture delivered as one connected stack."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutions.map((item, index) => {
            const Icon = solutionIcons[index];
            return (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <GlassCard className="h-full transition duration-300 group-hover:border-blue-400/35 group-hover:shadow-[0_30px_80px_-35px_rgba(56,189,248,0.6)]">
                  <div className="inline-flex rounded-xl border border-white/15 bg-white/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                  <Link
                    href={solutionLinks[index]}
                    className="mt-5 inline-flex text-sm font-medium text-blue-300 transition hover:text-blue-200"
                  >
                    Read detailed service page →
                  </Link>
                </GlassCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const featuredInsights = [...insightPosts]
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
  .slice(0, 3);

function InsightsPreviewSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Insights"
          title="Guides on CRM, voice AI, and automation that drive organic growth."
          description="Long-form resources on GoHighLevel, HubSpot, conversion websites, and workflow systems—written to rank and to help you implement faster."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredInsights.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-200">
                  {post.readTimeMinutes} min read
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  <Link href={`/insights/${post.slug}`} className="hover:text-blue-200">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
          >
            Browse all insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DemoShowcaseSection() {
  return (
    <section id="demo-showcase" className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Demo Showcase"
          title="Real systems built for real businesses."
          description="Examples of automation experiences ClientFlow can launch for your team."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {item.outcome}
                </p>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Process"
          title="A clear 4-step path from bottlenecks to booked calls."
          description="Our execution model keeps launches fast and outcomes measurable."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/90">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Why ClientFlow"
          title="Built for teams that need speed, consistency, and scale."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = benefitIcons[index];
            return (
              <motion.div
                key={item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <GlassCard className="h-full">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <p className="mt-5 text-lg font-semibold text-white">{item}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by teams focused on measurable growth."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full">
                <p className="text-sm leading-7 text-slate-200">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </footer>
              </GlassCard>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions before we start."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <GlassCard key={item.question} className="p-0">
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-300 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-7 text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    message: "",
    hpField: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const updateField =
    (key: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((current) => ({ ...current, [key]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          source: "landing-final-cta",
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(
          payload.error ?? "Could not send your request. Please try again.",
        );
      }

      setSubmitSuccess("Thanks! We received your request and will reach out soon.");
      setFormValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        website: "",
        message: "",
        hpField: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 pb-24 pt-12 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <GlassCard className="relative overflow-hidden border-blue-400/25 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-cyan-500/10 p-8 sm:p-12">
          <div className="absolute -right-24 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/90">
              Final Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to Stop Losing Leads?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
              Let&apos;s map your website, CRM, voice, and workflow stack into one
              conversion system.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Book Your Free Consultation
              <ArrowRight className="h-4 w-4 text-white" />
            </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/55 p-5 sm:p-6">
              <p className="text-sm font-semibold text-white">Or send your project details</p>

              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={formValues.name}
                onChange={updateField("name")}
                placeholder="Full name"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formValues.email}
                onChange={updateField("email")}
                placeholder="Work email"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formValues.company}
                  onChange={updateField("company")}
                  placeholder="Company"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formValues.phone}
                  onChange={updateField("phone")}
                  placeholder="Phone"
                  className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
                />
              </div>

              <input
                type="url"
                name="website"
                autoComplete="url"
                value={formValues.website}
                onChange={updateField("website")}
                placeholder="Website (optional)"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
              />

              <textarea
                name="message"
                required
                value={formValues.message}
                onChange={updateField("message")}
                placeholder="What do you need help with?"
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-300/70 focus:outline-none"
              />

              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                value={formValues.hpField}
                onChange={updateField("hpField")}
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>

              {submitError ? (
                <p className="text-sm text-rose-300">{submitError}</p>
              ) : null}
              {submitSuccess ? (
                <p className="text-sm text-emerald-300">{submitSuccess}</p>
              ) : null}
            </form>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/clientflow-logo.png"
            alt="ClientFlow logo"
            width={180}
            height={48}
            className="h-9 w-auto"
          />
          <p className="mt-4 text-sm leading-7 text-slate-400">
            AI systems that help service businesses capture and convert more leads.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-white">
                Industries
              </Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-white">
                Insights
              </Link>
            </li>
            <li>
              <a href="#process" className="hover:text-white">
                Process
              </a>
            </li>
            <li>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="hover:text-white">
                Book Call
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>hello@clientflow.ai</li>
            <li>+1 (555) 014-3188</li>
            <li>Mon-Fri, 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ClientFlow. All rights reserved.
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <WhatWeDoSection />
        <CapabilitiesSection />
        <InsightsPreviewSection />
        <DemoShowcaseSection />
        <ProcessSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
