import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Film,
  LayoutTemplate,
  MessageCircle,
  Mic2,
  Palette,
  PenTool,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Parallax from "@/motion/Parallax";
import WordReveal from "@/motion/WordReveal";
import AnimatedIcon, {
  type IconMotionVariant,
} from "@/motion/AnimatedIcon";
import BwanjiMark from "@/components/brand/BwanjiMark";

/*
 * Temporary stock images.
 * Replace these URLs with local assets when final campaign images are ready.
 */
const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=85",
  campaign:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  production:
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85",
  photography:
    "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1400&q=85",
  social:
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=85",
  editorial:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
};

const services = [
  {
    title: "Creative concepts",
    desc: "Campaign ideas rooted in the strategy, the audience, and the reality of the market.",
    icon: Sparkles,
    motionVariant: "pulse" as IconMotionVariant,
  },
  {
    title: "Copywriting",
    desc: "Headlines, scripts, campaign language, long-form copy, and messaging that sound human.",
    icon: PenTool,
    motionVariant: "sway" as IconMotionVariant,
  },
  {
    title: "Design systems",
    desc: "Flexible visual systems that keep a campaign recognisable across every channel and format.",
    icon: Palette,
    motionVariant: "tilt" as IconMotionVariant,
  },
  {
    title: "Video and motion",
    desc: "From short social films to explainers, commercials, motion graphics, and event content.",
    icon: Film,
    motionVariant: "bob" as IconMotionVariant,
  },
  {
    title: "Photography",
    desc: "Purposeful imagery built around the brand, the environment, and the people in the story.",
    icon: Camera,
    motionVariant: "nudge" as IconMotionVariant,
  },
  {
    title: "Social content",
    desc: "Platform-aware content designed for attention, conversation, consistency, and action.",
    icon: Smartphone,
    motionVariant: "orbit" as IconMotionVariant,
  },
];

const process = [
  {
    number: "01",
    label: "Find the story",
    title: "What is worth saying?",
    desc: "We begin with the audience, the objective, and the strategic tension. Before making anything, we identify the idea the market should understand, feel, or remember.",
  },
  {
    number: "02",
    label: "Build the concept",
    title: "Give the story a shape.",
    desc: "We explore creative territories, visual worlds, language, formats, and campaign platforms. The strongest route is developed into a clear creative system.",
  },
  {
    number: "03",
    label: "Make the work",
    title: "Craft every expression.",
    desc: "Writers, designers, photographers, filmmakers, animators, and digital specialists translate the concept into finished work.",
  },
  {
    number: "04",
    label: "Adapt for the channel",
    title: "One idea. Many behaviours.",
    desc: "A billboard, radio spot, TikTok video, sales deck, and press advert should not behave the same way. We adapt the idea without losing its centre.",
  },
  {
    number: "05",
    label: "Learn and improve",
    title: "See what the market returns.",
    desc: "We review performance, audience reactions, comments, completion rates, recall, and commercial response to strengthen the next round of work.",
  },
];

const contentOutputs = [
  "Campaign concepts",
  "Campaign visual identities",
  "Copy platforms and messaging",
  "Social media content",
  "Television and digital commercials",
  "Radio scripts and audio content",
  "Photography and art direction",
  "Motion graphics and animation",
  "Reports and editorial design",
  "Sales and presentation materials",
  "Outdoor and print advertising",
  "Content calendars and toolkits",
];

const principles = [
  {
    number: "01",
    title: "The idea comes first.",
    desc: "Formats change. Platforms change. A strong idea gives every execution something recognisable to return to.",
    style: "bg-[#E50069] text-black",
    stroke: "rgba(0,0,0,0.24)",
  },
  {
    number: "02",
    title: "Local does not mean small.",
    desc: "Work made for Zambia and Malawi should carry the same craft and ambition as work made for any global market.",
    style: "bg-black text-white",
    stroke: "#E50069",
  },
  {
    number: "03",
    title: "Clarity earns attention.",
    desc: "People do not owe a brand their time. The work must make its point without making the audience work for it.",
    style: "bg-white border border-[#E5E2DA] text-black",
    stroke: "rgba(0,0,0,0.22)",
  },
  {
    number: "04",
    title: "Culture is not decoration.",
    desc: "Language, humour, music, behaviour, and context should shape the idea—not get added after the idea is finished.",
    style: "bg-[#F2F2F2] border border-[#E5E2DA] text-black",
    stroke: "#E50069",
  },
];

export default function CreativeContentPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section
        className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pb-20 pt-24 text-white"
        style={{
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229,0,105,0.26) 0%, transparent 55%)",
            "linear-gradient(135deg, #0a0407 0%, #000000 50%, #160a0d 100%)",
          ].join(", "),
        }}
      >
        {/* Hero image */}
        <div className="absolute inset-y-0 right-0 z-[2] hidden w-[46%] lg:block">
          <img
            src={IMAGES.hero}
            alt="Creative team developing campaign ideas"
            className="h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0.1) 58%, rgba(0,0,0,0.25) 100%)",
            }}
          />

          <div className="absolute inset-0 bg-[#E50069]/10 mix-blend-color" />
        </div>

        <Parallax
          offset={-170}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
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
          <div className="max-w-[720px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-[#E50069] md:text-sm"
            >
              Creative & Content
            </motion.p>

            <WordReveal
              text="Ideas made to live in the real world."
              as="h1"
              immediate
              stagger={0.09}
              highlight={["Ideas", "real", "world."]}
              className="mb-8 font-serif text-[clamp(2.5rem,6.5vw,5.7rem)] font-bold leading-[1.01] tracking-[-0.025em]"
            />

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mb-5 max-w-2xl text-[clamp(1rem,1.45vw,1.2rem)] leading-relaxed text-neutral-300"
            >
              We turn strategy into stories, images, films, campaigns, and
              content that people can understand, remember, and respond to.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className="mb-10 max-w-2xl text-[clamp(1rem,1.45vw,1.2rem)] leading-relaxed text-neutral-300"
            >
              One central idea. Built carefully. Adapted intelligently. Made
              for the channels and communities where it needs to work.
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
                Start a creative project
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

      {/* Intro */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
              <WordReveal
                text="Creativity with somewhere to go."
                as="h2"
                stagger={0.08}
                highlight={["somewhere", "go."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <p className="max-w-sm leading-relaxed text-[#4A4A47]">
                The work should not simply look good. It should move the brand
                toward a clear objective.
              </p>
            </div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 font-serif text-[clamp(1.6rem,3vw,2.7rem)] leading-[1.15] text-black"
              >
                We build creative platforms that are strong enough to hold a
                campaign together and flexible enough to work across language,
                format, channel, and market.
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
                    Built from strategy
                  </p>
                  <p className="leading-relaxed text-[#4A4A47]">
                    Every creative route begins with a clear audience, problem,
                    proposition, and intended response.
                  </p>
                </div>

                <div className="border-t-2 border-[#E50069] pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-black">
                    Made for the market
                  </p>
                  <p className="leading-relaxed text-[#4A4A47]">
                    Language, culture, media habits, access, and context shape
                    how the work is written, designed, produced, and released.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image-led showcase */}
      <section className="overflow-hidden bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <WordReveal
              text="From idea to expression."
              as="h2"
              stagger={0.08}
              highlight={["idea", "expression."]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black"
            />

            <p className="leading-relaxed text-[#4A4A47]">
              One story can take many forms. The job is to make each form feel
              native without losing the idea that holds it together.
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
                src={IMAGES.campaign}
                alt="Creative team discussing a campaign"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Campaign development
                </p>
                <h3 className="mb-3 max-w-xl font-serif text-3xl md:text-4xl">
                  A central idea that gives every execution direction.
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                  We create campaign platforms that can move through outdoor,
                  radio, film, digital, social, retail, and live experience.
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
                  src={IMAGES.production}
                  alt="Video production equipment"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/30" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <Film className="mb-4 h-7 w-7 text-[#E50069]" />
                  <h3 className="font-serif text-2xl">
                    Film, video and motion
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
                  src={IMAGES.photography}
                  alt="Photographer capturing campaign content"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-[#E50069]/35 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <Camera className="mb-4 h-7 w-7 text-white" />
                  <h3 className="font-serif text-2xl">
                    Photography and art direction
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
              text="What we make."
              as="h2"
              stagger={0.08}
              highlight={["make."]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black"
            />

            <p className="leading-relaxed text-[#4A4A47]">
              A multidisciplinary creative team, organised around the idea
              rather than separated by format.
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
                text="Our creative process."
                as="h2"
                stagger={0.08}
                highlight={["creative", "process."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05]"
              />

              <p className="mb-8 max-w-sm leading-relaxed text-neutral-400">
                Creativity can be unpredictable. The process around it should
                not be.
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

      {/* Social and editorial image split */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={IMAGES.social}
                  alt="Social media content displayed on a phone"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                    Platform-aware content
                  </p>
                  <p className="font-serif text-2xl">
                    Designed for how people actually use the channel.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-5 hidden bg-[#E50069] p-6 text-black md:block">
                <Smartphone className="mb-3 h-7 w-7" />
                <p className="max-w-[180px] text-sm font-semibold">
                  Social is not a smaller version of the campaign.
                </p>
              </div>
            </motion.div>

            <div>
              <WordReveal
                text="Every channel has its own behaviour."
                as="h2"
                stagger={0.08}
                highlight={["own", "behaviour."]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <p className="mb-6 leading-relaxed text-[#4A4A47]">
                The same campaign idea may need to become a six-second hook, a
                sixty-second film, a radio conversation, a carousel, a live
                experience, or a single outdoor line.
              </p>

              <p className="mb-9 leading-relaxed text-[#4A4A47]">
                We protect the central idea while letting each execution use
                the strengths of its format.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Smartphone,
                    title: "Social and digital",
                    text: "Built for attention, interaction, sound-off viewing, and mobile behaviour.",
                  },
                  {
                    icon: Mic2,
                    title: "Radio and audio",
                    text: "Written for the ear, the language, the voice, and the rhythm of the market.",
                  },
                  {
                    icon: LayoutTemplate,
                    title: "Print and outdoor",
                    text: "Simple enough to understand quickly. Strong enough to remain memorable.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex gap-5 border-t border-[#E5E2DA] py-5"
                    >
                      <Icon
                        className="mt-1 h-5 w-5 shrink-0 text-[#E50069]"
                        strokeWidth={1.8}
                      />
                      <div>
                        <h3 className="mb-1 font-semibold text-black">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#4A4A47]">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
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
                The final mix depends on the audience, objective, budget,
                channel, and life of the campaign.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 border-l border-t border-[#E5E2DA] sm:grid-cols-2">
                {contentOutputs.map((output, index) => (
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

      {/* Creative principles */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
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
              Four principles that keep the creative work sharp, relevant, and
              useful.
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

      {/* Editorial image banner */}
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white">
        <img
          src={IMAGES.editorial}
          alt="Editorial content production"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

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

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1320px] items-center px-5 py-20 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#E50069]">
              Content with a point of view
            </p>

            <WordReveal
              text="Not more content. Better reasons to pay attention."
              as="h2"
              stagger={0.07}
              highlight={["Better", "attention."]}
              className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.05]"
            />

            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We help brands move from filling a calendar to building a
              recognisable voice, visual language, and relationship with their
              audience.
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
            text="Have a story worth making?"
            as="h2"
            stagger={0.07}
            highlight={["story", "making?"]}
            highlightColor="#ffffff"
            className="mb-5 flex flex-wrap justify-center font-serif text-[clamp(1.7rem,3.5vw,2.7rem)] text-black"
          />

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-black/75">
            Bring us the brief, the challenge, or the rough idea. We will help
            turn it into work people can see, hear, feel, and remember.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
            >
              Start a creative project
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