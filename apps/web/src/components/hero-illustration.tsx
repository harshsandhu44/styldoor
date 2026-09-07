'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { Illustration } from './illustration';

// Single parallax element on the page: the hero illustration drifts ~28px as the
// hero scrolls out. Static under prefers-reduced-motion.
export function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 28]);

  return (
    <div ref={ref}>
      <motion.div style={{ y }}>
        <Illustration
          src="/illustrations/barber.svg"
          alt="A stylist finishing a client's haircut."
          width={1144}
          height={715}
          priority
        />
      </motion.div>
    </div>
  );
}
