export const SITE_URL = "https://clientflow.ai";
export const SITE_NAME = "ClientFlow";
export const BOOKING_URL = "https://calendly.com/clientflow/strategy-call";

export type ServicePage = {
  slug: string;
  title: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  deliverables: string[];
  outcomes: string[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "conversion-websites",
    title: "Conversion-Focused Websites",
    shortDescription:
      "Premium, fast websites built to turn traffic into booked strategy calls.",
    seoTitle: "Conversion-Focused Website Development for Service Businesses",
    seoDescription:
      "ClientFlow builds conversion-focused websites that integrate with GoHighLevel, HubSpot, and automation systems to increase booked calls.",
    keywords: [
      "conversion-focused websites",
      "service business website development",
      "next.js agency website",
      "website conversion optimization",
    ],
    intro:
      "Your website should function as a lead qualification and booking engine, not just a brochure. We build high-converting websites structured around your offer, buyer objections, and booking flow.",
    deliverables: [
      "High-converting page architecture and offer framing",
      "Mobile-first design and Core Web Vitals optimization",
      "CRM-connected forms and conversion event tracking",
      "SEO foundations, schema, and technical crawl setup",
    ],
    outcomes: [
      "Higher form completion and call-booking rates",
      "Improved speed and lower bounce on mobile traffic",
      "Cleaner lead data sent directly to CRM pipelines",
    ],
    faq: [
      {
        question: "Do you redesign existing websites or build new ones?",
        answer:
          "Both. We can optimize your current site if the structure is viable, or rebuild on a modern stack when conversion friction is too high.",
      },
    ],
  },
  {
    slug: "go-high-level-crm",
    title: "GoHighLevel CRM Systems",
    shortDescription:
      "Pipeline, automations, and communication systems built inside GoHighLevel.",
    seoTitle: "GoHighLevel CRM Setup and Automation Services",
    seoDescription:
      "ClientFlow configures GoHighLevel pipelines, automation, appointment flows, and follow-up systems for service businesses.",
    keywords: [
      "GoHighLevel setup",
      "GoHighLevel automation",
      "GHL pipeline management",
      "GoHighLevel agency implementation",
    ],
    intro:
      "We design GoHighLevel around your real sales process. That means your contact lifecycle, booking logic, and follow-up sequences all map to how your team actually closes deals.",
    deliverables: [
      "Custom pipelines, tags, and lead routing rules",
      "Appointment booking, reminders, and no-show sequences",
      "Two-way SMS/email nurture by stage and trigger",
      "Dashboard setup for speed-to-lead and conversion KPIs",
    ],
    outcomes: [
      "Faster response to inbound opportunities",
      "Fewer leads lost between stages",
      "Clearer reporting by source and campaign",
    ],
    faq: [
      {
        question: "Can you migrate from another CRM into GoHighLevel?",
        answer:
          "Yes. We handle migration planning, field mapping, workflow recreation, and staged cutover to avoid data loss.",
      },
    ],
  },
  {
    slug: "hubspot-crm",
    title: "HubSpot CRM Systems",
    shortDescription:
      "HubSpot lifecycle, pipeline, and automation architecture for scalable growth.",
    seoTitle: "HubSpot CRM Implementation and Workflow Automation",
    seoDescription:
      "ClientFlow implements HubSpot CRM systems with deal pipelines, lifecycle automation, and integrated lead handoff from websites and ad channels.",
    keywords: [
      "HubSpot CRM setup",
      "HubSpot workflow automation",
      "HubSpot implementation agency",
      "HubSpot pipeline optimization",
    ],
    intro:
      "If your team needs stronger lifecycle modeling, deal visibility, and reliable attribution, we architect HubSpot so sales and marketing work from one source of truth.",
    deliverables: [
      "Pipeline, lifecycle stage, and property architecture",
      "Lead scoring and nurture automation where needed",
      "Integration with website forms and external systems",
      "Playbooks, SOPs, and team onboarding support",
    ],
    outcomes: [
      "Better sales forecasting and stage visibility",
      "Consistent lead nurture with fewer manual tasks",
      "Improved attribution across campaigns",
    ],
    faq: [
      {
        question: "Do you support both Marketing and Sales Hub workflows?",
        answer:
          "Yes. We scope each implementation around your funnel and configure the hubs you actually need.",
      },
    ],
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents (Inbound + Outbound)",
    shortDescription:
      "Automated voice systems that answer, qualify, and route calls 24/7.",
    seoTitle: "AI Voice Agent Setup for Inbound and Outbound Calls",
    seoDescription:
      "Deploy AI voice agents for inbound call handling, lead qualification, booking, and outbound follow-up workflows connected to your CRM.",
    keywords: [
      "AI voice agents",
      "inbound call automation",
      "outbound call automation",
      "AI receptionist setup",
    ],
    intro:
      "Missed calls and delayed follow-up cost revenue. We deploy voice systems that answer immediately, qualify intent, and route hot leads to your team while syncing every outcome to CRM.",
    deliverables: [
      "Inbound call scripts and FAQ handling",
      "Appointment booking and transfer logic",
      "Outbound reactivation and reminder campaigns",
      "CRM sync for transcripts, outcomes, and tags",
    ],
    outcomes: [
      "More calls answered and converted",
      "Reduced lead leakage after business hours",
      "Consistent qualification before handoff",
    ],
    faq: [
      {
        question: "Will the voice agent sound robotic?",
        answer:
          "No. We configure natural conversational flows and tune scripts for your brand voice and industry context.",
      },
    ],
  },
  {
    slug: "email-sms-follow-up",
    title: "Email + SMS Follow-Up Automation",
    shortDescription:
      "Multi-channel follow-up sequences triggered by real lead behavior.",
    seoTitle: "Email and SMS Follow-Up Automation Services",
    seoDescription:
      "Automate lead response, nurture, reminders, and reactivation with stage-based email and SMS systems connected to your CRM.",
    keywords: [
      "email follow-up automation",
      "sms automation for leads",
      "lead nurture workflows",
      "appointment reminder automation",
    ],
    intro:
      "Manual follow-up is inconsistent and slow. We build behavior-driven workflows so prospects are contacted instantly and nurtured until they book.",
    deliverables: [
      "Immediate lead response and nurture sequences",
      "No-show recovery and reminder automations",
      "Reactivation campaigns for stale opportunities",
      "Segmentation by source, service, and lifecycle stage",
    ],
    outcomes: [
      "Higher contact and response rates",
      "Improved show-up rate for appointments",
      "More predictable pipeline movement",
    ],
    faq: [
      {
        question: "Can follow-up adapt by lead quality or source?",
        answer:
          "Yes. We build branching logic by source, qualification, and behavior so high-intent leads are prioritized.",
      },
    ],
  },
  {
    slug: "n8n-make-automation",
    title: "n8n + Make Workflow Automation",
    shortDescription:
      "Custom automation architecture connecting your CRM, channels, and operations.",
    seoTitle: "n8n and Make Automation Services for CRM Workflows",
    seoDescription:
      "ClientFlow builds n8n and Make automations to connect websites, CRMs, voice systems, ads, and internal tools into one reliable lead engine.",
    keywords: [
      "n8n automation services",
      "Make automation setup",
      "CRM integration workflows",
      "automation orchestration agency",
    ],
    intro:
      "When native integrations are limited, we build robust automation layers in n8n and Make to keep your stack synchronized and auditable.",
    deliverables: [
      "Webhook-based lead routing and transformation",
      "Cross-platform CRM, ads, and messaging sync",
      "Error handling and retry logic",
      "Documented automation maps for maintenance",
    ],
    outcomes: [
      "Less manual data handling across teams",
      "Faster lead distribution and response",
      "Greater system reliability at scale",
    ],
    faq: [
      {
        question: "Should we use n8n or Make?",
        answer:
          "It depends on your complexity, hosting preference, and team capability. We recommend and implement the right fit for your stack.",
      },
    ],
  },
];

export type IndustryPage = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "dental-clinics",
    title: "Dental Marketing Automation Systems",
    seoTitle: "Dental Lead Automation, Call Handling, and Booking Systems",
    seoDescription:
      "ClientFlow builds automation systems for dental clinics: inbound call handling, follow-up reminders, and CRM-connected booking workflows.",
    highlights: [
      "After-hours call capture and appointment booking",
      "No-show reduction via automated reminders",
      "Recall and reactivation campaigns",
    ],
  },
  {
    slug: "home-services",
    title: "Home Services Lead Conversion Systems",
    seoTitle:
      "Home Services Lead Generation and Automation (HVAC, Plumbing, Roofing)",
    seoDescription:
      "Automate inbound calls, outbound reminders, and CRM workflows for home service businesses to increase booked jobs and reduce lead loss.",
    highlights: [
      "Fast routing of urgent service leads",
      "Automated estimate and booking follow-up",
      "Multi-location workflow support",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Lead Qualification Automation",
    seoTitle: "Real Estate CRM and Lead Qualification Automation",
    seoDescription:
      "Improve response time and lead qualification with voice, CRM, and nurture automation tailored to real estate teams.",
    highlights: [
      "Inbound/outbound qualification workflows",
      "Lead stage nurture for buyers and sellers",
      "HubSpot or GHL pipeline visibility",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((item) => item.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industryPages.find((item) => item.slug === slug);
}
