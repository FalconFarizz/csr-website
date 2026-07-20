import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter — counts up from 0 to `end` when scrolled into view.
 * Props:
 *   end       — number to count to
 *   suffix    — string appended after number (e.g. '+', '%')
 *   prefix    — string prepended before number
 *   duration  — animation duration in ms (default 2000)
 */
export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    // Handle non-numeric values like 'Daily'
    if (typeof end !== 'number') {
      setCount(end);
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  const display = typeof end !== 'number' ? end : count;

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
