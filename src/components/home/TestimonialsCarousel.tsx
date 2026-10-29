import { useCallback, useEffect, useRef, useState } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { ArrowLeft, ArrowRight, Quote, UserRound } from "lucide-react";

import WordReveal from "@/motion/WordReveal";

import { testimonials, type ClientTestimonial } from "@/data/testimonials";

/* =========================================================
   CONSTANTS
========================================================= */

const BRAND_PINK = "#E50069";
const SCROLL_TOLERANCE = 3;

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: ClientTestimonial;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full min-h-[420px] flex-col overflow-hidden border border-[#E5E2DA] bg-white p-7 transition-all duration-300 hover:border-[#E50069]/40 hover:shadow-[0_20px_60px_-30px_rgba(229,0,105,0.25)] md:p-9">
      {/* Decorative number */}

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-5 select-none font-serif text-[7rem] font-black leading-none opacity-10"
        style={{
          color: "transparent",
          WebkitTextStroke: `2px ${BRAND_PINK}`,
        }}
      >
        {number}
      </span>

      {/* Client label */}

      <div className="relative z-10 mb-7 flex items-start gap-3">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#E50069]" />

        <p className="max-w-[85%] text-[11px] font-bold uppercase leading-relaxed tracking-[0.15em] text-[#4A4A47]">
          {testimonial.client}
        </p>
      </div>

      {/* Quote icon */}

      <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E50069]/10">
        <Quote className="h-6 w-6 text-[#E50069]" strokeWidth={1.8} />
      </div>

      {/* Testimonial */}

      <blockquote className="relative z-10 mb-10 flex-1">
        <p className="font-serif text-[clamp(1.05rem,1.5vw,1.3rem)] italic leading-[1.7] text-black">
          “{testimonial.quote}”
        </p>
      </blockquote>

      {/* Attribution */}

      <div className="relative z-10 flex items-start gap-4 border-t border-[#E5E2DA] pt-6">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E50069] text-white"
          aria-hidden="true"
        >
          <UserRound className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <p className="font-semibold leading-snug text-black">
            {testimonial.name}
          </p>

          <p className="mt-1 text-sm leading-relaxed text-[#4A4A47]">
            {testimonial.role}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-[#4A4A47]">
            {testimonial.organization}

            {testimonial.location &&
              testimonial.location !== testimonial.organization &&
              ` · ${testimonial.location}`}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   TESTIMONIALS CAROUSEL
========================================================= */

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const total = testimonials.length;

  /* =======================================================
     GET CARDS
  ======================================================= */

  const getCards = useCallback((): HTMLElement[] => {
    const container = scrollRef.current;

    if (!container) return [];

    return Array.from(container.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
  }, []);

  /* =======================================================
     MEASURE VISIBLE CARDS
  ======================================================= */

  const updateVisibleCount = useCallback(() => {
    const container = scrollRef.current;

    if (!container) return;

    const cards = getCards();

    if (cards.length === 0) return;

    const containerWidth = container.clientWidth;

    const cardWidth = cards[0].getBoundingClientRect().width;

    const styles = window.getComputedStyle(container);

    const gap = parseFloat(styles.columnGap || styles.gap) || 0;

    const count = Math.max(
      1,
      Math.floor((containerWidth + gap + 1) / (cardWidth + gap)),
    );

    setVisibleCount(Math.min(count, total));
  }, [getCards, total]);

  /* =======================================================
     SCROLL POSITION
  ======================================================= */

  const getCardScrollPosition = useCallback(
    (index: number): number => {
      const container = scrollRef.current;
      const cards = getCards();

      if (!container || !cards[index]) return 0;

      const card = cards[index];

      const containerRect = container.getBoundingClientRect();

      const cardRect = card.getBoundingClientRect();

      return container.scrollLeft + cardRect.left - containerRect.left;
    },
    [getCards],
  );

  /* =======================================================
     SYNC ACTIVE INDEX
  ======================================================= */

  const syncActiveIndex = useCallback(() => {
    const container = scrollRef.current;

    if (!container || total === 0) return;

    const cards = getCards();

    if (cards.length === 0) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    const currentScroll = container.scrollLeft;

    /*
      At the end of the carousel, the last visible
      group becomes the active position.

      Example with 5 testimonials:

      Desktop:
      [1,2] [2,3] [3,4] [4,5]

      Mobile:
      [1] [2] [3] [4] [5]
    */

    const maxStartIndex = Math.max(0, total - visibleCount);

    if (maxScroll <= SCROLL_TOLERANCE || currentScroll <= SCROLL_TOLERANCE) {
      setActiveIndex(0);
      return;
    }

    if (currentScroll >= maxScroll - SCROLL_TOLERANCE) {
      setActiveIndex(maxStartIndex);
      return;
    }

    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let index = 0; index <= maxStartIndex; index++) {
      const position = Math.min(getCardScrollPosition(index), maxScroll);

      const distance = Math.abs(position - currentScroll);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    }

    setActiveIndex(closestIndex);
  }, [getCards, getCardScrollPosition, total, visibleCount]);

  /* =======================================================
     SCROLL TO INDEX
  ======================================================= */

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollRef.current;

      if (!container || total === 0) return;

      const maxStartIndex = Math.max(0, total - visibleCount);

      const nextIndex = Math.max(0, Math.min(index, maxStartIndex));

      const maxScroll = Math.max(
        0,
        container.scrollWidth - container.clientWidth,
      );

      const targetLeft = Math.max(
        0,
        Math.min(getCardScrollPosition(nextIndex), maxScroll),
      );

      container.scrollTo({
        left: targetLeft,
        behavior: reduceMotion ? "instant" : "smooth",
      });

      setActiveIndex(nextIndex);
    },
    [total, visibleCount, reduceMotion, getCardScrollPosition],
  );

  /* =======================================================
     HANDLE SCROLL
  ======================================================= */

  const handleScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      syncActiveIndex();
      scrollFrameRef.current = null;
    });
  }, [syncActiveIndex]);

  /* =======================================================
     RESIZE OBSERVER
  ======================================================= */

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const observer = new ResizeObserver(() => {
      updateVisibleCount();
      syncActiveIndex();
    });

    observer.observe(container);

    const cards = getCards();

    cards.forEach((card) => {
      observer.observe(card);
    });

    updateVisibleCount();
    syncActiveIndex();

    return () => {
      observer.disconnect();
    };
  }, [getCards, updateVisibleCount, syncActiveIndex]);

  /* =======================================================
     CLEAN UP ANIMATION FRAME
  ======================================================= */

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
  };

  /* =======================================================
     DERIVED STATE
  ======================================================= */

  const maxStartIndex = Math.max(0, total - visibleCount);

  const canGoBack = activeIndex > 0;

  const canGoForward = activeIndex < maxStartIndex;

  const progressCount = maxStartIndex + 1;

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (total === 0) {
    return null;
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="what-clients-say"
      className="scroll-mt-24 overflow-hidden bg-[#F2F2F2] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <WordReveal
              text="What clients say."
              as="h2"
              stagger={0.08}
              highlight={["clients"]}
              className="mb-5 flex flex-wrap font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-black"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl text-base leading-relaxed text-[#4A4A47]"
            >
              Partnerships built on trust, collaboration and work that delivers.
            </motion.p>
          </div>

          {/* Navigation */}

          <div className="flex shrink-0 items-center gap-3">
            {/* Counter */}

            <span
              aria-live="polite"
              className="mr-3 text-xs font-semibold tabular-nums tracking-wider text-[#4A4A47]"
            >
              {String(activeIndex + 1).padStart(2, "0")}

              <span className="mx-2 text-[#C9C4B6]">/</span>

              {String(progressCount).padStart(2, "0")}
            </span>

            {/* Previous */}

            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={!canGoBack}
              aria-label="Previous testimonials"
              className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Next */}

            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={!canGoForward}
              aria-label="Next testimonials"
              className="flex h-12 w-12 items-center justify-center bg-[#E50069] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-[#E50069] disabled:hover:text-black"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                delay: Math.min(index * 0.08, 0.3),
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)]"
              aria-label={`Testimonial ${index + 1} of ${total}`}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </div>

        {/* =================================================
            PROGRESS INDICATORS
        ================================================= */}

        <div
          className="mt-5 flex items-center gap-2"
          aria-label="Testimonial carousel navigation"
        >
          {Array.from({ length: progressCount }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to testimonial group ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50069] focus-visible:ring-offset-2 ${
                activeIndex === index
                  ? "w-12 bg-[#E50069]"
                  : "w-6 bg-black/15 hover:bg-black/35"
              }`}
            />
          ))}
        </div>

        {/* Helper text */}

        <p className="mt-5 text-xs text-[#4A4A47]">
          Scroll horizontally, swipe, or use the arrows to explore more client
          testimonials.
        </p>
      </div>
    </section>
  );
}
