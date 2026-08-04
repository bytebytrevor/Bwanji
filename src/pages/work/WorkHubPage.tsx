// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const caseStudies = [
//   { client: "Old Mutual Zambia", title: "Insurance in the Language of the Market", stat: "34%", statDesc: "increase in quote completions after Bemba-language campaign.", link: "/work/insurance-in-the-language-of-the-market/" },
//   { client: "PSI Malawi", title: "Behaviour Change at Last Mile", stat: "210,000", statDesc: "households reached in Chichewa and Tumbuka across 12 districts.", link: "/work/behaviour-change-at-last-mile/" },
//   { client: "Standard Bank Malawi", title: "Branch Zero — Digital Banking Beyond the City", stat: "47%", statDesc: "increase in mobile money activations in rural Southern Region.", link: "/work/branch-zero/" }
// ];

// export default function WorkHubPage() {
//   return (
//     <div className="bg-[#ffffff] min-h-[calc(100vh-400px)] py-32 px-5">
//       <div className="mx-auto max-w-[1320px] md:px-8 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#000000] mb-4">Our Work</h1>
//           <p className="text-lg text-[#4A4A47] mb-12">Case study grid coming soon.</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {caseStudies.map((study, i) => (
//             <motion.div 
//               key={study.client}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white border border-[#E5E2DA] overflow-hidden card-lift group flex flex-col"
//             >
//               <div className="h-[240px] bg-gradient-to-br from-[#000000] to-[#1a1a1a] relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
//               </div>
//               <div className="p-6 flex-1 flex flex-col">
//                 <p className="text-xs tracking-widest uppercase text-[#4A4A47] mb-2">{study.client}</p>
//                 <h3 className="font-serif text-lg text-[#000000] mb-4">{study.title}</h3>
//                 <div className="mt-auto pt-4 border-t border-[var(--brand-divider)]">
//                   <p className="text-2xl font-bold text-[#E50069] mb-1">{study.stat}</p>
//                   <p className="text-sm text-[#4A4A47] mb-4">{study.statDesc}</p>
//                   <Link to={study.link} className="inline-block text-[#000000] text-sm font-medium underline-offset-4 hover:underline">
//                     See the work &rarr;
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Filter,
  MapPin,
} from "lucide-react";

import { caseStudies } from "@/data/caseStudies";

export default function WorkHubPage() {
  const [activeSector, setActiveSector] = useState("All");

  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.map((study) => study.sector)))],
    [],
  );

  const filteredStudies = useMemo(() => {
    if (activeSector === "All") {
      return caseStudies;
    }

    return caseStudies.filter((study) => study.sector === activeSector);
  }, [activeSector]);

  const featuredStudy = filteredStudies[0];
  const remainingStudies = filteredStudies.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-5 pb-20 pt-32 text-white md:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 80% at 100% 20%, rgba(229,0,105,0.24) 0%, transparent 58%)",
              "radial-gradient(ellipse 50% 70% at 0% 100%, #29151c 0%, transparent 62%)",
              "linear-gradient(135deg, #050203 0%, #000000 55%, #16090e 100%)",
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#E50069]"
          >
            Selected case studies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 max-w-[900px] font-serif text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.01] tracking-[-0.03em]"
          >
            Work that moved something.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-white/65"
          >
            Campaigns, experiences, and strategic work built from local insight
            and measured by what changed in the market.
          </motion.p>
        </div>
      </section>

      {/* Filter navigation */}
      <section className="sticky top-0 z-30 border-b border-[#E5E2DA] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center gap-4 overflow-x-auto px-5 py-4 md:px-8 lg:px-12">
          <div className="flex shrink-0 items-center gap-2 pr-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
            <Filter className="h-4 w-4 text-[#E50069]" />
            Filter
          </div>

          {sectors.map((sector) => {
            const isActive = activeSector === sector;

            return (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={`shrink-0 px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-[#F2F2F2] text-black hover:bg-[#E50069]"
                }`}
              >
                {sector}
              </button>
            );
          })}
        </div>
      </section>

      {/* Work */}
      <main className="px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          {featuredStudy ? (
            <>
              {/* Featured case study */}
              <motion.article
                key={`featured-${featuredStudy.slug}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 md:mb-24"
              >
                <Link
                  to={`/work/${featuredStudy.slug}/`}
                  className="group grid overflow-hidden border border-[#E5E2DA] bg-black lg:grid-cols-12"
                >
                  <div className="relative min-h-[420px] overflow-hidden lg:col-span-7 lg:min-h-[620px]">
                    <img
                      src={featuredStudy.heroImage}
                      alt={`${featuredStudy.client} — ${featuredStudy.title}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/65" />

                    <div className="absolute left-6 top-6 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                      Featured work
                    </div>

                    <div className="absolute bottom-6 left-6 flex gap-2 lg:hidden">
                      {featuredStudy.capabilities.slice(0, 2).map((capability) => (
                        <span
                          key={capability}
                          className="bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 text-white md:p-10 lg:col-span-5 lg:p-12">
                    <div>
                      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                        <span>{featuredStudy.client}</span>

                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#E50069]" />
                          {featuredStudy.market}
                        </span>

                        <span>{featuredStudy.year}</span>
                      </div>

                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                        {featuredStudy.sector}
                      </p>

                      <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]">
                        {featuredStudy.title}
                      </h2>

                      <p className="max-w-xl leading-relaxed text-white/65">
                        {featuredStudy.summary}
                      </p>
                    </div>

                    <div className="mt-12 border-t border-white/15 pt-8">
                      {featuredStudy.results[0] && (
                        <div className="mb-8">
                          <p className="font-serif text-5xl font-bold text-[#E50069]">
                            {featuredStudy.results[0].number}
                          </p>
                          <p className="mt-2 max-w-sm text-sm text-white/55">
                            {featuredStudy.results[0].label}
                          </p>
                        </div>
                      )}

                      <span className="inline-flex items-center gap-2 font-semibold text-white">
                        Read the case study
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>

              {/* Section heading */}
              {remainingStudies.length > 0 && (
                <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#E5E2DA] pb-6 md:flex-row md:items-end">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                      More from the ground
                    </p>
                    <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                      More case studies
                    </h2>
                  </div>

                  <p className="max-w-md text-sm leading-relaxed text-[#4A4A47]">
                    Work across financial services, public health, digital
                    banking, activation, and communications.
                  </p>
                </div>
              )}

              {/* Case-study grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {remainingStudies.map((study, index) => (
                  <motion.article
                    key={study.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={`/work/${study.slug}/`}
                      className="group flex h-full flex-col overflow-hidden border border-[#E5E2DA] bg-white card-lift"
                    >
                      <div className="relative h-[360px] overflow-hidden">
                        <img
                          src={study.heroImage}
                          alt={`${study.client} — ${study.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                        <div className="absolute left-5 top-5 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                          {study.sector}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                          <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/55">
                            <span>{study.client}</span>
                            <span>·</span>
                            <span>{study.market}</span>
                            <span>·</span>
                            <span>{study.year}</span>
                          </div>

                          <h3 className="max-w-xl font-serif text-2xl leading-tight md:text-3xl">
                            {study.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 md:p-8">
                        <p className="mb-7 text-sm leading-relaxed text-[#4A4A47]">
                          {study.summary}
                        </p>

                        <div className="mt-auto flex flex-col justify-between gap-6 border-t border-[#E5E2DA] pt-6 sm:flex-row sm:items-end">
                          {study.results[0] ? (
                            <div>
                              <p className="text-3xl font-bold text-[#E50069]">
                                {study.results[0].number}
                              </p>
                              <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-[#4A4A47]">
                                {study.results[0].label}
                              </p>
                            </div>
                          ) : (
                            <div className="inline-flex items-center gap-2 text-sm text-[#4A4A47]">
                              <BriefcaseBusiness className="h-4 w-4 text-[#E50069]" />
                              View project
                            </div>
                          )}

                          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-black">
                            Read case study
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          ) : (
            <div className="border border-[#E5E2DA] bg-[#F2F2F2] px-6 py-20 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                No results
              </p>

              <h2 className="mb-4 font-serif text-3xl text-black">
                No case studies in this sector yet.
              </h2>

              <button
                type="button"
                onClick={() => setActiveSector("All")}
                className="mt-4 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                View all work
              </button>
            </div>
          )}
        </div>
      </main>

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
            Your work could be next
          </p>

          <h2 className="mx-auto mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
            Have a market challenge worth solving?
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-black/70">
            Tell us what needs to change. We will help find the insight, build
            the response, and measure the result.
          </p>

          <Link
            to="/start-a-project/"
            className="group btn-glow-pink inline-flex items-center gap-2 bg-black px-8 py-4 text-base font-semibold text-white"
          >
            Start a project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}