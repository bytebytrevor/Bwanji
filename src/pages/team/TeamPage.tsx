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

/* =========================================================
   TYPES
========================================================= */

type DisciplineFilter = "All" | TeamDiscipline;
type OfficeFilter = "All offices" | TeamOffice;

type MemberCardProps = {
  member: TeamMember;
  index: number;
  onSelect: (member: TeamMember) => void;
};

/* =========================================================
   ORIGINAL IMAGE PATHS
   These files should exist inside /public.
========================================================= */

const ORIGINAL_IMAGES: Record<string, string> = {
  "thokozani-unyolo": "/Professional%20Photo%20Thoko.jpg",
  "lindarose-sikazwe": "/Lindarose.jpg",
  "sapi-bachi": "/Sapi%20Bachi.jpg",
  "anesu-sakutukwa": "/Anesu%20Profile%20Picture.jpg",
  "david-duri": "/David%20Duri%20-%20Executive%20Creative%20Director.jpeg",
  "tanyaradzwa-masendeke": "/Tanya%20Masendeke%20-%20Head%20of%20Strategy.jpeg",
  "hilgard-kamuna": "/Hilgard.jpg",
};

function getPortraitSource(member: TeamMember): string {
  return (
    ORIGINAL_IMAGES[member.slug] ?? ORIGINAL_IMAGES[member.id] ?? member.image
  );
}

/* =========================================================
   ORDERING

   Malawi leadership first.
   Zambia leadership second.
   Regional support afterward.
========================================================= */

const OFFICE_PRIORITY: Record<TeamOffice, number> = {
  Lilongwe: 0,
  Lusaka: 1,
  Regional: 2,
};

function getMemberSummary(member: TeamMember): string {
  const paragraph =
    member.biography[0]?.trim() || member.shortBio?.trim() || "";

  if (!paragraph) return "";

  const firstSentence = paragraph.match(/^.*?[.!?](?=\s|$)/);

  return firstSentence ? firstSentence[0] : paragraph;
}

function sortLocalFirst(members: TeamMember[]): TeamMember[] {
  return [...members].sort(
    (a, b) => OFFICE_PRIORITY[a.office] - OFFICE_PRIORITY[b.office],
  );
}

/* =========================================================
   PORTRAIT COMPONENT

   Original image files.
   Smooth 4% hover zoom.
   No image optimization or processing.
========================================================= */

type PortraitProps = {
  member: TeamMember;
  priority?: boolean;
  position?: string;
  zoom?: boolean;
};

function TeamPortrait({
  member,
  priority = false,
  position = "center 20%",
  zoom = true,
}: PortraitProps) {
  const src = getPortraitSource(member);

  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const showImage = Boolean(src) && failedSrc !== src;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EAEAEA]">
      {showImage ? (
        <img
          src={src}
          alt={member.name}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailedSrc(src)}
          style={{
            objectFit: "cover",
            objectPosition: position,
            imageRendering: "auto",
          }}
          className={`absolute inset-0 block h-full w-full transform-gpu transition-transform duration-700 ease-out motion-reduce:transform-none ${
            zoom ? "group-hover:scale-[1.04]" : ""
          }`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-black font-serif text-6xl font-bold text-[#E50069]">
          {member.initials}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   LOCAL LEADERSHIP CARD
========================================================= */

function LocalLeaderCard({ member, index, onSelect }: MemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      <button
        type="button"
        onClick={() => onSelect(member)}
        aria-label={`View profile for ${member.name}`}
        className="group flex h-full w-full flex-col overflow-hidden border border-[#E5E2DA] bg-white text-left transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Portrait */}
        <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-black sm:aspect-[4/3.5]">
          <TeamPortrait
            member={member}
            priority={index === 0}
            position="center 20%"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="pointer-events-none absolute bottom-6 left-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
            <MapPin className="h-4 w-4 text-[#E50069]" />
            {member.office}
          </div>
        </div>

        {/* Information */}
        <div className="flex w-full flex-1 flex-col p-7 md:p-9">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#E50069]">
            {member.discipline}
          </p>

          <h3 className="mb-2 font-serif text-[clamp(1.8rem,3vw,2.5rem)] leading-tight text-black transition-colors duration-300 group-hover:text-[#E50069]">
            {member.name}
          </h3>

          <p className="mb-6 text-sm font-medium text-[#4A4A47]">
            {member.role}
          </p>

          <p className="mb-8 line-clamp-4 flex-1 text-sm leading-[1.8] text-[#4A4A47]">
            {getMemberSummary(member)}
          </p>

          <span className="inline-flex items-center gap-2 border-t border-[#E5E2DA] pt-5 text-sm font-semibold text-black">
            View full profile
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </button>
    </motion.article>
  );
}

/* =========================================================
   REGIONAL SUPPORT CARD
========================================================= */

function RegionalMemberCard({ member, index, onSelect }: MemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: Math.min(index * 0.07, 0.28),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      <button
        type="button"
        onClick={() => onSelect(member)}
        aria-label={`View profile for ${member.name}`}
        className="group block w-full text-left"
      >
        {/* Portrait */}
        <div className="relative mb-5 aspect-[4/4.5] overflow-hidden bg-[#F2F2F2]">
          <TeamPortrait member={member} position="center 20%" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <span className="pointer-events-none absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.17em] text-white">
            Regional support
          </span>

          <ArrowRight className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>

        {/* Information */}
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E50069]">
          {member.discipline}
        </p>

        <h3 className="mb-1 font-serif text-2xl leading-tight text-black transition-colors duration-300 group-hover:text-[#E50069]">
          {member.name}
        </h3>

        <p className="mb-4 text-sm font-medium text-[#4A4A47]">{member.role}</p>

        <p className="line-clamp-3 text-sm leading-relaxed text-[#4A4A47]">
          {getMemberSummary(member)}
        </p>
      </button>
    </motion.article>
  );
}

/* =========================================================
   DIRECTORY CARD
========================================================= */

function DirectoryMemberCard({ member, index, onSelect }: MemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: Math.min(index * 0.04, 0.24),
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      <button
        type="button"
        onClick={() => onSelect(member)}
        aria-label={`View profile for ${member.name}`}
        className="group block w-full text-left"
      >
        {/* Portrait */}
        <div className="relative mb-6 aspect-[4/5] overflow-hidden bg-[#F2F2F2]">
          <TeamPortrait member={member} position="center 20%" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="pointer-events-none absolute left-5 top-5 bg-[#E50069] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-black">
            {member.discipline}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/75">
              <MapPin className="h-3.5 w-3.5 text-[#E50069]" />
              {member.office}
            </span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </div>
        </div>

        {/* Information */}
        <h3 className="mb-1 font-serif text-2xl text-black transition-colors duration-300 group-hover:text-[#E50069]">
          {member.name}
        </h3>

        <p className="mb-4 text-sm font-medium text-[#4A4A47]">{member.role}</p>

        <p className="line-clamp-3 text-sm leading-relaxed text-[#4A4A47]">
          {getMemberSummary(member)}
        </p>
      </button>
    </motion.article>
  );
}

/* =========================================================
   TEAM PAGE
========================================================= */

export default function TeamPage() {
  const [activeDiscipline, setActiveDiscipline] =
    useState<DisciplineFilter>("All");

  const [activeOffice, setActiveOffice] = useState<OfficeFilter>("All offices");

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  /* =======================================================
     GROUPING
  ======================================================= */

  const localMembers = useMemo(() => {
    const members = teamMembers.filter(
      (member) => member.office === "Lilongwe" || member.office === "Lusaka",
    );

    // Ensure Thokozani always comes first.
    return [...members].sort((a, b) => {
      if (a.name === "Thokozani Unyolo") return -1;
      if (b.name === "Thokozani Unyolo") return 1;

      return OFFICE_PRIORITY[a.office] - OFFICE_PRIORITY[b.office];
    });
  }, []);

  const regionalMembers = useMemo(
    () => teamMembers.filter((member) => member.office === "Regional"),
    [],
  );

  const disciplines = useMemo(
    () => [
      "All" as const,
      ...Array.from(new Set(teamMembers.map((member) => member.discipline))),
    ],
    [],
  );

  const offices = useMemo(
    () => [
      "All offices" as const,
      "Lilongwe" as const,
      "Lusaka" as const,
      "Regional" as const,
    ],
    [],
  );

  const filteredMembers = useMemo(() => {
    const matchingMembers = teamMembers.filter((member) => {
      const matchesDiscipline =
        activeDiscipline === "All" || member.discipline === activeDiscipline;

      const matchesOffice =
        activeOffice === "All offices" || member.office === activeOffice;

      return matchesDiscipline && matchesOffice;
    });

    return sortLocalFirst(matchingMembers);
  }, [activeDiscipline, activeOffice]);

  function resetFilters() {
    setActiveDiscipline("All");
    setActiveOffice("All offices");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}

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
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E50069]"
          >
            <Users className="h-4 w-4" />
            Our team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 max-w-[960px] font-serif text-[clamp(2.8rem,7vw,6rem)] font-bold leading-[1.01] tracking-[-0.03em]"
          >
            Senior thinking.
            <br />
            Local leadership.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.12,
              duration: 0.6,
            }}
            className="max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-white/65"
          >
            Led by people on the ground in Zambia and Malawi, supported by the
            strategic, creative and specialist expertise of our wider regional
            network.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

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
              transition={{ duration: 0.6 }}
              className="mb-10 max-w-4xl font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.18] text-black"
            >
              Our local teams stay close to the client, the market and the work.
              They are backed by experienced regional specialists who contribute
              where their expertise is needed.
            </motion.p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  number: String(teamMembers.length).padStart(2, "0"),
                  label: "Team profiles",
                },
                {
                  number: "02",
                  label: "Core markets",
                },
                {
                  number: "01",
                  label: "Connected network",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                  }}
                  className="border-t-2 border-black pt-5"
                >
                  <p className="font-serif text-4xl font-bold text-[#E50069]">
                    {item.number}
                  </p>

                  <p className="mt-2 text-sm text-[#4A4A47]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCAL LEADERSHIP
      ===================================================== */}

      {localMembers.length > 0 && (
        <section className="bg-[#F2F2F2] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Our people on the ground
              </p>

              <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] text-black">
                Local leadership.
                <br />
                Close to the work.
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-[#4A4A47]">
                Our Zambia and Malawi teams are your first point of connection.
                They bring local market understanding, direct client
                relationships and practical experience to the work.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
              {localMembers.map((member, index) => (
                <LocalLeaderCard
                  key={member.id}
                  member={member}
                  index={index}
                  onSelect={setSelectedMember}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          REGIONAL SUPPORT
      ===================================================== */}

      {regionalMembers.length > 0 && (
        <section className="bg-white px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                  Backed by the network
                </p>

                <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] text-black">
                  Regional expertise.
                  <br />
                  Local accountability.
                </h2>
              </div>

              <div className="flex items-end lg:col-span-7">
                <p className="max-w-2xl text-base leading-relaxed text-[#4A4A47]">
                  Our local teams draw on the wider Full Circle Comms network
                  for specialist leadership, strategic counsel, creative
                  thinking, digital expertise and public relations support when
                  the brief calls for it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {regionalMembers.map((member, index) => (
                <RegionalMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  onSelect={setSelectedMember}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section className="sticky top-0 z-30 border-b border-[#E5E2DA] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:px-8 lg:px-12">
          <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4A4A47]">
            <Filter className="h-4 w-4 text-[#E50069]" />
            Filter team
          </div>

          <div className="flex min-w-0 flex-1 gap-3 overflow-x-auto pb-1 md:ml-3 md:pb-0">
            {disciplines.map((discipline) => (
              <button
                key={discipline}
                type="button"
                onClick={() => setActiveDiscipline(discipline)}
                aria-pressed={activeDiscipline === discipline}
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

      {/* =====================================================
          FULL TEAM DIRECTORY
      ===================================================== */}

      <main className="px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#E5E2DA] pb-7 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                Team directory
              </p>

              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] text-black">
                {activeDiscipline === "All"
                  ? "Meet the full team"
                  : activeDiscipline}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-[#4A4A47]">
                Local teams first, with regional specialists supporting the
                work.
              </p>
            </div>

            <p className="text-sm text-[#4A4A47]">
              Showing {filteredMembers.length}{" "}
              {filteredMembers.length === 1 ? "person" : "people"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDiscipline}-${activeOffice}`}
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -14,
              }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredMembers.map((member, index) => (
                <DirectoryMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  onSelect={setSelectedMember}
                />
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

      {/* =====================================================
          TEAM PROFILE DIALOG
      ===================================================== */}

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
                <TeamPortrait
                  member={selectedMember}
                  position="center 20%"
                  priority
                  zoom={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-7 text-white md:p-9">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                    {selectedMember.discipline}
                  </p>

                  <p className="font-serif text-4xl leading-none">
                    {selectedMember.name}
                  </p>

                  <p className="mt-3 text-white/60">{selectedMember.role}</p>
                </div>
              </div>

              {/* Profile */}
              <div className="min-w-0 p-7 md:p-10 lg:col-span-7 lg:p-12">
                <DialogTitle className="sr-only">
                  {selectedMember.name}
                </DialogTitle>

                <DialogDescription className="sr-only">
                  Full team profile for {selectedMember.name}
                </DialogDescription>

                {/* Profile details */}
                <div className="mb-9 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                    <MapPin className="h-4 w-4 text-[#E50069]" />
                    {selectedMember.office}
                  </span>

                  {selectedMember.yearsExperience != null && (
                    <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                      <BriefcaseBusiness className="h-4 w-4 text-[#E50069]" />
                      {selectedMember.yearsExperience}+ years
                    </span>
                  )}

                  {selectedMember.languages.length > 0 && (
                    <span className="inline-flex items-center gap-2 bg-[#F2F2F2] px-3 py-2 text-xs font-medium text-black">
                      <Languages className="h-4 w-4 text-[#E50069]" />
                      {selectedMember.languages.join(", ")}
                    </span>
                  )}
                </div>

                {/* Summary */}
                <p className="mb-9 font-serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.2] text-black">
                  {getMemberSummary(selectedMember)}
                </p>

                {/* Biography */}
                <div className="mb-10 space-y-5 text-base leading-[1.8] text-[#4A4A47]">
                  {selectedMember.biography.map((paragraph, index) => (
                    <p key={`${selectedMember.id}-bio-${index}`}>{paragraph}</p>
                  ))}
                </div>

                {/* Expertise */}
                {selectedMember.expertise.length > 0 && (
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
                )}

                {/* Selected work */}
                {selectedMember.selectedWork &&
                  selectedMember.selectedWork.length > 0 && (
                    <section className="mb-10 border-t border-[#E5E2DA] pt-8">
                      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E50069]">
                        Selected work
                      </h3>

                      <div className="space-y-3">
                        {selectedMember.selectedWork.map((work) => {
                          const key = `${work.client}-${work.title}`;

                          const content = (
                            <>
                              <div>
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.17em] text-[#E50069]">
                                  {work.client}
                                </p>

                                <p className="font-medium text-black transition-colors group-hover:text-white">
                                  {work.title}
                                </p>
                              </div>

                              {work.link && (
                                <ArrowRight className="h-5 w-5 shrink-0 text-black transition-all group-hover:translate-x-1 group-hover:text-[#E50069]" />
                              )}
                            </>
                          );

                          if (!work.link) {
                            return (
                              <div
                                key={key}
                                className="border border-[#E5E2DA] p-4"
                              >
                                {content}
                              </div>
                            );
                          }

                          const isExternal = /^https?:\/\//i.test(work.link);

                          const className =
                            "group flex items-center justify-between gap-5 border border-[#E5E2DA] p-4 transition-colors hover:bg-black";

                          if (isExternal) {
                            return (
                              <a
                                key={key}
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={className}
                              >
                                {content}
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={key}
                              to={work.link}
                              onClick={() => setSelectedMember(null)}
                              className={className}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </div>
                    </section>
                  )}

                {/* Contact */}
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
                          rel="noopener noreferrer"
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

      {/* =====================================================
          CAREERS
      ===================================================== */}

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
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

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
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
