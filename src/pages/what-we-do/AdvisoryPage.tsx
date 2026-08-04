import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Compass,
  FileText,
  Lightbulb,
  MessageCircle,
  Presentation,
  Scale,
  Target,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const advisoryServices = [
  {
    title: "Executive counsel",
    desc: "Confidential strategic counsel for CEOs, founders, boards, country directors, and senior leadership teams facing consequential decisions.",
  },
  {
    title: "Market-entry advisory",
    desc: "Local context, stakeholder realities, audience expectations, risks, and communication priorities for organisations entering Zambia or Malawi.",
  },
  {
    title: "Brand and reputation diagnosis",
    desc: "An honest assessment of how the organisation is understood, where trust is being lost, and which issues deserve leadership attention.",
  },
  {
    title: "Stakeholder strategy",
    desc: "Mapping, prioritisation, message development, and engagement planning for government, regulators, media, employees, partners, and communities.",
  },
  {
    title: "Leadership positioning",
    desc: "Clear positioning, narrative development, speaking strategy, thought leadership, and visibility planning for senior executives.",
  },
  {
    title: "Crisis readiness",
    desc: "Scenario planning, escalation protocols, spokesperson preparation, simulations, holding statements, and decision frameworks before pressure arrives.",
  },
  {
    title: "Strategic workshops",
    desc: "Structured leadership sessions that help teams align around a problem, make choices, and leave with clear ownership of the next steps.",
  },
  {
    title: "Communications governance",
    desc: "Roles, approval systems, policies, escalation paths, and operating principles that make communication faster and more consistent.",
  },
];

const audiences = [
  "Executives making high-consequence brand, market, or reputation decisions",
  "Leadership teams entering a new market or navigating organisational change",
  "Boards and country directors who need independent, locally grounded counsel",
];

const decisionQuestions = [
  {
    number: "01",
    question: "What has changed?",
    desc: "We identify the business, market, stakeholder, or reputational shift that makes the current approach insufficient.",
  },
  {
    number: "02",
    question: "What is actually at stake?",
    desc: "We separate visible symptoms from the commercial, political, cultural, and organisational consequences beneath them.",
  },
  {
    number: "03",
    question: "Who can affect the outcome?",
    desc: "We map the people, institutions, audiences, and internal actors with the power to accelerate, block, or reshape the decision.",
  },
  {
    number: "04",
    question: "Which choices are real?",
    desc: "We define the credible options, including the trade-offs, risks, timing, resources, and likely responses attached to each.",
  },
  {
    number: "05",
    question: "What should leadership do next?",
    desc: "We turn the analysis into a practical recommendation, clear ownership, and a sequence of actions.",
  },
];

const outputs = [
  "Executive briefing",
  "Market-entry assessment",
  "Stakeholder map",
  "Risk and opportunity analysis",
  "Strategic options paper",
  "Leadership narrative",
  "Decision framework",
  "Crisis-readiness plan",
  "Workshop facilitation",
  "Communications governance model",
  "Board or investor presentation",
  "90-day action plan",
];

const caseStudies = [
  {
    client: "Regional Financial Institution",
    title: "Entering a Market with Trust Deficit",
    stat: "90",
    statSuffix: "days",
    statDesc:
      "from initial market diagnosis to an approved stakeholder-entry plan.",
    link: "/work/",
  },
  {
    client: "Public-Sector Organisation",
    title: "Rebuilding the Leadership Narrative",
    stat: "12",
    statSuffix: "stakeholder groups",
    statDesc:
      "aligned around a single engagement and communication framework.",
    link: "/work/",
  },
  {
    client: "Southern African Corporate",
    title: "Crisis Readiness Before the Pressure",
    stat: "04",
    statSuffix: "hours",
    statDesc:
      "target response window established through simulation and protocol design.",
    link: "/work/",
  },
];

const team = [
  {
    initials: "NM",
    name: "Naledi Moyo",
    role: "Managing Partner",
    office: "Regional",
  },
  {
    initials: "CK",
    name: "Chanda Kasonde",
    role: "Strategy & Advisory Director",
    office: "Lusaka",
  },
  {
    initials: "TM",
    name: "Tadala Mbewe",
    role: "Senior Stakeholder Advisor",
    office: "Lilongwe",
  },
];

const engagementModels = [
  {
    title: "Executive session",
    timing: "Focused",
    desc: "A short, senior working session to examine one decision, challenge assumptions, and establish the next move.",
  },
  {
    title: "Advisory project",
    timing: "Defined",
    desc: "A structured engagement with research, stakeholder input, analysis, recommendations, and clear deliverables.",
  },
  {
    title: "Ongoing counsel",
    timing: "Retained",
    desc: "Regular access to senior strategic counsel for evolving decisions, risks, reputation, and leadership communication.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="flex w-full flex-col bg-[var(--brand-paper)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#000000] px-5 pb-24 pt-32 text-white md:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            background: [
              "radial-gradient(ellipse 55% 70% at 100% 20%, rgba(229,0,105,0.20) 0%, transparent 60%)",
              "radial-gradient(ellipse 45% 55% at 0% 100%, #241318 0%, transparent 65%)",
              "linear-gradient(135deg, #000000 0%, #080405 55%, #16090e 100%)",
            ].join(", "),
          }}
        />

        {/* Editorial grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: [
              "linear-gradient(to right, #ffffff 1px, transparent 1px)",
              "linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "88px 88px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <nav className="mb-14 flex flex-wrap items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="cursor-default">What We Do</span>
            <ChevronRight className="h-4 w-4" />
            <span className="cursor-default text-white">Advisory</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <span className="mb-5 block text-sm font-bold uppercase tracking-[0.22em] text-[#E50069]">
                Capability
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
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
                We help leaders understand difficult situations, examine the
                real choices, and move with greater clarity across brand,
                reputation, market entry, stakeholder relations, and
                communications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="/start-a-project/"
                  className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#E50069] px-8 py-4 text-base font-semibold text-black"
                >
                  Request an advisory session
                  <span className="arrow-nudge">&rarr;</span>
                </Link>

                <a
                  href="#approach"
                  className="group btn-glow-outline inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-base font-medium text-white"
                >
                  See our approach
                  <span className="arrow-nudge">&darr;</span>
                </a>
              </motion.div>
            </div>

            {/* Variation: executive note panel */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.65 }}
              className="relative border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm lg:col-span-4 lg:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E50069]">
                  Advisory note
                </span>
                <FileText className="h-5 w-5 text-white/50" />
              </div>

              <p className="mb-8 font-serif text-2xl leading-snug text-white">
                The value of counsel is not having an answer for everything.
                It is knowing which question changes the decision.
              </p>

              <div className="border-t border-white/15 pt-5">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Bwanji Advisory
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Zambia · Malawi · Southern Africa
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Senior counsel
              </span>
              <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black">
                Who this is for
              </h2>
            </motion.div>

            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
              Advisory works best when leadership is ready to examine the
              problem honestly and make choices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((text, index) => (
              <motion.article
                key={text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* What's included */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Areas of counsel
            </span>

            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black">
              What&apos;s included
            </h2>
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

      {/* Decision room variation */}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              >
                Five questions before a recommendation.
              </motion.h2>

              <p className="max-w-sm leading-relaxed text-[#4A4A47]">
                We do not begin by forcing the issue into a preferred service.
                We begin by understanding the decision.
              </p>
            </div>

            <div className="lg:col-span-8">
              {decisionQuestions.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
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

      {/* Decision principles */}
      <section className="bg-black py-20 text-white md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              How we think
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]"
            >
              Good advice makes the trade-off visible.
            </motion.h2>

            <p className="max-w-2xl leading-relaxed text-white/65">
              Leadership decisions rarely have one perfect answer. Our role is
              to make the consequences clearer before the choice is made.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Compass,
                title: "Direction",
                desc: "What outcome are we trying to create?",
              },
              {
                icon: Scale,
                title: "Trade-offs",
                desc: "What does each option make possible—and what does it cost?",
              },
              {
                icon: CircleAlert,
                title: "Risk",
                desc: "What could prevent, delay, or damage the decision?",
              },
              {
                icon: Target,
                title: "Action",
                desc: "What needs to happen next, by whom, and by when?",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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

      {/* Engagement models */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Ways to engage
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
            >
              Counsel shaped around the decision.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <motion.article
                key={model.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

                <p className="leading-relaxed opacity-70">{model.desc}</p>

                <div className="mt-auto pt-8">
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
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Practical outputs
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              >
                What you leave with.
              </motion.h2>

              <p className="max-w-md leading-relaxed text-[#4A4A47]">
                Advisory should produce more than an interesting discussion.
                The output must help leadership decide, explain, and act.
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
                    transition={{ delay: index * 0.04 }}
                    className="group flex items-start gap-4 border-b border-r border-[#E5E2DA] bg-white p-5 transition-colors hover:bg-black md:p-6"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#E50069]" />

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

      {/* Proof */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Selected engagements
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
              >
                Proof from the decision room
              </motion.h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
              Some advisory work remains confidential. These examples describe
              the type of outcome without exposing protected detail.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift"
              >
                <div className="relative flex h-[230px] items-center justify-center overflow-hidden bg-black p-6 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,0,105,0.22),transparent_62%)]" />

                  <div className="relative z-10 text-center">
                    <p className="font-serif text-[4.5rem] font-black leading-none text-[#E50069]">
                      {study.stat}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/55">
                      {study.statSuffix}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs uppercase tracking-widest text-[#4A4A47]">
                    {study.client}
                  </p>

                  <h3 className="mb-4 font-serif text-xl text-black">
                    {study.title}
                  </h3>

                  <div className="mt-auto border-t border-[var(--brand-divider)] pt-4">
                    <p className="mb-5 text-sm leading-relaxed text-[#4A4A47]">
                      {study.statDesc}
                    </p>

                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-black underline-offset-4 hover:underline"
                    >
                      View related work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Senior involvement
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
            >
              The team
            </motion.h2>

            <p className="leading-relaxed text-[#4A4A47]">
              Advisory engagements are led by senior practitioners. The people
              in the room remain close to the work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-[#E5E2DA] bg-white p-7 transition-colors hover:border-black"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black font-bold text-white transition-colors group-hover:bg-[#E50069] group-hover:text-black">
                    {member.initials}
                  </div>

                  <Building2 className="h-5 w-5 text-[#E50069]" />
                </div>

                <h3 className="mb-1 font-serif text-2xl text-black">
                  {member.name}
                </h3>

                <p className="text-sm text-[#4A4A47]">{member.role}</p>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-neutral-400">
                  {member.office}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-[#E50069] py-20 text-black md:py-24">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <Presentation className="h-7 w-7" />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
                Leadership workshops
              </p>

              <h2 className="mb-3 font-serif text-[clamp(1.6rem,3vw,2.5rem)]">
                Sometimes the room already has the answer.
              </h2>

              <p className="max-w-2xl leading-relaxed text-black/70">
                Our role is to structure the conversation, challenge the easy
                assumptions, and help the team turn insight into a shared
                decision.
              </p>
            </div>

            <Link
              to="/start-a-project/"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-6 py-3 text-sm font-semibold"
            >
              Plan a workshop
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related capabilities */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          >
            Related capabilities
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Brand Strategy",
                desc: "Define the position and choices that give the organisation direction.",
                link: "/what-we-do/brand-strategy/",
              },
              {
                name: "Public Relations",
                desc: "Build and protect standing across media, stakeholders, and public audiences.",
                link: "/what-we-do/public-relations/",
              },
              {
                name: "Creative & Content",
                desc: "Turn strategic direction into ideas, messages, and expressions people can understand.",
                link: "/what-we-do/creative-and-content/",
              },
            ].map((capability, index) => (
              <motion.div
                key={capability.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* FAQ */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[820px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          >
            Frequently asked questions
          </motion.h2>

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {[
              {
                q: "What is the difference between advisory and strategy?",
                a: "Strategy usually produces a defined direction or system around a specific business or brand challenge. Advisory is broader senior counsel that helps leadership assess options, risks, stakeholders, and decisions as circumstances evolve.",
              },
              {
                q: "Can you work directly with our CEO or board?",
                a: "Yes. Advisory engagements are designed for senior leadership and can include confidential executive sessions, board briefings, workshops, written recommendations, and ongoing counsel.",
              },
              {
                q: "Do you support organisations entering Zambia or Malawi?",
                a: "Yes. We can assess the local market, stakeholder environment, reputation risks, audience expectations, communication requirements, and the practical realities of entering either market.",
              },
              {
                q: "Can advisory work remain confidential?",
                a: "Yes. Many advisory assignments involve sensitive commercial, leadership, stakeholder, or reputational issues. Confidentiality is agreed at the beginning of the engagement.",
              },
              {
                q: "Do you offer one-off sessions?",
                a: "Yes. We offer focused executive sessions, defined advisory projects, strategic workshops, and ongoing retained counsel depending on the complexity of the decision.",
              },
            ].map((item, index) => (
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E50069] py-20 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <BriefcaseBusiness className="mx-auto mb-5 h-8 w-8 text-black" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black"
          >
            Facing a decision that needs a clearer view?
          </motion.h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-black/70">
            Tell us what has changed, what is at stake, and where the decision
            is stuck.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
            >
              Request an advisory session
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <a
              href="https://wa.me/260000000000"
              target="_blank"
              rel="noreferrer"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-base font-medium text-black"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}