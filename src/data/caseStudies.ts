import type { LucideIcon } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export type CaseStudyOutput = {
  title: string;
  label: string;
  icon: LucideIcon;
  image: string;
};

export type CaseStudyResult = {
  number: string;
  label: string;
  note: string;
};

export type CaseStudyTeamMember = {
  name: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  market: string;
  title: string;
  summary: string;
  heroImage: string;

  duration: string;
  markets: string;
  languages: string[];
  audience: string;
  objective: string;
  capabilities: string[];

  challengeTitle: string;
  challenge: string[];

  insightTitle: string;
  insightQuote: string;
  insightBody: string;

  workTitle: string;
  workIntro: string;
  outputs: CaseStudyOutput[];

  resultsTitle: string;
  results: CaseStudyResult[];

  testimonial?: {
    quote: string;
    initials: string;
    name: string;
    role: string;
    location: string;
  };

  team: CaseStudyTeamMember[];
};

/* =========================================================
   VERIFIED CASE STUDIES

   Source: Bwanji Website Copy Final(2).docx

   Only client-supplied projects are included.

   Images are illustrative placeholders, not actual
   campaign photographs.

   Empty outputs, testimonials and team arrays mean
   those details were not supplied by the client.
========================================================= */

export const caseStudies: CaseStudy[] = [
  /* =======================================================
     01 — OLD MUTUAL AFRICA: #SISONKE
  ======================================================= */

  {
    slug: "sisonke-community-heroes",

    client: "Old Mutual Africa",
    sector: "Financial Services",
    year: "2021",
    market: "Malawi & Zimbabwe",

    title: "#Sisonke: Recognising Africa's Community Heroes",

    summary:
      "A Pan-African campaign honouring the people who showed up for their communities during COVID-19, run by Magna Carta across Malawi and Zimbabwe.",

    heroImage:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2200&q=85",

    duration: "May – August 2021",
    markets: "Malawi and Zimbabwe",

    languages: [],

    audience:
      "Communities across Malawi and Zimbabwe, including people nominating local community heroes.",

    objective:
      "Recognise community heroes who supported others during the COVID-19 pandemic and encourage public participation through social media nominations.",

    capabilities: [
      "Public Relations",
      "Digital & Performance",
      "Creative & Content",
    ],

    challengeTitle: "Recognising the people who showed up.",

    challenge: [
      "Old Mutual launched #Sisonke, a Pan-African campaign across Kenya, Malawi, South Africa and Zimbabwe to recognise community heroes during the COVID-19 pandemic.",

      "The campaign celebrated people who supported their communities when it mattered most.",

      "As part of the wider agency network, we managed the Malawi and Zimbabwe campaigns through one coordinated regional approach.",
    ],

    insightTitle: "One coordinated campaign across two markets.",

    insightQuote: "Recognising the people who showed up for their communities.",

    insightBody:
      "The campaign centred on social media nominations, inviting communities to recognise individuals who had made a difference during the pandemic. Media announcements and public relations activity supported participation and directed audiences to Old Mutual's social platforms.",

    workTitle: "Taking community recognition across media channels.",

    workIntro:
      "We used social media, print, online and radio announcements to generate awareness and drive audiences to Old Mutual's social platforms. A Malawi media briefing supported the launch, while press conferences marked the opening of the competition and the announcement of the winners.",

    outputs: [],

    resultsTitle: "Reported campaign reach.",

    results: [
      {
        number: "71,627,293",
        label: "Total media reach",
        note: "Combined reported reach from the competition and winners' announcements.",
      },
      {
        number: "65,301,651",
        label: "Competition announcement reach",
        note: "47 media hits and 5 interviews.",
      },
      {
        number: "6,325,642",
        label: "Winners' announcement reach",
        note: "28 media hits and 7 interviews.",
      },
    ],

    team: [],
  },

  /* =======================================================
     02 — PSI MALAWI: NDITHA / I CAN
  ======================================================= */

  {
    slug: "nditha-i-can",

    client: "PSI Malawi",
    sector: "Public Health",
    year: "",
    market: "Malawi & Zimbabwe",

    title: "Nditha: Proving Life Doesn't Stop",

    summary:
      "A behavioural change campaign showing people living with HIV what's possible when they stay on treatment, built around the message 'I can.'",

    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2200&q=85",

    duration: "Campaign",
    markets: "Malawi and Zimbabwe",

    languages: [],

    audience:
      "People living with HIV and communities across Malawi and Zimbabwe.",

    objective:
      "Show people living with HIV the possibilities of living a full life while staying on treatment.",

    capabilities: [
      "Public Relations",
      "Creative & Content",
      "Activation & Experiential",
      "Digital & Performance",
    ],

    challengeTitle: "Changing the conversation around living with HIV.",

    challenge: [
      "PSI ran the Nditha (#ICAN) behavioural change campaign across Malawi and Zimbabwe to show what is possible when people living with HIV stay on treatment.",

      "The campaign reinforced the message that an HIV-positive diagnosis does not rule out a full life.",

      "Its central message connected treatment to everyday possibilities: living a long life, having children, loving, playing, running and learning.",
    ],

    insightTitle: "Trusted community voices helped carry the message.",

    insightQuote: "With HIV treatment, I can live a full life.",

    insightBody:
      "The campaign worked with people communities already trusted, including traditional leaders, district nurses, support workers, local community leaders and religious leaders across Christian, Muslim and traditional faiths.",

    workTitle: "Taking the message into communities.",

    workIntro:
      "We led with talk shows, community dialogues, roadshows and advocacy work. Community radio, radio drama, television, social media, YouTube and a dedicated microsite extended the campaign's reach across Malawi and Zimbabwe.",

    outputs: [],

    resultsTitle: "A coordinated campaign across two markets.",

    results: [
      {
        number: "8,071,571",
        label: "Radio reach",
        note: "Reported campaign reach.",
      },
      {
        number: "5,962,878",
        label: "TV reach",
        note: "Reported campaign reach.",
      },
      {
        number: "1,641,991",
        label: "Facebook reach",
        note: "Reported campaign reach.",
      },
      {
        number: "12",
        label: "Radio drama episodes",
        note: "Produced for the campaign.",
      },
      {
        number: "6",
        label: "TV panel discussions",
        note: "Produced for the campaign.",
      },
    ],

    team: [],
  },

  /* =======================================================
     03 — OLD MUTUAL MALAWI: FDH IPO
  ======================================================= */

  {
    slug: "fdh-ipo-crisis-management",

    client: "Old Mutual Malawi",
    sector: "Financial Services",
    year: "2020",
    market: "Malawi",

    title: "Turning an IPO Story Around",

    summary:
      "When a news story accused Old Mutual of corporate sabotage over an FDH Bank share deal, we built a journalist roundtable that replaced speculation with context.",

    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",

    duration: "July – August 2020",
    markets: "Malawi",

    languages: [],

    audience:
      "Business journalists and audiences following financial market developments in Malawi.",

    objective:
      "Explain how IPOs work, reduce negative commentary and build positive sentiment around Old Mutual's role in Malawi's economy.",

    capabilities: [
      "Public Relations",
      "Crisis Management",
      "Stakeholder Relations",
    ],

    challengeTitle: "Replacing speculation with financial market context.",

    challenge: [
      "Old Mutual Malawi was buying a stake in FDH Bank when a Nyasa Times article accused the company of corporate sabotage over FDH shares.",

      "The story triggered negative commentary on social media.",

      "The response needed to explain how IPOs work and clarify the roles of Old Mutual and other market intermediaries.",
    ],

    insightTitle: "Giving journalists the context behind the story.",

    insightQuote:
      "A clearer understanding of the IPO process helped journalists explain the story.",

    insightBody:
      "A financial services roundtable brought together experts from the Malawi Stock Exchange, Reserve Bank of Malawi, Standard Bank and Cedar Capital Stock Brokers. Held on Zoom during the COVID-19 pandemic, the discussion explained IPO mechanics, used local listing examples and clarified the roles of market intermediaries.",

    workTitle: "Creating a platform for informed discussion.",

    workIntro:
      "We convened a roundtable for business journalists, followed by an article from an independent financial services advisor and an interview with a panellist. Coverage appeared in Nyasa Times, Maravi Express, Capital FM, Zodiak Broadcasting, The Daily Times and National Publications.",

    outputs: [],

    resultsTitle: "Reported coverage and response.",

    results: [
      {
        number: "MK1,027,000",
        label: "Reported media PR value",
        note: "Equivalent to US$1,399 in the supplied campaign report.",
      },
      {
        number: "19",
        label: "Roundtable attendees",
        note: "Panellists, journalists and invited guests.",
      },
      {
        number: "6",
        label: "Media outlets reporting coverage",
        note: "Nyasa Times, Maravi Express, Capital FM, Zodiak Broadcasting, The Daily Times and National Publications.",
      },
    ],

    team: [],
  },

  /* =======================================================
     04 — DT GLOBAL (USAID): TCHOOVA NJINGA
  ======================================================= */

  {
    slug: "tchoova-njinga-innovation-challenge",

    client: "DT Global (USAID)",
    sector: "Development & Aid",
    year: "2025",
    market: "Malawi & Zambia",

    title: "Two Markets, One Challenge",

    summary:
      "One campaign, two very different media landscapes. We built distinct channel and influencer strategies for Zambia and Malawi rather than running a single regional playbook.",

    heroImage:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=2200&q=85",

    duration: "2024–2025",
    markets: "Malawi and Zambia",

    languages: [],

    audience:
      "Entrepreneurs and innovators in Malawi and Zambia developing bicycle-related solutions for healthcare access and economic mobility.",

    objective:
      "Support communications and stakeholder engagement for the Tchoova Njinga Innovation Challenge across Malawi and Zambia.",

    capabilities: [
      "Public Relations",
      "Stakeholder Relations",
      "Digital & Performance",
    ],

    challengeTitle:
      "One innovation challenge, two different media environments.",

    challenge: [
      "USAID's Tchoova Njinga Innovation Challenge invited entrepreneurs and innovators in Malawi and Zambia to submit concept notes for bicycle-related solutions addressing healthcare access and economic mobility.",

      "Implemented through USAID's IDEAS mechanism, the challenge launched with a stakeholder and ministerial roundtable in Lilongwe on 9 December 2024.",

      "Running the campaign across two markets required communications approaches suited to each country's media landscape.",
    ],

    insightTitle: "One regional brief required two local media strategies.",

    insightQuote:
      "Effective regional communication means adapting the approach to each market.",

    insightBody:
      "In Zambia, the approach used national and regional radio, the Daily Mail, Times of Zambia, Diamond TV and Muvi TV, alongside sustainability and innovation-focused influencers and industry experts in transportation and green technology. In Malawi, the mix shifted to Zodiak, Times, MBC and The Nation's Chichewa and Tumbuka publication. Chiefs, district officials, teachers and health professionals provided trusted local voices, while WhatsApp groups connected the campaign with NGOs, students and communities.",

    workTitle: "Building distinct communications approaches for each country.",

    workIntro:
      "The campaign combined market-specific media planning, influencer engagement and stakeholder communications. Zambia's approach emphasised national and regional media alongside industry experts. Malawi's approach used community networks, trusted local leaders and WhatsApp groups to reach audiences that broader digital channels might miss.",

    outputs: [],

    resultsTitle: "Campaign approach",

    // Client explicitly requested no outcome
    // statistic for this case study.
    results: [],

    team: [],
  },
];

/* =========================================================
   HELPERS
========================================================= */

export function getCaseStudyBySlug(slug?: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
