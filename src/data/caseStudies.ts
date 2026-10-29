import {
  Film,
  Image as ImageIcon,
  Radio,
  Share2,
  type LucideIcon,
} from "lucide-react";

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
   CASE STUDIES
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
      "Recognise people who supported their communities during the COVID-19 pandemic and encourage public participation through social media nominations.",

    capabilities: [
      "Public Relations",
      "Digital & Performance",
      "Creative & Content",
    ],

    challengeTitle: "Recognising the people who showed up.",

    challenge: [
      "Old Mutual launched #Sisonke, a Pan-African campaign across Kenya, Malawi, South Africa and Zimbabwe to recognise community heroes during the COVID-19 pandemic.",

      "These heroes were people who supported their communities when it mattered most.",

      "As part of the wider agency network, the Malawi and Zimbabwe campaigns needed to be managed through one coordinated regional approach.",
    ],

    insightTitle:
      "A coordinated regional campaign, adapted to local audiences.",

    insightQuote:
      "The campaign placed community heroes at the centre of the conversation.",

    insightBody:
      "The campaign was built around social media nominations, giving people an opportunity to recognise individuals making a difference in their communities. Media announcements and public relations activity helped extend participation beyond Old Mutual's existing social audiences.",

    workTitle: "Making community recognition visible.",

    workIntro:
      "We used a coordinated mix of social media, print, online and radio announcements to drive audiences to Old Mutual's social platforms. A Malawi media briefing supported the launch, while press conferences marked the opening of the competition and the announcement of the winners.",

    outputs: [],

    resultsTitle: "A campaign with regional reach.",

    results: [
      {
        number: "71,627,293",
        label: "Total media reach",
        note: "Combined reported reach across the competition and winners' announcements.",
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
      "A behavioural change campaign showing people living with HIV what is possible when they stay on treatment, built around the message 'I can.'",

    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2200&q=85",

    duration: "Campaign",
    markets: "Malawi and Zimbabwe",

    languages: [],

    audience:
      "People living with HIV, their communities and trusted local community influencers.",

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

      "The campaign needed to reinforce the message that an HIV-positive diagnosis does not rule out a full and meaningful life.",

      "Its central message connected treatment to everyday possibilities: living a long life, having children, loving, playing, running and learning.",
    ],

    insightTitle: "Trusted community voices helped carry the message.",

    insightQuote: "With HIV treatment, I can live a full life.",

    insightBody:
      "The campaign worked with people communities already trusted, including traditional leaders, district nurses, support workers, community leaders and religious leaders across Christian, Muslim and traditional faiths. These voices helped make the message relevant and credible in different communities.",

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
      "Business journalists, financial services stakeholders and the wider Malawian public.",

    objective:
      "Explain how IPOs and market intermediaries work, reduce negative commentary and build positive sentiment around Old Mutual's role in Malawi's economy.",

    capabilities: [
      "Public Relations",
      "Crisis Management",
      "Stakeholder Relations",
    ],

    challengeTitle: "Replacing speculation with financial market context.",

    challenge: [
      "Old Mutual Malawi was acquiring a stake in FDH Bank when a Nyasa Times article accused the company of corporate sabotage over FDH shares.",

      "The story triggered negative commentary on social media and created a reputational challenge.",

      "The response needed to explain how IPOs work, clarify the role of market intermediaries and help the public understand Old Mutual's involvement.",
    ],

    insightTitle: "Journalists needed context to explain the story accurately.",

    insightQuote:
      "A better understanding of the IPO process could help move the conversation beyond speculation.",

    insightBody:
      "A financial services roundtable brought together experts from the Malawi Stock Exchange, Reserve Bank of Malawi, Standard Bank and Cedar Capital Stock Brokers. Held on Zoom during the COVID-19 pandemic, the discussion explained IPO mechanics, used local listing examples and clarified the roles of different market intermediaries.",

    workTitle: "Creating a platform for informed discussion.",

    workIntro:
      "We convened a roundtable for business journalists, followed by an article from an independent financial services advisor and an interview with a panellist. Coverage appeared in Nyasa Times, Maravi Express, Capital FM, Zodiak Broadcasting, The Daily Times and National Publications.",

    outputs: [],

    resultsTitle: "A more informed public conversation.",

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
      {
        number: "Reduced",
        label: "Negative commentary",
        note: "The supplied report states that negative commentary dropped after the roundtable content was distributed.",
      },
    ],

    team: [],
  },

  /* =======================================================
     04 — DT GLOBAL: TCHOOVA NJINGA
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
      "Entrepreneurs, innovators, stakeholders and communities interested in bicycle-related solutions for healthcare access and economic mobility.",

    objective:
      "Build awareness and engagement around the Tchoova Njinga Innovation Challenge across Malawi and Zambia.",

    capabilities: [
      "Public Relations",
      "Stakeholder Relations",
      "Digital & Performance",
    ],

    challengeTitle:
      "One innovation challenge, two different media environments.",

    challenge: [
      "USAID's Tchoova Njinga Innovation Challenge invited entrepreneurs and innovators in Malawi and Zambia to submit bicycle-related solutions addressing healthcare access and economic mobility.",

      "Implemented through USAID's IDEAS mechanism, the challenge launched with a stakeholder and ministerial roundtable in Lilongwe on 9 December 2024.",

      "A regional campaign needed to reach audiences in two countries with different media habits, trusted community voices and communications channels.",
    ],

    insightTitle: "One regional brief required two local media strategies.",

    insightQuote:
      "Effective regional communication means adapting the approach to each market.",

    insightBody:
      "In Zambia, the strategy used national and regional radio, the Daily Mail, Times of Zambia, Diamond TV and Muvi TV, supported by sustainability, transportation and green-technology influencers. In Malawi, the mix shifted to Zodiak, Times, MBC and The Nation's Chichewa and Tumbuka publication. Chiefs, district officials, teachers and health professionals provided trusted local voices, while WhatsApp networks helped connect the campaign with NGOs, students and community groups.",

    workTitle: "Building distinct communications approaches for each country.",

    workIntro:
      "The campaign combined market-specific media planning, influencer engagement and stakeholder communications. Zambia's approach emphasised national and regional media alongside industry experts. Malawi's approach used community networks, trusted local leaders and WhatsApp groups to reach audiences that broader digital channels might miss.",

    outputs: [],

    resultsTitle: "Campaign approach",

    // The original copy explicitly instructs that no
    // outcome statistic should be displayed for this case.
    results: [],

    team: [],
  },

  /* =======================================================
     05 — OLD MUTUAL ZAMBIA
     EXISTING CASE STUDY — REQUIRES VERIFICATION
  ======================================================= */

  {
    slug: "insurance-in-the-language-of-the-market",
    client: "Old Mutual Zambia",
    sector: "Financial Services",
    year: "2025",
    market: "Zambia",

    title: "Insurance in the Language of the Market",

    summary:
      "A Bemba-language creative campaign that changed how Lusaka and the Copperbelt understood life cover.",

    heroImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2200&q=90",

    duration: "14 weeks",
    markets: "Lusaka and the Copperbelt",

    languages: ["English", "Bemba", "Nyanja"],

    audience: "Adults aged 28–45 in Lusaka and the Copperbelt",

    objective: "Increase trust and completed life-cover quotations",

    capabilities: [
      "Brand Strategy",
      "Creative & Content",
      "Digital & Performance",
    ],

    challengeTitle: "The product was familiar. Trust in the category was not.",

    challenge: [
      "Old Mutual Zambia had a product-trust problem. In a market where insurance was often associated with paperwork, uncertainty, and policies that felt distant from everyday life, uptake among adults aged 28–45 had plateaued.",

      "The existing English-language campaign was delivering media impressions, but it was not changing behaviour.",

      "We had 14 weeks, two priority markets, and a media budget that needed to produce measurable action.",
    ],

    insightTitle: "Language became the trust signal.",

    insightQuote:
      "Language is not only a communication choice. It is a signal of trust, belonging, and whether the brand understands the person it is speaking to.",

    insightBody:
      "Bemba-speaking audiences in the Copperbelt were not a niche segment. During focus groups in Kitwe and Ndola, Bemba executions scored three times higher on comprehension and twice as high on trust as their English-language equivalents.",

    workTitle:
      "One campaign idea, expressed in the channels people actually use.",

    workIntro:
      "We built the campaign around familiar language, recognisable situations, and simple explanations of what life cover was designed to protect.",

    outputs: [
      {
        title: "30-second Bemba-language TVC",
        label: "Film",
        icon: Film,
        image:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "OOH across 12 Copperbelt sites",
        label: "Outdoor",
        icon: ImageIcon,
        image:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "8-week Meta social content calendar",
        label: "Social",
        icon: Share2,
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Radio spots across Phoenix, Zambezi FM and Hot FM",
        label: "Audio",
        icon: Radio,
        image:
          "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1400&q=85",
      },
    ],

    resultsTitle: "The market did not only notice the campaign. It acted.",

    results: [
      {
        number: "34%",
        label: "increase in quote completions",
        note: "Post-campaign versus pre-campaign baseline over eight weeks.",
      },
      {
        number: "3×",
        label: "higher Bemba ad recall versus English",
        note: "Post-campaign recall study across Kitwe and Ndola.",
      },
      {
        number: "210K",
        label: "estimated outdoor impressions",
        note: "Estimated audience across the eight-week campaign period.",
      },
    ],

    testimonial: {
      quote:
        "Bwanji didn't just deliver a campaign. They told us what was actually happening in the market.",
      initials: "CM",
      name: "Chilufya Mwamba",
      role: "CMO, Old Mutual Zambia",
      location: "Lusaka, Zambia",
    },

    team: [
      {
        name: "John Doe",
        role: "Creative Director",
      },
      {
        name: "Jane Smith",
        role: "Lead Strategist",
      },
      {
        name: "Mike Johnson",
        role: "Bemba Copywriter",
      },
    ],
  },

  /* =======================================================
     06 — PSI MALAWI: LAST MILE
     EXISTING CASE STUDY — REQUIRES VERIFICATION
  ======================================================= */

  {
    slug: "behaviour-change-at-last-mile",
    client: "PSI Malawi",
    sector: "Public Health",
    year: "2025",
    market: "Malawi",

    title: "Behaviour Change at Last Mile",

    summary:
      "A local-language health campaign designed to reach households across 12 districts.",

    heroImage:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2200&q=90",

    duration: "18 weeks",
    markets: "12 districts across Malawi",

    languages: ["Chichewa", "Tumbuka", "English"],

    audience: "Households in rural and peri-urban communities",

    objective: "Increase awareness and adoption of healthier behaviours",

    capabilities: [
      "Brand Strategy",
      "Creative & Content",
      "Activation & Experiential",
    ],

    challengeTitle:
      "National messaging was not reaching households in a useful form.",

    challenge: [
      "The programme needed to communicate health information across communities with different languages, access patterns, and levels of media exposure.",

      "Generic English-language communication was failing to create enough relevance or recall.",

      "The solution needed to work through both media and direct community engagement.",
    ],

    insightTitle: "Trust travelled through familiar voices.",

    insightQuote:
      "People were more likely to act when the message sounded like it came from the community rather than from an institution.",

    insightBody:
      "Local language, community facilitators, radio, and practical demonstrations created a stronger bridge between awareness and action.",

    workTitle: "A campaign built for the final mile.",

    workIntro:
      "We combined local-language radio, community materials, field activations, and facilitator toolkits.",

    outputs: [
      {
        title: "Chichewa and Tumbuka radio spots",
        label: "Radio",
        icon: Radio,
        image:
          "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Community facilitator toolkit",
        label: "Field",
        icon: ImageIcon,
        image:
          "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=85",
      },
    ],

    resultsTitle: "The campaign reached communities beyond the major cities.",

    results: [
      {
        number: "210K",
        label: "households reached",
        note: "Reported reach across 12 districts.",
      },
      {
        number: "12",
        label: "districts activated",
        note: "Community delivery across multiple regions.",
      },
    ],

    team: [
      {
        name: "Thandi Banda",
        role: "Strategy Lead",
      },
      {
        name: "Chikondi Mbewe",
        role: "Field Operations Lead",
      },
    ],
  },

  /* =======================================================
     07 — STANDARD BANK MALAWI: BRANCH ZERO
     EXISTING CASE STUDY — REQUIRES VERIFICATION
  ======================================================= */

  {
    slug: "branch-zero",
    client: "Standard Bank Malawi",
    sector: "Financial Services",
    year: "2025",
    market: "Malawi",

    title: "Branch Zero — Digital Banking Beyond the City",

    summary:
      "A mobile-first campaign that helped rural and peri-urban customers understand, trust, and activate digital banking services.",

    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2200&q=90",

    duration: "16 weeks",
    markets: "Southern Region, Malawi",

    languages: ["English", "Chichewa"],

    audience:
      "Mobile-money users, small traders, farmers, and salaried customers outside major urban centres",

    objective:
      "Increase awareness, trust, and activation of mobile and digital banking services",

    capabilities: [
      "Brand Strategy",
      "Creative & Content",
      "Digital & Performance",
      "Activation & Experiential",
    ],

    challengeTitle:
      "The bank had digital products, but many customers still believed banking required a branch.",

    challenge: [
      "Standard Bank Malawi had invested in digital banking services, but adoption outside the major cities remained lower than expected. Many customers were already comfortable using mobile money, yet still viewed formal banking as something that required paperwork, travel, and time inside a physical branch.",

      "The challenge was not simply product awareness. Customers needed to understand what they could do digitally, why the service was safe, and how it could make everyday transactions easier.",

      "The campaign needed to work across different levels of digital literacy, mobile access, language preference, and trust in formal financial services.",
    ],

    insightTitle:
      "Digital banking became easier to understand when it was framed as everyday banking without the journey.",

    insightQuote:
      "Customers were not rejecting digital banking. They were rejecting uncertainty. Once the service was explained through familiar daily tasks, the value became immediate.",

    insightBody:
      "Research showed that customers understood digital services more quickly when the communication focused on practical actions: sending money, checking balances, paying bills, buying airtime, and managing income without travelling to a branch. The opportunity was to make digital banking feel less technical and more useful.",

    workTitle:
      "A campaign that turned digital features into familiar everyday actions.",

    workIntro:
      "We developed a Chichewa-led campaign built around the idea of carrying the branch in your pocket. The work combined simple product demonstrations, mobile-first content, radio, field activation, and assisted registration.",

    outputs: [
      {
        title: "Chichewa digital-banking explainer films",
        label: "Video",
        icon: Film,
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Mobile-first social and display campaign",
        label: "Digital",
        icon: Share2,
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Radio demonstrations and customer stories",
        label: "Radio",
        icon: Radio,
        image:
          "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Assisted registration activations in trading centres",
        label: "Activation",
        icon: ImageIcon,
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
      },
    ],

    resultsTitle:
      "Digital banking moved from an abstract service to a practical everyday tool.",

    results: [
      {
        number: "47%",
        label: "increase in mobile-banking activations",
        note: "Activation increase across the campaign period compared with the pre-campaign baseline.",
      },
      {
        number: "31%",
        label: "increase in completed digital registrations",
        note: "Measured across assisted-registration locations in the Southern Region.",
      },
      {
        number: "68%",
        label: "campaign-message recall in Chichewa",
        note: "Post-campaign audience study among customers exposed to radio, social, and field activity.",
      },
    ],

    testimonial: {
      quote:
        "The campaign made digital banking feel practical rather than technical. Customers understood that they could complete everyday banking tasks without travelling to a branch, and the activation numbers reflected that shift.",
      initials: "TK",
      name: "Thoko Kamanga",
      role: "Head of Digital Banking, Standard Bank Malawi",
      location: "Blantyre, Malawi",
    },

    team: [
      {
        name: "Chikondi Banda",
        role: "Strategy Director",
      },
      {
        name: "Thandiwe Mvula",
        role: "Creative Lead",
      },
      {
        name: "Tapiwa Mbewe",
        role: "Field Operations Lead",
      },
      {
        name: "Memory Phiri",
        role: "Chichewa Copywriter",
      },
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

export function getCaseStudyBySlug(slug?: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
