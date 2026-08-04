import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export type IconMotionVariant = 'bob' | 'sway' | 'pulse' | 'tilt' | 'orbit' | 'nudge';

type AnimatedIconProps = {
  children: ReactNode;
  variant?: IconMotionVariant;
  delay?: number;
  className?: string;
};

const variants: Record<
  IconMotionVariant,
  { animate: Record<string, number[]>; duration: number }
> = {
  bob: { animate: { y: [0, -6, 0] }, duration: 3.2 },
  sway: { animate: { rotate: [-4, 4, -4] }, duration: 3.6 },
  pulse: { animate: { scale: [1, 1.08, 1] }, duration: 2.4 },
  tilt: { animate: { rotate: [0, 6, 0, -6, 0] }, duration: 4.2 },
  orbit: { animate: { x: [0, 4, 0, -4, 0], y: [0, -3, 0, -3, 0] }, duration: 4.8 },
  nudge: { animate: { x: [0, 4, 0] }, duration: 2.8 },
};

export default function AnimatedIcon({
  children,
  variant = 'bob',
  delay = 0,
  className,
}: AnimatedIconProps) {
  const reduce = useReducedMotion();
  const cfg = variants[variant];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={cfg.animate}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
