import {
  Film,
  Image as ImageIcon,
  Radio,
  Share2,
  type LucideIcon,
} from "lucide-react";

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

export const caseStudies: CaseStudy[] = [
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

    challengeTitle:
      "The product was familiar. Trust in the category was not.",
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
        note:
            "Activation increase across the campaign period compared with the pre-campaign baseline.",
        },
        {
        number: "31%",
        label: "increase in completed digital registrations",
        note:
            "Measured across assisted-registration locations in the Southern Region.",
        },
        {
        number: "68%",
        label: "campaign-message recall in Chichewa",
        note:
            "Post-campaign audience study among customers exposed to radio, social, and field activity.",
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

export function getCaseStudyBySlug(slug?: string) {
  return caseStudies.find((study) => study.slug === slug);
}