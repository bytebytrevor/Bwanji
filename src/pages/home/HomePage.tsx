import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  Target,
  PenTool,
  BarChart2,
  MessageCircle,
  Users,
  Briefcase,
  Building2,
  ArrowUpRight,
  UserRound,
} from "lucide-react";
import { useRef, type CSSProperties, type MouseEvent } from "react";

import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

import Parallax from "@/motion/Parallax";
import WordReveal from "@/motion/WordReveal";
import AnimatedIcon, { type IconMotionVariant } from "@/motion/AnimatedIcon";
import BwanjiMark from "@/components/brand/BwanjiMark";
import RegionalMap from "@/components/maps/RegionalMap";
import { caseStudies } from "@/data/caseStudies";

import headphonesPhoto from "@assets/embedded_page09_headphones_photo_1778168426119.png";

/* =========================================================
   TYPES
========================================================= */

type SectorVariant = "pink" | "light" | "dark" | "outline";

type SectorStyles = {
  card: string;
  title: string;
  body: string;
  accent: string;
  numeral: CSSProperties;
  spotlight: string;
  cta: string;
};

type SectorItem = {
  title: string;
  desc: string;
  number: string;
  variant: SectorVariant;
  href: string;
  cta: string;
};

/* =========================================================
   SECTOR DATA
========================================================= */

const SECTOR_STYLES: Record<SectorVariant, SectorStyles> = {
  pink: {
    card: "bg-[#E50069] text-black",
    title: "text-black",
    body: "text-black/75",
    accent: "bg-black",
    numeral: {
      color: "transparent",
      WebkitTextStroke: "2px #000000",
    },
    spotlight: "rgba(255,255,255,0.22)",
    cta: "bg-black text-white",
  },
  light: {
    card: "bg-[#F2F2F2] text-black",
    title: "text-black",
    body: "text-[#4A4A47]",
    accent: "bg-[#E50069]",
    numeral: {
      color: "transparent",
      WebkitTextStroke: "2px #E50069",
    },
    spotlight: "rgba(229,0,105,0.18)",
    cta: "bg-[#E50069] text-black",
  },
  dark: {
    card: "bg-black text-white",
    title: "text-white",
    body: "text-white/80",
    accent: "bg-[#E50069]",
    numeral: {
      color: "transparent",
      WebkitTextStroke: "2px #E50069",
    },
    spotlight: "rgba(229,0,105,0.28)",
    cta: "bg-[#E50069] text-black",
  },
  outline: {
    card: "bg-white border-2 border-black text-black",
    title: "text-black",
    body: "text-[#4A4A47]",
    accent: "bg-[#E50069]",
    numeral: {
      color: "transparent",
      WebkitTextStroke: "2px #000000",
    },
    spotlight: "rgba(229,0,105,0.16)",
    cta: "bg-black text-white",
  },
};

const SECTOR_ITEMS: SectorItem[] = [
  {
    title: "Corporates",
    desc: "Banks, telcos, FMCG, and energy companies operating across Zambia and Malawi who need consistent brand execution at national scale.",
    number: "01",
    variant: "pink",
    href: "/work/",
    cta: "See corporate work",
  },
  {
    title: "NGOs & INGOs",
    desc: "Donor-funded programmes requiring USAID/FCDO/EU-compliant communications, local-language materials, and verifiable community reach.",
    number: "02",
    variant: "light",
    href: "/what-we-do/public-relations/",
    cta: "How we partner",
  },
  {
    title: "Public Sector",
    desc: "Government ministries, parastatals, and regulatory bodies that need counsel on public communications, stakeholder engagement, and crisis response.",
    number: "03",
    variant: "dark",
    href: "/what-we-do/advisory/",
    cta: "Advisory approach",
  },
  {
    title: "SMEs & Growth Businesses",
    desc: "Ambitious local businesses entering new markets or categories who want the rigour of a network agency without offshore pricing.",
    number: "04",
    variant: "outline",
    href: "/start-a-project/",
    cta: "Start a brief",
  },
];

/* =========================================================
   SECTOR CARD
========================================================= */

function SectorCard({ item, index }: { item: SectorItem; index: number }) {
  const styles = SECTOR_STYLES[item.variant];
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const numeralX = useSpring(0, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const numeralY = useSpring(0, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, ${styles.spotlight}, transparent 70%)`;

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    mx.set(px);
    my.set(py);

    if (!reduce) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      numeralX.set(((cx - px) / cx) * 12);
      numeralY.set(((cy - py) / cy) * 8);
    }
  };

  const handleLeave = () => {
    mx.set(-200);
    my.set(-200);
    numeralX.set(0);
    numeralY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Link
        ref={ref}
        to={item.href}
        data-testid={`sector-card-${item.variant}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`group relative block h-full min-h-[300px] overflow-hidden p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2 md:min-h-[340px] md:p-8 card-lift ${styles.card}`}
        aria-label={`${item.title} — ${item.cta}`}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
          style={{ background: spotlight }}
        />

        <div className="relative flex h-full flex-col">
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.1 + 0.25,
              duration: 0.6,
            }}
            className={`mb-5 block h-[2px] w-10 origin-left transition-[width] duration-500 group-hover:w-24 ${styles.accent}`}
          />

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.32 }}
            className={`mb-3 text-lg font-bold md:text-xl ${styles.title}`}
          >
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              {item.title}
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.42 }}
            className={`max-w-[36ch] text-sm leading-relaxed md:text-base ${styles.body}`}
          >
            {item.desc}
          </motion.p>

          <div className="mt-auto overflow-hidden pt-6">
            <span
              className={`inline-flex translate-y-3 items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100 ${styles.cta}`}
            >
              {item.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <motion.span
          aria-hidden="true"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1 + 0.5,
            duration: 0.75,
          }}
          className="pointer-events-none absolute -bottom-6 right-4 select-none md:-bottom-8 md:right-6"
          style={{ x: numeralX, y: numeralY }}
        >
          <span
            className="block origin-bottom-right font-serif text-[8.5rem] font-black leading-none transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-[1.06] md:text-[10rem]"
            style={styles.numeral}
          >
            {item.number}
          </span>
        </motion.span>
      </Link>
    </motion.div>
  );
}

const featuredCaseStudies = caseStudies.slice(0, 3);

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Brand Strategy",
    desc: "The thinking that gives a brand somewhere to stand.",
    icon: Target,
    link: "/what-we-do/brand-strategy/",
    motionVariant: "pulse" as IconMotionVariant,
  },
  {
    title: "Creative & Content",
    desc: "Ideas, made — in the languages your audience actually speaks.",
    icon: PenTool,
    link: "/what-we-do/creative-and-content/",
    motionVariant: "sway" as IconMotionVariant,
  },
  {
    title: "Digital & Performance",
    desc: "Owned, earned, paid — measured against numbers that matter.",
    icon: BarChart2,
    link: "/what-we-do/digital-and-performance/",
    motionVariant: "bob" as IconMotionVariant,
  },
  {
    title: "Public Relations",
    desc: "Counsel for the moments that decide a brand's standing.",
    icon: MessageCircle,
    link: "/what-we-do/public-relations/",
    motionVariant: "tilt" as IconMotionVariant,
  },
  {
    title: "Activation & Experiential",
    desc: "The work that happens off the screen.",
    icon: Users,
    link: "/what-we-do/activation/",
    motionVariant: "orbit" as IconMotionVariant,
  },
  {
    title: "Advisory",
    desc: "Senior counsel, workshops, and personal-brand work for executives.",
    icon: Briefcase,
    link: "/what-we-do/advisory/",
    motionVariant: "nudge" as IconMotionVariant,
  },
];

/* =========================================================
   COMPARISON DATA
========================================================= */

const comparisonRows = [
  ["Senior strategic counsel", "full", "full remote", "half"],
  [
    "Local-language fluency (Bemba, Nyanja, Chichewa, Tumbuka)",
    "full",
    "empty",
    "half",
  ],
  ["Field execution in ZM/MW", "full", "empty", "half"],
  ["SADC cross-border experience", "full", "full", "empty"],
  ["Procurement compliance (gov, INGO)", "full", "full", "empty"],
  ["Pricing transparency for SMEs", "full", "empty", "full"],
  ["Senior cover for crisis", "full", "full", "empty"],
  ["Mobile money & m-commerce fluency", "full", "half", "half"],
  ["Network craft (TBWA / Magna Carta)", "full", "full", "empty"],
  ["Cost efficiency vs offshore", "full", "empty", "full"],
];

const mobileComparisonRows = [
  "Senior strategic counsel",
  "Local-language fluency",
  "Field execution in ZM/MW",
  "SADC cross-border experience",
  "Procurement compliance",
  "Pricing transparency",
  "Senior cover for crisis",
  "Mobile-money fluency",
  "Network craft",
  "Cost efficiency vs offshore",
];

/* =========================================================
   HOMEPAGE
========================================================= */

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden pb-16 pt-20 text-white"
        style={{
          background: [
            "radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229,0,105,0.22) 0%, transparent 55%)",
            "radial-gradient(ellipse 30% 25% at 95% 5%, rgba(255,255,255,0.05) 0%, transparent 60%)",
            "linear-gradient(135deg, #0a0407 0%, #000000 45%, #000000 70%, #160a0d 100%)",
          ].join(", "),
        }}
      >
        <Parallax
          offset={-180}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #E50069 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-0 -left-32 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #2b161b 0%, transparent 70%)",
            }}
          />
        </Parallax>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-[44%] lg:block">
          <img
            src={headphonesPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full select-none object-cover object-center"
            decoding="async"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.6) 14%, transparent 40%)",
            }}
          />
        </div>

        <Parallax
          offset={80}
          className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
        >
          <BwanjiMark
            stroke="#ffffff"
            strokeWidth={2}
            className="absolute -bottom-20 -right-12 h-[420px] w-[420px] opacity-[0.07]"
          />
        </Parallax>

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="lg:max-w-[640px] xl:max-w-[720px]">
            <WordReveal
              text="We work with Data but our work is on the ground."
              as="h1"
              immediate
              stagger={0.1}
              highlight={["Data", "ground"]}
              className="mb-6 mt-4 max-w-[880px] font-serif text-[clamp(2.25rem,6.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.02em]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-5 font-serif text-[clamp(1.25rem,1.8vw,1.5rem)] italic leading-snug"
            >
              Muli <span className="text-[#E50069]">Bwanji</span>?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.92 }}
              className="mb-4 max-w-2xl text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-neutral-300"
            >
              We're an independent digital agency obsessed with the power of a
              great story and the precision of consumer insights.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.04 }}
              className="mb-10 max-w-2xl text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-neutral-300"
            >
              We turn stories into campaigns the market understands, remembers,
              and responds to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-16 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/start-a-project/"
                data-testid="btn-start-project-hero"
                className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-[#E50069] px-8 py-4 text-center text-base font-semibold text-black"
              >
                Start a project
                <span className="arrow-nudge">&rarr;</span>
              </Link>

              <Link
                to="/work/"
                data-testid="btn-see-work-hero"
                className="group btn-glow-outline inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 text-center text-base font-medium text-white"
              >
                See our work
                <span className="arrow-nudge">&rarr;</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p className="mb-4 text-sm text-neutral-400">Trusted by</p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Old Mutual",
                  "Standard Bank Malawi",
                  "ZICB",
                  "PSI",
                  "Airtel Zambia",
                  "FNB Malawi",
                ].map((client) => (
                  <span
                    key={client}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-xs uppercase tracking-wide text-neutral-300"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE WORK WITH
      ===================================================== */}

      <section
        id="who-we-work-with"
        className="scroll-mt-24 bg-white py-20 md:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="self-start lg:sticky lg:top-32 lg:col-span-4">
              <WordReveal
                text="Who we work with."
                as="h2"
                stagger={0.08}
                highlight={["with"]}
                className="mb-6 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-sm text-base leading-relaxed text-[#4A4A47]"
              >
                Four kinds of clients, one common thread: they need work that
                lands here, not just work that looks good in a deck.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:col-span-8">
              {SECTOR_ITEMS.map((item, index) => (
                <SectorCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED CASE STUDIES
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <WordReveal
                text="Ground truth, evidenced."
                as="h2"
                stagger={0.1}
                highlight={["evidenced."]}
                className="mb-2 flex flex-wrap font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
              />

              <p className="text-[#4A4A47]">Three results from the ground.</p>
            </div>

            <Link
              to="/work/"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
            >
              View all case studies
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredCaseStudies.map((study, index) => {
              const primaryResult = study.results[0];

              return (
                <motion.article
                  key={study.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={`/work/${study.slug}/`}
                    className="group card-lift flex h-full flex-col overflow-hidden border border-[#E5E2DA] bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2"
                    aria-label={`View ${study.title} case study`}
                  >
                    <div className="relative h-[280px] overflow-hidden bg-black">
                      <img
                        src={study.heroImage}
                        alt={`${study.client} — ${study.title}`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/5" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(229,0,105,0.24),transparent_45%)]" />

                      <span className="absolute left-5 top-5 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                        {study.sector}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65">
                          {study.client} · {study.market}
                        </p>

                        <h3 className="font-serif text-xl leading-tight md:text-2xl">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#4A4A47]">
                        {study.summary}
                      </p>

                      <div className="mt-auto border-t border-[var(--brand-divider)] pt-5">
                        {primaryResult && (
                          <div className="mb-5">
                            <p className="mb-1 break-words font-serif text-[clamp(1.5rem,2.5vw,1.875rem)] font-bold text-[#E50069]">
                              {primaryResult.number}
                            </p>

                            <p className="text-sm leading-relaxed text-[#4A4A47]">
                              {primaryResult.label}
                            </p>
                          </div>
                        )}

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors group-hover:text-[#E50069]">
                          See the work
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-14 max-w-2xl">
            <WordReveal
              text="Six things we do well."
              as="h2"
              stagger={0.08}
              highlight={["well"]}
              className="mb-4 flex flex-wrap font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] text-black"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="leading-relaxed text-[#4A4A47]"
            >
              Six disciplines, one team. Wired to land in Zambian and Malawian
              markets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  to={service.link}
                  key={service.title}
                  className="group block h-full focus:outline-none"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex h-full flex-col overflow-hidden border border-[#E5E2DA] bg-white p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-black group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] group-focus-visible:ring-2 group-focus-visible:ring-[#E50069]"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#E50069]/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                    />

                    <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F2F2F2] transition-colors group-hover:bg-[#E50069]">
                      <AnimatedIcon
                        variant={service.motionVariant}
                        delay={index * 0.15}
                      >
                        <Icon
                          className="h-7 w-7 text-black transition-transform group-hover:scale-110"
                          strokeWidth={1.75}
                        />
                      </AnimatedIcon>
                    </div>

                    <h3 className="mb-3 font-serif text-xl text-black">
                      {service.title}
                    </h3>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-[#4A4A47]">
                      {service.desc}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-black transition-colors group-hover:text-[#E50069]">
                      Learn more
                      <span className="arrow-nudge">&rarr;</span>
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          REGIONAL MAP — ACTUAL GEOGRAPHIC MAP
      ===================================================== */}

      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
            >
              On the ground in Zambia and Malawi.
            </motion.h2>

            <p className="text-[#4A4A47]">Field coverage where it counts.</p>
          </div>

          <div className="flex flex-col items-stretch gap-12 lg:flex-row">
            <div className="w-full overflow-hidden border border-[#E5E2DA] bg-white p-3 md:p-4 lg:w-3/5">
              <RegionalMap />
            </div>

            <div className="flex w-full flex-col justify-center gap-6 lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border border-[#E5E2DA] bg-white p-6"
              >
                <h3 className="mb-2 flex items-center gap-2 font-bold text-black">
                  <Building2 className="h-5 w-5 text-[#E50069]" />
                  Lusaka, Zambia
                </h3>

                <p className="text-sm leading-relaxed text-[#4A4A47]">
                  Our founding office. Full-service delivery across all
                  capabilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-[#E5E2DA] bg-white p-6"
              >
                <h3 className="mb-2 flex items-center gap-2 font-bold text-black">
                  <Building2 className="h-5 w-5 text-[#E50069]" />
                  Lilongwe, Malawi
                </h3>

                <p className="text-sm leading-relaxed text-[#4A4A47]">
                  Full presence across Malawi with local team and field network.
                </p>
              </motion.div>

              <div className="border-l-2 border-[#E50069] pl-5">
                <p className="text-sm leading-relaxed text-[#4A4A47]">
                  Local knowledge. Regional coordination. Campaigns built around
                  the realities of each market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NETWORK
      ===================================================== */}

      <section className="bg-black py-20 text-white md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-serif text-[clamp(1.5rem,3vw,2.25rem)]"
            >
              The Full Circle Comms Group.
            </motion.h2>

            <p className="mx-auto max-w-2xl text-neutral-300">
              We are not a standalone studio. We are part of something bigger.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Bwanji Agency",
                badge: "Ground-Truth Marketing",
                desc: "For Zambia and Malawi",
              },
              {
                name: "TBWA Zimbabwe",
                badge: "Disruptive Creativity",
                desc: "Creative excellence across Zimbabwe and southern Africa",
              },
              {
                name: "Magna Carta",
                badge: "PR & Reputation",
                desc: "Africa's leading PR and reputation management firm",
              },
            ].map((panel, index) => (
              <motion.div
                key={panel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center border border-white/10 bg-white/5 p-8 text-center"
              >
                <span className="mb-4 rounded-sm bg-[#E50069] px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  {panel.badge}
                </span>

                <h3 className="mb-3 font-serif text-xl">{panel.name}</h3>

                <p className="text-sm text-neutral-400">{panel.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-300">
            Membership gives our clients access to talent, intellectual
            property, global frameworks, and cross-border coordination that no
            standalone agency in the region can match.
          </p>
        </div>
      </section>

      {/* =====================================================
          COMPARISON TABLE
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          >
            Why not a global agency or a freelancer?
          </motion.h2>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-[40%] border-b border-[var(--brand-divider)] p-4" />

                  <th className="w-[20%] border-b border-[var(--brand-divider)] bg-black p-4 text-center font-semibold text-white">
                    Bwanji Agency
                  </th>

                  <th className="w-[20%] border-b border-[var(--brand-divider)] p-4 text-center font-semibold text-[#4A4A47]">
                    Global Network Agency
                    <span className="block text-xs font-normal">
                      (Joburg/London)
                    </span>
                  </th>

                  <th className="w-[20%] border-b border-[var(--brand-divider)] p-4 text-center font-semibold text-[#4A4A47]">
                    Freelance / Independent
                    <span className="block text-xs font-normal">Studio</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-[var(--brand-divider)] transition-colors hover:bg-[#F2F2F2]"
                  >
                    <td className="p-4 font-medium text-black">{row[0]}</td>

                    <td className="bg-black/5 p-4 text-center">
                      <div className="flex justify-center">
                        {renderRatingIcon(row[1])}
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {renderRatingIcon(row[2].split(" ")[0])}

                        {row[2].includes("remote") && (
                          <span className="text-xs italic text-[#4A4A47]">
                            remote
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {renderRatingIcon(row[3])}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 md:hidden">
            {mobileComparisonRows.map((label) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border border-[var(--brand-divider)] bg-white p-4 shadow-sm"
              >
                <span className="text-sm font-medium text-black">{label}</span>

                {renderRatingIcon("full")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS — ICON AVATARS
      ===================================================== */}

      <TestimonialsCarousel />

      {/* =====================================================
          GROUND REPORT
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
            >
              The Ground Report.
            </motion.h2>

            <p className="text-[#4A4A47]">
              Bimonthly briefings on the marketing landscape in Zambia and
              Malawi. No fluff, no global templates.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: "Issue 12 — April 2026",
                title: "Mobile Money at the Category Threshold",
                desc: "What happens to brand loyalty when the payment rails shift. Data from 6 months of m-money behaviour in Lusaka and Blantyre.",
              },
              {
                id: "Issue 11 — February 2026",
                title: "The Chichewa Advantage",
                desc: "Why the most effective campaigns in Malawi in 2025 weren't in English. A language-fluency analysis.",
              },
              {
                id: "Issue 10 — December 2025",
                title: "NGO Comms in an Accountability Era",
                desc: "Donor expectations have changed. The communications implications for INGO programmes in Southern Africa.",
              },
            ].map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col border border-[#E5E2DA] bg-white p-8 transition-colors hover:border-black"
              >
                <p className="mb-3 text-xs uppercase tracking-widest text-[#4A4A47]">
                  {issue.id}
                </p>

                <h3 className="mb-3 font-serif text-xl text-black transition-colors group-hover:text-[#E50069]">
                  {issue.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#4A4A47]">
                  {issue.desc}
                </p>

                <Link
                  to="/insights/"
                  className="mt-auto inline-block text-sm font-medium text-black underline-offset-4 hover:underline"
                >
                  Read issue &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto max-w-2xl border border-[#E5E2DA] bg-white p-8 text-center">
            <h4 className="mb-6 font-serif text-xl text-black">
              Get the Ground Report in your inbox.
            </h4>

            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 border border-[#E5E2DA] bg-[var(--brand-paper)] px-4 py-3 text-sm focus:border-black focus:outline-none"
                required
              />

              <button
                type="submit"
                className="bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a1a1a]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs text-[#4A4A47]">
              No spam. No pitch. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E50069] py-20 text-center">
        <Parallax offset={-60} className="pointer-events-none absolute inset-0">
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
            text="Have a brief? Start a project."
            as="h2"
            stagger={0.07}
            highlight={["Start", "a", "project"]}
            highlightColor="#ffffff"
            className="mb-4 flex flex-wrap justify-center font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-black"
          />

          <p className="mx-auto mb-10 max-w-2xl text-lg text-black/80">
            We review every brief personally. You'll hear from a senior member
            of the team within 48 hours.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/start-a-project/"
              className="group btn-glow-pink inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
            >
              Start a project
              <span className="arrow-nudge">&rarr;</span>
            </Link>

            <a
              href="https://wa.me/260763628686"
              target="_blank"
              rel="noreferrer"
              className="btn-lift flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-base font-medium text-black"
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

/* =========================================================
   RATING ICON
========================================================= */

function renderRatingIcon(rating: string) {
  if (rating === "full") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="text-black"
        aria-label="Full capability"
        role="img"
      >
        <circle cx="8" cy="8" r="7" fill="currentColor" />
      </svg>
    );
  }

  if (rating === "half") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="text-[#4A4A47]"
        aria-label="Partial capability"
        role="img"
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />

        <path d="M8 1 A7 7 0 0 1 8 15 Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className="text-[#C9C4B6]"
      aria-label="Capability not indicated"
      role="img"
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
