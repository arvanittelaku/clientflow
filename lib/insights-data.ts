export type InsightCategory = {
  slug: string;
  name: string;
  description: string;
};

export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  categorySlug: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  keywords: string[];
  relatedServiceSlug?: string;
  relatedPostSlugs: string[];
  sections: InsightSection[];
};

export const insightCategories: InsightCategory[] = [
  {
    slug: "gohighlevel",
    name: "GoHighLevel",
    description:
      "Pipeline design, automations, and appointment workflows for GoHighLevel users.",
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    description:
      "CRM architecture, lifecycle automation, and reporting for HubSpot teams.",
  },
  {
    slug: "ai-voice",
    name: "AI Voice",
    description:
      "Inbound and outbound call automation strategies that improve conversion.",
  },
  {
    slug: "automation",
    name: "Automation",
    description:
      "n8n, Make, and cross-platform workflow design for lead operations.",
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    description:
      "Speed-to-lead, follow-up systems, and conversion optimization tactics.",
  },
  {
    slug: "websites",
    name: "Websites",
    description:
      "Conversion-focused website strategy, UX, and technical SEO foundations.",
  },
];

export const insightPosts: InsightPost[] = [
  {
    slug: "go-high-level-automation-for-local-businesses",
    title: "GoHighLevel Automation for Local Businesses: A Practical Setup Guide",
    excerpt:
      "How to structure pipelines, triggers, and follow-up in GoHighLevel so no local lead is missed.",
    seoTitle: "GoHighLevel Automation for Local Businesses",
    seoDescription:
      "Learn how to configure GoHighLevel pipelines, SMS workflows, and appointment automations for local service businesses.",
    categorySlug: "gohighlevel",
    publishedAt: "2025-11-12",
    updatedAt: "2026-05-20",
    readTimeMinutes: 8,
    keywords: [
      "GoHighLevel automation",
      "GHL local business",
      "GoHighLevel pipeline setup",
    ],
    relatedServiceSlug: "go-high-level-crm",
    relatedPostSlugs: [
      "ghl-pipeline-design-for-appointment-booking",
      "speed-to-lead-automation-checklist",
    ],
    sections: [
      {
        heading: "Start with your real sales process",
        paragraphs: [
          "Most GoHighLevel setups fail because pipelines mirror software defaults, not how leads are actually handled. Map every step from first contact to booked appointment before building automations.",
        ],
      },
      {
        heading: "Core automations every local business needs",
        bullets: [
          "Instant SMS + email response after form submission",
          "Missed-call text-back and callback task creation",
          "Appointment reminders at 24h and 2h",
          "No-show recovery sequence with rebooking CTA",
        ],
      },
      {
        heading: "Measure what matters",
        paragraphs: [
          "Track speed-to-lead, contact rate, booking rate, and show rate by source. Optimization should focus on bottlenecks, not vanity metrics.",
        ],
      },
    ],
  },
  {
    slug: "hubspot-vs-gohighlevel-for-service-businesses",
    title: "HubSpot vs GoHighLevel: Which CRM Fits Service Businesses?",
    excerpt:
      "A decision framework for choosing HubSpot or GoHighLevel based on sales model, team size, and automation needs.",
    seoTitle: "HubSpot vs GoHighLevel for Service Businesses",
    seoDescription:
      "Compare HubSpot and GoHighLevel for service businesses: pipelines, automation, reporting, and implementation complexity.",
    categorySlug: "hubspot",
    publishedAt: "2025-10-28",
    updatedAt: "2026-05-18",
    readTimeMinutes: 9,
    keywords: ["HubSpot vs GoHighLevel", "CRM for service business"],
    relatedServiceSlug: "hubspot-crm",
    relatedPostSlugs: [
      "hubspot-workflow-automation-for-b2b-services",
      "go-high-level-automation-for-local-businesses",
    ],
    sections: [
      {
        heading: "When GoHighLevel is the better fit",
        paragraphs: [
          "GoHighLevel excels for local and high-volume service businesses that need fast communication, appointment workflows, and all-in-one marketing operations.",
        ],
      },
      {
        heading: "When HubSpot is the better fit",
        paragraphs: [
          "HubSpot is stronger for teams needing advanced lifecycle modeling, marketing attribution, and structured B2B deal management with deeper reporting.",
        ],
      },
      {
        heading: "Implementation recommendation",
        paragraphs: [
          "Choose based on your primary conversion motion: appointment booking vs complex deal cycles. Many businesses do not need both platforms on day one.",
        ],
      },
    ],
  },
  {
    slug: "ai-voice-agent-setup-for-missed-calls",
    title: "AI Voice Agent Setup for Missed Calls: From Script to CRM Sync",
    excerpt:
      "Deploy an AI receptionist that answers, qualifies, and books while logging every outcome in your CRM.",
    seoTitle: "AI Voice Agent Setup for Missed Calls",
    seoDescription:
      "Step-by-step guide to deploying AI voice agents for inbound call handling, qualification, and CRM logging.",
    categorySlug: "ai-voice",
    publishedAt: "2025-12-03",
    updatedAt: "2026-05-22",
    readTimeMinutes: 7,
    keywords: ["AI voice agent", "missed call automation", "AI receptionist"],
    relatedServiceSlug: "ai-voice-agents",
    relatedPostSlugs: [
      "outbound-call-automation-for-lead-reactivation",
      "dental-clinic-lead-automation-playbook",
    ],
    sections: [
      {
        heading: "Define call outcomes first",
        bullets: [
          "Book appointment",
          "Transfer to human",
          "Capture callback request",
          "Disqualify and nurture",
        ],
      },
      {
        heading: "Script for clarity, not length",
        paragraphs: [
          "Keep prompts short and intent-focused. Over-scripted voice flows increase drop-off and reduce booking rates.",
        ],
      },
      {
        heading: "Sync every call to CRM",
        paragraphs: [
          "Tag source, intent, and outcome automatically. Sales teams should never manually re-enter call details.",
        ],
      },
    ],
  },
  {
    slug: "n8n-vs-make-for-crm-automation",
    title: "n8n vs Make for CRM Automation: Which Should You Use?",
    excerpt:
      "Choose the right orchestration layer for your lead stack based on complexity, control, and team skills.",
    seoTitle: "n8n vs Make for CRM Automation",
    seoDescription:
      "Compare n8n and Make for CRM automation workflows, integrations, and long-term maintainability.",
    categorySlug: "automation",
    publishedAt: "2025-11-20",
    updatedAt: "2026-05-19",
    readTimeMinutes: 8,
    keywords: ["n8n vs Make", "CRM automation workflows"],
    relatedServiceSlug: "n8n-make-automation",
    relatedPostSlugs: [
      "speed-to-lead-automation-checklist",
      "home-services-lead-routing-automation",
    ],
    sections: [
      {
        heading: "Make strengths",
        paragraphs: [
          "Make is excellent for visual, fast-to-launch automations between common SaaS tools with lower technical overhead.",
        ],
      },
      {
        heading: "n8n strengths",
        paragraphs: [
          "n8n provides deeper control for custom logic, self-hosting, and complex data transformations across systems.",
        ],
      },
      {
        heading: "Practical recommendation",
        paragraphs: [
          "Use Make for marketing ops automations and n8n for mission-critical lead routing with strict error handling.",
        ],
      },
    ],
  },
  {
    slug: "speed-to-lead-automation-checklist",
    title: "Speed-to-Lead Automation Checklist for Service Businesses",
    excerpt:
      "A 12-point checklist to ensure every lead gets instant response and structured follow-up.",
    seoTitle: "Speed-to-Lead Automation Checklist",
    seoDescription:
      "Use this speed-to-lead automation checklist to improve response time, contact rate, and booked appointments.",
    categorySlug: "lead-generation",
    publishedAt: "2025-12-15",
    updatedAt: "2026-05-21",
    readTimeMinutes: 6,
    keywords: ["speed to lead", "lead response automation"],
    relatedPostSlugs: [
      "email-sms-follow-up-sequences-that-book-calls",
      "go-high-level-automation-for-local-businesses",
    ],
    sections: [
      {
        heading: "Response layer",
        bullets: [
          "Instant SMS confirmation",
          "Immediate email with next step",
          "Voice agent or call routing for hot leads",
        ],
      },
      {
        heading: "Routing layer",
        bullets: [
          "Assign owner by territory or service type",
          "Escalate uncontacted leads after 15 minutes",
          "Alert manager on high-value opportunities",
        ],
      },
      {
        heading: "Recovery layer",
        paragraphs: [
          "Leads untouched after 24 hours should enter a reactivation sequence automatically.",
        ],
      },
    ],
  },
  {
    slug: "conversion-website-structure-for-service-businesses",
    title: "Conversion Website Structure for Service Businesses",
    excerpt:
      "The exact page structure that turns traffic into qualified calls and booked appointments.",
    seoTitle: "Conversion Website Structure for Service Businesses",
    seoDescription:
      "Learn the conversion website structure that improves lead quality and booked calls for service businesses.",
    categorySlug: "websites",
    publishedAt: "2025-10-10",
    updatedAt: "2026-05-17",
    readTimeMinutes: 7,
    keywords: ["conversion website structure", "service business website"],
    relatedServiceSlug: "conversion-websites",
    relatedPostSlugs: [
      "speed-to-lead-automation-checklist",
      "hubspot-vs-gohighlevel-for-service-businesses",
    ],
    sections: [
      {
        heading: "Homepage must sell one offer",
        paragraphs: [
          "Visitors should understand who you help, what outcome you deliver, and how to book within five seconds.",
        ],
      },
      {
        heading: "Service pages need proof + CTA",
        bullets: [
          "Specific outcomes",
          "Process clarity",
          "Case examples",
          "Single primary CTA",
        ],
      },
      {
        heading: "Technical SEO basics",
        paragraphs: [
          "Fast load times, semantic headings, schema markup, and clean internal links are mandatory for sustainable organic growth.",
        ],
      },
    ],
  },
  {
    slug: "outbound-call-automation-for-lead-reactivation",
    title: "Outbound Call Automation for Lead Reactivation",
    excerpt:
      "Turn stale CRM leads into booked calls with structured outbound voice and SMS workflows.",
    seoTitle: "Outbound Call Automation for Lead Reactivation",
    seoDescription:
      "How to use outbound call automation and follow-up sequences to reactivate stale leads in your CRM.",
    categorySlug: "ai-voice",
    publishedAt: "2026-01-08",
    updatedAt: "2026-05-23",
    readTimeMinutes: 7,
    keywords: ["outbound call automation", "lead reactivation"],
    relatedServiceSlug: "ai-voice-agents",
    relatedPostSlugs: [
      "ai-voice-agent-setup-for-missed-calls",
      "email-sms-follow-up-sequences-that-book-calls",
    ],
    sections: [
      {
        heading: "Segment before dialing",
        paragraphs: [
          "Reactivation campaigns fail when every old lead gets the same script. Segment by last activity, service interest, and lead score.",
        ],
      },
      {
        heading: "Use multi-channel follow-up",
        paragraphs: [
          "Pair outbound calls with SMS and email touchpoints to maximize contact probability without burning your list.",
        ],
      },
    ],
  },
  {
    slug: "email-sms-follow-up-sequences-that-book-calls",
    title: "Email and SMS Follow-Up Sequences That Book More Calls",
    excerpt:
      "Behavior-based nurture flows that move leads from first touch to booked appointment.",
    seoTitle: "Email and SMS Follow-Up Sequences That Book Calls",
    seoDescription:
      "Build email and SMS follow-up sequences that increase response rates and booked discovery calls.",
    categorySlug: "lead-generation",
    publishedAt: "2026-01-22",
    updatedAt: "2026-05-24",
    readTimeMinutes: 8,
    keywords: ["email follow-up automation", "SMS lead nurture"],
    relatedServiceSlug: "email-sms-follow-up",
    relatedPostSlugs: [
      "speed-to-lead-automation-checklist",
      "ghl-pipeline-design-for-appointment-booking",
    ],
    sections: [
      {
        heading: "Sequence architecture",
        bullets: [
          "Immediate response message",
          "Value + proof message",
          "Objection handling message",
          "Final booking push",
        ],
      },
      {
        heading: "Timing and triggers",
        paragraphs: [
          "Trigger messages by pipeline stage and engagement behavior, not static day delays only.",
        ],
      },
    ],
  },
  {
    slug: "ghl-pipeline-design-for-appointment-booking",
    title: "GHL Pipeline Design for Appointment Booking",
    excerpt:
      "A proven GoHighLevel pipeline model for service businesses focused on booked calls.",
    seoTitle: "GHL Pipeline Design for Appointment Booking",
    seoDescription:
      "Design a GoHighLevel pipeline optimized for appointment booking, reminders, and conversion tracking.",
    categorySlug: "gohighlevel",
    publishedAt: "2026-02-05",
    updatedAt: "2026-05-25",
    readTimeMinutes: 6,
    keywords: ["GHL pipeline design", "appointment booking automation"],
    relatedServiceSlug: "go-high-level-crm",
    relatedPostSlugs: [
      "go-high-level-automation-for-local-businesses",
      "email-sms-follow-up-sequences-that-book-calls",
    ],
    sections: [
      {
        heading: "Recommended stages",
        bullets: [
          "New Lead",
          "Contacted",
          "Qualified",
          "Appointment Set",
          "Showed",
          "Closed Won",
        ],
      },
      {
        heading: "Automation per stage",
        paragraphs: [
          "Each stage should trigger specific communication and internal tasks so reps always know the next action.",
        ],
      },
    ],
  },
  {
    slug: "hubspot-workflow-automation-for-b2b-services",
    title: "HubSpot Workflow Automation for B2B Service Companies",
    excerpt:
      "How to structure lifecycle stages, lead scoring, and nurture in HubSpot for complex sales cycles.",
    seoTitle: "HubSpot Workflow Automation for B2B Services",
    seoDescription:
      "Implement HubSpot workflow automation for B2B service companies with lifecycle stages and lead scoring.",
    categorySlug: "hubspot",
    publishedAt: "2026-02-18",
    updatedAt: "2026-05-26",
    readTimeMinutes: 8,
    keywords: ["HubSpot workflow automation", "B2B service CRM"],
    relatedServiceSlug: "hubspot-crm",
    relatedPostSlugs: [
      "hubspot-vs-gohighlevel-for-service-businesses",
      "n8n-vs-make-for-crm-automation",
    ],
    sections: [
      {
        heading: "Lifecycle-first design",
        paragraphs: [
          "Define lifecycle stages based on buyer readiness, not just marketing funnel labels.",
        ],
      },
      {
        heading: "Lead scoring that sales trusts",
        paragraphs: [
          "Score engagement and fit signals transparently so sales accepts automated handoffs.",
        ],
      },
    ],
  },
  {
    slug: "dental-clinic-lead-automation-playbook",
    title: "Dental Clinic Lead Automation Playbook",
    excerpt:
      "A practical automation blueprint for dental clinics to reduce missed calls and increase bookings.",
    seoTitle: "Dental Clinic Lead Automation Playbook",
    seoDescription:
      "Dental clinic automation playbook: inbound call handling, reminders, and CRM workflows to increase booked appointments.",
    categorySlug: "lead-generation",
    publishedAt: "2026-03-01",
    updatedAt: "2026-05-27",
    readTimeMinutes: 7,
    keywords: ["dental clinic automation", "dental lead generation"],
    relatedPostSlugs: [
      "ai-voice-agent-setup-for-missed-calls",
      "go-high-level-automation-for-local-businesses",
    ],
    sections: [
      {
        heading: "Priority automations",
        bullets: [
          "After-hours AI call answering",
          "Appointment reminders",
          "Recall campaigns for inactive patients",
        ],
      },
      {
        heading: "Expected outcomes",
        paragraphs: [
          "Clinics typically see fewer no-shows and higher after-hours capture within the first 30 days.",
        ],
      },
    ],
  },
  {
    slug: "home-services-lead-routing-automation",
    title: "Home Services Lead Routing Automation",
    excerpt:
      "Route urgent and high-value home service leads instantly with workflow automation.",
    seoTitle: "Home Services Lead Routing Automation",
    seoDescription:
      "Automate home services lead routing by location, service type, and urgency using CRM and workflow tools.",
    categorySlug: "automation",
    publishedAt: "2026-03-12",
    updatedAt: "2026-05-28",
    readTimeMinutes: 6,
    keywords: ["home services lead routing", "field service automation"],
    relatedPostSlugs: [
      "n8n-vs-make-for-crm-automation",
      "speed-to-lead-automation-checklist",
    ],
    sections: [
      {
        heading: "Routing logic",
        bullets: [
          "Route by ZIP and technician availability",
          "Escalate emergency jobs immediately",
          "Notify dispatch via Slack/SMS",
        ],
      },
      {
        heading: "Follow-up automation",
        paragraphs: [
          "Unbooked estimates should automatically enter a quote follow-up sequence within minutes.",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return insightCategories.find((category) => category.slug === slug);
}

export function getPostBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string) {
  return insightPosts.filter((post) => post.categorySlug === categorySlug);
}

export function getRelatedPosts(slugs: string[]) {
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is InsightPost => Boolean(post));
}
