export type TeamDiscipline =
  | "Leadership"
  | "Strategy"
  | "Creative"
  | "Digital"
  | "Public Relations"
  | "Experiential"
  | "Advisory";

export type TeamOffice = "Lusaka" | "Lilongwe" | "Regional";

export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  initials: string;
  role: string;
  discipline: TeamDiscipline;
  office: TeamOffice;
  image: string;
  shortBio: string;
  biography: string[];
  expertise: string[];
  languages: string[];
  yearsExperience?: number;
  email?: string;
  linkedIn?: string;
  featured?: boolean;
  selectedWork?: {
    title: string;
    client: string;
    link?: string;
  }[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "naledi-moyo",
    slug: "naledi-moyo",
    name: "Naledi Moyo",
    initials: "NM",
    role: "Managing Partner",
    discipline: "Leadership",
    office: "Regional",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Naledi leads Bwanji across Zambia and Malawi, helping clients connect business ambition with local market reality.",
    biography: [
      "Naledi leads Bwanji's regional direction, senior client relationships, and integrated approach across strategy, creative, reputation, digital, and advisory.",
      "Her work focuses on helping organisations understand the market beneath the presentation deck: the stakeholders, customer behaviour, cultural context, and practical choices that determine whether a strategy succeeds.",
      "She works closely with boards, country directors, founders, and executive teams facing market-entry, reputation, growth, and organisational-change decisions.",
    ],
    expertise: [
      "Executive counsel",
      "Market-entry strategy",
      "Brand leadership",
      "Reputation",
      "Organisational alignment",
    ],
    languages: ["English", "Nyanja", "Shona"],
    yearsExperience: 18,
    email: "naledi@bwanji.agency",
    linkedIn: "https://www.linkedin.com/",
    featured: true,
    selectedWork: [
      {
        client: "Regional Financial Institution",
        title: "Market-entry and stakeholder strategy",
      },
      {
        client: "Southern African Corporate",
        title: "Leadership and reputation advisory",
      },
    ],
  },
  {
    id: "chanda-kasonde",
    slug: "chanda-kasonde",
    name: "Chanda Kasonde",
    initials: "CK",
    role: "Strategy & Advisory Director",
    discipline: "Strategy",
    office: "Lusaka",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Chanda turns market evidence into clear brand, audience, and business decisions.",
    biography: [
      "Chanda leads strategy and advisory engagements across brand positioning, customer insight, market entry, stakeholder planning, and communications.",
      "He is particularly interested in the gap between how organisations describe themselves and how customers experience them.",
      "His process combines research, stakeholder interviews, field observation, workshops, and commercial analysis to help leadership teams make clearer choices.",
    ],
    expertise: [
      "Brand strategy",
      "Audience research",
      "Market diagnosis",
      "Stakeholder strategy",
      "Workshop facilitation",
    ],
    languages: ["English", "Bemba", "Nyanja"],
    yearsExperience: 13,
    email: "chanda@bwanji.agency",
    linkedIn: "https://www.linkedin.com/",
    selectedWork: [
      {
        client: "Old Mutual Zambia",
        title: "Insurance in the Language of the Market",
        link: "/work/insurance-in-the-language-of-the-market/",
      },
    ],
  },
  {
    id: "thandiwe-mvula",
    slug: "thandiwe-mvula",
    name: "Thandiwe Mvula",
    initials: "TM",
    role: "Creative Director",
    discipline: "Creative",
    office: "Lilongwe",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Thandiwe leads creative work that feels locally fluent without reducing culture to decoration.",
    biography: [
      "Thandiwe leads campaign concepts, visual direction, copy platforms, content systems, and multidisciplinary creative teams.",
      "She believes creative work should respect the audience's intelligence while remaining simple enough to travel across language, format, and channel.",
      "Her work spans financial services, public health, telecommunications, consumer brands, social impact, and behaviour change.",
    ],
    expertise: [
      "Creative direction",
      "Campaign concepts",
      "Art direction",
      "Copy platforms",
      "Content systems",
    ],
    languages: ["English", "Chichewa"],
    yearsExperience: 11,
    email: "thandiwe@bwanji.agency",
    linkedIn: "https://www.linkedin.com/",
    selectedWork: [
      {
        client: "PSI Malawi",
        title: "Behaviour Change at Last Mile",
        link: "/work/behaviour-change-at-last-mile/",
      },
      {
        client: "Standard Bank Malawi",
        title: "Branch Zero",
        link: "/work/branch-zero/",
      },
    ],
  },
  {
    id: "memory-phiri",
    slug: "memory-phiri",
    name: "Memory Phiri",
    initials: "MP",
    role: "Senior Copywriter",
    discipline: "Creative",
    office: "Lilongwe",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Memory writes campaign language that remains natural when it moves between English and Chichewa.",
    biography: [
      "Memory develops campaign copy, scripts, messaging systems, brand voice, radio content, and local-language adaptations.",
      "Her work begins with how people naturally speak rather than translating formal English into words that feel unfamiliar in the market.",
      "She works closely with strategists, researchers, and community teams to protect meaning, humour, rhythm, and cultural context.",
    ],
    expertise: [
      "Copywriting",
      "Chichewa adaptation",
      "Radio scripts",
      "Brand voice",
      "Campaign messaging",
    ],
    languages: ["English", "Chichewa", "Tumbuka"],
    yearsExperience: 8,
    email: "memory@bwanji.agency",
  },
  {
    id: "tapiwa-mbewe",
    slug: "tapiwa-mbewe",
    name: "Tapiwa Mbewe",
    initials: "TM",
    role: "Field Operations Lead",
    discipline: "Experiential",
    office: "Lilongwe",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Tapiwa turns campaign plans into organised field activity across urban, district, and community locations.",
    biography: [
      "Tapiwa leads field planning, promoter recruitment, training, route management, logistics, community coordination, and activation reporting.",
      "He has managed programmes across retail locations, trading centres, district communities, corporate events, roadshows, and assisted-registration campaigns.",
      "His work focuses on ensuring that live activity remains consistent with the strategy while responding intelligently to conditions on the ground.",
    ],
    expertise: [
      "Field operations",
      "Experiential production",
      "Roadshows",
      "Promoter management",
      "Community activation",
    ],
    languages: ["English", "Chichewa", "Tumbuka"],
    yearsExperience: 10,
    email: "tapiwa@bwanji.agency",
    selectedWork: [
      {
        client: "Standard Bank Malawi",
        title: "Branch Zero field activation",
        link: "/work/branch-zero/",
      },
    ],
  },
  {
    id: "ruth-kalima",
    slug: "ruth-kalima",
    name: "Ruth Kalima",
    initials: "RK",
    role: "Senior Producer",
    discipline: "Experiential",
    office: "Lusaka",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Ruth manages the people, suppliers, schedules, budgets, and details that turn creative ideas into real experiences.",
    biography: [
      "Ruth leads experiential and content production across launches, activations, events, photography, video, stage environments, and branded spaces.",
      "She works between the creative ambition and the operational realities of delivery, ensuring that every supplier and team understands what the experience needs to achieve.",
    ],
    expertise: [
      "Event production",
      "Supplier management",
      "Budget control",
      "Technical production",
      "Content production",
    ],
    languages: ["English", "Bemba", "Nyanja"],
    yearsExperience: 9,
    email: "ruth@bwanji.agency",
  },
  {
    id: "chisomo-banda",
    slug: "chisomo-banda",
    name: "Chisomo Banda",
    initials: "CB",
    role: "Senior PR Strategist",
    discipline: "Public Relations",
    office: "Lilongwe",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Chisomo helps organisations understand and manage the relationships that shape public trust.",
    biography: [
      "Chisomo works across media relations, stakeholder engagement, executive visibility, reputation planning, and crisis preparedness.",
      "Her approach combines strong media relationships with an understanding of how government, communities, employees, customers, and public narratives interact.",
    ],
    expertise: [
      "Media relations",
      "Reputation",
      "Crisis communication",
      "Executive visibility",
      "Stakeholder engagement",
    ],
    languages: ["English", "Chichewa"],
    yearsExperience: 12,
    email: "chisomo@bwanji.agency",
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: "luyando-tembo",
    slug: "luyando-tembo",
    name: "Luyando Tembo",
    initials: "LT",
    role: "Digital Performance Lead",
    discipline: "Digital",
    office: "Lusaka",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85",
    shortBio:
      "Luyando connects digital media, customer journeys, creative performance, and commercial outcomes.",
    biography: [
      "Luyando leads digital strategy, paid media, measurement, optimisation, search, social performance, and conversion planning.",
      "She works beyond platform metrics to understand how creative, targeting, landing experiences, customer confidence, and market conditions affect results.",
    ],
    expertise: [
      "Digital strategy",
      "Paid media",
      "Analytics",
      "Conversion optimisation",
      "Campaign reporting",
    ],
    languages: ["English", "Bemba", "Nyanja"],
    yearsExperience: 9,
    email: "luyando@bwanji.agency",
    selectedWork: [
      {
        client: "Standard Bank Malawi",
        title: "Branch Zero",
        link: "/work/branch-zero/",
      },
    ],
  },
];

export function getTeamMemberBySlug(slug?: string) {
  return teamMembers.find((member) => member.slug === slug);
}