import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    name: "LISTEN",
    description: "We sit down with the people closest to the problem — yours and ours. We get out of the boardroom into shops, branches, depots, communities.",
    outcome: "A grounded brief that says what's actually true."
  },
  {
    number: "02",
    name: "DEFINE",
    description: "We frame the strategic answer — positioning, audience, messaging, channels, KPIs. Senior counsel, network frameworks, regional insight.",
    outcome: "A clear approach the whole team aligns behind."
  },
  {
    number: "03",
    name: "MAKE",
    description: "We produce — creative, content, paid, PR, activation. In the right languages, on the right channels, at the right cadence.",
    outcome: "Work that ships, on time, to standard."
  },
  {
    number: "04",
    name: "MEASURE",
    description: "We close the loop. Real numbers, real attribution, real learning, every cycle.",
    outcome: "A brand that gets sharper, not just busier."
  }
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="group flex flex-col bg-white border border-[var(--brand-divider)] p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-serif text-5xl text-[var(--brand-accent)]">{step.number}</span>
            <ArrowRight className="w-6 h-6 text-[var(--neutral-300)] group-hover:text-[var(--brand-primary)] group-hover:rotate-45 transition-all duration-300" />
          </div>
          <h4 className="font-bold text-lg text-[var(--brand-primary)] mb-3">{step.name}</h4>
          <p className="text-sm text-[var(--neutral-700)] mb-6 flex-1">{step.description}</p>
          <div className="pt-4 border-t border-[var(--brand-divider)]">
            <p className="text-sm italic text-[var(--neutral-700)]"><span className="font-semibold not-italic">What you get:</span> {step.outcome}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
