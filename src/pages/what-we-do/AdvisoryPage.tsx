import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  CircleAlert,
  Compass,
  FileText,
  Lightbulb,
  Presentation,
  Scale,
  Target,
  Users,
  MessageCircle,
  ShieldCheck,
  Search,
  Route,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const reveal = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: {
    once: true,
    amount: 0.15,
  },
};

/* =========================================================
   CONTENT
========================================================= */

const advisoryServices = [
  {
    title: "Executive counsel",
    desc: "Strategic perspectives for leadership teams examining important decisions involving their organisation, brand, reputation, or communications.",
  },
  {
    title: "Market-entry advisory",
    desc: "Exploring market context, audience expectations, stakeholder considerations, communication priorities, and potential risks associated with entering or expanding within a market.",
  },
  {
    title: "Brand and reputation diagnosis",
    desc: "Reviewing brand positioning, reputation considerations, stakeholder perceptions, and issues that may require strategic attention.",
  },
  {
    title: "Stakeholder strategy",
    desc: "Identifying relevant stakeholder groups, understanding their interests, and developing appropriate engagement priorities and communication approaches.",
  },
  {
    title: "Leadership positioning",
    desc: "Developing executive narratives, thought-leadership themes, and communication priorities that reflect an organisation's strategic direction.",
  },
  {
    title: "Crisis readiness",
    desc: "Considering potential communication risks, decision-making responsibilities, escalation processes, and the preparation needed for sensitive situations.",
  },
  {
    title: "Strategic workshops",
    desc: "Facilitated discussions designed to examine challenges, test assumptions, explore options, and develop shared direction.",
  },
  {
    title: "Communications governance",
    desc: "Reviewing communication responsibilities, approval processes, internal alignment, and decision-making structures to support consistency.",
  },
];

const audiences = [
  "Executives making important brand, market, or reputation decisions",
  "Leadership teams navigating organisational change or new opportunities",
  "Organisations seeking a clearer perspective on complex communication challenges",
];

const decisionQuestions = [
  {
    number: "01",
    question: "What has changed?",
    desc: "Identify the business, market, stakeholder, or reputational shift that makes the existing approach worth reconsidering.",
  },
  {
    number: "02",
    question: "What is actually at stake?",
    desc: "Look beyond the immediate problem to understand the commercial, organisational, cultural, and reputational implications.",
  },
  {
    number: "03",
    question: "Who can affect the outcome?",
    desc: "Consider the people, institutions, audiences, and internal stakeholders whose expectations or actions may influence the decision.",
  },
  {
    number: "04",
    question: "Which choices are available?",
    desc: "Explore credible options and consider their implications, trade-offs, timing, and resource requirements.",
  },
  {
    number: "05",
    question: "What should happen next?",
    desc: "Translate the discussion into a clear direction, practical priorities, and a considered sequence of next steps.",
  },
];

const decisionPrinciples = [
  {
    icon: Compass,
    title: "Direction",
    desc: "What outcome is the organisation trying to achieve?",
  },
  {
    icon: Scale,
    title: "Trade-offs",
    desc: "What does each option make possible, and what might it require?",
  },
  {
    icon: CircleAlert,
    title: "Risk",
    desc: "What could prevent, delay, or undermine the intended outcome?",
  },
  {
    icon: Target,
    title: "Action",
    desc: "What decisions and next steps will move the organisation forward?",
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Executive session",
    timing: "Focused discussion",
    desc: "A focused conversation around a defined challenge, intended to clarify the problem, examine perspectives, and identify possible next steps.",
  },
  {
    number: "02",
    title: "Advisory project",
    timing: "Defined scope",
    desc: "A structured engagement built around a specific question, with activities and deliverables agreed according to the brief.",
  },
  {
    number: "03",
    title: "Ongoing counsel",
    timing: "Continuing support",
    desc: "An advisory arrangement that can be considered where leadership requires support across a series of evolving decisions.",
  },
];

const outputs = [
  "Executive briefing",
  "Market-context assessment",
  "Stakeholder mapping",
  "Risk and opportunity review",
  "Strategic options paper",
  "Leadership narrative",
  "Decision framework",
  "Crisis-readiness recommendations",
  "Workshop facilitation",
  "Communications governance review",
  "Leadership presentation",
  "Action planning",
];

/*
  Editorial perspectives, not client case studies.

  No invented client names, project outcomes,
  numerical results, or delivery claims.
*/

const advisoryPerspectives = [
  {
    number: "01",
    category: "Market understanding",
    title: "Context Before Entry",
    description:
      "Market-entry decisions benefit from understanding more than commercial opportunity. Local expectations, stakeholder relationships, communication, and reputation all deserve consideration.",
    takeaway: "Understand the environment",
    icon: Search,
  },
  {
    number: "02",
    category: "Leadership alignment",
    title: "Clarity Before Communication",
    description:
      "When a leadership team has different interpretations of a challenge, communication can become inconsistent. Shared understanding of the problem should come before the public narrative.",
    takeaway: "Align the decision",
    icon: Users,
  },
  {
    number: "03",
    category: "Reputation and risk",
    title: "Preparation Before Pressure",
    description:
      "Sensitive situations are harder to navigate when responsibilities, information flows, and decisions are unclear. Communication readiness begins with understanding how the organisation will respond.",
    takeaway: "Prepare the response",
    icon: ShieldCheck,
  },
];

/*
  Areas of advisory work, not fictional employees
  or claims about a dedicated advisory department.
*/

const advisoryDisciplines = [
  {
    icon: Compass,
    title: "Strategic thinking",
    desc: "Examining the wider context, understanding the problem, and considering possible directions.",
  },
  {
    icon: Users,
    title: "Stakeholder understanding",
    desc: "Considering the interests, expectations, relationships, and communication needs surrounding a decision.",
  },
  {
    icon: Route,
    title: "Decision support",
    desc: "Turning analysis and discussion into recommendations, priorities, and practical next steps.",
  },
];

const relatedCapabilities = [
  {
    name: "Brand Strategy",
    desc: "Define the positioning and choices that give a brand direction.",
    link: "/what-we-do/brand-strategy/",
  },
  {
    name: "Public Relations",
    desc: "Consider reputation, stakeholder relationships, and public communication.",
    link: "/what-we-do/public-relations/",
  },
  {
    name: "Creative & Content",
    desc: "Translate strategic thinking into messages, ideas, and communication.",
    link: "/what-we-do/creative-and-content/",
  },
];

const faqs = [
  {
    q: "What is the difference between advisory and strategy?",
    a: "Strategy typically focuses on defining a direction for a specific business, brand, or communication challenge. Advisory focuses on helping decision-makers examine circumstances, options, risks, stakeholders, and implications. The two can overlap.",
  },
  {
    q: "Can advisory involve senior leadership?",
    a: "An advisory brief can be structured around the needs of senior decision-makers. The participants, format, and responsibilities would be agreed during project scoping.",
  },
  {
    q: "Can advisory support market-entry decisions?",
    a: "Market-entry questions may involve local audience expectations, stakeholder relationships, brand positioning, communication priorities, and reputation considerations. The areas examined depend on the specific brief.",
  },
  {
    q: "How is confidential information handled?",
    a: "Confidentiality requirements should be established before sensitive information is shared. Any necessary agreements, access arrangements, and information-handling responsibilities can be addressed during scoping.",
  },
  {
    q: "Does every engagement require a long-term commitment?",
    a: "Not necessarily. The appropriate format depends on the decision being considered. A focused discussion, defined project, workshop, or continuing arrangement may be considered during scoping.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function AdvisoryPage() {
  return (
    <div className="flex w-full flex-col bg-[var(--brand-paper)]">
      {/* =====================================================
          HERO — NO GRID
      ===================================================== */}

      <section className="relative overflow-hidden bg-black px-5 pb-24 pt-32 text-white md:px-8 lg:px-12">
        {/* Soft atmospheric gradients only */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 70% at 100% 20%, rgba(229,0,105,0.17) 0%, transparent 65%)",
              "radial-gradient(ellipse 45% 55% at 0% 100%, rgba(78,19,42,0.32) 0%, transparent 70%)",
              "linear-gradient(135deg, #000000 0%, #080405 55%, #16090e 100%)",
            ].join(", "),
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex flex-wrap items-center gap-2 text-sm text-neutral-400"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>What We Do</span>

            <ChevronRight className="h-4 w-4" />

            <span className="text-white">Advisory</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <span className="mb-5 block text-sm font-bold uppercase tracking-[0.22em] text-[#E50069]">
                Capability
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="mb-7 max-w-[900px] font-serif text-[clamp(2.7rem,6vw,5.4rem)] leading-[1.02] tracking-[-0.025em]"
              >
                Counsel for decisions that cannot be made on instinct alone.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mb-12 max-w-3xl text-[clamp(1.05rem,1.8vw,1.25rem)] leading-relaxed text-neutral-300"
              >
                We bring strategic thinking to complex decisions involving
                brands, reputation, market context, stakeholder relationships,
                and communications. The aim is to help leadership see the
                situation more clearly and consider what should happen next.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="/start-a-project/"
                  className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#E50069] px-8 py-4 text-center text-base font-semibold text-black"
                >
                  Discuss an advisory brief
                  <span className="arrow-nudge">&rarr;</span>
                </Link>

                <a
                  href="#approach"
                  className="group btn-glow-outline inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-center text-base font-medium text-white"
                >
                  See our approach
                  <span className="arrow-nudge">&darr;</span>
                </a>
              </motion.div>
            </div>

            {/* Executive note */}

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.65,
              }}
              className="relative border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm lg:col-span-4 lg:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E50069]">
                  A perspective on advisory
                </span>

                <FileText className="h-5 w-5 text-white/50" />
              </div>

              <p className="mb-8 font-serif text-2xl leading-snug text-white">
                The value of counsel is not having an answer for everything. It
                is knowing which question changes the decision.
              </p>

              <div className="border-t border-white/15 pt-5">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Strategic perspective
                </p>

                <p className="mt-1 text-sm text-white/70">
                  Bwanji · Zambia &amp; Malawi
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS IS FOR
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <motion.div {...reveal} variants={fadeUp}>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Leadership challenges
              </span>

              <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black">
                Who this is for
              </h2>
            </motion.div>

            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
              Advisory is particularly relevant when a decision requires careful
              thinking, a broader perspective, and an understanding of its
              implications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((text, index) => (
              <motion.article
                key={text}
                {...reveal}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="group relative min-h-[270px] overflow-hidden border border-[#E5E2DA] bg-white p-8 card-lift"
              >
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 right-4 select-none font-serif text-[8rem] font-black leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(229,0,105,0.28)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <BriefcaseBusiness
                  className="mb-7 h-7 w-7 text-[#E50069]"
                  strokeWidth={1.7}
                />

                <p className="relative z-10 max-w-[28ch] font-serif text-xl leading-relaxed text-black">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT'S INCLUDED
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <motion.div
            {...reveal}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Areas of counsel
            </span>

            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black">
              What&apos;s included
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[#4A4A47]">
              The areas considered depend on the challenge. An engagement may
              focus on one issue or connect several related decisions.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {advisoryServices.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`advisory-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0 md:px-8"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-black hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#E50069]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {item.title}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="max-w-2xl pb-6 pl-10 leading-relaxed text-[#4A4A47]">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =====================================================
          THE DECISION ROOM
      ===================================================== */}

      <section
        id="approach"
        className="scroll-mt-24 bg-white py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                The decision room
              </span>

              <motion.h2
                {...reveal}
                variants={fadeUp}
                className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              >
                Five questions before a recommendation.
              </motion.h2>

              <p className="max-w-sm leading-relaxed text-[#4A4A47]">
                Useful advice begins with understanding the decision rather than
                assuming the answer. These questions provide a way to structure
                that thinking.
              </p>
            </div>

            <div className="lg:col-span-8">
              {decisionQuestions.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-[64px_1fr] gap-5 border-t border-[#E5E2DA] py-8 first:border-t-0 md:grid-cols-[100px_1fr] md:gap-8 md:py-10"
                >
                  <span
                    className="font-serif text-4xl font-black leading-none md:text-5xl"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px #E50069",
                    }}
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3 className="mb-3 font-serif text-2xl text-black transition-colors group-hover:text-[#E50069] md:text-3xl">
                      {item.question}
                    </h3>

                    <p className="max-w-2xl leading-relaxed text-[#4A4A47]">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DECISION PRINCIPLES
      ===================================================== */}

      <section className="bg-black py-20 text-white md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Decision principles
            </span>

            <motion.h2
              {...reveal}
              variants={fadeUp}
              className="mb-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]"
            >
              Good advice makes the trade-off visible.
            </motion.h2>

            <p className="max-w-2xl leading-relaxed text-white/65">
              Important decisions rarely have a perfect answer. A useful
              advisory process helps make the options and their implications
              easier to understand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {decisionPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...reveal}
                  variants={fadeUp}
                  transition={{ delay: index * 0.08 }}
                  className="group min-h-[270px] border border-white/15 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-[#E50069]/60 hover:bg-white/[0.07]"
                >
                  <Icon
                    className="mb-8 h-7 w-7 text-[#E50069]"
                    strokeWidth={1.7}
                  />

                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mb-4 font-serif text-2xl">{item.title}</h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGAGEMENT FORMATS
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Possible engagement formats
            </span>

            <motion.h2
              {...reveal}
              variants={fadeUp}
              className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
            >
              Counsel shaped around the decision.
            </motion.h2>

            <p className="mt-5 leading-relaxed text-[#4A4A47]">
              The right format depends on the question, the people involved, and
              the depth of work required. Scope and availability are confirmed
              before engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.article
                key={model.title}
                {...reveal}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className={`relative flex min-h-[330px] flex-col overflow-hidden p-8 card-lift ${
                  index === 1
                    ? "bg-[#E50069] text-black"
                    : "border border-[#E5E2DA] bg-white text-black"
                }`}
              >
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] opacity-55">
                  {model.timing}
                </p>

                <h3 className="mb-5 font-serif text-3xl">{model.title}</h3>

                <p className="relative z-10 leading-relaxed opacity-70">
                  {model.desc}
                </p>

                <div className="relative z-10 mt-auto pt-8">
                  <Link
                    to="/start-a-project/"
                    className="group inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Discuss this format
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-serif text-[8rem] font-black leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke:
                      index === 1
                        ? "1.5px rgba(0,0,0,0.20)"
                        : "1.5px rgba(229,0,105,0.24)",
                  }}
                >
                  {model.number}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POSSIBLE DELIVERABLES
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Practical outputs
              </span>

              <motion.h2
                {...reveal}
                variants={fadeUp}
                className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              >
                What the work can produce.
              </motion.h2>

              <p className="max-w-md leading-relaxed text-[#4A4A47]">
                Advisory outputs should help make decisions clearer and next
                steps more practical. The deliverables depend on the agreed
                brief.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 border-l border-t border-[#E5E2DA] sm:grid-cols-2">
                {outputs.map((output, index) => (
                  <motion.div
                    key={output}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="group flex items-start gap-4 border-b border-r border-[#E5E2DA] bg-white p-5 transition-colors hover:bg-black md:p-6"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#E50069]">
                      <Target className="h-5 w-5" />
                    </span>

                    <p className="text-sm font-medium leading-relaxed text-black transition-colors group-hover:text-white md:text-base">
                      {output}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ADVISORY PERSPECTIVES
          No fabricated case studies or metrics
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Advisory perspectives
              </span>

              <motion.h2
                {...reveal}
                variants={fadeUp}
                className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
              >
                Thinking beyond the immediate question.
              </motion.h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
              Three considerations that can shape important leadership
              decisions. These are editorial perspectives, not examples of
              completed projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {advisoryPerspectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...reveal}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift"
                >
                  <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-black p-6 text-white">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,0,105,0.22),transparent_62%)]" />

                    <span
                      aria-hidden="true"
                      className="relative z-10 font-serif text-[6rem] font-black leading-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #E50069",
                      }}
                    >
                      {item.number}
                    </span>

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#E50069]" />

                      <p className="text-xs uppercase tracking-widest text-[#4A4A47]">
                        {item.category}
                      </p>
                    </div>

                    <h3 className="mb-4 font-serif text-xl text-black">
                      {item.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-[#4A4A47]">
                      {item.description}
                    </p>

                    <div className="mt-auto border-t border-[var(--brand-divider)] pt-4">
                      <p className="text-sm font-semibold text-[#E50069]">
                        {item.takeaway}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/work/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#E50069]"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELEVANT DISCIPLINES
          No unverified staff profiles
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Perspectives that matter
            </span>

            <motion.h2
              {...reveal}
              variants={fadeUp}
              className="mb-4 font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
            >
              The thinking behind the counsel.
            </motion.h2>

            <p className="leading-relaxed text-[#4A4A47]">
              Complex decisions benefit from considering several connected
              disciplines rather than viewing a challenge through a single lens.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {advisoryDisciplines.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...reveal}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="group border border-[#E5E2DA] bg-white p-7 transition-colors hover:border-black"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-colors group-hover:bg-[#E50069] group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-serif text-3xl text-[#E50069]/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-2xl text-black">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#4A4A47]">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/team/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#E50069]"
            >
              Meet the Bwanji team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKSHOPS
      ===================================================== */}

      <section className="bg-[#E50069] py-20 text-black md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <Presentation className="h-7 w-7" />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
                Strategic workshops
              </p>

              <h2 className="mb-3 font-serif text-[clamp(1.6rem,3vw,2.5rem)]">
                Sometimes the room already has the answer.
              </h2>

              <p className="max-w-2xl leading-relaxed text-black/70">
                A structured discussion can help teams challenge assumptions,
                consider different perspectives, and work towards a shared
                understanding of the decision ahead.
              </p>
            </div>

            <Link
              to="/start-a-project/"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-6 py-3 text-sm font-semibold"
            >
              Discuss a workshop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED CAPABILITIES
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            {...reveal}
            variants={fadeUp}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          >
            Related capabilities
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.name}
                {...reveal}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={capability.link}
                  className="group flex min-h-[270px] flex-col border border-[#E5E2DA] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  <Lightbulb className="mb-7 h-6 w-6 text-[#E50069]" />

                  <h3 className="mb-4 font-serif text-2xl text-black transition-colors group-hover:text-white">
                    {capability.name}
                  </h3>

                  <p className="mb-8 text-sm leading-relaxed text-[#4A4A47] transition-colors group-hover:text-white/60">
                    {capability.desc}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-medium text-black transition-colors group-hover:text-[#E50069]">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[820px] px-5 md:px-8 lg:px-12">
          <motion.h2
            {...reveal}
            variants={fadeUp}
            className="mb-12 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          >
            Frequently asked questions
          </motion.h2>

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-black hover:no-underline">
                  {item.q}
                </AccordionTrigger>

                <AccordionContent className="pb-6 leading-relaxed text-[#4A4A47]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA — NO GRID
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E50069] py-20 text-center">
        <div className="relative z-10 mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <BriefcaseBusiness className="mx-auto mb-5 h-8 w-8 text-black" />

          <motion.h2
            {...reveal}
            variants={fadeUp}
            className="mx-auto mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black"
          >
            Facing a decision that needs a clearer view?
          </motion.h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-black/70">
            Tell us what has changed, what is at stake, and where the decision
            is proving difficult.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
            >
              Discuss an advisory brief
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <Link
              to="/start-a-project/"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-base font-medium text-black"
            >
              <MessageCircle className="h-5 w-5" />
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
