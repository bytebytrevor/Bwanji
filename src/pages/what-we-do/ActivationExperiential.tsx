import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Megaphone,
  MessageCircle,
  Store,
  TentTree,
  Users,
  Lightbulb,
  ClipboardList,
  BarChart3,
  Palette,
  Settings2,
  Target,
} from "lucide-react";

import ProcessSteps from "@/components/ProcessSteps";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =========================================================
   CONTENT
========================================================= */

const activationServices = [
  {
    title: "Brand activations",
    desc: "High-contact experiences designed to introduce, explain, demonstrate, or strengthen a brand in the market.",
  },
  {
    title: "Roadshows",
    desc: "Multi-location campaigns involving route planning, production requirements, field coordination, audience mobilisation, and reporting.",
  },
  {
    title: "Retail activations",
    desc: "In-store and point-of-sale experiences designed to support trial, product education, visibility, and purchase consideration.",
  },
  {
    title: "Product launches",
    desc: "Launch events and public experiences that turn a new offer into something audiences can see, test, and discuss.",
  },
  {
    title: "Trade and corporate events",
    desc: "Creative and production support for conferences, expos, stakeholder events, dealer meetings, and internal experiences.",
  },
  {
    title: "Community engagement",
    desc: "Audience-focused programmes designed around local context, participation, accessibility, education, and trust.",
  },
  {
    title: "Sampling and demonstrations",
    desc: "Structured product experiences supported by clear engagement messages, appropriate staffing requirements, and relevant measurement.",
  },
  {
    title: "Event content and production",
    desc: "Stage design, signage, digital screens, motion graphics, scripts, photography, video, and branded environments.",
  },
];

const audiences = [
  "Marketing teams launching products or entering new markets",
  "Brands that need product trial, education, or face-to-face engagement",
  "NGOs and public-sector teams planning community engagement programmes",
];

const activationTypes = [
  {
    icon: Store,
    title: "Retail and commercial",
    desc: "Built around product trial, footfall, visibility, customer education, and purchase consideration.",
  },
  {
    icon: TentTree,
    title: "Events and launches",
    desc: "Designed to create attention, participation, memorable experiences, and content beyond the event itself.",
  },
  {
    icon: Users,
    title: "Community and field",
    desc: "Built around language, trust, local context, accessibility, and real-world engagement.",
  },
];

const fieldPrinciples = [
  {
    number: "01",
    title: "Local coordination",
    desc: "Consider the requirements of venues, local suppliers, relevant authorities, and community stakeholders.",
  },
  {
    number: "02",
    title: "Field-team readiness",
    desc: "Define the briefing, training, responsibilities, and support required for promoters and facilitators.",
  },
  {
    number: "03",
    title: "Operational control",
    desc: "Plan schedules, materials, transport, technical production, safety, and escalation procedures.",
  },
  {
    number: "04",
    title: "Measured participation",
    desc: "Identify appropriate ways to assess attendance, interactions, trials, enquiries, registrations, and audience feedback.",
  },
];

const outputs = [
  "Activation concept and creative direction",
  "Audience and location planning",
  "Route and event scheduling",
  "Venue and supplier coordination",
  "Field-team planning and briefing",
  "Scripts and engagement guides",
  "Stage, booth, and spatial design",
  "Production and technical planning",
  "Permissions and local coordination",
  "Sampling and materials planning",
  "Photography and video coverage",
  "Field data and post-event reporting",
];

/*
  REPLACEMENT FOR UNVERIFIED CASE STUDIES

  These cards explain activation principles.
  They do not represent completed Bwanji projects
  or claim campaign results.
*/

const activationInsights = [
  {
    icon: Target,
    number: "01",
    category: "Strategy",
    title: "Start With the Objective",
    description:
      "An activation should have a clear purpose. Whether the goal is awareness, education, trial, or participation, the experience needs to support a defined outcome.",
    takeaway: "Purpose before production",
  },
  {
    icon: Users,
    number: "02",
    category: "Experience",
    title: "Design for Participation",
    description:
      "The audience, location, timing, and interaction all shape the experience. Give people a meaningful reason to stop, engage, and remember the brand.",
    takeaway: "Relevance drives engagement",
  },
  {
    icon: BarChart3,
    number: "03",
    category: "Measurement",
    title: "Measure What Matters",
    description:
      "Attendance alone does not tell the whole story. Measurement should reflect the objective, whether that involves product trials, enquiries, participation, or feedback.",
    takeaway: "Outcomes over activity",
  },
];

/*
  TEAM SECTION

  Replaces unverified staff profiles with
  relevant areas of expertise.

  The actual team is accessed through /team/.
*/

const teamDisciplines = [
  {
    icon: Palette,
    title: "Creative & Experience",
    description:
      "Developing the concept, messaging, branded environment, and audience interaction.",
  },
  {
    icon: Settings2,
    title: "Production & Operations",
    description:
      "Translating the creative concept into practical requirements, schedules, suppliers, and execution plans.",
  },
  {
    icon: ClipboardList,
    title: "Engagement & Reporting",
    description:
      "Planning audience interactions, briefing requirements, measurement, and post-event evaluation.",
  },
];

const relatedCapabilities = [
  {
    name: "Creative & Content",
    link: "/what-we-do/creative-and-content/",
  },
  {
    name: "Digital & Performance",
    link: "/what-we-do/digital-and-performance/",
  },
  {
    name: "Public Relations",
    link: "/what-we-do/public-relations/",
  },
];

const faqs = [
  {
    q: "Can you manage an activation from concept to execution?",
    a: "An activation brief can include creative development, production, staffing requirements, logistics, venue coordination, technical delivery, field supervision, and reporting. The final responsibilities are agreed during project scoping.",
  },
  {
    q: "Do you work outside Lusaka and Lilongwe?",
    a: "Activations in provincial, district, retail, community, and rural locations can be considered. Feasibility depends on the project scope, location, permissions, suppliers, and logistical requirements.",
  },
  {
    q: "Can you recruit and train promoters?",
    a: "Promoter and field-team requirements can form part of an activation brief, including recruitment arrangements, briefing, training, deployment, and supervision where agreed.",
  },
  {
    q: "How do you measure an activation?",
    a: "Measurement can include attendance, audience interactions, product trials, registrations, enquiries, leads, sales, stock movement, feedback, and location-level performance where reliable tracking is available.",
  },
  {
    q: "Can activation form part of a larger campaign?",
    a: "Yes. Experiential activity can be integrated with digital, social, PR, content, retail, and wider brand communication to support a shared campaign objective.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function ActivationExperientialPage() {
  return (
    <div className="flex w-full flex-col bg-[var(--brand-paper)]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-[#000000] px-5 pb-20 pt-32 text-[#ffffff] md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex flex-wrap items-center gap-2 text-sm text-neutral-400"
          >
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight className="h-4 w-4" />

            <span className="cursor-default">What We Do</span>

            <ChevronRight className="h-4 w-4" />

            <span className="cursor-default text-white">
              Activation & Experiential
            </span>
          </nav>

          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-[#E50069]">
            Capability
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 max-w-[850px] font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-tight"
          >
            Activation & Experiential
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 max-w-3xl text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-neutral-300"
          >
            The work that happens off the screen. We create live brand
            experiences, roadshows, launches, retail activations, and community
            programmes that move people from awareness to participation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#E50069] px-8 py-4 text-center text-base font-semibold text-[#000000]"
            >
              Start a project
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <Link
              to="/work/"
              className="group btn-glow-outline inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-center text-base font-medium text-white"
            >
              Explore our work
              <span className="arrow-nudge">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHO THIS IS FOR
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Who this is for
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {audiences.map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="border border-[#E5E2DA] border-l-4 border-l-[#E50069] bg-white p-8 card-lift"
              >
                <p className="text-lg font-medium leading-relaxed text-[#000000]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACTIVATION TYPES
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
            >
              Experiences built for the objective
            </motion.h2>

            <p className="leading-relaxed text-[#4A4A47]">
              Some activations are designed to create trial. Others build trust,
              explain a complex product, mobilise a community, or bring
              stakeholders into the same room.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {activationTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group min-h-[300px] border border-[#E5E2DA] bg-white p-8 card-lift"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#000000] transition-colors duration-300 group-hover:bg-[#E50069]">
                    <Icon className="h-7 w-7 text-white transition-colors group-hover:text-black" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl text-[#000000]">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-[#4A4A47]">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT'S INCLUDED
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            What&apos;s included
          </motion.h2>

          <Accordion
            type="single"
            collapsible
            className="w-full border border-[var(--brand-divider)] bg-white"
          >
            {activationServices.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-[#000000] hover:no-underline">
                  {item.title}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-[#4A4A47]">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            How we work
          </motion.h2>

          <ProcessSteps />
        </div>
      </section>

      {/* =====================================================
          FIELD DISCIPLINE
      ===================================================== */}

      <section className="bg-[#000000] py-20 text-white md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Field discipline
              </span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05]"
              >
                Live work needs more than a good idea.
              </motion.h2>
            </div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15]"
              >
                It needs routes, permits, people, stock, scripts, timing,
                transport, safety, reporting, and someone responsible for every
                moving part.
              </motion.p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fieldPrinciples.map((item, index) => (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="border border-white/15 bg-white/5 p-7"
                  >
                    <p className="mb-6 text-4xl font-black text-[#E50069]">
                      {item.number}
                    </p>

                    <h3 className="mb-3 font-serif text-xl">{item.title}</h3>

                    <p className="text-sm leading-relaxed text-white/65">
                      {item.desc}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
              >
                What we can deliver
              </motion.h2>

              <p className="max-w-md leading-relaxed text-[#4A4A47]">
                Activation projects can be scoped as standalone experiences or
                as part of a wider campaign.
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
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E50069] text-[10px] font-bold text-black">
                      {String(index + 1).padStart(2, "0")}
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
          ACTIVATION EFFECTIVENESS
          Replaces fabricated proof section
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Making experiences count
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
            >
              What makes an activation effective
            </motion.h2>

            <p className="max-w-2xl leading-relaxed text-[#4A4A47]">
              A successful activation needs more than visibility. The objective,
              audience experience, and measurement approach must work together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {activationInsights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift"
                >
                  {/* Original visual treatment retained */}

                  <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#000000] to-[#1a1a1a]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,0,105,0.32),transparent_58%)]" />

                    <span
                      className="relative z-10 font-serif text-[5rem] font-black leading-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px #E50069",
                      }}
                    >
                      {item.number}
                    </span>

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#E50069]" />

                      <p className="text-xs uppercase tracking-widest text-[#4A4A47]">
                        {item.category}
                      </p>
                    </div>

                    <h3 className="mb-4 font-serif text-xl text-[#000000]">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/work/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#E50069]"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TEAM
          Unverified profiles removed
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            The team behind the experience
          </motion.h2>

          <p className="mb-12 max-w-2xl leading-relaxed text-[#4A4A47]">
            Experiential work brings together different disciplines, from
            creative development and production planning to audience engagement
            and evaluation.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamDisciplines.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group flex items-start gap-4 border border-[#E5E2DA] bg-white p-6 transition-colors hover:border-[#E50069]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#000000] text-[#ffffff] transition-colors group-hover:bg-[#E50069] group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="mb-2 font-serif text-lg text-black">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#4A4A47]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
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
          OPERATING CONTEXT
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-8 lg:px-12">
          <MapPin className="mx-auto mb-5 h-7 w-7 text-[#E50069]" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Built for real-world environments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-[#4A4A47]"
          >
            Every location brings its own practical considerations. Whether an
            experience is planned for a retail environment, public event,
            conference, or community setting, the audience, infrastructure,
            accessibility, logistics, and local context should shape the
            approach.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          RELATED CAPABILITIES
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Related capabilities
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={capability.link}
                  className="group block border border-[#E5E2DA] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#000000]"
                >
                  <h3 className="mb-6 font-serif text-xl text-[#000000] transition-colors group-hover:text-[#ffffff]">
                    {capability.name}
                  </h3>

                  <div className="flex items-center text-sm font-medium text-[#000000] transition-colors group-hover:text-[#E50069]">
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
        <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
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
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-[#000000] hover:no-underline">
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
          CTA
      ===================================================== */}

      <section className="bg-[#E50069] py-20 text-center">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <Megaphone className="mx-auto mb-5 h-8 w-8 text-black" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Ready to take the brand into the real world?
          </motion.h2>

          <p className="mx-auto mb-9 max-w-2xl leading-relaxed text-black/75">
            Tell us who you need to reach, where they are, and what you need
            them to do.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#000000] px-8 py-4 text-base font-semibold text-[#ffffff]"
            >
              Start a project
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <Link
              to="/start-a-project/"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-base font-medium text-black"
            >
              <MessageCircle className="h-5 w-5" />
              Discuss an activation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
