"use client";

import { useEffect, useState } from "react";
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
  faqs,
  industryCallouts,
  navLinks,
  painPoints,
  pricingTiers,
  processSteps,
  solutions,
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

const SECTION = "px-5 py-12 sm:px-8 md:py-20";
const CONTAINER = "mx-auto w-full max-w-[1100px]";

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
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_25px_70px_-35px_rgba(37,99,235,0.6)] backdrop-blur-xl ${
        hover
          ? "transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-blue-400/35"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function HeroStackFlow() {
  const steps = ["Website", "CRM", "Voice", "Booking"];

  return (
    <div className="relative mt-10 overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl" />
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
        Connected stack flow
      </p>
      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2 sm:gap-3">
            <div className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-sm font-medium text-white sm:px-4">
              {step}
            </div>
            {index < steps.length - 1 ? (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-500 sm:block" />
            ) : null}
          </div>
        ))}
      </div>
      <svg
        className="mx-auto mt-6 w-full max-w-md text-slate-600"
        viewBox="0 0 400 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 12 H392"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle cx="8" cy="12" r="4" fill="rgb(59 130 246 / 0.5)" />
        <circle cx="136" cy="12" r="4" fill="rgb(59 130 246 / 0.4)" />
        <circle cx="264" cy="12" r="4" fill="rgb(59 130 246 / 0.4)" />
        <circle cx="392" cy="12" r="4" fill="rgb(34 211 238 / 0.5)" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-200 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/90"
          : "border-b border-transparent bg-slate-950/70"
      }`}
    >
      <div className={`${CONTAINER} flex items-center justify-between px-5 py-4 sm:px-8`}>
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
    <section id="top" className={`relative overflow-hidden ${SECTION} pb-16 md:pb-24`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[18rem] w-[18rem] rounded-full bg-cyan-400/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className={CONTAINER}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
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

          <HeroStackFlow />
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
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
                <GlassCard className="h-full">
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
    <section id="solutions" className={SECTION}>
      <div className={CONTAINER}>
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
                <GlassCard className="h-full">
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
    <section className={SECTION}>
      <div className={CONTAINER}>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
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
    <section id="demo-showcase" className={SECTION}>
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="Industries"
          title="Systems we typically build by vertical."
          description="Every industry has different lead flow. These are the stacks we most often design, implement, and launch."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {industryCallouts.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <p className="text-xs font-medium text-slate-500">{item.label}</p>
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

function ProcessSection() {
  return (
    <section id="process" className={SECTION}>
      <div className={CONTAINER}>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
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

function PricingSection() {
  return (
    <section id="pricing" className={SECTION}>
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="Investment"
          title="Transparent starting points."
          description="Every engagement starts with a discovery call. These ranges reflect typical starting scopes — final pricing depends on your stack, volume, and integration complexity."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard
                className={`relative h-full ${
                  tier.highlighted
                    ? "border-blue-400/40 ring-1 ring-blue-400/20"
                    : ""
                }`}
              >
                {tier.highlighted ? (
                  <p className="absolute -top-3 left-6 rounded-full border border-blue-400/40 bg-blue-600 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </p>
                ) : null}
                <p className="text-sm font-medium text-blue-200">{tier.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-4 text-3xl font-semibold text-white">{tier.price}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{tier.description}</p>
              </GlassCard>
            </motion.article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-400">
          All projects include a discovery call, full documentation, and a 30-day
          post-launch check-in. Prices vary based on scope — book a call for an
          exact quote.
        </p>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
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

function AboutSection() {
  return (
    <section id="about" className={SECTION}>
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="Who we are"
          title="Built by automation specialists, not a generic agency."
          centered={false}
        />
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
          <p>
            ClientFlow was founded by a team with hands-on experience building
            LLM-powered chatbots, voice assistants, RAG pipelines, and n8n automation
            workflows for real businesses — not theoretical case studies.
          </p>
          <p>
            We work with a small number of clients at a time to keep quality high
            and results measurable. Every system we build is documented, testable,
            and owned by you.
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudiesComingSoonSection() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <GlassCard hover={false} className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
            Case Studies
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real results take time to document.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            We&apos;re currently working with our first clients to build detailed
            case studies. In the meantime, book a free strategy call — we&apos;ll walk
            you through the exact systems we build and what outcomes to expect.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </GlassCard>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section className={SECTION}>
      <div className={`${CONTAINER} max-w-4xl`}>
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions before we start."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <GlassCard key={item.question} className="p-0" hover={false}>
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
    <section id="contact" className={`${SECTION} pb-16 md:pb-24`}>
      <div className={`${CONTAINER} max-w-5xl`}>
        <GlassCard hover={false} className="relative overflow-hidden border-blue-400/25 bg-gradient-to-br from-blue-600/20 via-slate-900/80 to-cyan-500/10 p-8 sm:p-12">
          <div className="absolute -right-24 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
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
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-3`}>
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
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
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
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:text-blue-200"
            >
              Get in touch via the booking link above.
            </a>
          </p>
        </div>
      </div>
      <div className={`${CONTAINER} mt-10 border-t border-white/10 pt-6 text-sm text-slate-500`}>
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
        <PricingSection />
        <WhyChooseSection />
        <AboutSection />
        <CaseStudiesComingSoonSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
