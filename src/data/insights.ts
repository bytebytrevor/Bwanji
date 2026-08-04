export type InsightCategory =
  | "Strategy"
  | "Culture"
  | "Digital"
  | "Reputation"
  | "Research"
  | "Field Notes";

export type InsightSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export type InsightSource = {
  label: string;
  url?: string;
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  market: string;
  image: string;
  featured?: boolean;

  introduction: string[];
  sections: InsightSection[];
  pullQuote?: string;
  keyTakeaways: string[];
  sources?: InsightSource[];
};

export const insights: Insight[] = [
  {
    slug: "the-market-is-not-waiting-for-your-translation",
    title: "The Market Is Not Waiting for Your Translation",
    excerpt:
      "Why local language should influence the strategy, creative idea, customer journey, and channel plan—not simply the final copy.",
    category: "Culture",
    author: "Chikondi Banda",
    authorRole: "Strategy Director",
    publishedAt: "2026-07-24",
    readTime: "7 min read",
    market: "Zambia & Malawi",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85",
    featured: true,

    introduction: [
      "Many regional campaigns begin in English and arrive in the market through translation. The strategy is already fixed. The creative idea is already approved. The customer journey, media plan, and calls to action are already built. Local language is invited in at the end to change the words.",
      "That approach treats language as packaging. In practice, language can change what the audience understands, whom they trust, what they remember, and whether the brand feels close enough to consider.",
    ],

    sections: [
      {
        id: "translation-is-not-localisation",
        heading: "Translation is not the same as localisation",
        paragraphs: [
          "A sentence can be technically correct and still feel as though nobody in the market would naturally say it. Meaning survives the translation, but rhythm, familiarity, humour, status, and emotional weight may not.",
          "This becomes especially visible in advertising. A headline written around an English expression may have no useful equivalent in Bemba, Nyanja, Chichewa, or Tumbuka. Keeping the headline structure intact can force the local-language version to carry an idea it was never designed to hold.",
          "Localisation begins earlier. It asks whether the central thought, situation, behaviour, and cultural reference make sense before anyone starts replacing words.",
        ],
      },
      {
        id: "language-changes-trust",
        heading: "Language changes who appears to be speaking",
        paragraphs: [
          "Audiences do not only process what a message says. They make judgments about the person or institution saying it. Language can make a brand feel informed, distant, formal, familiar, institutional, youthful, respectful, or intrusive.",
          "In financial services, public health, telecommunications, and community engagement, that judgment can matter as much as comprehension. People may understand the English message perfectly and still feel that it was not intended for them.",
          "The question is therefore not only whether the audience can understand the communication. It is whether the communication appears to understand the audience.",
        ],
        image:
          "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "A group of people having a conversation outdoors",
        imageCaption:
          "Language influences participation, not only comprehension.",
      },
      {
        id: "language-should-shape-the-idea",
        heading: "Language should help shape the creative idea",
        paragraphs: [
          "When local-language writers enter the process early, they can identify phrases, tensions, stories, and forms of humour that would never emerge from an English master copy.",
          "This does not require every campaign to begin in one local language. It requires the strategic and creative process to allow ideas to move in both directions.",
          "An English expression may inspire a strong Bemba execution. A Chichewa observation may reveal the campaign platform that later works across every language. The point is not to establish a new master language. The point is to stop treating every other language as a subordinate output.",
        ],
      },
      {
        id: "journey-also-needs-localisation",
        heading: "The customer journey also needs localisation",
        paragraphs: [
          "A local-language advertisement may create confidence, only for the customer to land on an English-only form filled with unfamiliar institutional terms. The campaign has changed its voice at the exact moment the person is expected to act.",
          "Language decisions should therefore include landing pages, WhatsApp responses, call-centre scripts, field-team guides, application forms, error messages, confirmation messages, and sales conversations.",
          "The experience does not become local because the first advertisement was translated. It becomes local when the customer can move through the entire decision with confidence.",
        ],
      },
      {
        id: "not-everything-needs-translation",
        heading: "Not everything needs to be translated",
        paragraphs: [
          "Localisation does not mean forcing every brand name, digital term, product label, or familiar expression into another language. Audiences naturally move between languages, particularly in urban markets and digital spaces.",
          "The useful question is not whether every word can be translated. It is where language reduces distance, improves understanding, or gives the message a more credible voice.",
          "The answer will differ by audience, category, channel, location, and the action being requested.",
        ],
      },
    ],

    pullQuote:
      "The market does not experience language as the final layer of communication. It experiences language as part of the brand itself.",

    keyTakeaways: [
      "Include local-language thinkers during strategy and concept development.",
      "Test whether the central idea travels—not only whether the words translate.",
      "Localise the customer journey beyond the first campaign asset.",
      "Let ideas move from local languages into the wider campaign platform.",
      "Choose language according to audience, context, channel, and action.",
    ],

    sources: [
      {
        label:
          "Bwanji field interviews and campaign testing, Zambia and Malawi",
      },
      {
        label: "Bwanji local-language creative workshops, 2025–2026",
      },
    ],
  },

  {
    slug: "what-rural-does-not-mean",
    title: "What Rural Does Not Mean",
    excerpt:
      "Rural audiences are often described by what they lack. That framing hides the networks, behaviours, ambitions, and systems that actually shape decisions.",
    category: "Research",
    author: "Tadala Mbewe",
    authorRole: "Senior Strategist",
    publishedAt: "2026-07-12",
    readTime: "6 min read",
    market: "Malawi",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "The word rural is often used as though it describes one audience. It can quickly become a substitute for limited access, low income, low awareness, low literacy, or resistance to technology.",
      "Those conditions may exist in particular places, but they are not a complete description of the people living there. When the label becomes the insight, campaigns begin solving an imagined version of the market.",
    ],

    sections: [
      {
        id: "rural-is-not-one-market",
        heading: "Rural is not one market",
        paragraphs: [
          "A farming district near a major trading corridor behaves differently from an isolated settlement with limited transport. A village with strong remittance flows may have different spending patterns from one dependent on seasonal agriculture.",
          "Media access, mobile coverage, road conditions, language, religious institutions, market days, migration, and local leadership all change how information and products move.",
          "Planning around one generic rural audience removes the differences most likely to determine whether the work succeeds.",
        ],
      },
      {
        id: "access-does-not-equal-disinterest",
        heading: "Limited access does not mean limited interest",
        paragraphs: [
          "When people do not use a service, organisations often assume they do not value it. The real barrier may be distance, uncertainty, documentation, network reliability, cost, or lack of assistance.",
          "A customer who does not complete a digital registration may still want the product. The journey may simply require too much data, too many unfamiliar steps, or a level of trust the communication has not yet earned.",
          "The distinction matters because disinterest requires a different response from friction.",
        ],
        image:
          "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "People gathered in an outdoor community setting",
        imageCaption:
          "Access, assistance, and trust shape participation differently in every location.",
      },
      {
        id: "networks-are-infrastructure",
        heading: "Social networks are part of the infrastructure",
        paragraphs: [
          "Information does not move only through formal media. It moves through traders, transport operators, teachers, health workers, religious leaders, savings groups, family members, and customers returning from nearby towns.",
          "These relationships can explain why one message travels quickly while another disappears despite receiving more media spend.",
          "Understanding influence means mapping who people consult, who they observe, and whose experience provides proof.",
        ],
      },
      {
        id: "ambition-is-not-urban",
        heading: "Ambition is not an urban characteristic",
        paragraphs: [
          "Rural audiences are often represented through need rather than aspiration. Communication focuses on what people lack instead of what they are building, protecting, improving, or hoping to achieve.",
          "That framing can make brands sound charitable when the customer wants to be addressed as a capable decision-maker.",
          "A useful strategy understands the practical constraint without making the constraint the person's entire identity.",
        ],
      },
    ],

    pullQuote:
      "The label becomes dangerous when it replaces the work of understanding the place.",

    keyTakeaways: [
      "Define rural audiences by location, livelihood, access, and behaviour—not one broad label.",
      "Separate lack of interest from friction in the customer journey.",
      "Map informal networks alongside formal media channels.",
      "Include aspiration and agency in how people are represented.",
      "Research the conditions of specific locations before scaling one approach.",
    ],

    sources: [
      {
        label: "Bwanji field observations across Malawi district markets",
      },
      {
        label: "Community and trader interviews, 2025–2026",
      },
    ],
  },

  {
    slug: "the-dashboard-does-not-know-why",
    title: "The Dashboard Does Not Know Why",
    excerpt:
      "Performance reports describe what moved. Useful analysis connects that movement to creative, context, customer behaviour, and the business.",
    category: "Digital",
    author: "Chanda Kasonde",
    authorRole: "Digital Strategy Lead",
    publishedAt: "2026-06-28",
    readTime: "5 min read",
    market: "Regional",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "Digital platforms are excellent at recording activity. They can show impressions, clicks, reach, frequency, cost, watch time, conversions, and dozens of other movements.",
      "What they cannot do on their own is explain the full reason those movements occurred. A dashboard can show that performance declined. It cannot automatically tell you whether the cause was weak creative, audience fatigue, poor timing, a confusing offer, market conditions, tracking failure, or the customer experience after the click.",
    ],

    sections: [
      {
        id: "measurement-is-not-interpretation",
        heading: "Measurement is not interpretation",
        paragraphs: [
          "A report becomes useful when it moves from what happened to what the result may mean. That requires knowledge of the campaign, the audience, the market, the creative work, and the business.",
          "A lower cost per click may look positive until the team discovers that the new traffic has almost no purchase intent. A lower conversion rate may look negative until it is understood that the campaign has expanded into a harder but strategically important audience.",
          "The number has no independent meaning. It becomes meaningful in relation to the objective and context.",
        ],
      },
      {
        id: "creative-is-a-performance-variable",
        heading: "Creative is a performance variable",
        paragraphs: [
          "Campaign optimisation is often discussed as though it belongs only to media teams. In many campaigns, the strongest performance change comes from the message, image, format, hook, proof, or offer.",
          "Platforms decide where to distribute content partly by observing how people respond to it. Stronger creative can improve attention, relevance, click quality, completion, and conversion at the same time.",
          "A media report that ignores creative differences leaves out one of the most important explanations available.",
        ],
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Analytics data displayed on a laptop screen",
        imageCaption:
          "Performance analysis should connect media data to the work people actually saw.",
      },
      {
        id: "the-click-is-not-the-outcome",
        heading: "The click is not the outcome",
        paragraphs: [
          "Digital teams can spend weeks improving the advertisement while the landing page remains slow, unclear, intimidating, or poorly adapted to mobile devices.",
          "Customers may click with genuine interest and abandon because the form asks for information they do not have, the payment method is unfamiliar, or the next step is not explained.",
          "Performance should be evaluated across the entire journey, not only the point where the media platform stops observing.",
        ],
      },
      {
        id: "report-forward",
        heading: "A useful report points forward",
        paragraphs: [
          "Reporting should finish with a decision. What should continue? What should stop? What deserves another test? What has been learned about the audience, offer, creative, or channel?",
          "A page of metrics without a recommendation transfers the burden of interpretation back to the client.",
          "The most useful report is not the one with the most data. It is the one that makes the next move clearer.",
        ],
      },
    ],

    pullQuote:
      "The dashboard records the movement. The strategist still has to explain the market.",

    keyTakeaways: [
      "Interpret metrics in relation to the business objective.",
      "Include creative performance in media analysis.",
      "Measure what happens after the click.",
      "Check tracking quality before explaining performance changes.",
      "End every report with a clear recommendation.",
    ],

    sources: [
      {
        label: "Bwanji digital campaign reviews, 2025–2026",
      },
      {
        label: "Cross-channel performance and conversion audits",
      },
    ],
  },

  {
    slug: "trust-is-built-before-the-crisis",
    title: "Trust Is Built Before the Crisis",
    excerpt:
      "A response plan matters. The relationships, leadership behaviour, and reputation established before the incident matter more.",
    category: "Reputation",
    author: "Naledi Moyo",
    authorRole: "Managing Partner",
    publishedAt: "2026-06-14",
    readTime: "8 min read",
    market: "Southern Africa",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "When a crisis arrives, organisations often focus on the statement. They debate the wording, the spokesperson, the timing, and whether the apology is strong enough.",
      "Those decisions matter. But the response enters a reputation that already exists. Employees, customers, journalists, regulators, communities, and partners interpret the new information through what they believed about the organisation before the incident.",
    ],

    sections: [
      {
        id: "the-crisis-does-not-start-the-story",
        heading: "The crisis does not start the story",
        paragraphs: [
          "A company with a history of openness receives more benefit of the doubt than one that only communicates when it needs something.",
          "A leader who has built credible relationships can enter a difficult conversation with context. A leader who has remained invisible may be introduced to the public for the first time through failure.",
          "The response may be identical, but the audience does not receive it from the same starting point.",
        ],
      },
      {
        id: "relationships-are-response-capacity",
        heading: "Relationships are part of crisis capacity",
        paragraphs: [
          "Media contacts, employee trust, regulatory engagement, community relationships, and partner confidence are not soft reputation assets. They affect how quickly information can move and whether the organisation is heard.",
          "Strong relationships do not guarantee favourable coverage or agreement. They make it more likely that the organisation's position will be considered accurately.",
          "Building those relationships during the crisis can appear transactional because it is.",
        ],
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "A leadership team in a serious discussion",
        imageCaption:
          "Crisis readiness depends on relationships and decision clarity before pressure arrives.",
      },
      {
        id: "leadership-behaviour-is-evidence",
        heading: "Leadership behaviour is evidence",
        paragraphs: [
          "Audiences evaluate what leaders do before they evaluate what communications teams say. Delayed decisions, internal contradictions, visible avoidance, or a defensive posture can weaken even a carefully written response.",
          "The communication should reflect the action being taken. It cannot permanently substitute for that action.",
          "A crisis plan therefore needs decision roles, escalation thresholds, and operational responsibilities—not only message templates.",
        ],
      },
      {
        id: "prepare-for-judgment",
        heading: "Prepare for judgment, not only the event",
        paragraphs: [
          "Scenario planning often focuses on what may happen. It should also consider what the event will appear to reveal about the organisation.",
          "A service outage may become a story about reliability. A leadership dispute may become a story about governance. A delayed refund may become a story about whether the organisation respects customers.",
          "Preparation improves when teams ask which existing doubt the event could appear to confirm.",
        ],
      },
      {
        id: "readiness-is-an-operating-practice",
        heading: "Readiness is an operating practice",
        paragraphs: [
          "A crisis manual stored in a folder does not create readiness. Teams need current contact lists, decision authority, trained spokespeople, tested escalation routes, and practice under time pressure.",
          "The organisation should know who can approve a response at night, who contacts affected stakeholders, who verifies facts, and what happens when the designated spokesperson is unavailable.",
          "Preparedness becomes real when responsibility is specific.",
        ],
      },
    ],

    pullQuote:
      "A crisis statement is interpreted through every decision the organisation made before it needed to issue one.",

    keyTakeaways: [
      "Build stakeholder relationships before they are urgently needed.",
      "Connect communication plans to operational decision-making.",
      "Prepare leaders, not only statements.",
      "Identify which existing reputational doubt a crisis could confirm.",
      "Test escalation routes under realistic time pressure.",
    ],

    sources: [
      {
        label: "Bwanji reputation and crisis-readiness workshops",
      },
      {
        label: "Regional stakeholder and media engagement experience",
      },
    ],
  },

  {
    slug: "a-brand-position-is-a-choice",
    title: "A Brand Position Is a Choice",
    excerpt:
      "If a positioning statement allows every competitor to agree with it, the difficult strategic decision has probably not been made.",
    category: "Strategy",
    author: "Chikondi Banda",
    authorRole: "Strategy Director",
    publishedAt: "2026-05-31",
    readTime: "6 min read",
    market: "Regional",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "Many positioning statements sound sensible. They mention quality, innovation, customer focus, trust, convenience, or positive impact. The leadership team agrees. The problem is that every competitor can agree too.",
      "A position becomes useful when it helps the organisation choose what to emphasise, what to prove, what to build, and what not to claim.",
    ],

    sections: [
      {
        id: "a-position-is-not-a-description",
        heading: "A position is not a complete description",
        paragraphs: [
          "Organisations often try to fit every strength into the positioning statement. The result becomes accurate but strategically weak.",
          "A brand may be reliable, innovative, caring, accessible, experienced, and affordable. Listing every positive quality does not explain which one should lead the customer's decision.",
          "Positioning requires priority. It identifies the meaning the brand wants to strengthen relative to the alternatives.",
        ],
      },
      {
        id: "difference-is-not-decoration",
        heading: "Difference is not decorative language",
        paragraphs: [
          "Changing familiar words into more impressive words does not create distinction. A claim becomes different when it reflects a choice competitors cannot make as credibly or consistently.",
          "That distinction may come from the product, business model, customer experience, distribution, expertise, cultural role, or a specific way of solving the problem.",
          "The language should reveal the strategic difference, not manufacture one that the organisation cannot prove.",
        ],
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "A team discussing strategy around a table",
        imageCaption:
          "A useful position helps teams decide which ideas belong and which do not.",
      },
      {
        id: "credibility-sets-the-boundary",
        heading: "Credibility sets the boundary",
        paragraphs: [
          "A position can be ambitious without being fictional. It should stretch the organisation toward a clearer future while remaining connected to evidence.",
          "If customers experience long delays, the brand cannot sustainably own effortless convenience through communication alone.",
          "The strategic task is to find the strongest meaning the organisation can prove now or build toward deliberately.",
        ],
      },
      {
        id: "positioning-should-change-decisions",
        heading: "Positioning should change decisions",
        paragraphs: [
          "A positioning document should influence product priorities, customer experience, partnerships, creative work, sales language, and where the brand invests.",
          "If the organisation behaves exactly the same after approving the strategy, the position may be too broad to guide action.",
          "The test is not whether the statement sounds good in the room. It is whether it helps the team make a harder choice later.",
        ],
      },
    ],

    pullQuote:
      "A position that includes everything protects agreement by sacrificing direction.",

    keyTakeaways: [
      "Prioritise one leading meaning instead of listing every strength.",
      "Base difference on something the organisation can prove.",
      "Use positioning to guide business and experience decisions.",
      "Define what the brand will not try to own.",
      "Test the position against real competitors and alternatives.",
    ],

    sources: [
      {
        label: "Bwanji brand-positioning workshops and market reviews",
      },
      {
        label: "Regional category and competitor analysis",
      },
    ],
  },

  {
    slug: "what-we-heard-in-limbe",
    title: "What We Heard in Limbe",
    excerpt:
      "Five observations from customer conversations with traders, mobile-money users, and small-business owners in Limbe Market.",
    category: "Field Notes",
    author: "Tapiwa Mbewe",
    authorRole: "Field Operations Lead",
    publishedAt: "2026-05-18",
    readTime: "4 min read",
    market: "Malawi",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "Limbe Market is not a controlled research environment. Conversations are interrupted by customers, deliveries, calls, weather, price negotiations, and the practical urgency of keeping a business moving.",
      "That is exactly why the observations matter. They reveal how services, brands, payments, and communication fit into real working days rather than idealised customer journeys.",
    ],

    sections: [
      {
        id: "reliability-beats-small-savings",
        heading: "Reliability can matter more than a small saving",
        paragraphs: [
          "Several traders told us they would pay slightly more to a supplier who arrived consistently. The cost of missing stock was not only the lost sale. It was the possibility that a regular customer would build a new habit somewhere else.",
          "Price remained important, but reliability protected the relationship that created future revenue.",
        ],
      },
      {
        id: "digital-means-avoiding-friction",
        heading: "Digital value was described as avoiding friction",
        paragraphs: [
          "People rarely used the language of innovation or transformation. They spoke about avoiding a queue, sending money without closing the shop, confirming payment quickly, and not travelling with cash.",
          "The practical benefit was not that the service was digital. It was that the service removed a disruption from the day.",
        ],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "A customer making a mobile payment",
        imageCaption:
          "Digital services were valued through the time and movement they saved.",
      },
      {
        id: "proof-travels-between-traders",
        heading: "Proof travels between traders",
        paragraphs: [
          "A recommendation from another trader carried more weight than a polished claim. People wanted to know whether the product worked under the same pressures they faced.",
          "Demonstrations, visible use, and customer stories provided more confidence than general claims about quality.",
        ],
      },
      {
        id: "business-and-household-money-overlap",
        heading: "Business and household money often overlap",
        paragraphs: [
          "The boundary between personal and business finance was not always clear. The same account, phone, or cash reserve could support school expenses, inventory, transport, and emergencies.",
          "Financial products designed around a neat separation may not reflect how decisions are actually made.",
        ],
      },
      {
        id: "short-questions-reveal-long-stories",
        heading: "Short questions reveal long stories",
        paragraphs: [
          "Asking which service someone used produced a short answer. Asking what happened the last time it failed revealed the real decision criteria.",
          "The most useful research questions often begin with an event, frustration, workaround, or recent choice rather than a general opinion.",
        ],
      },
    ],

    pullQuote:
      "Customers did not describe digital transformation. They described keeping the shop open.",

    keyTakeaways: [
      "Frame value through saved time, movement, and interruption.",
      "Treat reliability as part of the customer's revenue model.",
      "Use peer proof and demonstration in trader communication.",
      "Design for overlap between household and business finances.",
      "Ask about recent events instead of relying only on general opinions.",
    ],

    sources: [
      {
        label:
          "Bwanji field conversations in Limbe Market, Blantyre, Malawi",
      },
    ],
  },

  {
    slug: "attention-is-not-the-same-as-interest",
    title: "Attention Is Not the Same as Interest",
    excerpt:
      "A campaign can stop the scroll and still fail to move the audience. The difference begins with what happens after attention is earned.",
    category: "Digital",
    author: "Thandiwe Mvula",
    authorRole: "Creative Lead",
    publishedAt: "2026-05-04",
    readTime: "5 min read",
    market: "Zambia",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",

    introduction: [
      "Digital creative is frequently judged by whether it attracts attention. The first second, hook, thumbnail, headline, and visual interruption receive enormous focus.",
      "That focus is understandable. Work that nobody notices cannot communicate. But attention is only the opening condition. It does not prove that the audience understood the offer, believed the claim, wanted the product, or knew what to do next.",
    ],

    sections: [
      {
        id: "attention-is-a-doorway",
        heading: "Attention is a doorway",
        paragraphs: [
          "A surprising image or provocative line can interrupt behaviour. The audience pauses because something is unusual, emotional, visually strong, or personally relevant.",
          "The next moment determines whether that attention develops into interest. The work must reveal what the brand is saying and why the person should continue.",
          "When the hook and the message are disconnected, the campaign may generate engagement while weakening comprehension.",
        ],
      },
      {
        id: "curiosity-needs-a-reward",
        heading: "Curiosity needs a reward",
        paragraphs: [
          "Creative work sometimes withholds meaning to encourage the audience to keep watching. That technique works when the eventual reveal feels worth the effort.",
          "If the reveal is predictable, unrelated, or too late, curiosity becomes irritation. The audience may remember the execution and forget the brand or proposition.",
          "The creative contract is simple: if you ask for attention, return something useful, entertaining, emotional, or meaningful.",
        ],
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "A person engaging with digital content on a laptop",
        imageCaption:
          "Strong digital work connects the initial hook to a clear reason to continue.",
      },
      {
        id: "interest-requires-relevance",
        heading: "Interest requires relevance",
        paragraphs: [
          "People can enjoy an advertisement without seeing themselves in the problem or offer. Entertainment and relevance are related but not identical.",
          "The work should connect the creative idea to a recognisable need, ambition, tension, or situation.",
          "This connection is where audience understanding becomes more valuable than generic attention tactics.",
        ],
      },
      {
        id: "the-next-step-must-feel-natural",
        heading: "The next step must feel natural",
        paragraphs: [
          "A campaign may build genuine interest and still lose the customer through an unclear call to action. The next step may require too much commitment, too much information, or a channel that does not fit the audience's behaviour.",
          "The creative idea and the action should belong to the same journey. A conversational campaign may lead naturally to WhatsApp. A complex product may need an explainer before a registration form.",
          "Conversion improves when the next step respects the level of confidence the campaign has actually created.",
        ],
      },
    ],

    pullQuote:
      "Stopping the scroll is not the objective. It is permission to make the next second matter.",

    keyTakeaways: [
      "Connect the hook directly to the proposition.",
      "Reward curiosity with meaning, not only a reveal.",
      "Measure comprehension and intent alongside engagement.",
      "Build relevance around a real audience tension.",
      "Match the call to action to the confidence the campaign has created.",
    ],

    sources: [
      {
        label: "Bwanji creative and digital performance reviews",
      },
      {
        label: "Campaign attention, engagement, and conversion analysis",
      },
    ],
  },
];

export function getInsightBySlug(slug?: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function formatInsightDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}