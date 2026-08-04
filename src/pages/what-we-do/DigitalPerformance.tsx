import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChartNoAxesCombined,
  CircleDollarSign,
  Gauge,
  LineChart,
  MessageCircle,
  MousePointerClick,
  Search,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

import Parallax from "@/motion/Parallax";
import WordReveal from "@/motion/WordReveal";
import AnimatedIcon, {
  type IconMotionVariant,
} from "@/motion/AnimatedIcon";
import BwanjiMark from "@/components/brand/BwanjiMark";

/*
 * Temporary stock photography.
 * Download final images and replace these URLs with local imports before launch.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
  mobile:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
  team:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  performance:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85",
};

const services = [
  {
    title: "Digital strategy",
    desc: "A clear channel, audience, content, and measurement plan built around the business objective.",
    icon: Target,
    motionVariant: "pulse" as IconMotionVariant,
  },
  {
    title: "Paid media",
    desc: "Search, social, display, video, and programmatic campaigns managed around meaningful outcomes.",
    icon: CircleDollarSign,
    motionVariant: "orbit" as IconMotionVariant,
  },
  {
    title: "Social media",
    desc: "Platform-aware planning, publishing, community management, and performance optimisation.",
    icon: Smartphone,
    motionVariant: "bob" as IconMotionVariant,
  },
  {
    title: "Search and discovery",
    desc: "SEO and paid search designed to help customers find the brand when intent is already present.",
    icon: Search,
    motionVariant: "sway" as IconMotionVariant,
  },
  {
    title: "Conversion optimisation",
    desc: "Landing pages, journeys, offers, forms, and calls to action improved through evidence and testing.",
    icon: MousePointerClick,
    motionVariant: "nudge" as IconMotionVariant,
  },
  {
    title: "Analytics and reporting",
    desc: "Reporting that explains what happened, why it happened, and what the team should do next.",
    icon: BarChart3,
    motionVariant: "tilt" as IconMotionVariant,
  },
];

const process = [
  {
    number: "01",
    label: "Define the outcome",
    title: "Begin with the business result.",
    desc: "We agree on the action digital activity must create: awareness, qualified traffic, leads, sales, registrations, downloads, retention, or another measurable business outcome.",
  },
  {
    number: "02",
    label: "Understand the journey",
    title: "Map how people move.",
    desc: "We identify where the audience discovers the brand, what questions they ask, what prevents action, and which channels influence the decision.",
  },
  {
    number: "03",
    label: "Build the system",
    title: "Connect media, content, and experience.",
    desc: "We define the channel roles, audience groups, content requirements, campaign structure, landing experience, tracking, and budget allocation.",
  },
  {
    number: "04",
    label: "Launch and learn",
    title: "Let the market respond.",
    desc: "Campaigns launch with clear hypotheses. We study delivery, behaviour, creative response, audience quality, and conversion performance.",
  },
  {
    number: "05",
    label: "Optimise",
    title: "Move budget toward evidence.",
    desc: "We improve targeting, creative, bidding, landing pages, placements, frequency, and budget allocation based on what the data is showing.",
  },
  {
    number: "06",
    label: "Report forward",
    title: "Turn results into decisions.",
    desc: "Reporting should not only describe the past. We explain what the results mean and recommend the next action.",
  },
];

const outputs = [
  "Digital channel strategy",
  "Audience and customer journey mapping",
  "Paid media planning",
  "Search advertising",
  "Social advertising",
  "Content distribution plans",
  "SEO recommendations",
  "Landing page strategy",
  "Conversion tracking",
  "Analytics dashboards",
  "Campaign optimisation",
  "Monthly performance reporting",
];

const metrics = [
  {
    label: "Reach",
    question: "Did the right people see it?",
    icon: Users,
  },
  {
    label: "Attention",
    question: "Did the work earn meaningful engagement?",
    icon: Gauge,
  },
  {
    label: "Action",
    question: "Did people complete the intended next step?",
    icon: MousePointerClick,
  },
  {
    label: "Value",
    question: "Did that action contribute to the business?",
    icon: ChartNoAxesCombined,
  },
];

const principles = [
  {
    number: "01",
    title: "Measure what matters.",
    desc: "A large number is not automatically a useful number. The metric must connect to the objective.",
    style: "bg-[#E50069] text-black",
    stroke: "rgba(0,0,0,0.24)",
  },
  {
    number: "02",
    title: "Creative drives performance.",
    desc: "Targeting and bidding matter, but weak creative still gives the platform very little to work with.",
    style: "bg-black text-white",
    stroke: "#E50069",
  },
  {
    number: "03",
    title: "Context changes behaviour.",
    desc: "Device access, data costs, language, payment methods, trust, and location affect how users move online.",
    style: "bg-white border border-[#E5E2DA] text-black",
    stroke: "rgba(0,0,0,0.22)",
  },
  {
    number: "04",
    title: "Optimisation needs a reason.",
    desc: "We do not change campaigns simply because a dashboard moved. We identify the likely cause before acting.",
    style: "bg-[#F2F2F2] border border-[#E5E2DA] text-black",
    stroke: "#E50069",
  },
];

export default function DigitalPerformancePage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-20 pt-24 text-white"
        style={{
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229,0,105,0.25) 0%, transparent 55%)",
            "linear-gradient(135deg, #0a0407 0%, #000000 50%, #160a0d 100%)",
          ].join(", "),
        }}
      >
        <div className="absolute inset-y-0 right-0 z-[2] hidden w-[46%] lg:block">
          <img
            src={IMAGES.hero}
            alt="Digital performance analytics dashboard"
            className="h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.74) 18%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          <div className="absolute inset-0 bg-[#E50069]/10 mix-blend-color" />
        </div>

        <Parallax
          offset={-170}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #E50069 0%, transparent 70%)",
            }}
          />
        </Parallax>

        <Parallax
          offset={80}
          className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
        >
          <BwanjiMark
            stroke="#ffffff"
            strokeWidth={2}
            className="absolute -bottom-24 -right-16 h-[500px] w-[500px] opacity-[0.06]"
          />
        </Parallax>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="max-w-[740px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#E50069] md:text-sm"
            >
              Digital & Performance
            </motion.p>

            <WordReveal
              text="Digital activity should move something."
              as="h1"
              immediate
              stagger={0.09}
              highlight={["move", "something."]}
              className="mb-8 font-serif text-[clamp(2.5rem,6.5vw,5.7rem)] font-bold leading-[1.01] tracking-[-0.025em]"
            />

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mb-5 max-w-2xl text-[clamp(1rem,1.45vw,1.2rem)] leading-relaxed text-neutral-300"
            >
              We connect media, content, data, and customer experience to help
              brands reach the right people and create measurable action.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="mb-10 max-w-2xl text-[clamp(1rem,1.45vw,1.2rem)] leading-relaxed text-neutral-300"
            >
              Not activity for activity&apos;s sake. Every channel has a role.
              Every metric needs a reason.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/start-a-project/"
                className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#E50069] px-8 py-4 text-base font-semibold text-black"
              >
                Start a digital project
                <span className="arrow-nudge">&rarr;</span>
              </Link>

              <a
                href="#process"
                className="group btn-glow-outline inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-base font-medium text-white"
              >
                See our process
                <span className="arrow-nudge">&darr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
              <WordReveal
                text="Performance starts before the media spend."
                as="h2"
                stagger={0.08}
                highlight={["before", "media", "spend."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <p className="max-w-sm leading-relaxed text-[#4A4A47]">
                Better media cannot permanently fix an unclear offer, weak
                creative, or difficult customer journey.
              </p>
            </div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 font-serif text-[clamp(1.6rem,3vw,2.7rem)] leading-[1.15] text-black"
              >
                We look at the full system: who the audience is, what the
                message says, where it appears, what happens after the click,
                and whether the result creates value.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <div className="border-t-2 border-black pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E50069]">
                    Beyond impressions
                  </p>
                  <p className="leading-relaxed text-[#4A4A47]">
                    Reach matters, but it must lead somewhere. We connect
                    awareness metrics to behaviour and business outcomes.
                  </p>
                </div>

                <div className="border-t-2 border-[#E50069] pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black">
                    Beyond the dashboard
                  </p>
                  <p className="leading-relaxed text-[#4A4A47]">
                    Reporting should explain why performance changed and what
                    the organisation should do next.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image-led capability section */}
      <section className="overflow-hidden bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <WordReveal
              text="One connected performance system."
              as="h2"
              stagger={0.08}
              highlight={["connected", "system."]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black"
            />

            <p className="leading-relaxed text-[#4A4A47]">
              Strategy, media, creative, technology, and measurement should
              support one another—not operate as separate reports.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.article
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative min-h-[520px] overflow-hidden lg:col-span-7"
            >
              <img
                src={IMAGES.analytics}
                alt="Analytics dashboard showing campaign performance"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Connected measurement
                </p>

                <h3 className="mb-3 max-w-xl font-serif text-3xl md:text-4xl">
                  From media delivery to business action.
                </h3>

                <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                  We connect channel performance to user behaviour, conversions,
                  leads, sales, and the wider commercial objective.
                </p>
              </div>
            </motion.article>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="group relative min-h-[248px] overflow-hidden"
              >
                <img
                  src={IMAGES.mobile}
                  alt="Customer using a mobile device"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/30" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <Smartphone className="mb-4 h-7 w-7 text-[#E50069]" />
                  <h3 className="font-serif text-2xl">
                    Mobile-first journeys
                  </h3>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="group relative min-h-[248px] overflow-hidden"
              >
                <img
                  src={IMAGES.team}
                  alt="Team reviewing digital performance"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-[#E50069]/35 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <LineChart className="mb-4 h-7 w-7 text-white" />
                  <h3 className="font-serif text-2xl">
                    Decisions, not data dumps
                  </h3>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <WordReveal
              text="What we do."
              as="h2"
              stagger={0.08}
              highlight={["do."]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black"
            />

            <p className="leading-relaxed text-[#4A4A47]">
              Digital capabilities connected around the customer journey and
              the result the business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[320px] overflow-hidden border border-[#E5E2DA] bg-white p-8 card-lift"
                >
                  <span className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#E50069]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F2F2F2] transition-colors duration-300 group-hover:bg-[#E50069]">
                      <AnimatedIcon
                        variant={service.motionVariant}
                        delay={index * 0.12}
                      >
                        <Icon
                          className="h-7 w-7 text-black"
                          strokeWidth={1.7}
                        />
                      </AnimatedIcon>
                    </div>

                    <h3 className="mb-4 font-serif text-xl text-black">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#4A4A47]">
                      {service.desc}
                    </p>

                    <span className="mt-auto pt-8 text-xs uppercase tracking-[0.18em] text-[#E50069]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="scroll-mt-24 bg-black py-20 text-white md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
              <WordReveal
                text="Our performance process."
                as="h2"
                stagger={0.08}
                highlight={["performance", "process."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05]"
              />

              <p className="mb-8 max-w-sm leading-relaxed text-neutral-400">
                A continuous loop of planning, launching, learning, and
                improving.
              </p>

              <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500 lg:flex">
                <span>Follow the process</span>
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#E50069]"
                >
                  ↓
                </motion.span>
              </div>
            </div>

            <div className="lg:col-span-8">
              {process.map((step) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid grid-cols-1 gap-6 border-t border-white/15 py-10 first:border-t-0 md:grid-cols-[150px_1fr] md:gap-10 md:py-12"
                >
                  <span
                    className="select-none font-serif text-[5.5rem] font-black leading-none md:text-[7rem]"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px #E50069",
                    }}
                  >
                    {step.number}
                  </span>

                  <div className="pt-2">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                      {step.label}
                    </p>

                    <h3 className="mb-5 font-serif text-3xl transition-colors duration-300 group-hover:text-[#E50069] md:text-4xl">
                      {step.title}
                    </h3>

                    <p className="max-w-2xl leading-relaxed text-neutral-300">
                      {step.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <WordReveal
                text="The measurement chain."
                as="h2"
                stagger={0.08}
                highlight={["measurement", "chain."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <p className="max-w-sm leading-relaxed text-[#4A4A47]">
                We organise measurement around four connected questions.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;

                  return (
                    <motion.article
                      key={metric.label}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`relative min-h-[260px] overflow-hidden p-8 card-lift ${
                        index === 0
                          ? "bg-[#E50069] text-black"
                          : index === 1
                            ? "bg-black text-white"
                            : "border border-[#E5E2DA] bg-white text-black"
                      }`}
                    >
                      <Icon
                        className={`mb-8 h-7 w-7 ${
                          index === 1 ? "text-[#E50069]" : "text-black"
                        }`}
                        strokeWidth={1.8}
                      />

                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                        Stage {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mb-4 font-serif text-3xl">
                        {metric.label}
                      </h3>

                      <p
                        className={`leading-relaxed ${
                          index === 1 ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {metric.question}
                      </p>

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-7 right-4 select-none font-serif text-[7rem] font-black leading-none"
                        style={{
                          color: "transparent",
                          WebkitTextStroke:
                            index === 1
                              ? "1.5px #E50069"
                              : "1.5px rgba(0,0,0,0.18)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <WordReveal
                text="What we can deliver."
                as="h2"
                stagger={0.08}
                highlight={["deliver."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <p className="max-w-md leading-relaxed text-[#4A4A47]">
                The final scope depends on the objective, available data,
                customer journey, media budget, and internal capabilities.
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

      {/* Principles */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <WordReveal
              text="What guides the work."
              as="h2"
              stagger={0.08}
              highlight={["guides", "work."]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black"
            />

            <p className="leading-relaxed text-[#4A4A47]">
              Four principles for making performance marketing more useful.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative min-h-[280px] overflow-hidden p-8 card-lift md:p-10 ${principle.style}`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 right-5 select-none font-serif text-[8rem] font-black leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1.5px ${principle.stroke}`,
                  }}
                >
                  {principle.number}
                </span>

                <div className="relative z-10 max-w-md">
                  <h3 className="mb-5 font-serif text-2xl md:text-3xl">
                    {principle.title}
                  </h3>

                  <p
                    className={`leading-relaxed ${
                      index === 1 ? "text-white/75" : "text-black/70"
                    }`}
                  >
                    {principle.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width performance image */}
      <section className="relative min-h-[540px] overflow-hidden bg-black text-white">
        <img
          src={IMAGES.performance}
          alt="Team discussing campaign performance and optimisation"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />

        <Parallax
          offset={-50}
          className="pointer-events-none absolute inset-0"
        >
          <BwanjiMark
            stroke="#E50069"
            strokeWidth={2}
            className="absolute -bottom-24 right-4 h-[480px] w-[480px] opacity-[0.18]"
          />
        </Parallax>

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1320px] items-center px-5 py-20 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#E50069]">
              Reporting with a point of view
            </p>

            <WordReveal
              text="The dashboard is the beginning of the conversation."
              as="h2"
              stagger={0.07}
              highlight={["beginning", "conversation."]}
              className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05]"
            />

            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We interpret performance in context, explain the likely causes,
              and identify the next decisions—not just the next set of numbers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E50069] py-20 text-center">
        <Parallax
          offset={-60}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </Parallax>

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <WordReveal
            text="Ready to make digital accountable?"
            as="h2"
            stagger={0.07}
            highlight={["digital", "accountable?"]}
            highlightColor="#ffffff"
            className="mb-5 flex flex-wrap justify-center font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
          />

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-black/75">
            Tell us what the business needs to achieve. We will help build the
            digital system around that result.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
            >
              Start a digital project
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <Link
              to="/work/"
              className="btn-lift inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-base font-medium text-black"
            >
              See our work
              <ArrowRight className="h-5 w-5" />
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