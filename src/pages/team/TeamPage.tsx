import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  Filter,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Users,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  teamMembers,
  type TeamDiscipline,
  type TeamMember,
  type TeamOffice,
} from "@/data/teamMembers";

type DisciplineFilter = "All" | TeamDiscipline;
type OfficeFilter = "All offices" | TeamOffice;

export default function TeamPage() {
  const [activeDiscipline, setActiveDiscipline] =
    useState<DisciplineFilter>("All");
  const [activeOffice, setActiveOffice] =
    useState<OfficeFilter>("All offices");
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  const disciplines = useMemo(
    () => [
      "All" as const,
      ...Array.from(
        new Set(teamMembers.map((member) => member.discipline)),
      ),
    ],
    [],
  );

  const offices = useMemo(
    () => [
      "All offices" as const,
      ...Array.from(new Set(teamMembers.map((member) => member.office))),
    ],
    [],
  );

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesDiscipline =
        activeDiscipline === "All" ||
        member.discipline === activeDiscipline;

      const matchesOffice =
        activeOffice === "All offices" ||
        member.office === activeOffice;

      return matchesDiscipline && matchesOffice;
    });
  }, [activeDiscipline, activeOffice]);

  const featuredMembers = teamMembers.filter(
    (member) => member.featured,
  );

  function resetFilters() {
    setActiveDiscipline("All");
    setActiveOffice("All offices");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-5 pb-24 pt-32 text-white md:px-8 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 58% 76% at 100% 15%, rgba(229,0,105,0.24) 0%, transparent 58%)",
              "radial-gradient(ellipse 45% 68% at 0% 100%, #29151c 0%, transparent 64%)",
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
            <Users className="h-4 w-4" />
            Our team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 max-w-[960px] font-serif text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.01] tracking-[-0.03em]"
          >
            Senior thinking, close to the work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-white/65"
          >
            Strategists, creatives, producers, advisors, digital specialists,
            and field teams working across Zambia and Malawi.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              How we are built
            </p>

            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black">
              The people making the recommendation help deliver it.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 max-w-4xl font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.18] text-black"
            >
              We keep senior practitioners connected to the research, ideas,
              decisions, and execution—not introduced for the pitch and removed
              when the work begins.
            </motion.p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  number: `${teamMembers.length}`,
                  label: "Team profiles",
                },
                {
                  number: "02",
                  label: "Core markets",
                },
                {
                  number: "01",
                  label: "Integrated team",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t-2 border-black pt-5"
                >
                  <p className="font-serif text-4xl font-bold text-[#E50069]">
                    {item.number}
                  </p>
                  <p className="mt-2 text-sm text-[#4A4A47]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured leadership */}
      {featuredMembers.length > 0 && (
        <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Leadership
              </p>

              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                Leading the work
              </h2>
            </div>

            {featuredMembers.map((member) => (
              <motion.button
                key={member.id}
                type="button"
                onClick={() => setSelectedMember(member)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid w-full overflow-hidden border border-[#E5E2DA] bg-black text-left lg:grid-cols-12"
              >
                <div className="relative min-h-[460px] overflow-hidden lg:col-span-5 lg:min-h-[580px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black lg:hidden">
                    {member.discipline}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-8 text-white md:p-12 lg:col-span-7 lg:p-16">
                  <div>
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                      {member.discipline} · {member.office}
                    </p>

                    <h3 className="mb-3 font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-none">
                      {member.name}
                    </h3>

                    <p className="mb-8 text-lg text-white/55">
                      {member.role}
                    </p>

                    <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                      {member.shortBio}
                    </p>
                  </div>

                  <span className="mt-12 inline-flex items-center gap-2 font-semibold text-white">
                    View full profile
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="sticky top-0 z-30 border-b border-[#E5E2DA] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
            <Filter className="h-4 w-4 text-[#E50069]" />
            Filter team
          </div>

          <div className="flex flex-1 gap-3 overflow-x-auto md:ml-3">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                type="button"
                onClick={() => setActiveDiscipline(discipline)}
                className={`shrink-0 px-4 py-2 text-sm font-medium transition-colors ${
                  activeDiscipline === discipline
                    ? "bg-black text-white"
                    : "bg-[#F2F2F2] text-black hover:bg-[#E50069]"
                }`}
              >
                {discipline}
              </button>
            ))}
          </div>

          <label className="flex shrink-0 items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-[#E50069]" />
            <span className="sr-only">Filter by office</span>

            <select
              value={activeOffice}
              onChange={(event) =>
                setActiveOffice(event.target.value as OfficeFilter)
              }
              className="border border-[#E5E2DA] bg-white px-3 py-2 text-sm text-black outline-none focus:border-black"
            >
              {offices.map((office) => (
                <option key={office} value={office}>
                  {office}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {/* Team directory */}
      <main className="px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#E5E2DA] pb-7 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Team directory
              </p>

              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                {activeDiscipline === "All"
                  ? "Meet the team"
                  : activeDiscipline}
              </h2>
            </div>

            <p className="text-sm text-[#4A4A47]">
              Showing {filteredMembers.length}{" "}
              {filteredMembers.length === 1 ? "person" : "people"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDiscipline}-${activeOffice}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="group block w-full text-left"
                    aria-label={`View profile for ${member.name}`}
                  >
                    <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#F2F2F2]">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-black font-serif text-6xl font-bold text-[#E50069]">
                          {member.initials}
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

                      <div className="absolute left-5 top-5 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
                        {member.discipline}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/65">
                          <MapPin className="h-3.5 w-3.5 text-[#E50069]" />
                          {member.office}
                        </span>

                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    <h3 className="mb-1 font-serif text-2xl text-black transition-colors group-hover:text-[#E50069]">
                      {member.name}
                    </h3>

                    <p className="mb-4 text-sm font-medium text-[#4A4A47]">
                      {member.role}
                    </p>

                    <p className="line-clamp-3 text-sm leading-relaxed text-[#4A4A47]">
                      {member.shortBio}
                    </p>
                  </button>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredMembers.length === 0 && (
            <div className="border border-[#E5E2DA] bg-[#F2F2F2] px-6 py-20 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                No matching profiles
              </p>

              <h3 className="mb-5 font-serif text-3xl text-black">
                Try a different discipline or office.
              </h3>

              <button
                type="button"
                onClick={resetFilters}
                className="bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Team profile dialog */}
      <Dialog
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedMember(null);
          }
        }}
      >
        <DialogContent className="max-h-[92vh] max-w-5xl gap-0 overflow-y-auto border-0 bg-white p-0">
          {selectedMember && (
            <div className="grid min-h-full grid-cols-1 lg:grid-cols-12">
              {/* Portrait */}
              <div className="relative min-h-[420px] overflow-hidden bg-black lg:sticky lg:top-0 lg:col-span-5 lg:h-[92vh]">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full min-h-[420px] items-center justify-center font-serif text-8xl font-bold text-[#E50069]">
                    {selectedMember.initials}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                    {selectedMember.discipline}
                  </p>

                  <p className="font-serif text-4xl leading-none">
                    {selectedMember.name}
                  </p>

                  <p className="mt-3 text-white/60">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Profile */}
              <div className="p-7 md:p-10 lg:col-span-7 lg:p-12">
                <DialogTitle className="sr-only">
                  {selectedMember.name}
                </DialogTitle>

                <DialogDescription className="sr-only">
                  Full team profile for {selectedMember.name}
                </DialogDescription>

                <div className="mb-9 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                    <MapPin className="h-4 w-4 text-[#E50069]" />
                    {selectedMember.office}
                  </span>

                  {selectedMember.yearsExperience && (
                    <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                      <BriefcaseBusiness className="h-4 w-4 text-[#E50069]" />
                      {selectedMember.yearsExperience}+ years
                    </span>
                  )}

                  <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                    <Languages className="h-4 w-4 text-[#E50069]" />
                    {selectedMember.languages.join(", ")}
                  </span>
                </div>

                <p className="mb-9 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-black">
                  {selectedMember.shortBio}
                </p>

                <div className="mb-10 space-y-5 text-base leading-[1.8] text-[#4A4A47]">
                  {selectedMember.biography.map((paragraph, index) => (
                    <p key={`${selectedMember.id}-bio-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <section className="mb-10 border-t border-[#E5E2DA] pt-8">
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                    Areas of expertise
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((item) => (
                      <span
                        key={item}
                        className="border border-[#E5E2DA] bg-white px-3 py-2 text-sm text-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                {selectedMember.selectedWork &&
                  selectedMember.selectedWork.length > 0 && (
                    <section className="mb-10 border-t border-[#E5E2DA] pt-8">
                      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                        Selected work
                      </h3>

                      <div className="space-y-3">
                        {selectedMember.selectedWork.map((work) =>
                          work.link ? (
                            <Link
                              key={`${work.client}-${work.title}`}
                              to={work.link}
                              onClick={() => setSelectedMember(null)}
                              className="group flex items-center justify-between gap-5 border border-[#E5E2DA] p-4 transition-colors hover:bg-black"
                            >
                              <div>
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E50069]">
                                  {work.client}
                                </p>

                                <p className="font-medium text-black transition-colors group-hover:text-white">
                                  {work.title}
                                </p>
                              </div>

                              <ArrowRight className="h-5 w-5 shrink-0 text-black transition-all group-hover:translate-x-1 group-hover:text-[#E50069]" />
                            </Link>
                          ) : (
                            <div
                              key={`${work.client}-${work.title}`}
                              className="border border-[#E5E2DA] p-4"
                            >
                              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E50069]">
                                {work.client}
                              </p>

                              <p className="font-medium text-black">
                                {work.title}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </section>
                  )}

                {(selectedMember.email || selectedMember.linkedIn) && (
                  <section className="border-t border-[#E5E2DA] pt-8">
                    <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                      Connect
                    </h3>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="group inline-flex items-center justify-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
                        >
                          <Mail className="h-4 w-4" />
                          Email {selectedMember.name.split(" ")[0]}
                        </a>
                      )}

                      {selectedMember.linkedIn && (
                        <a
                          href={selectedMember.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 border border-black px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Careers */}
      <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
              Join the team
            </p>

            <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
              Good at something we should know about?
            </h2>

            <p className="max-w-2xl leading-relaxed text-[#4A4A47]">
              We are interested in people who understand the market, care about
              the craft, and remain curious when the easy answer appears.
            </p>
          </div>

          <Link
            to="/careers/"
            className="group inline-flex items-center justify-center gap-2 bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E50069] hover:text-black"
          >
            Explore careers
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

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
            Work with us
          </p>

          <h2 className="mx-auto mb-5 max-w-3xl font-serif text-[clamp(1.8rem,3.8vw,3rem)] leading-tight text-black">
            Need this team around your problem?
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-black/70">
            Tell us what you are trying to change. We will bring together the
            people the problem actually needs.
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