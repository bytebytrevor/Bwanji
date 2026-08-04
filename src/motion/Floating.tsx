import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type FloatingProps = {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

export default function Floating({
  children,
  amplitude = 8,
  duration = 4,
  delay = 0,
  className,
}: FloatingProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
