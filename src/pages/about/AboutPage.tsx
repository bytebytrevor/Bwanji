import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart2,
  Building2,
  Globe2,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

import Parallax from "@/motion/Parallax";
import WordReveal from "@/motion/WordReveal";
import AnimatedIcon, { type IconMotionVariant } from "@/motion/AnimatedIcon";
import BwanjiMark from "@/components/brand/BwanjiMark";

const values = [
  {
    title: "Ground before guesswork",
    desc: "We do not build campaigns from boardroom assumptions. We start with what people actually say, do, buy, ignore, share, and remember.",
    icon: Target,
    motionVariant: "pulse" as IconMotionVariant,
  },
  {
    title: "Local language is strategy",
    desc: "Bemba, Nyanja, Chichewa and Tumbuka are not translation layers. They are market-entry tools, memory tools, and trust tools.",
    icon: MessageCircle,
    motionVariant: "sway" as IconMotionVariant,
  },
  {
    title: "Data must meet the street",
    desc: "Numbers tell us where to look. The ground tells us what the numbers mean.",
    icon: BarChart2,
    motionVariant: "bob" as IconMotionVariant,
  },
  {
    title: "The work must move",
    desc: "Pretty is not enough. The work must create action, recall, conversation, confidence, or commercial movement.",
    icon: ArrowUpRight,
    motionVariant: "nudge" as IconMotionVariant,
  },
];

const facts = [
  { number: "02", label: "Markets", detail: "Zambia and Malawi" },
  { number: "04", label: "Languages", detail: "Bemba, Nyanja, Chichewa, Tumbuka" },
  { number: "06", label: "Core disciplines", detail: "Strategy, creative, digital, PR, activation, advisory" },
  { number: "01", label: "Ground truth", detail: "One way of working" },
];

const teamPrinciples = [
  "Senior thinking close to the work.",
  "Local insight before imported frameworks.",
  "Creative craft that respects the audience.",
  "Performance measured beyond vanity metrics.",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section
        className="min-h-[85vh] flex flex-col justify-center text-[#ffffff] relative pt-24 pb-16 overflow-hidden"
        style={{
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229, 0, 105, 0.24) 0%, transparent 55%)",
            "linear-gradient(135deg, #0a0407 0%, #000000 48%, #160a0d 100%)",
          ].join(", "),
        }}
      >
        <Parallax offset={-160} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #E50069 0%, transparent 70%)" }}
          />
        </Parallax>

        <Parallax offset={80} className="absolute inset-0 pointer-events-none overflow-hidden">
          <BwanjiMark
            stroke="#ffffff"
            strokeWidth={2}
            className="absolute -bottom-24 -right-16 w-[520px] h-[520px] opacity-[0.06]"
          />
        </Parallax>

        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-[860px]">
            <p className="text-[#E50069] text-sm font-bold uppercase tracking-[0.22em] mb-5">
              About Bwanji
            </p>

            <WordReveal
              text="We are built for the markets global decks miss."
              as="h1"
              immediate
              stagger={0.09}
              highlight={["markets", "miss."]}
              className="font-serif font-bold tracking-[-0.02em] text-[clamp(2.4rem,6.5vw,5.6rem)] leading-[1.02] mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-[clamp(1rem,1.4vw,1.18rem)] text-neutral-300 max-w-2xl leading-relaxed mb-10"
            >
              Bwanji is an independent digital agency working across Zambia and Malawi.
              We combine consumer insight, local language fluency, creative craft, and
              field execution to make work that lands on the ground.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex gap-4 flex-col sm:flex-row"
            >
              <Link
                to="/start-a-project/"
                className="group btn-glow-pink bg-[#E50069] text-[#000000] px-8 py-4 font-semibold text-base inline-flex items-center justify-center gap-2"
              >
                Start a project <span className="arrow-nudge">&rarr;</span>
              </Link>
              <Link
                to="/work/"
                className="group btn-glow-outline border border-white/40 text-white px-8 py-4 font-medium text-base inline-flex items-center justify-center gap-2"
              >
                See our work <span className="arrow-nudge">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Belief */}
      <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <WordReveal
                text="What we believe."
                as="h2"
                stagger={0.08}
                highlight={["believe."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#000000] mb-6 flex flex-wrap"
              />
            </div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-tight text-[#000000] mb-8"
              >
                Great marketing does not begin with a template. It begins with respect
                for the people you are trying to reach.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="text-[#4A4A47] text-base md:text-lg leading-relaxed max-w-3xl"
              >
                We believe brands win when they stop speaking at the market and start
                understanding it. That means listening before launching, testing before
                scaling, and creating work that sounds like it belongs here.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="bg-[#F2F2F2] py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#E5E2DA] p-7 card-lift"
              >
                <p
                  className="font-serif font-black text-[4.5rem] leading-none mb-5"
                  style={{ color: "transparent", WebkitTextStroke: "2px #E50069" }}
                >
                  {fact.number}
                </p>
                <h3 className="font-serif text-xl text-[#000000] mb-2">{fact.label}</h3>
                <p className="text-sm text-[#4A4A47]">{fact.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <WordReveal
              text="How we think."
              as="h2"
              stagger={0.08}
              highlight={["think."]}
              className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] text-[#000000] mb-4 flex flex-wrap"
            />
            <p className="text-[#4A4A47] leading-relaxed">
              Our approach is simple: find the truth, shape the story, and make it move.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-white border border-[#E5E2DA] p-8 min-h-[310px] overflow-hidden card-lift group"
                >
                  <span className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#E50069]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-[#F2F2F2] group-hover:bg-[#E50069] transition-colors duration-300">
                    <AnimatedIcon variant={item.motionVariant} delay={i * 0.15}>
                      <Icon className="w-7 h-7 text-[#000000]" strokeWidth={1.75} />
                    </AnimatedIcon>
                  </div>

                  <h3 className="font-serif text-xl text-[#000000] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4A4A47] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network / position */}
      <section className="bg-[#000000] py-20 md:py-28 lg:py-32 text-[#ffffff]">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <WordReveal
                text="Independent, but not isolated."
                as="h2"
                stagger={0.08}
                highlight={["not", "isolated."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] mb-6 flex flex-wrap"
              />
              <p className="text-neutral-300 leading-relaxed max-w-md">
                We operate with the speed and closeness of an independent agency, while
                drawing from the strategic discipline, craft, and regional network of the
                Full Circle Comms Group.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Bwanji Agency", desc: "Ground-truth marketing for Zambia and Malawi." },
                { name: "TBWA Zimbabwe", desc: "Disruptive creativity across southern Africa." },
                { name: "Magna Carta", desc: "PR, reputation, influence, and stakeholder counsel." },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-7 min-h-[220px] flex flex-col justify-between"
                >
                  <div>
                    <Building2 className="w-6 h-6 text-[#E50069] mb-5" />
                    <h3 className="font-serif text-xl mb-3">{item.name}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team approach */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <WordReveal
                text="The way we work."
                as="h2"
                stagger={0.08}
                highlight={["work."]}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#000000] mb-6 flex flex-wrap"
              />
              <p className="text-[#4A4A47] leading-relaxed max-w-md">
                We are not interested in bloated process. We are interested in clear
                thinking, strong execution, and work that can survive contact with the real world.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E5E2DA]">
                {teamPrinciples.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-5 p-6 md:p-8 border-b border-[#E5E2DA] last:border-b-0 group"
                  >
                    <span
                      className="font-serif font-black text-4xl md:text-5xl shrink-0"
                      style={{ color: "transparent", WebkitTextStroke: "1.5px #E50069" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-lg md:text-2xl text-[#000000] group-hover:text-[#E50069] transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#E50069] py-20 text-center relative overflow-hidden">
        <Parallax offset={-60} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </Parallax>

        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 relative z-10">
          <WordReveal
            text="Need work that lands here?"
            as="h2"
            stagger={0.07}
            highlight={["lands", "here?"]}
            highlightColor="#ffffff"
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-4 flex flex-wrap justify-center"
          />
          <p className="text-[#000000]/80 max-w-2xl mx-auto mb-10 text-lg">
            Bring us the brief. We will bring the ground truth.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink bg-[#000000] text-[#ffffff] px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Start a project <span className="arrow-nudge">&rarr;</span>
            </Link>
            <Link
              to="/what-we-do/"
              className="btn-lift border-2 border-[#000000] text-[#000000] px-8 py-4 text-base font-medium flex items-center justify-center gap-2"
            >
              <Globe2 className="w-5 h-5" /> Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
