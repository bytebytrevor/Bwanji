import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FolderOpen, Megaphone, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type PillVariant = 'pink' | 'dark' | 'outline';

type PillItem = {
  label: string;
  to: string;
  icon: LucideIcon;
  variant: PillVariant;
  testId: string;
};

const pills: PillItem[] = [
  { label: 'Our work', to: '/work/', icon: FolderOpen, variant: 'dark', testId: 'pill-work' },
  { label: 'PR capability', to: '/what-we-do/public-relations/', icon: Megaphone, variant: 'pink', testId: 'pill-pr' },
  { label: 'Start a project', to: '/start-a-project/', icon: Sparkles, variant: 'outline', testId: 'pill-start' },
];

const variantClasses: Record<PillVariant, string> = {
  pink: 'bg-[#E50069] text-[#000000] border border-[#E50069] hover:shadow-[0_10px_30px_-10px_#E50069]',
  dark: 'bg-[#000000] text-[#ffffff] border border-[#E50069] hover:shadow-[0_10px_30px_-10px_#E50069]',
  outline: 'bg-[#ffffff] text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-[#ffffff] hover:border-[#E50069] hover:shadow-[0_10px_30px_-10px_#E50069]',
};

/**
 * Vertical stack of pill-shaped quick-nav buttons pinned to the right edge.
 * Each pill is icon-only at rest and expands leftward on hover/focus to
 * reveal its label. Hidden on mobile/tablet to avoid crowding.
 *
 * Inspired by the floating side nav on dorstenlesser.com.
 */
export default function FloatingPillNav() {
  const reduce = useReducedMotion();

  return (
    <nav
      aria-label="Quick navigation"
      className="hidden lg:flex flex-col gap-3 fixed right-3 top-1/2 -translate-y-1/2 z-30"
    >
      {pills.map((pill, i) => {
        const Icon = pill.icon;
        return (
          <motion.div
            key={pill.to}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 60 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{
              delay: 0.4 + i * 0.12,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to={pill.to}
              data-testid={pill.testId}
              aria-label={pill.label}
              className={`group/pill relative flex items-center justify-end gap-2 h-11 pr-2.5 pl-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out hover:pl-4 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2 ${variantClasses[pill.variant]}`}
            >
              <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out motion-reduce:transition-none group-hover/pill:max-w-[160px] group-hover/pill:opacity-100 group-hover/pill:mr-1 group-focus-visible/pill:max-w-[160px] group-focus-visible/pill:opacity-100 group-focus-visible/pill:mr-1">
                {pill.label}
              </span>
              <Icon className="w-5 h-5 shrink-0" strokeWidth={2} />
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
