import { useEffect, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  Clock3,
  ExternalLink,
  MapPin,
  Quote,
  UserRound,
} from "lucide-react";

import { formatInsightDate, getInsightBySlug, insights } from "@/data/insights";

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const insight = getInsightBySlug(slug);

  useEffect(() => {
    if (!insight) {
      return;
    }

    document.title = `${insight.title} | Bwanji Insights`;

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [insight]);

  const relatedInsights = useMemo(() => {
    if (!insight) {
      return [];
    }

    const sameCategory = insights.filter(
      (item) =>
        item.slug !== insight.slug && item.category === insight.category,
    );

    const otherCategories = insights.filter(
      (item) =>
        item.slug !== insight.slug && item.category !== insight.category,
    );

    return [...sameCategory, ...otherCategories].slice(0, 3);
  }, [insight]);

  if (!insight) {
    return <Navigate to="/insights/" replace />;
  }

  const titleWords = insight.title.split(" ");

  const introduction =
    insight.introduction && insight.introduction.length > 0
      ? insight.introduction
      : [insight.excerpt];

  const hasArticleContent = insight.sections && insight.sections.length > 0;

  return (
    <article className="min-h-screen bg-white" data-insight={insight.slug}>
      {/* Hero */}
      <header className="relative flex min-h-[720px] items-end overflow-hidden bg-black pb-16 pt-32 text-white md:pb-20">
        <img
          src={insight.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(229,0,105,0.25),transparent_48%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <Link
            to="/insights/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All insights
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
              {insight.category}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-white/55">
              <MapPin className="h-3.5 w-3.5 text-[#E50069]" />
              {insight.market}
            </span>
          </div>

          <motion.h1
            initial="hidden"
            animate="visible"
            aria-label={insight.title}
            className="mb-8 flex max-w-[1050px] flex-wrap gap-x-[0.24em] gap-y-1 font-serif text-[clamp(2.6rem,6.5vw,5.8rem)] font-bold leading-[1.01] tracking-[-0.03em]"
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
            className="max-w-3xl text-[clamp(1.05rem,1.7vw,1.3rem)] leading-relaxed text-white/75"
          >
            {insight.excerpt}
          </motion.p>
        </div>
      </header>

      {/* Article information */}
      <section className="border-b border-[#E5E2DA] bg-[#E50069]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:grid-cols-4 md:px-8 lg:px-12">
          {[
            {
              label: "Author",
              value: insight.author,
              icon: UserRound,
            },
            {
              label: "Published",
              value: formatInsightDate(insight.publishedAt),
              icon: CalendarDays,
            },
            {
              label: "Reading time",
              value: insight.readTime,
              icon: Clock3,
            },
            {
              label: "Market",
              value: insight.market,
              icon: MapPin,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-black/15 py-5 even:border-l even:pl-5 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
              >
                <div className="mb-1 flex items-center gap-2 text-black/50">
                  <Icon className="h-3.5 w-3.5" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                    {item.label}
                  </p>
                </div>

                <p className="text-sm font-semibold text-black">{item.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Article */}
      <section className="px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Sidebar */}
          <aside className="self-start lg:sticky lg:top-28 lg:col-span-3">
            <div className="border border-[#E5E2DA] bg-[#F2F2F2] p-6">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Written by
              </p>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black font-serif text-lg font-bold text-white">
                {insight.author
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h2 className="font-serif text-xl text-black">
                {insight.author}
              </h2>

              <p className="mt-1 text-sm text-[#4A4A47]">
                {insight.authorRole}
              </p>

              <div className="mt-6 border-t border-[#E5E2DA] pt-5">
                <p className="text-xs leading-relaxed text-[#4A4A47]">
                  Bwanji Insights presents perspectives from our team,
                  collaborators, research, and work across Zambia and Malawi.
                </p>
              </div>
            </div>

            {hasArticleContent && (
              <nav
                aria-label="Article contents"
                className="mt-5 border border-[#E5E2DA] bg-white p-6"
              >
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  In this article
                </p>

                <ol className="space-y-3">
                  {insight.sections?.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex gap-3 text-sm leading-relaxed text-[#4A4A47] transition-colors hover:text-black"
                      >
                        <span className="font-semibold text-[#E50069]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </aside>

          {/* Article body */}
          <main className="min-w-0 lg:col-span-8">
            {/* Introduction */}
            <motion.div
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
              className="mb-16 border-b border-[#E5E2DA] pb-14 md:mb-20 md:pb-20"
            >
              {introduction.map((paragraph, index) => (
                <p
                  key={`${insight.slug}-intro-${index}`}
                  className={`max-w-4xl leading-[1.8] text-black ${
                    index === 0
                      ? "font-serif text-[clamp(1.45rem,3vw,2.35rem)]"
                      : "mt-6 text-base text-[#4A4A47] md:text-lg"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Article sections */}
            {hasArticleContent ? (
              <div className="space-y-16 md:space-y-24">
                {insight.sections?.map((section, sectionIndex) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
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
                      amount: 0.12,
                    }}
                    className="scroll-mt-32"
                  >
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mb-8 max-w-3xl font-serif text-[clamp(1.8rem,3.7vw,2.9rem)] leading-[1.08] text-black">
                      {section.heading}
                    </h2>

                    <div className="max-w-3xl space-y-6 text-base leading-[1.85] text-[#4A4A47] md:text-lg">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={`${section.id}-${paragraphIndex}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.image && (
                      <figure className="mt-10">
                        <div className="aspect-[16/9] overflow-hidden bg-[#F2F2F2]">
                          <img
                            src={section.image}
                            alt={section.imageAlt ?? ""}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {section.imageCaption && (
                          <figcaption className="mt-3 text-xs leading-relaxed text-[#4A4A47]">
                            {section.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {sectionIndex === 1 && insight.pullQuote && (
                      <blockquote className="relative mt-14 overflow-hidden bg-black p-8 text-white md:p-12">
                        <Quote className="mb-6 h-8 w-8 text-[#E50069]" />

                        <p className="relative z-10 max-w-3xl font-serif text-[clamp(1.5rem,3.3vw,2.5rem)] leading-[1.25]">
                          {insight.pullQuote}
                        </p>

                        <span
                          aria-hidden="true"
                          className="absolute -bottom-12 -right-3 select-none font-serif text-[13rem] leading-none text-[#E50069]/15"
                        >
                          “
                        </span>
                      </blockquote>
                    )}
                  </motion.section>
                ))}
              </div>
            ) : (
              <section className="border border-[#E5E2DA] bg-[#F2F2F2] p-8 md:p-10">
                <BookOpen className="mb-6 h-7 w-7 text-[#E50069]" />

                <h2 className="mb-4 font-serif text-2xl text-black">
                  Full article coming soon
                </h2>

                <p className="max-w-2xl leading-relaxed text-[#4A4A47]">
                  This insight currently contains its publication summary. Add
                  its introduction and article sections in{" "}
                  <code className="bg-white px-1.5 py-1 text-sm text-black">
                    insights.ts
                  </code>{" "}
                  to publish the complete article.
                </p>
              </section>
            )}

            {/* Takeaways */}
            {insight.keyTakeaways && insight.keyTakeaways.length > 0 && (
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
                className="mt-20 bg-[#E50069] p-8 text-black md:mt-28 md:p-12"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                  Practical summary
                </p>

                <h2 className="mb-8 font-serif text-[clamp(1.8rem,3.5vw,2.7rem)]">
                  What to take into the next brief
                </h2>

                <ul className="grid grid-cols-1 gap-4">
                  {insight.keyTakeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="flex gap-4 border-t border-black/20 pt-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>

                      <p className="font-medium leading-relaxed">{takeaway}</p>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Sources */}
            {insight.sources && insight.sources.length > 0 && (
              <section className="mt-14 border-t border-[#E5E2DA] pt-8">
                <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Sources and basis
                </h2>

                <ol className="space-y-3">
                  {insight.sources.map((source, index) => (
                    <li
                      key={`${source.label}-${index}`}
                      className="flex gap-3 text-sm leading-relaxed text-[#4A4A47]"
                    >
                      <span className="font-semibold text-black">
                        {index + 1}.
                      </span>

                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-start gap-1.5 underline underline-offset-4 transition-colors hover:text-black"
                        >
                          {source.label}
                          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        </a>
                      ) : (
                        <span>{source.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Author footer */}
            <section className="mt-16 border-y border-[#E5E2DA] py-8 md:mt-20">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black font-serif font-bold text-white">
                    {insight.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#4A4A47]">
                      Written by
                    </p>
                    <p className="font-semibold text-black">{insight.author}</p>
                    <p className="text-sm text-[#4A4A47]">
                      {insight.authorRole}
                    </p>
                  </div>
                </div>

                <Link
                  to="/team/"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
                >
                  Meet the team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          </main>
        </div>
      </section>

      {/* Related insights */}
      {relatedInsights.length > 0 && (
        <section className="border-t border-[#E5E2DA] bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Keep reading
                </p>

                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                  Related insights
                </h2>
              </div>

              <Link
                to="/insights/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
              >
                View all insights
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedInsights.map((relatedInsight, index) => (
                <motion.article
                  key={relatedInsight.slug}
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
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    to={`/insights/${relatedInsight.slug}/`}
                    className="group flex h-full flex-col"
                  >
                    <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-white">
                      <img
                        src={relatedInsight.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

                      <span className="absolute left-4 top-4 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                        {relatedInsight.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4A4A47]">
                        <span>
                          {formatInsightDate(relatedInsight.publishedAt)}
                        </span>
                        <span>·</span>
                        <span>{relatedInsight.readTime}</span>
                      </div>

                      <h3 className="mb-4 font-serif text-2xl leading-tight text-black transition-colors group-hover:text-[#E50069]">
                        {relatedInsight.title}
                      </h3>

                      <p className="mb-6 text-sm leading-relaxed text-[#4A4A47]">
                        {relatedInsight.excerpt}
                      </p>

                      <span className="mt-auto inline-flex items-center gap-2 border-t border-[#E5E2DA] pt-5 text-sm font-semibold text-black">
                        Read insight
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E50069] px-5 py-20 text-center md:px-8 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
            Put the thinking to work
          </p>

          <h2 className="mx-auto mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
            Have a market question worth investigating?
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-black/70">
            Bring us the assumption, challenge, or decision. We will help get
            closer to what is actually happening.
          </p>

          <Link
            to="/start-a-project/"
            className="group btn-glow-pink inline-flex items-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
          >
            Start a conversation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </article>
  );
}
