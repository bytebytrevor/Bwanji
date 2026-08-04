import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import ProcessSteps from '@/components/ProcessSteps';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const caseStudies = [
  { client: "Old Mutual Zambia", title: "Insurance in the Language of the Market", stat: "34%", statDesc: "increase in quote completions after Bemba-language campaign.", link: "/work/insurance-in-the-language-of-the-market/" },
  { client: "PSI Malawi", title: "Behaviour Change at Last Mile", stat: "210,000", statDesc: "households reached in Chichewa and Tumbuka across 12 districts.", link: "/work/behaviour-change-at-last-mile/" },
  { client: "Standard Bank Malawi", title: "Branch Zero — Digital Banking Beyond the City", stat: "47%", statDesc: "increase in mobile money activations in rural Southern Region.", link: "/work/branch-zero/" }
];

export default function PublicRelationsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--brand-paper)]">
      {/* Hero Section */}
      <section className="bg-[#000000] text-[#ffffff] pt-32 pb-20 px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-12">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="cursor-default">What We Do</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white cursor-default">Public Relations & Reputation</span>
          </nav>

          <span className="text-[#E50069] text-sm font-bold tracking-widest uppercase mb-4 block">Capability</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-tight max-w-[800px] mb-6"
          >
            Public Relations & Reputation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(1.125rem,2vw,1.25rem)] text-neutral-300 max-w-2xl mb-12 leading-relaxed"
          >
            Counsel for the moments that decide a brand's standing. We build and protect reputation through deep local media relationships and nuanced stakeholder understanding in Zambia and Malawi.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 flex-col sm:flex-row"
          >
            <Link to="/start-a-project/" className="group btn-glow-pink bg-[#E50069] text-[#000000] px-8 py-4 font-semibold text-base text-center inline-flex items-center justify-center gap-2">
              Start a project <span className="arrow-nudge">&rarr;</span>
            </Link>
            <Link to="/work/" className="group btn-glow-outline border border-white/40 text-white px-8 py-4 font-medium text-base text-center inline-flex items-center justify-center gap-2">
              See PR case studies <span className="arrow-nudge">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            Who this is for
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Corporate communications leads who need senior counsel, not execution-only",
              "CEOs and boards facing reputational pressure or a crisis in progress",
              "INGO country directors accountable to donors for public narrative"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E2DA] border-l-4 border-l-[#E50069] p-8 card-lift"
              >
                <p className="font-medium text-[#000000] text-lg leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12 text-center"
          >
            What's included
          </motion.h2>
          <Accordion type="single" collapsible className="w-full bg-white border border-[var(--brand-divider)]">
            {[
              { title: "Media relations", desc: "Proactive pitching, press office management, and media relationship building." },
              { title: "Crisis communications", desc: "24/7 incident response, holding statements, and reputation recovery." },
              { title: "Stakeholder engagement", desc: "Mapping and messaging for regulators, government, and community leaders." },
              { title: "Executive visibility", desc: "Thought leadership, speaking opportunities, and op-ed placement for C-suite." },
              { title: "ESG communications", desc: "Sustainability reporting and community impact narratives." },
              { title: "Internal comms", desc: "Change management, employee engagement, and internal crisis response." },
              { title: "Reputation monitoring", desc: "Sentiment analysis, media tracking, and early warning systems." },
              { title: "Press office", desc: "Always-on media handling, query response, and media list maintenance." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[var(--brand-divider)] last:border-0 px-6">
                <AccordionTrigger className="text-left font-serif text-lg text-[#000000] hover:no-underline py-6">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A47] pb-6">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            How we work
          </motion.h2>
          <ProcessSteps />
        </div>
      </section>

      {/* Proof */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            Proof from the ground
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div 
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E2DA] overflow-hidden card-lift group flex flex-col"
              >
                <div className="h-[240px] bg-gradient-to-br from-[#000000] to-[#1a1a1a] relative overflow-hidden">
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
      </section>

      {/* The team */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            The team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "MN", name: "Mutale Nkandu", role: "Director of Communications", office: "Lusaka" },
              { initials: "CB", name: "Chisomo Banda", role: "Senior PR Strategist", office: "Lilongwe" },
              { initials: "TM", name: "Tendai Moyo", role: "Head of Crisis & Reputation", office: "Lusaka" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E2DA] p-6 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#000000] text-[#ffffff] flex items-center justify-center font-bold shrink-0">
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-[#000000] text-lg leading-tight">{member.name}</p>
                  <p className="text-sm text-[#4A4A47]">{member.role}</p>
                  <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">{member.office}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Partners */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-6"
          >
            Tools & Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#4A4A47] leading-relaxed"
          >
            We monitor via Meltwater and Brandwatch. We place across Zambia Daily Mail, Times of Zambia, The Nation (Malawi), Nyasa Times, ZambiaReports, and the full local broadcast network.
          </motion.p>
        </div>
      </section>

      {/* Related capabilities */}
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12"
          >
            Related capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Brand Strategy", link: "/what-we-do/brand-strategy/" },
              { name: "Advisory", link: "/what-we-do/advisory/" },
              { name: "Digital & Performance", link: "/what-we-do/digital-and-performance/" }
            ].map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={cap.link} className="block group bg-white border border-[#E5E2DA] p-8 hover:bg-[#000000] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-serif text-xl text-[#000000] group-hover:text-[#ffffff] mb-6 transition-colors">{cap.name}</h3>
                  <div className="flex items-center text-sm font-medium text-[#000000] group-hover:text-[#E50069] transition-colors">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F2F2F2] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-12 text-center"
          >
            Frequently asked questions
          </motion.h2>
          <Accordion type="single" collapsible className="w-full bg-white border border-[var(--brand-divider)]">
            {[
              { q: "Do you work on retainer or project basis?", a: "Both. Project engagements start at $5,000. Retainers from $2,500/month with a minimum 3-month commitment." },
              { q: "How quickly can you respond in a crisis?", a: "We operate a 24/7 WhatsApp response line for retained clients. Initial response within 2 hours, holding statement within 4." },
              { q: "Do you have Malawi-specific PR contacts?", a: "Yes. Our Lilongwe team has direct relationships across The Nation, Nyasa Times, MBC, and the main Malawi radio networks." },
              { q: "Can you handle procurement/compliance for INGO briefs?", a: "Yes. We are familiar with USAID, FCDO, and EU procurement standards and can provide the required documentation." },
              { q: "What's the minimum budget?", a: "Project from $5,000. Retainers from $2,500/month. We'll tell you honestly if the budget doesn't match the scope." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[var(--brand-divider)] last:border-0 px-6">
                <AccordionTrigger className="text-left font-serif text-lg text-[#000000] hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#4A4A47] pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#E50069] py-20 text-center">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] text-[#000000] mb-8"
          >
            Ready to protect and strengthen your reputation?
          </motion.h2>
          <Link 
            to="/start-a-project/"
            className="group btn-glow-pink inline-flex items-center gap-2 bg-[#000000] text-[#ffffff] px-8 py-4 text-base font-semibold"
          >
            Start a project <span className="arrow-nudge">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
