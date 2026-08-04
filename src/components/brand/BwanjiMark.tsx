import { motion } from 'framer-motion';
import type { SVGProps } from 'react';
import { useReducedMotion } from '@/motion/useReducedMotion';

interface BwanjiMarkProps extends Omit<SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
  /** Animate the stroke drawing in (used on the 404 hero, splash states, etc.) */
  draw?: boolean;
  /** Stroke colour — defaults to brand pink */
  stroke?: string;
  /** Stroke width in viewBox units — defaults to 4 */
  strokeWidth?: number;
}

const OUTER_PATH =
  'M 50 8 A 42 42 0 1 1 22 86 L 6 96 L 18 78 A 42 42 0 0 1 50 8 Z';

/**
 * Bwanji brand mark — abstract speech-bubble + concentric ring.
 * Renders as inline SVG so it can be stroked, recoloured, or animated freely.
 * Respects `prefers-reduced-motion` — the `draw` animation is skipped when reduced motion is requested.
 */
export default function BwanjiMark({
  draw = false,
  stroke = '#E50069',
  strokeWidth = 4,
  className,
  ...rest
}: BwanjiMarkProps) {
  const shouldReduceMotion = useReducedMotion();
  const animate = draw && !shouldReduceMotion;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {animate ? (
        <>
          <motion.path
            d={OUTER_PATH}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx={54}
            cy={48}
            r={28}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      ) : (
        <>
          <path d={OUTER_PATH} />
          <circle cx={54} cy={48} r={28} />
        </>
      )}
    </svg>
  );
}
