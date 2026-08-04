import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Compass,
  Layers3,
  Lightbulb,
  MessageSquareText,
  Search,
  Target,
  Users,
} from "lucide-react";

import Parallax from "@/motion/Parallax";
import WordReveal from "@/motion/WordReveal";
import AnimatedIcon, {
  type IconMotionVariant,
} from "@/motion/AnimatedIcon";
import BwanjiMark from "@/components/brand/BwanjiMark";

const strategyServices = [
  {
    title: "Market understanding",
    desc: "We study the category, competitors, customer behaviour, and cultural context before recommending where the brand should move.",
    icon: Search,
    motionVariant: "pulse" as IconMotionVariant,
  },
  {
    title: "Audience definition",
    desc: "We move beyond broad demographics to identify the motivations, tensions, habits, and barriers shaping real decisions.",
    icon: Users,
    motionVariant: "sway" as IconMotionVariant,
  },
  {
    title: "Brand positioning",
    desc: "We define the distinct space the brand can credibly own in the market and in the mind of the customer.",
    icon: Target,
    motionVariant: "bob" as IconMotionVariant,
  },
  {
    title: "Brand architecture",
    desc: "We organise products, services, sub-brands, and offers into a structure that makes sense to both customers and internal teams.",
    icon: Layers3,
    motionVariant: "tilt" as IconMotionVariant,
  },
  {
    title: "Messaging framework",
    desc: "We turn strategy into a practical hierarchy of messages for campaigns, sales, digital platforms, public relations, and internal teams.",
    icon: MessageSquareText,
    motionVariant: "nudge" as IconMotionVariant,
  },
  {
    title: "Go-to-market direction",
    desc: "We translate the strategy into priorities, channels, launch decisions, and the first moves required to enter or grow the market.",
    icon: Compass,
    motionVariant: "orbit" as IconMotionVariant,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Listen",
    eyebrow: "Start with the ground",
    desc: "We begin by listening to the business, the customer, the category, and the market. This may include stakeholder interviews, desk research, customer conversations, social listening, field observation, or existing performance data.",
  },
  {
    number: "02",
    title: "Find the tension",
    eyebrow: "Define the real problem",
    desc: "We look for the gap between what the business wants to say and what the market is ready to hear. That tension becomes the strategic problem worth solving.",
  },
  {
    number: "03",
    title: "Choose a position",
    eyebrow: "Decide where to stand",
    desc: "We identify the strongest position the brand can credibly own. The goal is not to sound different for its own sake. The goal is to become meaningfully distinct.",
  },
  {
    number: "04",
    title: "Build the system",
    eyebrow: "Make strategy usable",
    desc: "We translate the position into an organised system of audience priorities, messages, brand behaviours, proof points, and decision principles.",
  },
  {
    number: "05",
    title: "Put it to work",
    eyebrow: "Move from deck to market",
    desc: "We guide how the strategy should shape creative work, campaigns, content, customer experience, partnerships, and go-to-market activity.",
  },
];

const outputs = [
  "Market and category diagnosis",
  "Audience segmentation",
  "Brand positioning statement",
  "Purpose, promise, and value proposition",
  "Brand architecture",
  "Messaging hierarchy",
  "Personality and behavioural principles",
  "Go-to-market priorities",
  "Creative and communications brief",
  "Measurement framework",
];

const principles = [
  {
    title: "Evidence before opinion",
    desc: "The loudest voice in the room is not automatically the closest to the customer.",
  },
  {
    title: "Clarity before complexity",
    desc: "A strategy should help people make decisions. If it creates more confusion, it is not finished.",
  },
  {
    title: "Difference with proof",
    desc: "A brand cannot sustainably own a position it cannot demonstrate through product, service, behaviour, or experience.",
  },
  {
    title: "Local context matters",
    desc: "Language, access, distribution, trust, and culture shape how a strategy performs in Zambia and Malawi.",
  },
];

export default function BrandStrategyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section
        className="min-h-[90vh] flex flex-col justify-center text-white relative pt-24 pb-20 overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229, 0, 105, 0.24) 0%, transparent 55%)",
            "radial-gradient(ellipse 30% 25% at 95% 5%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)",
            "linear-gradient(135deg, #0a0407 0%, #000000 45%, #000000 70%, #160a0d 100%)",
          ].join(", "),
        }}
      >
        <Parallax
          offset={-170}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #E50069 0%, transparent 70%)",
            }}
          />
        </Parallax>

        <Parallax
          offset={90}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <BwanjiMark
            stroke="#ffffff"
            strokeWidth={2}
            className="absolute -bottom-28 -right-20 w-[560px] h-[560px] opacity-[0.055]"
          />
        </Parallax>

        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-[900px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#E50069] text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-6"
            >
              Brand Strategy
            </motion.p>

            <WordReveal
              text="A brand needs somewhere clear to stand."
              as="h1"
              immediate
              stagger={0.09}
              highlight={["clear", "stand."]}
              className="font-serif font-bold tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,5.8rem)] leading-[1.01] mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-[clamp(1rem,1.45vw,1.2rem)] text-neutral-300 max-w-3xl leading-relaxed mb-5"
            >
              Brand strategy is the set of choices that gives a business
              direction, meaning, and distinction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="text-[clamp(1rem,1.45vw,1.2rem)] text-neutral-300 max-w-3xl leading-relaxed mb-10"
            >
              We help organisations understand the market, define what they
              should stand for, and turn that position into a system teams can
              actually use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/start-a-project/"
                className="group btn-glow-pink bg-[#E50069] text-black px-8 py-4 font-semibold text-base inline-flex items-center justify-center gap-2"
              >
                Start a strategy project
                <span className="arrow-nudge">&rarr;</span>
              </Link>

              <a
                href="#process"
                className="group btn-glow-outline border border-white/40 text-white px-8 py-4 font-medium text-base inline-flex items-center justify-center gap-2"
              >
                See our process
                <span className="arrow-nudge">&darr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <WordReveal
                text="Strategy before execution."
                as="h2"
                stagger={0.08}
                highlight={["before"]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black mb-6 flex flex-wrap"
              />

              <p className="text-[#4A4A47] leading-relaxed max-w-sm">
                Creative work becomes more effective when the choices behind it
                are clear.
              </p>
            </div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(1.6rem,3vw,2.7rem)] leading-[1.15] text-black mb-8"
              >
                A strong strategy decides who matters most, what the brand
                should mean, why people should believe it, and how that meaning
                should show up in the market.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="border-t-2 border-black pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E50069] mb-3">
                    Without strategy
                  </p>
                  <p className="text-[#4A4A47] leading-relaxed">
                    Teams produce disconnected campaigns, inconsistent
                    messages, and short-term activity that does not build
                    lasting meaning.
                  </p>
                </div>

                <div className="border-t-2 border-[#E50069] pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-black mb-3">
                    With strategy
                  </p>
                  <p className="text-[#4A4A47] leading-relaxed">
                    Every decision has a reference point. Creative work,
                    customer experience, and commercial activity begin pulling
                    in the same direction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <WordReveal
              text="What brand strategy covers."
              as="h2"
              stagger={0.08}
              highlight={["strategy"]}
              className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black mb-4 flex flex-wrap"
            />

            <p className="text-[#4A4A47] leading-relaxed">
              Depending on the brief, our strategy work may cover the full
              brand system or one focused business problem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyServices.map((service, index) => {
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
                  className="relative bg-white border border-[#E5E2DA] p-8 min-h-[320px] overflow-hidden card-lift group"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#E50069]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative flex flex-col h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-7 rounded-full bg-[#F2F2F2] group-hover:bg-[#E50069] transition-colors duration-300">
                      <AnimatedIcon
                        variant={service.motionVariant}
                        delay={index * 0.12}
                      >
                        <Icon
                          className="w-7 h-7 text-black"
                          strokeWidth={1.7}
                        />
                      </AnimatedIcon>
                    </div>

                    <h3 className="font-serif text-xl text-black mb-4">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#4A4A47] leading-relaxed">
                      {service.desc}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-auto pt-8 text-xs uppercase tracking-[0.18em] text-[#E50069]"
                    >
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
        className="bg-black text-white py-20 md:py-28 lg:py-32 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <WordReveal
                text="Our brand strategy process."
                as="h2"
                stagger={0.08}
                highlight={["process."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] mb-6 flex flex-wrap"
              />

              <p className="text-neutral-400 leading-relaxed max-w-sm mb-8">
                The exact research and workshops change by brief. The logic
                remains consistent.
              </p>

              <div className="hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
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
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 md:gap-10 py-10 md:py-12 border-t border-white/15 first:border-t-0 group"
                >
                  <div>
                    <span
                      className="font-serif font-black text-[5.5rem] md:text-[7rem] leading-none select-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1.5px #E50069",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-2">
                    <p className="text-[#E50069] text-xs uppercase font-bold tracking-[0.2em] mb-4">
                      {step.eyebrow}
                    </p>

                    <h3 className="font-serif text-3xl md:text-4xl mb-5 group-hover:text-[#E50069] transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-neutral-300 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <WordReveal
                text="What you leave with."
                as="h2"
                stagger={0.08}
                highlight={["leave", "with."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black mb-6 flex flex-wrap"
              />

              <p className="text-[#4A4A47] leading-relaxed max-w-md">
                We do not hand over a strategy that only makes sense while we
                are presenting it. The output is designed to guide real
                decisions after the workshop ends.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#E5E2DA]">
                {outputs.map((output, index) => (
                  <motion.div
                    key={output}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="group flex gap-4 items-start p-5 md:p-6 border-r border-b border-[#E5E2DA] bg-white hover:bg-[#F2F2F2] transition-colors"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-white text-[10px] font-bold group-hover:bg-[#E50069] group-hover:text-black transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm md:text-base font-medium text-black leading-relaxed">
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
          <div className="max-w-2xl mb-14">
            <WordReveal
              text="The principles behind the process."
              as="h2"
              stagger={0.08}
              highlight={["principles"]}
              className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black mb-4 flex flex-wrap"
            />

            <p className="text-[#4A4A47] leading-relaxed">
              These principles keep the strategy grounded and useful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative overflow-hidden p-8 md:p-10 min-h-[260px] card-lift ${
                  index === 0
                    ? "bg-[#E50069] text-black"
                    : index === 1
                      ? "bg-black text-white"
                      : "bg-white border border-[#E5E2DA] text-black"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -bottom-7 right-5 font-serif font-black text-[8rem] leading-none select-none pointer-events-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke:
                      index === 1
                        ? "1.5px rgba(229,0,105,0.9)"
                        : "1.5px rgba(0,0,0,0.22)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 max-w-md">
                  <h3 className="font-serif text-2xl md:text-3xl mb-5">
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

      {/* Best fit */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <WordReveal
                text="When brand strategy helps most."
                as="h2"
                stagger={0.08}
                highlight={["helps", "most."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black mb-6 flex flex-wrap"
              />

              <p className="text-[#4A4A47] leading-relaxed max-w-md">
                Strategy is especially useful when the business has changed but
                the brand has not caught up.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "You are entering Zambia or Malawi.",
                "The market does not understand what makes you different.",
                "Your products and services have become difficult to organise.",
                "Your campaigns look different but say the same thing.",
                "Your internal teams describe the brand in different ways.",
                "The business is repositioning, merging, or expanding.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="group border border-[#E5E2DA] p-6 md:p-7 hover:border-black transition-colors"
                >
                  <div className="flex gap-4">
                    <Lightbulb
                      className="w-5 h-5 text-[#E50069] shrink-0 mt-0.5"
                      strokeWidth={1.8}
                    />
                    <p className="text-black font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E50069] py-20 text-center relative overflow-hidden">
        <Parallax
          offset={-60}
          className="absolute inset-0 pointer-events-none"
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

        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 relative z-10">
          <WordReveal
            text="Need clarity before the campaign?"
            as="h2"
            stagger={0.07}
            highlight={["clarity", "campaign?"]}
            highlightColor="#ffffff"
            className="font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black mb-5 flex flex-wrap justify-center"
          />

          <p className="text-black/75 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Bring us the business problem. We will help define the choices the
            brand needs to make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink bg-black text-white px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Start a strategy project
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <Link
              to="/work/"
              className="btn-lift border-2 border-black text-black px-8 py-4 text-base font-medium inline-flex items-center justify-center gap-2"
            >
              See our work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
