import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BwanjiMark from '@/components/brand/BwanjiMark';

export default function NotFoundPage() {
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col items-center justify-center text-[#ffffff] px-5 text-center overflow-hidden">
      {/* Brand mark centrepiece — stroke draws in on mount */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <BwanjiMark
          draw
          className="w-44 h-44 md:w-56 md:h-56"
          strokeWidth={3}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-6xl md:text-7xl text-[#ffffff] leading-none mb-3 tracking-[-0.02em]"
      >
        4<span className="text-[#E50069]">0</span>4
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif italic text-xl md:text-2xl text-[#ffffff]/85 mb-2"
      >
        Muli <span className="text-[#E50069]">Bwanji</span>?
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-base md:text-lg text-neutral-300 max-w-md mb-10 leading-relaxed"
      >
        We can&rsquo;t find that page &mdash; but we can find your audience. Let&rsquo;s start the conversation somewhere else.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <Link
          to="/"
          data-testid="link-back-home"
          className="group btn-glow-pink bg-[#E50069] text-[#000000] px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
        >
          <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-1 motion-reduce:transition-none">&larr;</span>
          Back home
        </Link>
        <Link
          to="/work/"
          data-testid="link-see-work"
          className="group btn-glow-outline border border-white/30 text-white/90 px-6 py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
        >
          See the work
          <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none">&rarr;</span>
        </Link>
      </motion.div>
    </div>
  );
}
