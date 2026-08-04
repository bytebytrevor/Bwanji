import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Download,
  Filter,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";

import {
  formatInsightDate,
  insights,
  type InsightCategory,
} from "@/data/insights";

const fieldNotes = [
  {
    location: "Lusaka",
    observation:
      "Customers did not describe mobile banking as digital transformation. They described it as avoiding a queue.",
  },
  {
    location: "Blantyre",
    observation:
      "Price was important, but traders spoke more often about stock reliability and the cost of disappointing a regular customer.",
  },
  {
    location: "Kitwe",
    observation:
      "Language changed more than comprehension. It changed whether the speaker sounded like an outsider.",
  },
];

export default function InsightsHubPage() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | InsightCategory
  >("All");

  const categories = useMemo(
    () => [
      "All" as const,
      ...Array.from(new Set(insights.map((insight) => insight.category))),
    ],
    [],
  );

  const featuredInsight =
    insights.find((insight) => insight.featured) ?? insights[0];

  const filteredInsights = useMemo(() => {
    return insights.filter((insight) => {
      if (insight.slug === featuredInsight?.slug) {
        return false;
      }

      if (activeCategory === "All") {
        return true;
      }

      return insight.category === activeCategory;
    });
  }, [activeCategory, featuredInsight]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-5 pb-20 pt-32 text-white md:px-8 lg:px-12 lg:pb-28">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 58% 75% at 100% 10%, rgba(229,0,105,0.25) 0%, transparent 58%)",
              "radial-gradient(ellipse 45% 65% at 0% 100%, #29151c 0%, transparent 64%)",
              "linear-gradient(135deg, #050203 0%, #000000 56%, #16090e 100%)",
            ].join(", "),
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E50069]"
          >
            <BookOpen className="h-4 w-4" />
            Insights from the ground
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 max-w-[980px] font-serif text-[clamp(2.8rem,7vw,6.2rem)] font-bold leading-[1.01] tracking-[-0.03em]"
          >
            Ideas shaped by the markets we work in.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-white/65"
          >
            Essays, observations, research, and practical thinking about brands,
            people, culture, reputation, and growth across Zambia and Malawi.
          </motion.p>
        </div>
      </section>

      {/* Featured article */}
      {featuredInsight && (
        <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-9 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Featured perspective
                </p>

                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                  Start here
                </h2>
              </div>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/insights/${featuredInsight.slug}/`}
                className="group grid overflow-hidden border border-[#E5E2DA] bg-black lg:grid-cols-12"
              >
                <div className="relative min-h-[430px] overflow-hidden lg:col-span-7 lg:min-h-[620px]">
                  <img
                    src={featuredInsight.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-black/65" />

                  <div className="absolute left-6 top-6 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                    {featuredInsight.category}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 text-white md:p-10 lg:col-span-5 lg:p-12">
                  <div>
                    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      <span>{formatInsightDate(featuredInsight.publishedAt)}</span>
                      <span>{featuredInsight.readTime}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#E50069]" />
                        {featuredInsight.market}
                      </span>
                    </div>

                    <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.7rem)] leading-[1.05]">
                      {featuredInsight.title}
                    </h2>

                    <p className="max-w-xl leading-relaxed text-white/65">
                      {featuredInsight.excerpt}
                    </p>
                  </div>

                  <div className="mt-12 border-t border-white/15 pt-7">
                    <p className="mb-6 text-sm text-white/50">
                      By{" "}
                      <span className="font-semibold text-white">
                        {featuredInsight.author}
                      </span>
                      <br />
                      {featuredInsight.authorRole}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-white">
                      Read the insight
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* Category filters */}
      <section className="sticky top-0 z-30 border-b border-[#E5E2DA] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center gap-4 overflow-x-auto px-5 py-4 md:px-8 lg:px-12">
          <div className="flex shrink-0 items-center gap-2 pr-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
            <Filter className="h-4 w-4 text-[#E50069]" />
            Topics
          </div>

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-[#F2F2F2] text-black hover:bg-[#E50069]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* Article grid */}
      <main className="px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#E5E2DA] pb-7 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Latest thinking
              </p>

              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                {activeCategory === "All"
                  ? "All insights"
                  : activeCategory}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
              Not universal rules. Useful perspectives grounded in the work,
              conversations, and markets around us.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredInsights.map((insight, index) => (
                <motion.article
                  key={insight.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={`/insights/${insight.slug}/`}
                    className="group flex h-full flex-col"
                  >
                    <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-[#F2F2F2]">
                      <img
                        src={insight.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/15" />

                      <div className="absolute left-4 top-4 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                        {insight.category}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4A4A47]">
                        <span>{formatInsightDate(insight.publishedAt)}</span>
                        <span>·</span>
                        <span>{insight.readTime}</span>
                        <span>·</span>
                        <span>{insight.market}</span>
                      </div>

                      <h3 className="mb-4 font-serif text-2xl leading-tight text-black transition-colors group-hover:text-[#E50069]">
                        {insight.title}
                      </h3>

                      <p className="mb-7 text-sm leading-relaxed text-[#4A4A47]">
                        {insight.excerpt}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-5 border-t border-[#E5E2DA] pt-5">
                        <div>
                          <p className="text-sm font-semibold text-black">
                            {insight.author}
                          </p>
                          <p className="mt-1 text-xs text-[#4A4A47]">
                            {insight.authorRole}
                          </p>
                        </div>

                        <ArrowRight className="h-5 w-5 shrink-0 text-black transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredInsights.length === 0 && (
            <div className="border border-[#E5E2DA] bg-[#F2F2F2] px-6 py-20 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Nothing published yet
              </p>

              <h3 className="mb-5 font-serif text-3xl text-black">
                More thinking is on the way.
              </h3>

              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                View all insights
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Field notes */}
      <section className="bg-black px-5 py-20 text-white md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                From the ground
              </p>

              <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05]">
                Small observations that change the brief.
              </h2>

              <p className="max-w-sm leading-relaxed text-white/55">
                Not every useful insight needs a twenty-page report. Sometimes
                one sentence from the market is enough to expose the wrong
                assumption.
              </p>
            </div>

            <div className="lg:col-span-8">
              {fieldNotes.map((note, index) => (
                <motion.article
                  key={note.location}
                  initial={{ opacity: 0, x: 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group grid grid-cols-[58px_1fr] gap-5 border-t border-white/15 py-8 first:border-t-0 md:grid-cols-[90px_1fr] md:gap-8 md:py-10"
                >
                  <span
                    className="font-serif text-4xl font-black"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px #E50069",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E50069]">
                      <MapPin className="h-4 w-4" />
                      {note.location}
                    </div>

                    <blockquote className="max-w-3xl font-serif text-xl leading-relaxed text-white transition-colors group-hover:text-[#E50069] md:text-2xl">
                      “{note.observation}”
                    </blockquote>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report feature */}
      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid overflow-hidden border border-[#E5E2DA] bg-white lg:grid-cols-12"
          >
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#E50069] p-10 lg:col-span-5 lg:min-h-[560px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="relative z-10 w-full max-w-[310px] rotate-[-3deg] border-[10px] border-black bg-white px-7 py-10 shadow-2xl">
                <p className="mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Bwanji Field Report · 2026
                </p>

                <h3 className="mb-5 font-serif text-4xl leading-[1.02] text-black">
                  The Zambia & Malawi Attention Report
                </h3>

                <p className="text-sm leading-relaxed text-[#4A4A47]">
                  How language, mobile behaviour, trust, and media access shape
                  the work people notice.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-7 lg:p-16">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Featured report
              </p>

              <h2 className="mb-6 max-w-2xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-black">
                Attention behaves differently when access and context change.
              </h2>

              <p className="mb-8 max-w-2xl leading-relaxed text-[#4A4A47]">
                A practical report for marketers working across Zambia and
                Malawi, covering language, platform use, mobile behaviour,
                trust signals, field realities, and what these patterns mean
                for campaign planning.
              </p>

              <div className="mb-9 grid grid-cols-2 gap-5 border-y border-[#E5E2DA] py-6 sm:grid-cols-3">
                {[
                  ["02", "Markets"],
                  ["420", "Participants"],
                  ["28", "Interviews"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <p className="font-serif text-3xl font-bold text-[#E50069]">
                      {number}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#4A4A47]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/insights/reports/attention-report/"
                className="group inline-flex w-fit items-center gap-3 bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                <Download className="h-5 w-5" />
                Explore the report
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial principle */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <Quote className="mx-auto mb-7 h-8 w-8 text-[#E50069]" />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.15] text-black"
          >
            We do not publish to sound certain. We publish to make the
            questions sharper.
          </motion.p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-[#E50069] px-5 py-20 md:px-8 lg:px-12 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1fr_440px]">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
              <Mail className="h-5 w-5" />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
              Bwanji Notes
            </p>

            <h2 className="mb-5 max-w-2xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
              Useful thinking, occasionally delivered.
            </h2>

            <p className="max-w-xl leading-relaxed text-black/70">
              New essays, field observations, research, and practical market
              intelligence. No daily motivational quotes.
            </p>
          </div>

          <form
            className="border border-black/20 bg-white p-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <label
              htmlFor="insights-email"
              className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-black"
            >
              Email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="insights-email"
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 border border-[#E5E2DA] bg-[#F2F2F2] px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-[#4A4A47]/55 focus:border-black"
              />

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#4A4A47]">
              By subscribing, you agree to receive Bwanji insights by email.
              Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}