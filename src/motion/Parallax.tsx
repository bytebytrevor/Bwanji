import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionStyle } from 'framer-motion';
import type { ReactNode } from 'react';

type ParallaxProps = {
  children: ReactNode;
  /** Pixels of vertical movement across the scroll range. Negative values move up as you scroll. */
  offset?: number;
  /** Optional opacity range, applied across the same scroll range. */
  fadeOut?: boolean;
  /** Optional scale range. */
  scale?: [number, number];
  className?: string;
  style?: MotionStyle;
};

/**
 * Parallax wrapper. Translates its children at a different rate than
 * the page scroll based on the parent section's position in the viewport.
 *
 * Wrap a *positioned* child (often `absolute inset-0`) in this so that
 * it can move freely behind your content without affecting layout.
 */
export default function Parallax({
  children,
  offset = -120,
  fadeOut = false,
  scale,
  className,
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, offset]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    fadeOut && !reduce ? [1, 1, 0] : [1, 1, 1],
  );
  const scaleMotion = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : (scale ?? [1, 1]),
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity, scale: scaleMotion, ...style }}
    >
      {children}
    </motion.div>
  );
}
