import './index.scss';
import Typewriter from 'typewriter-effect';
import { useEffect, useRef, useState } from 'react';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import { Drift, Marquee } from '../Motion';

const nycTime = () =>
  new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
  });

const NycClock = () => {
  const [time, setTime] = useState(nycTime);
  useEffect(() => {
    const id = setInterval(() => setTime(nycTime()), 15000);
    return () => clearInterval(id);
  }, []);
  return <span>New York — {time}</span>;
};

const SplitWord = ({ text, start = 0, className = '' }) => (
  <span className={`split-word ${className}`} aria-label={text}>
    {[...text].map((ch, i) => (
      <span
        key={i}
        className="split-char"
        aria-hidden="true"
        style={{ '--i': start + i }}
      >
        {ch}
      </span>
    ))}
  </span>
);

const Home = () => {
  const heroRef = useRef(null);

  // A soft lamplight that follows the cursor across the hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
      hero.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    hero.addEventListener('pointermove', onMove);
    return () => hero.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section" ref={heroRef}>
        <div className="shutter shutter--top" aria-hidden="true" />
        <div className="shutter shutter--bottom" aria-hidden="true" />
        <div className="hero-smoke" aria-hidden="true" />
        <div className="light-leak" aria-hidden="true" />
        <div className="hero-lamp" aria-hidden="true" />

        <header className="hero-meta eyebrow">
          <span>A portfolio in two acts</span>
          <NycClock />
        </header>

        <div className="hero-body">
          <p className="eyebrow hero-kicker">Computer Engineer</p>
          <h1 className="hero-name">
            <SplitWord text="Andrea" />
            <SplitWord text="González" start={6} className="hero-name--italic" />
          </h1>
          <span className="scribble hero-scribble" aria-hidden="true">
            come on in, stay a while
          </span>

          <div className="hero-typed">
            <Typewriter
              options={{
                strings: [
                  'building robots that find their own way.',
                  'designing systems with care.',
                  'writing software, mostly after midnight.',
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 22,
                pauseFor: 2200,
              }}
            />
          </div>
        </div>

        <a href="#work" className="scroll-cue eyebrow">
          <span>Scroll</span>
          <span className="scroll-cue__line" />
        </a>
      </section>

      <div className="interlude" aria-hidden="true">
        <Drift speed={-120}>
          <Marquee
            className="interlude__line"
            duration={70}
            items={['Robotics', 'Embedded systems', 'Computer vision', 'Databases', 'Control theory']}
          />
        </Drift>
      </div>

      <section className="projects-section" id="work">
        <Projects />
      </section>

      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
