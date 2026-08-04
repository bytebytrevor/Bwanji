import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/data/caseStudies";

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <Navigate to="/work/" replace />;
  }

  const titleWords = study.title.split(" ");

  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 2);

  const summaryItems = [
    {
      label: "Client",
      value: study.client,
    },
    {
      label: "Duration",
      value: study.duration,
    },
    {
      label: "Markets",
      value: study.markets,
    },
    {
      label: "Languages",
      value: study.languages.join(", "),
    },
  ];

  return (
    <div
      className="flex w-full flex-col bg-[var(--brand-paper)]"
      data-case-study={study.slug}
    >
      {/* Hero */}
      <section className="relative flex min-h-[680px] w-full items-end overflow-hidden bg-black pb-16 pt-32 text-white md:pb-20">
        <img
          src={study.heroImage}
          alt={`${study.client} — ${study.title}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(229,0,105,0.22),transparent_48%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <Link
            to="/work/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All case studies
          </Link>

          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#E50069] md:text-sm">
            {study.client} · {study.sector} · {study.year} · {study.market}
          </span>

          <motion.h1
            className="mb-7 flex max-w-[920px] flex-wrap gap-x-[0.25em] gap-y-1 font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.025em]"
            aria-label={study.title}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                aria-hidden="true"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.055,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.45,
            }}
            className="max-w-2xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-relaxed text-white/75"
          >
            {study.summary}
          </motion.p>
        </div>
      </section>

      {/* Project summary */}
      <section className="border-b border-[#E5E2DA] bg-[#E50069]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:grid-cols-4 md:px-8 lg:px-12">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="border-black/15 px-0 py-5 even:border-l even:pl-5 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
                {item.label}
              </p>

              <p className="text-sm font-semibold text-black">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-14 px-5 md:px-8 lg:flex-row lg:gap-20 lg:px-12">
          {/* Sidebar */}
          <aside className="order-first shrink-0 self-start lg:sticky lg:top-28 lg:w-[300px]">
            <div className="border border-[#E5E2DA] bg-[#F2F2F2] p-6">
              <h2 className="border-b border-[#E5E2DA] pb-4 font-serif text-xl text-black">
                At a glance
              </h2>

              <div className="flex flex-col gap-6 pt-6">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
                    Capabilities
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="border border-black/10 bg-white px-2.5 py-1.5 text-[11px] font-medium text-black"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
                    Sector
                  </p>

                  <p className="text-sm font-medium text-black">
                    {study.sector}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
                    Audience
                  </p>

                  <p className="text-sm font-medium leading-relaxed text-black">
                    {study.audience}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
                    Primary objective
                  </p>

                  <p className="text-sm font-medium leading-relaxed text-black">
                    {study.objective}
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/start-a-project/"
              className="group mt-5 flex items-center justify-between bg-black px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
            >
              Start a similar project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>

          {/* Case-study story */}
          <main className="flex min-w-0 flex-1 flex-col gap-16 lg:gap-24">
            {/* Challenge */}
            <motion.section
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                01 · The challenge
              </p>

              <h2 className="mb-7 max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-black">
                {study.challengeTitle}
              </h2>

              <div className="max-w-3xl space-y-5 text-base leading-[1.85] text-[#4A4A47] md:text-lg">
                {study.challenge.map((paragraph, index) => (
                  <p key={`${study.slug}-challenge-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Insight */}
            <motion.section
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative overflow-hidden bg-black p-8 text-white md:p-12"
            >
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-12 select-none font-serif text-[11rem] leading-none text-[#E50069]/20"
              >
                “
              </span>

              <p className="relative z-10 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                02 · The insight
              </p>

              <h2 className="relative z-10 mb-6 max-w-3xl font-serif text-[clamp(1.7rem,3.2vw,2.5rem)] leading-tight text-white">
                {study.insightTitle}
              </h2>

              <blockquote className="relative z-10 max-w-3xl font-serif text-xl italic leading-relaxed md:text-3xl">
                {study.insightQuote}
              </blockquote>

              <p className="relative z-10 mt-8 max-w-3xl leading-relaxed text-white/65">
                {study.insightBody}
              </p>
            </motion.section>

            {/* Work */}
            <section>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                03 · The work
              </p>

              <h2 className="mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-black">
                {study.workTitle}
              </h2>

              <p className="mb-10 max-w-3xl text-base leading-relaxed text-[#4A4A47] md:text-lg">
                {study.workIntro}
              </p>

              <div
                className={`grid grid-cols-1 gap-6 ${
                  study.outputs.length > 1 ? "sm:grid-cols-2" : ""
                }`}
              >
                {study.outputs.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={`${item.label}-${item.title}`}
                      initial={{
                        opacity: 0,
                        y: 24,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="group overflow-hidden border border-[#E5E2DA] bg-white card-lift"
                    >
                      <div className="relative h-[260px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${study.client} ${item.label.toLowerCase()} output`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                        <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#E50069] text-black">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E50069]">
                          {item.label}
                        </p>

                        <h3 className="font-serif text-xl leading-snug text-black">
                          {item.title}
                        </h3>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            {/* Results */}
            <section>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                04 · The result
              </p>

              <h2 className="mb-10 max-w-3xl font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight text-black">
                {study.resultsTitle}
              </h2>

              <div
                className={`grid grid-cols-1 gap-5 ${
                  study.results.length === 2
                    ? "md:grid-cols-2"
                    : study.results.length >= 3
                      ? "md:grid-cols-3"
                      : ""
                }`}
              >
                {study.results.map((result, index) => {
                  const isAccent = index % 3 === 1;

                  return (
                    <motion.article
                      key={`${result.number}-${result.label}`}
                      initial={{
                        opacity: 0,
                        y: 24,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.09,
                      }}
                      className={`relative min-h-[290px] overflow-hidden p-7 ${
                        isAccent
                          ? "bg-[#E50069] text-black"
                          : "bg-black text-white"
                      }`}
                    >
                      <span className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-bold leading-none">
                        {result.number}
                      </span>

                      <p
                        className={`mt-5 text-base font-semibold leading-snug ${
                          isAccent ? "text-black" : "text-white"
                        }`}
                      >
                        {result.label}
                      </p>

                      <p
                        className={`mt-6 border-t pt-5 text-xs leading-relaxed ${
                          isAccent
                            ? "border-black/20 text-black/60"
                            : "border-white/15 text-white/45"
                        }`}
                      >
                        {result.note}
                      </p>

                      <span
                        aria-hidden="true"
                        className="absolute -bottom-7 right-3 font-serif text-[7rem] font-black leading-none"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: isAccent
                            ? "1.5px rgba(0,0,0,0.18)"
                            : "1.5px rgba(229,0,105,0.30)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            {/* Testimonial */}
            {study.testimonial && (
              <motion.figure
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="border border-[#E5E2DA] bg-[#F2F2F2] p-8 md:p-12"
              >
                <div className="-mt-3 mb-2 select-none font-serif text-7xl leading-none text-[#E50069] md:text-9xl">
                  “
                </div>

                <blockquote className="mb-9 max-w-3xl font-serif text-xl italic leading-relaxed text-black md:text-2xl">
                  {study.testimonial.quote}
                </blockquote>

                <figcaption className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {study.testimonial.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-black">
                      {study.testimonial.name}
                    </p>

                    <p className="text-sm text-[#4A4A47]">
                      {study.testimonial.role}
                    </p>

                    <p className="text-xs text-[#4A4A47]">
                      {study.testimonial.location}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            )}

            {/* Team */}
            {study.team.length > 0 && (
              <section className="border-t border-[var(--brand-divider)] pt-10">
                <p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Project credits
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {study.team.map((member) => (
                    <div key={`${member.name}-${member.role}`}>
                      <p className="font-medium text-black">
                        {member.name}
                      </p>

                      <p className="mt-1 text-sm text-[#4A4A47]">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </section>

      {/* Related studies */}
      {relatedStudies.length > 0 && (
        <section className="border-t border-[var(--brand-divider)] bg-[#F2F2F2] py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Keep exploring
                </p>

                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                  More work
                </h2>
              </div>

              <Link
                to="/work/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
              >
                View all case studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className={`grid grid-cols-1 gap-8 ${
                relatedStudies.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {relatedStudies.map((relatedStudy, index) => (
                <motion.div
                  key={relatedStudy.slug}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    to={`/work/${relatedStudy.slug}/`}
                    className="group block h-full overflow-hidden border border-[#E5E2DA] bg-white card-lift"
                  >
                    <div className="relative h-[320px] overflow-hidden">
                      <img
                        src={relatedStudy.heroImage}
                        alt={`${relatedStudy.client} — ${relatedStudy.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute left-6 top-6 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                        {relatedStudy.sector}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/60">
                          {relatedStudy.client}
                        </p>

                        <h3 className="max-w-xl font-serif text-2xl leading-tight md:text-3xl">
                          {relatedStudy.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end md:p-8">
                      <div>
                        {relatedStudy.results[0] && (
                          <>
                            <p className="mb-1 text-3xl font-bold text-[#E50069]">
                              {relatedStudy.results[0].number}
                            </p>

                            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
                              {relatedStudy.results[0].label}
                            </p>
                          </>
                        )}
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-black">
                        Read case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E50069] py-20 text-center lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center px-5 md:px-8 lg:px-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
            Your next case study
          </p>

          <h2 className="mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
            Have a market problem worth solving?
          </h2>

          <p className="mb-9 max-w-2xl text-lg leading-relaxed text-black/70">
            Bring us the brief. We will help find the insight, build the work,
            and measure what changed.
          </p>

          <Link
            to="/start-a-project/"
            className="group btn-glow-pink inline-flex items-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
          >
            Start a project
            <ArrowRight className="h-5 w-5 arrow-nudge" />
          </Link>
        </div>
      </section>
    </div>
  );
}