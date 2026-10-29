import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
  Users,
  Newspaper,
  Eye,
  ArrowUpRight,
} from "lucide-react";

import ProcessSteps from "@/components/ProcessSteps";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =========================================================
   CONFIGURATION
========================================================= */

const BRAND_PINK = "#E50069";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const stagger = (index: number) => ({
  delay: index * 0.08,
  duration: 0.5,
  ease: "easeOut" as const,
});

/* =========================================================
   PAGE DATA
========================================================= */

const audiences = [
  {
    title: "Corporate leadership",
    description:
      "Organisations seeking strategic communications counsel, reputation management, and stakeholder alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Communications teams",
    description:
      "In-house teams looking for additional strategic thinking, local market knowledge, and execution support.",
    icon: MessageSquare,
  },
  {
    title: "Development organisations",
    description:
      "Institutions communicating complex programmes, engaging communities, and building stakeholder understanding.",
    icon: Users,
  },
];

const services = [
  {
    title: "Media relations",
    description:
      "Media engagement strategies, press materials, interview coordination, and communications support.",
  },
  {
    title: "Crisis & issues communications",
    description:
      "Crisis preparedness, scenario planning, message development, stakeholder communication, and reputation recovery planning.",
  },
  {
    title: "Stakeholder engagement",
    description:
      "Stakeholder mapping, engagement strategies, and communications for audiences with different interests and expectations.",
  },
  {
    title: "Executive communications",
    description:
      "Leadership messaging, thought leadership development, speeches, interviews, and executive positioning.",
  },
  {
    title: "Corporate communications",
    description:
      "Corporate narratives, organisational announcements, communications planning, and reputation-building initiatives.",
  },
  {
    title: "Internal communications",
    description:
      "Employee communication strategies, organisational change messaging, and internal stakeholder engagement.",
  },
  {
    title: "Reputation intelligence",
    description:
      "Media monitoring approaches, issue identification, stakeholder feedback, and communications evaluation.",
  },
  {
    title: "Public affairs communications",
    description:
      "Communications support for organisations operating within complex public, institutional, and regulatory environments.",
  },
];

/*
  VERIFIED PORTFOLIO CONTEXT

  This is the only project referenced on this page.

  No performance figures, client testimonials, campaign
  results, or detailed deliverables are claimed.

  Once the approved Work data is available, this project
  should be linked to its canonical case-study record.
*/

const selectedExperience = {
  client: "Old Mutual Malawi",
  title: "FDH IPO Crisis Management",
  year: "2020",
  category: "Public Relations & Reputation",
  description:
    "A crisis and reputation communications engagement associated with the FDH IPO in Malawi.",
  link: "/work/",
};

const reputationPrinciples = [
  {
    number: "01",
    title: "Understand the environment",
    description:
      "Start with the organisation, the issue, the stakeholders, and the local context before developing a communications response.",
  },
  {
    number: "02",
    title: "Build the right narrative",
    description:
      "Develop clear, credible messages that reflect the organisation's position and the concerns of its audiences.",
  },
  {
    number: "03",
    title: "Engage with purpose",
    description:
      "Choose appropriate communication channels, spokespersons, and engagement approaches for each audience.",
  },
  {
    number: "04",
    title: "Listen and adapt",
    description:
      "Use feedback and emerging information to refine communication and support better decisions.",
  },
];

const relatedCapabilities = [
  {
    name: "Brand Strategy",
    description:
      "Building distinctive positioning, purpose, and brand direction.",
    link: "/what-we-do/brand-strategy/",
  },
  {
    name: "Advisory",
    description:
      "Strategic counsel for complex business and communications challenges.",
    link: "/what-we-do/advisory/",
  },
  {
    name: "Digital & Performance",
    description:
      "Connecting digital communication with measurable business objectives.",
    link: "/what-we-do/digital-and-performance/",
  },
];

const faqs = [
  {
    question: "Can Bwanji support both ongoing PR and individual projects?",
    answer:
      "Public relations requirements vary by organisation. We can discuss ongoing communications support or a defined project engagement and recommend an approach based on your objectives, scope, and timeline.",
  },
  {
    question: "Can you support communications in Zambia and Malawi?",
    answer:
      "Our focus includes Zambia and Malawi. We approach each market with consideration for its audiences, media environment, languages, and stakeholder context.",
  },
  {
    question: "Do you provide crisis communications support?",
    answer:
      "Crisis and issues communications form part of this capability. Support can include preparedness planning, messaging, stakeholder communications, and reputation management. Availability and response arrangements are agreed according to the engagement.",
  },
  {
    question: "Can you work alongside our internal communications team?",
    answer:
      "Yes. An engagement can be structured to complement an internal team through strategic counsel, planning, content development, or specific communications activities.",
  },
  {
    question: "How do we begin a public relations project?",
    answer:
      "Start by sharing your organisation's objectives, the challenge you are addressing, your target audiences, and any relevant timelines. We can then discuss an appropriate scope of work.",
  },
];

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.55 }}
      className={`mb-12 ${
        center ? "mx-auto max-w-[760px] text-center" : "max-w-[850px]"
      }`}
    >
      {eyebrow && (
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.75rem)] leading-[1.15] tracking-tight text-black">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-[700px] text-base leading-relaxed text-[#4A4A47] md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function PublicRelationsPage() {
  return (
    <div className="flex w-full flex-col bg-[var(--brand-paper)]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-black px-5 pb-20 pt-32 text-white md:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1320px]">
          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-sm text-neutral-400"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span>What We Do</span>

            <ChevronRight className="h-4 w-4" />

            <span className="text-white">Public Relations & Reputation</span>
          </nav>

          <div className="max-w-[900px]">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]"
            >
              Capability
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="mb-8 max-w-[850px] font-serif text-[clamp(2.7rem,5.5vw,5rem)] leading-[1.08] tracking-tight"
            >
              Public Relations
              <br />
              <span className="text-[#E50069]">& Reputation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="mb-12 max-w-[720px] text-[clamp(1.125rem,2vw,1.3rem)] leading-relaxed text-neutral-300"
            >
              Reputation is shaped by what organisations say, what they do, and
              how they engage the people who matter. We bring strategic
              thinking, communications expertise, and local market understanding
              to help organisations navigate those relationships in Zambia and
              Malawi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/start-a-project/"
                className="group btn-glow-pink inline-flex items-center justify-center gap-3 bg-[#E50069] px-8 py-4 text-center text-base font-semibold text-black"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/work/"
                className="group btn-glow-outline inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-4 text-center text-base font-medium text-white transition-colors hover:border-white"
              >
                Explore our work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div {...fadeUp}>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Why reputation matters
            </span>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-tight text-black">
              What people believe
              <br />
              shapes what they do.
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-base leading-[1.9] text-[#4A4A47] md:text-lg"
          >
            <p>
              A strong reputation is built through consistency, credibility, and
              meaningful engagement. It influences how customers, employees,
              communities, media, and other stakeholders understand an
              organisation.
            </p>

            <p>
              Effective public relations goes beyond visibility. It connects an
              organisation's objectives with the expectations of the audiences
              it needs to reach.
            </p>

            <p>
              Our approach combines strategic communications, local context, and
              thoughtful execution to support clearer conversations and stronger
              relationships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS IS FOR
      ===================================================== */}

      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Who we support"
            title="Communications challenges come in different forms."
            description="From established organisations to teams navigating change, our work begins with understanding the people, pressures, and decisions involved."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <motion.article
                  key={audience.title}
                  {...fadeUp}
                  transition={stagger(index)}
                  className="group card-lift flex h-full flex-col border border-[#E5E2DA] border-l-4 border-l-[#E50069] bg-white p-8"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#F2F2F2] text-black transition-colors duration-300 group-hover:bg-[#E50069]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>

                  <h3 className="mb-4 font-serif text-xl leading-tight text-black">
                    {audience.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#4A4A47]">
                    {audience.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Our capabilities"
            title="What's included"
            description="A range of communications disciplines that can be brought together according to the needs of each engagement."
            center
          />

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {services.map((service, index) => (
              <AccordionItem
                key={service.title}
                value={`service-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0 md:px-8"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-black hover:no-underline md:text-xl">
                  {service.title}
                </AccordionTrigger>

                <AccordionContent className="max-w-[720px] pb-7 text-base leading-relaxed text-[#4A4A47]">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Our approach"
            title="How we work"
            description="Effective communications begin with understanding the challenge before deciding how to respond."
          />

          <ProcessSteps />
        </div>
      </section>

      {/* =====================================================
          REPUTATION PRINCIPLES
      ===================================================== */}

      <section className="bg-black px-5 py-20 text-white md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...fadeUp} className="mb-14 max-w-[800px]">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Strategic perspective
            </span>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-tight">
              Reputation requires more than a message.
            </h2>

            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-neutral-400">
              Communications work best when the strategy, the organisation's
              actions, and stakeholder expectations are considered together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-px bg-white/15 md:grid-cols-2">
            {reputationPrinciples.map((principle, index) => (
              <motion.article
                key={principle.number}
                {...fadeUp}
                transition={stagger(index)}
                className="bg-black p-8 md:p-10 lg:p-12"
              >
                <span className="mb-10 block font-serif text-4xl text-[#E50069]">
                  {principle.number}
                </span>

                <h3 className="mb-4 font-serif text-xl md:text-2xl">
                  {principle.title}
                </h3>

                <p className="max-w-[480px] text-base leading-relaxed text-neutral-400">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED EXPERIENCE
      ===================================================== */}

      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected experience"
              title="Reputation in practice"
              description="An example from our established portfolio of work."
            />

            <Link
              to="/work/"
              className="group mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#E50069]"
            >
              View all work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.article
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="group grid overflow-hidden border border-[#E5E2DA] bg-[#F2F2F2] lg:grid-cols-[0.9fr_1.1fr]"
          >
            {/* Visual panel */}

            <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-black p-8 text-white md:p-12 lg:min-h-[440px]">
              <div className="absolute -right-20 -top-20 h-[340px] w-[340px] rounded-full border border-white/10" />

              <div className="absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full border border-white/10" />

              <div className="absolute bottom-[-100px] left-[-80px] h-[280px] w-[280px] rounded-full border border-[#E50069]/30" />

              <div className="relative z-10 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#E50069]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
                  Public Relations & Reputation
                </span>
              </div>

              <div className="relative z-10">
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#E50069]">
                  Selected project
                </p>

                <h3 className="max-w-[440px] font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.1]">
                  Reputation.
                  <br />
                  Responsibility.
                  <br />
                  Communication.
                </h3>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-5">
                <span className="text-sm text-neutral-400">
                  Malawi · {selectedExperience.year}
                </span>
              </div>
            </div>

            {/* Project information */}

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <span className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                {selectedExperience.client}
              </span>

              <h3 className="mb-6 max-w-[620px] font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-tight text-black">
                {selectedExperience.title}
              </h3>

              <p className="mb-10 max-w-[560px] text-base leading-[1.9] text-[#4A4A47] md:text-lg">
                {selectedExperience.description}
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                <span className="border border-[#D9D9D9] px-4 py-2 text-xs font-medium text-[#4A4A47]">
                  Crisis communications
                </span>

                <span className="border border-[#D9D9D9] px-4 py-2 text-xs font-medium text-[#4A4A47]">
                  Reputation
                </span>

                <span className="border border-[#D9D9D9] px-4 py-2 text-xs font-medium text-[#4A4A47]">
                  Malawi
                </span>
              </div>

              <Link
                to={selectedExperience.link}
                className="group/link inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-semibold text-black transition-colors hover:border-[#E50069] hover:text-[#E50069]"
              >
                Explore our portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}

      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <motion.div {...fadeUp}>
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Our people
              </span>

              <h2 className="mb-7 font-serif text-[clamp(2rem,3.5vw,3rem)] leading-tight text-black">
                The thinking behind
                <br />
                the communication.
              </h2>

              <p className="mb-6 max-w-[650px] text-base leading-[1.9] text-[#4A4A47] md:text-lg">
                Public relations requires an understanding of people,
                institutions, business objectives, and the environments in which
                organisations operate.
              </p>

              <p className="mb-10 max-w-[650px] text-base leading-[1.9] text-[#4A4A47] md:text-lg">
                Meet the Bwanji team and the leadership supporting our work
                across Zambia and Malawi.
              </p>

              <Link
                to="/team/"
                className="group inline-flex items-center gap-3 bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                Meet our team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.12 }}
              className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-black p-9 text-white md:min-h-[430px] md:p-12"
            >
              <div className="absolute right-[-70px] top-[-70px] h-[270px] w-[270px] rounded-full border border-white/10" />

              <div className="absolute right-[-30px] top-[-30px] h-[190px] w-[190px] rounded-full border border-white/10" />

              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Local understanding
              </span>

              <div className="relative z-10">
                <span className="mb-5 block font-serif text-6xl leading-none text-[#E50069]">
                  “
                </span>

                <p className="max-w-[480px] font-serif text-[clamp(1.5rem,2.5vw,2.25rem)] leading-snug">
                  The right communication starts with understanding the people
                  it needs to reach.
                </p>
              </div>

              <div className="relative z-10 border-t border-white/20 pt-5">
                <span className="text-xs uppercase tracking-widest text-neutral-400">
                  Our approach to reputation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEDIA INTELLIGENCE
      ===================================================== */}

      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Communications intelligence"
            title="Listen carefully. Communicate clearly."
            description="Reputation management depends on understanding the conversations, issues, and stakeholders that shape public perception."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Newspaper,
                title: "Media landscape",
                description:
                  "Understanding the channels, publications, and platforms relevant to an organisation's audiences.",
              },
              {
                icon: Eye,
                title: "Issues & perception",
                description:
                  "Identifying emerging issues and considering how different stakeholders may interpret them.",
              },
              {
                icon: Users,
                title: "Stakeholder understanding",
                description:
                  "Recognising the interests, expectations, and information needs of the people an organisation engages.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={stagger(index)}
                  className="card-lift border border-[#E5E2DA] bg-white p-8"
                >
                  <Icon
                    className="mb-8 h-8 w-8 text-[#E50069]"
                    strokeWidth={1.5}
                  />

                  <h3 className="mb-4 font-serif text-xl text-black">
                    {item.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#4A4A47]">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED CAPABILITIES
      ===================================================== */}

      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <SectionHeading
            eyebrow="Explore more"
            title="Related capabilities"
            description="Reputation is connected to brand strategy, organisational decisions, and the wider communications experience."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.name}
                {...fadeUp}
                transition={stagger(index)}
              >
                <Link
                  to={capability.link}
                  className="group flex h-full flex-col border border-[#E5E2DA] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black"
                >
                  <h3 className="mb-4 font-serif text-xl text-black transition-colors group-hover:text-white">
                    {capability.name}
                  </h3>

                  <p className="mb-10 flex-1 text-sm leading-relaxed text-[#4A4A47] transition-colors group-hover:text-neutral-300">
                    {capability.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-black transition-colors group-hover:text-[#E50069]">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Questions about working together"
            center
          />

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0 md:px-8"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-black hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="max-w-[740px] pb-7 text-base leading-relaxed text-[#4A4A47]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="px-5 py-20 text-center md:px-8 md:py-24 lg:px-12"
        style={{ backgroundColor: BRAND_PINK }}
      >
        <div className="mx-auto max-w-[1000px]">
          <motion.span
            {...fadeUp}
            className="mb-5 block text-xs font-bold uppercase tracking-[0.2em] text-black/70"
          >
            Let's work together
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ delay: 0.08 }}
            className="mx-auto mb-7 max-w-[850px] font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-black"
          >
            Ready to strengthen your reputation?
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.14 }}
            className="mx-auto mb-10 max-w-[650px] text-base leading-relaxed text-black/80 md:text-lg"
          >
            Tell us what your organisation is working toward, the challenge
            you're facing, and the audiences you need to engage.
          </motion.p>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <Link
              to="/start-a-project/"
              className="group inline-flex items-center justify-center gap-3 bg-black px-9 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Start a project
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
