import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type WordRevealProps = {
  text: string;
  className?: string;
  /** Stagger between each word in seconds. */
  stagger?: number;
  /** Delay before the first word starts. */
  delay?: number;
  /** Words/phrases that should render in the brand accent colour. Case-insensitive match. */
  highlight?: string[];
  /** Override the colour applied to highlighted words. Defaults to the brand accent (#E50069). */
  highlightColor?: string;
  /** When true, animation runs once on mount instead of when entering the viewport. */
  immediate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  /** Optional element to render after all words (inside the same wrapper). */
  trailing?: ReactNode;
};

/**
 * Word-by-word reveal animation. Each word fades + lifts into place
 * with a subtle stagger. Words listed in `highlight` are tinted with the
 * brand accent so headlines can read like editorial pull-quotes.
 *
 * Accessibility: the wrapper carries the full `aria-label`, and the
 * animated word spans are marked `aria-hidden` so screen readers always
 * announce the headline as one fluent string.
 *
 * Reduced motion: when `prefers-reduced-motion: reduce` is set, the
 * component renders a plain (still highlighted) string with no animation.
 */
export default function WordReveal({
  text,
  className,
  stagger = 0.09,
  delay = 0,
  highlight = [],
  highlightColor = '#E50069',
  immediate = false,
  as = 'h2',
  trailing,
}: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const lowerHighlights = highlight.map((h) => h.toLowerCase());

  const isHighlighted = (word: string) => {
    const cleaned = word.replace(/[.,;:!?'"()]/g, '').toLowerCase();
    return lowerHighlights.includes(cleaned);
  };

  // Reduced-motion fallback: render plain text with highlights, no animation.
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} aria-label={text}>
        <span aria-hidden="true">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              style={isHighlighted(word) ? { color: highlightColor } : undefined}
            >
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
          {trailing}
        </span>
      </Tag>
    );
  }

  const Tag = motion[as] as typeof motion.div;

  const animationProps = immediate
    ? { initial: 'hidden' as const, animate: 'visible' as const }
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <Tag
      className={className}
      aria-label={text}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      {...animationProps}
    >
      <span aria-hidden="true" className="contents">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            style={{ marginRight: '0.25em' }}
            variants={{
              hidden: { opacity: 0, y: '0.6em' },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <span style={isHighlighted(word) ? { color: highlightColor } : undefined}>
              {word}
            </span>
          </motion.span>
        ))}
        {trailing}
      </span>
    </Tag>
  );
}
