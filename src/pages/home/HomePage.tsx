import { Link } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import {
  Target,
  PenTool,
  BarChart2,
  MessageCircle,
  Users,
  Briefcase,
  Building2,
  ArrowUpRight,
} from 'lucide-react';
import { useRef, type CSSProperties } from 'react';
import Parallax from '@/motion/Parallax';
import WordReveal from '@/motion/WordReveal';
import AnimatedIcon, { type IconMotionVariant } from '@/motion/AnimatedIcon';
import BwanjiMark from '@/components/brand/BwanjiMark';
import { caseStudies } from "@/data/caseStudies";
import headphonesPhoto from '@assets/embedded_page09_headphones_photo_1778168426119.png';
import powderSplash from '@assets/embedded_page06_pink_powder_splash_1778169349641.png';
import magentaStamp from '@assets/embedded_page09_magenta_circle_texture_1778169349643.png';

type SectorVariant = 'pink' | 'light' | 'dark' | 'outline';

type SectorStyles = {
  card: string;
  title: string;
  body: string;
  accent: string;
  numeral: CSSProperties;
  /** Spotlight colour (with alpha) — drives the cursor-follow radial glow */
  spotlight: string;
  /** CTA pill colour for the bottom-right "View" affordance */
  cta: string;
};

const SECTOR_STYLES: Record<SectorVariant, SectorStyles> = {
  pink: {
    card: 'bg-[#E50069] text-[#000000]',
    title: 'text-[#000000]',
    body: 'text-[#000000]/75',
    accent: 'bg-[#000000]',
    numeral: { color: 'transparent', WebkitTextStroke: '2px #000000' },
    spotlight: 'rgba(255,255,255,0.22)',
    cta: 'bg-[#000000] text-[#ffffff]',
  },
  light: {
    card: 'bg-[#F2F2F2] text-[#000000]',
    title: 'text-[#000000]',
    body: 'text-[#4A4A47]',
    accent: 'bg-[#E50069]',
    numeral: { color: 'transparent', WebkitTextStroke: '2px #E50069' },
    spotlight: 'rgba(229, 0, 105,0.18)',
    cta: 'bg-[#E50069] text-[#000000]',
  },
  dark: {
    card: 'bg-[#000000] text-[#ffffff]',
    title: 'text-[#ffffff]',
    body: 'text-[#ffffff]/80',
    accent: 'bg-[#E50069]',
    numeral: { color: 'transparent', WebkitTextStroke: '2px #E50069' },
    spotlight: 'rgba(229, 0, 105,0.28)',
    cta: 'bg-[#E50069] text-[#000000]',
  },
  outline: {
    card: 'bg-[#ffffff] border-2 border-[#000000] text-[#000000]',
    title: 'text-[#000000]',
    body: 'text-[#4A4A47]',
    accent: 'bg-[#E50069]',
    numeral: { color: 'transparent', WebkitTextStroke: '2px #000000' },
    spotlight: 'rgba(229, 0, 105,0.16)',
    cta: 'bg-[#000000] text-[#ffffff]',
  },
};

type SectorItem = {
  title: string;
  desc: string;
  number: string;
  variant: SectorVariant;
  href: string;
  cta: string;
};

const SECTOR_ITEMS: SectorItem[] = [
  {
    title: 'Corporates',
    desc: 'Banks, telcos, FMCG, and energy companies operating across Zambia and Malawi who need consistent brand execution at national scale.',
    number: '01',
    variant: 'pink',
    href: '/work/',
    cta: 'See corporate work',
  },
  {
    title: 'NGOs & INGOs',
    desc: 'Donor-funded programmes requiring USAID/FCDO/EU-compliant communications, local-language materials, and verifiable community reach.',
    number: '02',
    variant: 'light',
    href: '/what-we-do/public-relations/',
    cta: 'How we partner',
  },
  {
    title: 'Public Sector',
    desc: 'Government ministries, parastatals, and regulatory bodies that need counsel on public communications, stakeholder engagement, and crisis response.',
    number: '03',
    variant: 'dark',
    href: '/what-we-do/advisory/',
    cta: 'Advisory approach',
  },
  {
    title: 'SMEs & Growth Businesses',
    desc: 'Ambitious local businesses entering new markets or categories who want the rigour of a network agency without offshore pricing.',
    number: '04',
    variant: 'outline',
    href: '/start-a-project/',
    cta: 'Start a brief',
  },
];

function SectorCard({ item, index }: { item: SectorItem; index: number }) {
  const styles = SECTOR_STYLES[item.variant];
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  // Cursor-tracked spotlight position (raw)
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  // Numeral parallax (springy, drifts opposite to cursor for depth)
  const numeralX = useSpring(0, { stiffness: 120, damping: 18, mass: 0.4 });
  const numeralY = useSpring(0, { stiffness: 120, damping: 18, mass: 0.4 });

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, ${styles.spotlight}, transparent 70%)`;  

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px);
    my.set(py);
    if (!reduce) {
      // Drift numeral opposite to cursor by up to ~12px for parallax
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
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        ref={ref}
        to={item.href}
        data-testid={`sector-card-${item.variant}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`group relative block overflow-hidden p-7 md:p-8 min-h-[300px] md:min-h-[340px] card-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2 ${styles.card}`}
        aria-label={`${item.title} — ${item.cta}`}
      >
        {/* Cursor-tracked spotlight overlay */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
          style={{ background: spotlight }}
        />

        {/* Content column */}
        <div className="relative flex flex-col h-full">
          {/* Animated accent bar — extends on hover */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 + 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`block h-[2px] w-10 mb-5 origin-left transition-[width] duration-500 ease-out group-hover:w-24 motion-reduce:transition-none ${styles.accent}`}
          />

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 + 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`font-bold text-lg md:text-xl mb-3 ${styles.title}`}
          >
            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transition-none">
              {item.title}
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 + 0.42, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`text-sm md:text-base leading-relaxed ${styles.body} max-w-[36ch]`}
          >
            {item.desc}
          </motion.p>

          {/* CTA pill — slides up from below on hover */}
          <div className="mt-auto pt-6 overflow-hidden">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-full translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100 ${styles.cta}`}
            >
              {item.cta}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* Giant outlined numeral — peeks up + parallaxes with cursor */}
        <motion.span
          aria-hidden="true"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-6 right-4 md:-bottom-8 md:right-6 select-none pointer-events-none"
          style={{ x: numeralX, y: numeralY }}
        >
          <span
            className="block origin-bottom-right font-serif font-black leading-none text-[8.5rem] md:text-[10rem] transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.06] motion-reduce:transition-none"
            style={styles.numeral}
          >
            {item.number}
          </span>
        </motion.span>
      </Link>
    </motion.div>
  );
}

const testimonials = [
  {
    quote: "Bwanji didn't just deliver a campaign — they told us what was actually happening in the market. The Bemba-language ads tested at three times the recall of our English versions. We should have done this five years ago.",
    initials: "CM",
    name: "Chilufya Mwamba",
    role: "CMO, Old Mutual Zambia",
    location: "Lusaka, Zambia",
    statNumber: "34%",
    statLabel: "Quote completions",
    link: "/work/insurance-in-the-language-of-the-market/"
  },
  {
    quote: "We've worked with comms agencies across sub-Saharan Africa. Bwanji is the only one that came back to us with community-level data before we'd even briefed a creative. That's not standard practice — that's ground truth.",
    initials: "TP",
    name: "Dr. Thandiwe Phiri",
    role: "Country Director, PSI Malawi",
    location: "Lilongwe, Malawi",
    statNumber: "210K",
    statLabel: "Households reached",
    link: "/work/behaviour-change-at-last-mile/"
  },
  {
    quote: "The crisis hit on a Thursday evening. By Friday morning, Bwanji had a holding statement, a stakeholder map, and a media monitoring briefing on my desk. The response was surgical, and the coverage reflected that.",
    initials: "JB",
    name: "James Banda",
    role: "Head of Corporate Affairs, ZICB",
    location: "Lusaka, Zambia",
    statNumber: "72h",
    statLabel: "Recovery time",
    link: "/work/"
  }
];

const featuredCaseStudies = caseStudies.slice(0, 3);

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="min-h-[100vh] flex flex-col justify-center text-[#ffffff] relative pt-20 pb-16 overflow-hidden"
        style={{
          background: [
            // Wine accent glow — top-left
            'radial-gradient(ellipse 70% 80% at 0% 25%, #2b161b 0%, transparent 55%)',
            // Pink accent glow — bottom-right edge
            'radial-gradient(ellipse 55% 65% at 100% 80%, rgba(229, 0, 105, 0.22) 0%, transparent 55%)',
            // Soft white highlight — small spark, top-right
            'radial-gradient(ellipse 30% 25% at 95% 5%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
            // Cinematic black base, slight diagonal warmth
            'linear-gradient(135deg, #0a0407 0%, #000000 45%, #000000 70%, #160a0d 100%)',
          ].join(', '),
        }}
      >
        {/* Parallax pink + wine glows for depth on scroll */}
        <Parallax offset={-180} className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-30 blur-3xl"
            style={{ background: 'radial-gradient(circle, #E50069 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 -left-32 w-[480px] h-[480px] rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, #2b161b 0%, transparent 70%)' }}
          />
        </Parallax>

        {/* Hero photo — desktop only, bleeds to right viewport edge, fades into the dark backdrop on the left */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[44%] z-[5] pointer-events-none">
          <img
            src={headphonesPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
            decoding="async"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #000000 0%, rgba(0,0,0,0.6) 14%, transparent 40%)',
            }}
          />
        </div>

        {/* Mobile-only brand mark watermark — kept off desktop where the photo lives instead */}
        <Parallax offset={80} className="absolute inset-0 pointer-events-none overflow-hidden lg:hidden">
          <BwanjiMark
            stroke="#ffffff"
            strokeWidth={2}
            className="absolute -bottom-20 -right-12 w-[420px] h-[420px] opacity-[0.07] motion-reduce:opacity-[0.05]"
          />
        </Parallax>

        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 w-full relative z-10">
          <div className="lg:max-w-[640px] xl:max-w-[720px]">
          <WordReveal
            text="We work with Data but our work is on the ground."
            as="h1"
            immediate
            stagger={0.1}
            highlight={['Data', 'ground']}
            className="font-serif font-bold tracking-[-0.02em] text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[1.02] max-w-[880px] mb-6 mt-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-serif italic text-[clamp(1.25rem,1.8vw,1.5rem)] text-[#ffffff] mb-5 leading-snug"
          >
            Muli <span className="text-[#E50069]">Bwanji</span>?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.92 }}
            className="text-[clamp(1rem,1.4vw,1.125rem)] text-neutral-300 max-w-2xl mb-4 leading-relaxed"
          >
            We're an independent digital agency obsessed with the power of a great story and the precision of consumer insights.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.04 }}
            className="text-[clamp(1rem,1.4vw,1.125rem)] text-neutral-300 max-w-2xl mb-10 leading-relaxed"
          >
            We turn stories into campaigns the market understands, remembers, and responds to.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-4 flex-col sm:flex-row mb-16"
          >
            <Link 
              to="/start-a-project/" 
              data-testid="btn-start-project-hero"
              className="group btn-glow-pink bg-[#E50069] text-[#000000] px-8 py-4 font-semibold text-base text-center inline-flex items-center justify-center gap-2"
            >
              Start a project <span className="arrow-nudge">&rarr;</span>
            </Link>
            <Link 
              to="/work/" 
              data-testid="btn-see-work-hero"
              className="group btn-glow-outline border border-white/40 text-white px-8 py-4 font-medium text-base text-center inline-flex items-center justify-center gap-2"
            >
              See our work <span className="arrow-nudge">&rarr;</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-neutral-400 text-sm mb-4">Trusted by</p>
            <div className="flex flex-wrap gap-4">
              {['Old Mutual', 'Standard Bank Malawi', 'ZICB', 'PSI', 'Airtel Zambia', 'FNB Malawi', 'MTN Zambia', 'ZANACO'].map(client => (
                <span key={client} className="border border-white/20 text-neutral-300 text-xs px-3 py-1.5 rounded-full tracking-wide uppercase">
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section id="who-we-work-with" className="bg-[#ffffff] py-20 md:py-28 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left intro column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <WordReveal
                text="Who we work with."
                as="h2"
                stagger={0.08}
                highlight={['with']}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#000000] mb-6 flex flex-wrap"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#4A4A47] text-base leading-relaxed max-w-sm"
              >
                Four kinds of clients, one common thread: they need work that lands here, not just work that looks good in a deck.
              </motion.p>
            </div>

            {/* Right cards grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {SECTOR_ITEMS.map((item, i) => (
                <SectorCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      {/* <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <WordReveal
              text="Ground truth, evidenced."
              as="h2"
              stagger={0.1}
              highlight={['evidenced.']}
              className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-2 flex flex-wrap"
            />
            <p className="text-[#4A4A47]">Three results from the ground.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { client: "Old Mutual Zambia", title: "Insurance in the Language of the Market", stat: "34%", statDesc: "increase in quote completions after Bemba-language campaign.", link: "/work/insurance-in-the-language-of-the-market/" },
              { client: "PSI Malawi", title: "Behaviour Change at Last Mile", stat: "210,000", statDesc: "households reached in Chichewa and Tumbuka across 12 districts.", link: "/work/behaviour-change-at-last-mile/" },
              { client: "Standard Bank Malawi", title: "Branch Zero — Digital Banking Beyond the City", stat: "47%", statDesc: "increase in mobile money activations in rural Southern Region.", link: "/work/branch-zero/" }
            ].map((study, i) => (
              <motion.div 
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E2DA] overflow-hidden card-lift group flex flex-col"
              >
                <div className={`h-[240px] relative overflow-hidden ${i === 0 ? 'bg-[#000000]' : 'bg-gradient-to-br from-[#000000] to-[#1a1a1a]'}`}>
                  {i === 0 && (
                    <>
                      <img
                        src={powderSplash}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover object-center select-none"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <span
                          className="font-serif font-bold text-white text-[clamp(3rem,7vw,5rem)] leading-none tracking-tight"
                          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.55)' }}
                        >
                          {study.stat}
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs tracking-widest uppercase text-[#4A4A47] mb-2">{study.client}</p>
                  <h3 className="font-serif text-lg text-[#000000] mb-4">{study.title}</h3>
                  <div className="mt-auto pt-4 border-t border-[var(--brand-divider)]">
                    <p className="text-2xl font-bold text-[#E50069] mb-1">{study.stat}</p>
                    <p className="text-sm text-[#4A4A47] mb-4">{study.statDesc}</p>
                    <Link to={study.link} className="inline-block text-[#000000] text-sm font-medium underline-offset-4 hover:underline">
                      See the work &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Proof Section */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <WordReveal
                text="Ground truth, evidenced."
                as="h2"
                stagger={0.1}
                highlight={["evidenced."]}
                className="mb-2 flex flex-wrap font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000]"
              />

              <p className="text-[#4A4A47]">
                Three results from the ground.
              </p>
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
                    className="group flex h-full flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2"
                    aria-label={`View ${study.title} case study`}
                  >
                    {/* Card hero */}
                    <div className="relative h-[280px] overflow-hidden bg-black">
                      <img
                        src={study.heroImage}
                        alt={`${study.client} — ${study.title}`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Readability overlays */}
                      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/5" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(229,0,105,0.24),transparent_45%)]" />

                      {/* Sector label */}
                      <span className="absolute left-5 top-5 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                        {study.sector}
                      </span>

                      {/* Client and market */}
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/65">
                          {study.client} · {study.market}
                        </p>

                        <h3 className="font-serif text-xl leading-tight md:text-2xl">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-[#4A4A47]">
                        {study.summary}
                      </p>

                      <div className="mt-auto border-t border-[var(--brand-divider)] pt-5">
                        {primaryResult && (
                          <div className="mb-5">
                            <p className="mb-1 font-serif text-3xl font-bold text-[#E50069]">
                              {primaryResult.number}
                            </p>

                            <p className="text-sm leading-relaxed text-[#4A4A47]">
                              {primaryResult.label}
                            </p>
                          </div>
                        )}

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors group-hover:text-[#E50069]">
                          See the work

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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

      {/* What we do */}
      <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="max-w-2xl mb-14">
            <WordReveal
              text="Six things we do well."
              as="h2"
              stagger={0.08}
              highlight={['well']}
              className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] text-[#000000] mb-4 flex flex-wrap"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4A4A47] leading-relaxed"
            >
              Six disciplines, one team. Wired to land in Zambian and Malawian markets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              { title: "Brand Strategy", desc: "The thinking that gives a brand somewhere to stand.", icon: Target, link: "/what-we-do/brand-strategy/", motionVariant: 'pulse' as IconMotionVariant },
              { title: "Creative & Content", desc: "Ideas, made — in the languages your audience actually speaks.", icon: PenTool, link: "/what-we-do/creative-and-content/", motionVariant: 'sway' as IconMotionVariant },
              { title: "Digital & Performance", desc: "Owned, earned, paid — measured against numbers that matter.", icon: BarChart2, link: "/what-we-do/digital-and-performance/", motionVariant: 'bob' as IconMotionVariant },
              { title: "Public Relations", desc: "Counsel for the moments that decide a brand's standing.", icon: MessageCircle, link: "/what-we-do/public-relations/", motionVariant: 'tilt' as IconMotionVariant },
              { title: "Activation & Experiential", desc: "The work that happens off the screen.", icon: Users, link: "/what-we-do/activation/", motionVariant: 'orbit' as IconMotionVariant },
              { title: "Advisory", desc: "Senior counsel, workshops, and personal-brand work for executives.", icon: Briefcase, link: "/what-we-do/advisory/", motionVariant: 'nudge' as IconMotionVariant }
            ]).map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link to={svc.link} key={svc.title} className="block group focus:outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-white border border-[#E5E2DA] p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-[#000000] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] group-focus-visible:ring-2 group-focus-visible:ring-[#E50069] flex flex-col"
                  >
                    {/* Soft pink halo that grows on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#E50069]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Icon badge with continuous idle motion + hover scale */}
                    <div className="relative inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-[#F2F2F2] group-hover:bg-[#E50069] transition-colors duration-300">
                      <AnimatedIcon variant={svc.motionVariant} delay={i * 0.15}>
                        <Icon
                          className="w-7 h-7 text-[#000000] transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.75}
                        />
                      </AnimatedIcon>
                    </div>

                    <h3 className="font-serif text-xl text-[#000000] mb-3 transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#4A4A47] leading-relaxed mb-6 flex-1">
                      {svc.desc}
                    </p>
                    <span className="text-sm text-[#000000] font-medium mt-auto inline-flex items-center gap-1 group-hover:text-[#E50069] transition-colors duration-300">
                      Learn more <span className="arrow-nudge">&rarr;</span>
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-2"
            >
              On the ground in Zambia and Malawi.
            </motion.h2>
            <p className="text-[#4A4A47]">Field coverage where it counts.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-3/5 bg-white border border-[var(--brand-divider)] p-4 flex items-center justify-center min-h-[400px] relative overflow-hidden rounded-sm">
              <svg width="450" height="350" viewBox="0 0 450 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto opacity-80">
                <path d="M120 150 L180 120 L280 130 L320 200 L250 280 L150 260 Z" fill="#000000" />
                <path d="M320 180 L340 160 L360 220 L330 300 L310 260 Z" fill="#E50069" />
                <circle cx="200" cy="220" r="4" fill="white" />
                <text x="210" y="225" fill="#ffffff" fontSize="12" className="font-sans drop-shadow-md">Lusaka</text>
                <circle cx="260" cy="160" r="4" fill="white" />
                <text x="270" y="165" fill="#ffffff" fontSize="12" className="font-sans drop-shadow-md">Ndola</text>
                <circle cx="330" cy="220" r="4" fill="#000000" />
                <text x="340" y="225" fill="#000000" fontSize="12" className="font-sans font-medium drop-shadow-sm">Lilongwe</text>
                <circle cx="345" cy="260" r="4" fill="#000000" />
                <text x="355" y="265" fill="#000000" fontSize="12" className="font-sans font-medium drop-shadow-sm">Blantyre</text>
              </svg>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E5E2DA] p-6 rounded"
              >
                <h3 className="font-bold text-[#000000] flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-[var(--brand-accent)]" /> 
                  Lusaka, Zambia
                </h3>
                <p className="text-sm text-[#4A4A47] leading-relaxed">Our founding office. Full-service delivery across all capabilities.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#E5E2DA] p-6 rounded"
              >
                <h3 className="font-bold text-[#000000] flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-[var(--brand-accent)]" /> 
                  Lilongwe, Malawi
                </h3>
                <p className="text-sm text-[#4A4A47] leading-relaxed">Full presence across Malawi with local team and field network.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="bg-[#000000] py-20 md:py-28 lg:py-32 text-[#ffffff]">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] mb-4"
            >
              The Full Circle Comms Group.
            </motion.h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">We are not a standalone studio. We are part of something bigger.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Bwanji Agency", badge: "Ground-Truth Marketing", desc: "For Zambia and Malawi" },
              { name: "TBWA Zimbabwe", badge: "Disruptive Creativity", desc: "Creative excellence across Zimbabwe and southern Africa" },
              { name: "Magna Carta", badge: "PR & Reputation", desc: "Africa's leading PR and reputation management firm" }
            ].map((panel, i) => (
              <motion.div 
                key={panel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 text-center flex flex-col items-center justify-center"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#E50069] text-[#000000] px-2 py-1 rounded-sm mb-4">
                  {panel.badge}
                </span>
                <h3 className="font-serif text-xl mb-3">{panel.name}</h3>
                <p className="text-sm text-neutral-400">{panel.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-neutral-300 max-w-2xl mx-auto text-sm leading-relaxed">
            Membership gives our clients access to talent, intellectual property, global frameworks, and cross-border coordination that no standalone agency in the region can match.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            Why not a global agency or a freelancer?
          </motion.h2>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-[var(--brand-divider)] w-[40%]"></th>
                  <th className="p-4 border-b border-[var(--brand-divider)] bg-[#000000] text-[#ffffff] font-semibold w-[20%] text-center rounded-t-sm">Bwanji Agency</th>
                  <th className="p-4 border-b border-[var(--brand-divider)] text-[#4A4A47] font-semibold w-[20%] text-center">Global Network Agency<br/><span className="font-normal text-xs">(Joburg/London)</span></th>
                  <th className="p-4 border-b border-[var(--brand-divider)] text-[#4A4A47] font-semibold w-[20%] text-center">Freelance / Independent<br/><span className="font-normal text-xs">Studio</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Senior strategic counsel", "full", "full remote", "half"],
                  ["Local-language fluency (Bemba, Nyanja, Chichewa, Tumbuka)", "full", "empty", "half"],
                  ["Field execution in ZM/MW", "full", "empty", "half"],
                  ["SADC cross-border experience", "full", "full", "empty"],
                  ["Procurement compliance (gov, INGO)", "full", "full", "empty"],
                  ["Pricing transparency for SMEs", "full", "empty", "full"],
                  ["Senior cover for crisis", "full", "full", "empty"],
                  ["Mobile money & m-commerce fluency", "full", "half", "half"],
                  ["Network craft (TBWA / Magna Carta)", "full", "full", "empty"],
                  ["Cost efficiency vs offshore", "full", "empty", "full"]
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[var(--neutral-100)] transition-colors border-b border-[var(--brand-divider)]">
                    <td className="p-4 text-[#000000] font-medium">{row[0]}</td>
                    <td className="p-4 text-center bg-[#000000]/5 text-[#000000]">
                      <div className="flex items-center justify-center gap-2">
                        {renderRatingIcon(row[1])}
                      </div>
                    </td>
                    <td className="p-4 text-center text-[#4A4A47]">
                      <div className="flex items-center justify-center gap-2">
                        {renderRatingIcon(row[2].split(" ")[0])} {row[2].includes("remote") && <span className="text-xs italic">remote</span>}
                      </div>
                    </td>
                    <td className="p-4 text-center text-[#4A4A47]">
                      <div className="flex items-center justify-center gap-2">
                        {renderRatingIcon(row[3])}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden flex flex-col gap-4">
            {[
              ["Senior strategic counsel", "full"],
              ["Local-language fluency", "full"],
              ["Field execution in ZM/MW", "full"],
              ["SADC cross-border experience", "full"],
              ["Procurement compliance", "full"],
              ["Pricing transparency", "full"],
              ["Senior cover for crisis", "full"],
              ["Mobile-money fluency", "full"],
              ["Network craft", "full"],
              ["Cost efficiency vs offshore", "full"]
            ].map((row, i) => (
              <div key={i} className="bg-white border border-[var(--brand-divider)] p-4 flex justify-between items-center rounded-sm shadow-sm">
                <span className="text-sm font-medium text-[#000000]">{row[0]}</span>
                <span className="text-[#000000]">{renderRatingIcon(row[1])}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section — sticky title, scattered cards reveal on scroll */}
      <section id="what-clients-say" className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32 overflow-hidden scroll-mt-24">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left sticky title column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <WordReveal
                text="What clients say."
                as="h2"
                stagger={0.08}
                highlight={['clients']}
                className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-[#000000] mb-6 flex flex-wrap"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#4A4A47] text-base leading-relaxed max-w-sm mb-8"
              >
                Three partners. Three different briefs. One common thread: work that holds up on the ground.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="hidden lg:flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#4A4A47]"
              >
                <span>Scroll</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-block text-[#E50069] text-base leading-none"
                >
                  ↓
                </motion.span>
              </motion.div>
            </div>

            {/* Right scattered cards column */}
            <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16 lg:gap-24">
              {testimonials.map((test, i) => {
                const isOdd = i % 2 === 1;
                const numeral = String(i + 1).padStart(2, '0');
                return (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 60, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: isOdd ? 1.2 : -1.4 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative bg-[#ffffff] border border-[#E5E2DA] p-7 md:p-10 max-w-xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_#E50069] motion-reduce:transition-none ${
                      isOdd ? 'lg:ml-auto lg:mr-2' : 'lg:ml-2'
                    }`}
                  >
                    {/* Giant outlined numeral — top-right corner */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-4 right-5 md:-top-6 md:right-7 font-serif font-black leading-none select-none pointer-events-none text-[5rem] md:text-[6rem]"
                      style={{ color: 'transparent', WebkitTextStroke: '1.5px #E50069' }}
                    >
                      {numeral}
                    </span>

                    {/* Big serif name (Kissies-style) */}
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="font-serif text-3xl md:text-4xl text-[#000000] leading-[1.05] mb-2 max-w-[80%]"
                    >
                      {test.name}
                    </motion.h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#4A4A47] mb-6">
                      {test.role} · {test.location}
                    </p>

                    {/* Brand mark as quote glyph — speech bubble for actual speech */}
                    <BwanjiMark
                      className="w-14 h-14 md:w-16 md:h-16 -ml-0.5 mb-3 select-none"
                      strokeWidth={5}
                    />
                    <p className="font-serif text-base md:text-lg text-[#000000] leading-relaxed italic mb-8">
                      {test.quote}
                    </p>

                    {/* Meta row — initials, stat, link */}
                    <div className="flex flex-wrap items-end justify-between gap-5 pt-6 border-t border-[#E5E2DA]">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                          <img
                            src={magentaStamp}
                            alt=""
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-contain select-none"
                            loading="lazy"
                            decoding="async"
                          />
                          <span
                            className="relative z-10 font-bold text-[11px] text-white tracking-wider"
                            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
                          >
                            {test.initials}
                          </span>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#E50069] leading-none">{test.statNumber}</p>
                          <p className="text-[10px] text-[#4A4A47] uppercase tracking-widest mt-1">{test.statLabel}</p>
                        </div>
                      </div>
                      {test.link && (
                        <Link
                          to={test.link}
                          data-testid={`testimonial-link-${i}`}
                          className="text-sm text-[#000000] font-medium inline-flex items-center gap-1 underline-offset-4 hover:underline group/link"
                        >
                          See the work
                          <span
                            aria-hidden="true"
                            className="inline-block transition-transform duration-300 ease-out group-hover/link:translate-x-1 motion-reduce:transition-none"
                          >
                            &rarr;
                          </span>
                        </Link>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ground Report Section */}
      <section className="bg-[#ffffff] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-2"
            >
              The Ground Report.
            </motion.h2>
            <p className="text-[#4A4A47]">Bimonthly briefings on the marketing landscape in Zambia and Malawi. No fluff, no global templates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { id: "Issue 12 — April 2026", title: "Mobile Money at the Category Threshold", desc: "What happens to brand loyalty when the payment rails shift. Data from 6 months of m-money behaviour in Lusaka and Blantyre." },
              { id: "Issue 11 — February 2026", title: "The Chichewa Advantage", desc: "Why the most effective campaigns in Malawi in 2025 weren't in English. A language-fluency analysis." },
              { id: "Issue 10 — December 2025", title: "NGO Comms in an Accountability Era", desc: "Donor expectations have changed. The communications implications for INGO programmes in Southern Africa." }
            ].map((issue, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E2DA] p-8 hover:border-[var(--brand-primary)] transition-colors flex flex-col group"
              >
                <p className="text-xs uppercase tracking-widest text-[#4A4A47] mb-3">{issue.id}</p>
                <h3 className="font-serif text-xl text-[#000000] mb-3 group-hover:text-[var(--brand-accent)] transition-colors">{issue.title}</h3>
                <p className="text-sm text-[#4A4A47] leading-relaxed mb-6 flex-1">{issue.desc}</p>
                <Link to="/insights/" className="text-[#000000] text-sm font-medium underline-offset-4 hover:underline mt-auto inline-block">
                  Read issue &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white border border-[#E5E2DA] p-8 text-center">
            <h4 className="font-serif text-xl text-[#000000] mb-6">Get the Ground Report in your inbox.</h4>
            <form className="flex gap-3 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="border border-[#E5E2DA] px-4 py-3 text-sm flex-1 bg-[var(--brand-paper)] focus:outline-none focus:border-[var(--brand-primary)]"
                required
              />
              <button 
                type="submit"
                className="bg-[#000000] text-[#ffffff] px-8 py-3 text-sm font-medium hover:bg-[#1a1a1a] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-[#4A4A47] mt-4">No spam. No pitch. Unsubscribe any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#E50069] py-20 text-center relative overflow-hidden">
        <Parallax offset={-60} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }} />
        </Parallax>
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12 relative z-10">
          <WordReveal
            text="Have a brief? Start a project."
            as="h2"
            stagger={0.07}
            highlight={['Start', 'a', 'project']}
            highlightColor="#ffffff"
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-4 flex flex-wrap justify-center"
          />
          <p className="text-[#000000]/80 max-w-2xl mx-auto mb-10 text-lg">
            We review every brief personally. You'll hear from a senior member of the team within 48 hours.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row justify-center">
            <Link 
              to="/start-a-project/"
              className="group btn-glow-pink bg-[#000000] text-[#ffffff] px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
            >
              Start a project <span className="arrow-nudge">&rarr;</span>
            </Link>
            <a 
              href="https://wa.me/260763628686"
              target="_blank"
              rel="noreferrer"
              className="btn-lift border-2 border-[#000000] text-[#000000] px-8 py-4 text-base font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function renderRatingIcon(rating: string) {
  if (rating === "full") {
    return (
      <svg width="16" height="16" className="text-[#000000]"><circle cx="8" cy="8" r="7" fill="currentColor" /></svg>
    );
  }
  if (rating === "half") {
    return (
      <svg width="16" height="16" className="text-[#4A4A47]"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M8 1 A7 7 0 0 1 8 15 Z" fill="currentColor" /></svg>
    );
  }
  return (
    <svg width="16" height="16" className="text-[#C9C4B6]"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
  );
}
