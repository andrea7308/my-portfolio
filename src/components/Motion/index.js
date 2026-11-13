import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.scss';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades + slides its children in the first time they enter the viewport.
 * from: 'up' | 'left' | 'right' | 'fade'
 */
export const Reveal = ({
  as: Tag = 'div',
  from = 'up',
  delay = 0,
  threshold = 0.15,
  className = '',
  children,
  ...rest
}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${from} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/**
 * Moves its children horizontally as the page scrolls.
 * speed: max pixels of travel; negative values drift the other way.
 */
export const Drift = ({ speed = 80, className = '', children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    let frame = null;
    const update = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the element's centre is at the bottom of the screen, +1 at the top
      const progress = Math.max(
        -1.5,
        Math.min(1.5, (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2))
      );
      // Keep travel small on phones so content never leaves the gutter
      const scale = window.innerWidth < 768 ? 0.3 : 1;
      el.style.setProperty('--drift', `${(progress * speed * scale).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`drift ${className}`}>
      {children}
    </div>
  );
};

/** A line of words gliding endlessly across the screen. */
export const Marquee = ({ items, reverse = false, duration = 60, className = '' }) => {
  const line = (hidden) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span className="marquee__item" key={i}>
          {item}
          <span className="marquee__sep">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${reverse ? 'marquee--reverse' : ''} ${className}`}
      style={{ '--marquee-duration': `${duration}s` }}
    >
      <div className="marquee__track">
        {line(false)}
        {line(true)}
      </div>
    </div>
  );
};
