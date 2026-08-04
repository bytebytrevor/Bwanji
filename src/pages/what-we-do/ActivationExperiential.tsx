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
} from "lucide-react";

import ProcessSteps from "@/components/ProcessSteps";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const caseStudies = [
  {
    client: "Airtel Zambia",
    title: "Market-Day Mobile Money Activation",
    stat: "18,400",
    statDesc:
      "new wallet registrations across 24 high-footfall trading locations.",
    link: "/work/",
  },
  {
    client: "PSI Malawi",
    title: "Community Health Roadshow",
    stat: "210K",
    statDesc:
      "people reached through local-language demonstrations and community events.",
    link: "/work/behaviour-change-at-last-mile/",
  },
  {
    client: "FMCG Regional Launch",
    title: "Trial at the Point of Purchase",
    stat: "62%",
    statDesc:
      "of sampled customers purchased the product during the activation period.",
    link: "/work/",
  },
];

const activationServices = [
  {
    title: "Brand activations",
    desc: "High-contact experiences designed to introduce, explain, demonstrate, or strengthen a brand in the market.",
  },
  {
    title: "Roadshows",
    desc: "Multi-location campaigns with route planning, production, field teams, audience mobilisation, and reporting.",
  },
  {
    title: "Retail activations",
    desc: "In-store and point-of-sale experiences that support trial, conversion, education, and product visibility.",
  },
  {
    title: "Product launches",
    desc: "Launch events and public experiences that turn a new offer into something audiences can see, test, and discuss.",
  },
  {
    title: "Trade and corporate events",
    desc: "Conferences, expos, stakeholder events, dealer meetings, and internal experiences managed from concept to delivery.",
  },
  {
    title: "Community engagement",
    desc: "Local-language, community-led programmes built around trust, participation, education, and measurable reach.",
  },
  {
    title: "Sampling and demonstrations",
    desc: "Structured trial programmes with trained promoters, scripts, stock controls, and conversion tracking.",
  },
  {
    title: "Event content and production",
    desc: "Stage design, signage, digital screens, motion graphics, scripts, photography, video, and branded environments.",
  },
];

const audiences = [
  "Marketing teams launching products or entering new markets",
  "Brands that need product trial, education, or face-to-face conversion",
  "NGOs and public-sector teams running community engagement programmes",
];

const outputs = [
  "Activation concept and creative direction",
  "Audience and location planning",
  "Route and event scheduling",
  "Venue and supplier management",
  "Promoter recruitment and training",
  "Scripts and engagement guides",
  "Stage, booth, and spatial design",
  "Production and technical management",
  "Permits and local coordination",
  "Sampling and stock control",
  "Photography and video coverage",
  "Field data and post-event reporting",
];

const team = [
  {
    initials: "CM",
    name: "Chanda Mulenga",
    role: "Experiential Director",
    office: "Lusaka",
  },
  {
    initials: "TM",
    name: "Tapiwa Mbewe",
    role: "Field Operations Lead",
    office: "Lilongwe",
  },
  {
    initials: "RK",
    name: "Ruth Kalima",
    role: "Senior Producer",
    office: "Lusaka",
  },
];

export default function ActivationExperientialPage() {
  return (
    <div className="flex w-full flex-col bg-[var(--brand-paper)]">
      {/* Hero */}
      <section className="bg-[#000000] px-5 pb-20 pt-32 text-[#ffffff] md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <nav className="mb-12 flex items-center gap-2 text-sm text-neutral-400">
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
              See activation work
              <span className="arrow-nudge">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who this is for */}
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
                transition={{ delay: index * 0.1 }}
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

      {/* Activation types */}
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
              Some activations are designed to create trial. Others build
              trust, explain a complex product, mobilise a community, or bring
              stakeholders into the same room.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Store,
                title: "Retail and commercial",
                desc: "Built around product trial, footfall, conversion, visibility, and purchase behaviour.",
              },
              {
                icon: TentTree,
                title: "Events and launches",
                desc: "Designed to create attention, participation, memorability, and content beyond the room.",
              },
              {
                icon: Users,
                title: "Community and field",
                desc: "Built around language, trust, local access, mobilisation, and real-world engagement.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group min-h-[300px] border border-[#E5E2DA] bg-white p-8 card-lift"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#000000] transition-colors duration-300 group-hover:bg-[#E50069]">
                    <Icon className="h-7 w-7 text-white transition-colors group-hover:text-black" />
                  </div>

                  <h3 className="mb-4 font-serif text-2xl text-[#000000]">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-[#4A4A47]">
                    {item.desc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
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

      {/* How we work */}
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

      {/* Field logic */}
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
                {[
                  {
                    number: "01",
                    title: "Local coordination",
                    desc: "We work with local teams, venues, authorities, suppliers, and community structures.",
                  },
                  {
                    number: "02",
                    title: "Field-team readiness",
                    desc: "Promoters and facilitators are briefed, trained, assessed, and supported before deployment.",
                  },
                  {
                    number: "03",
                    title: "Operational control",
                    desc: "Schedules, stock, transport, technical production, and escalation routes are managed centrally.",
                  },
                  {
                    number: "04",
                    title: "Measured participation",
                    desc: "We capture attendance, interactions, samples, leads, registrations, and audience feedback.",
                  },
                ].map((item, index) => (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
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

      {/* Deliverables */}
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
                We can manage the full experience or work as one part of a
                wider campaign team.
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

      {/* Proof */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Proof from the ground
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift"
              >
                <div className="relative flex h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#000000] to-[#1a1a1a]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,0,105,0.32),transparent_58%)]" />

                  <span
                    className="relative z-10 font-serif text-[4.5rem] font-black leading-none"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "2px #E50069",
                    }}
                  >
                    {study.stat}
                  </span>

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs uppercase tracking-widest text-[#4A4A47]">
                    {study.client}
                  </p>

                  <h3 className="mb-4 font-serif text-lg text-[#000000]">
                    {study.title}
                  </h3>

                  <div className="mt-auto border-t border-[var(--brand-divider)] pt-4">
                    <p className="mb-1 text-2xl font-bold text-[#E50069]">
                      {study.stat}
                    </p>

                    <p className="mb-4 text-sm text-[#4A4A47]">
                      {study.statDesc}
                    </p>

                    <Link
                      to={study.link}
                      className="inline-block text-sm font-medium text-[#000000] underline-offset-4 hover:underline"
                    >
                      See the work &rarr;
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            The team
          </motion.h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 border border-[#E5E2DA] bg-white p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#000000] font-bold text-[#ffffff]">
                  {member.initials}
                </div>

                <div>
                  <p className="text-lg font-bold leading-tight text-[#000000]">
                    {member.name}
                  </p>
                  <p className="text-sm text-[#4A4A47]">{member.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                    {member.office}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating reach */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="mx-auto max-w-[900px] px-5 text-center md:px-8 lg:px-12">
          <MapPin className="mx-auto mb-5 h-7 w-7 text-[#E50069]" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
          >
            Built for field execution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-[#4A4A47]"
          >
            We coordinate activations across Lusaka, Copperbelt, Central,
            Southern, Eastern, and Western Zambia, as well as Lilongwe,
            Blantyre, Mzuzu, Zomba, and district-level locations across Malawi.
          </motion.p>
        </div>
      </section>

      {/* Related capabilities */}
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
            {[
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

      {/* FAQ */}
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
            {[
              {
                q: "Can you manage an activation from concept to execution?",
                a: "Yes. We can manage the creative concept, production, staffing, logistics, venue coordination, technical delivery, field supervision, and post-event reporting.",
              },
              {
                q: "Do you work outside Lusaka and Lilongwe?",
                a: "Yes. We plan and execute work in provincial, district, retail, community, and rural locations across Zambia and Malawi.",
              },
              {
                q: "Can you recruit and train promoters?",
                a: "Yes. We recruit, brief, train, deploy, supervise, and evaluate promoters, facilitators, brand ambassadors, and field teams.",
              },
              {
                q: "How do you measure an activation?",
                a: "Measurement can include attendance, engagements, product trials, registrations, leads, sales, stock movement, audience feedback, content reach, and location-level performance.",
              },
              {
                q: "Can activation form part of a larger campaign?",
                a: "Yes. We regularly connect experiential work with digital, social, PR, content, retail, and broader brand campaigns.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index}`}
                className="border-b border-[var(--brand-divider)] px-6 last:border-0"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-[#000000] hover:no-underline">
                  {item.q}
                </AccordionTrigger>

                <AccordionContent className="pb-6 text-[#4A4A47]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
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