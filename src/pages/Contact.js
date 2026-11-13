import React from "react";
import { Reveal, Drift } from "../components/Motion";
import "./Contact.scss";

const links = [
  {
    label: "LinkedIn",
    note: "Connect with me professionally",
    href: "https://www.linkedin.com/in/dreagonzalezz/",
  },
  {
    label: "GitHub",
    note: "Projects, code, and experiments",
    href: "https://github.com/andrea7308",
  },
  {
    label: "Resume",
    note: "The full story, on paper",
    href: "https://github.com/andrea7308/my-portfolio/blob/main/public/resume.pdf",
  },
];

const Contact = () => {
  return (
    <div className="contact">
      <Reveal as="header" className="section-title">
        <span className="numeral">II.</span>
        <h2>
          Get in <em>touch</em>
        </h2>
        <span className="scribble" aria-hidden="true">say hello!</span>
        <span className="eyebrow">Correspondence</span>
      </Reveal>

      <div className="contact-grid">
        <Drift speed={-30}>
          <Reveal from="left" className="contact-intro">
            <p className="contact-lede">
              Let's connect — about work, robots, or whatever's playing tonight.
            </p>
            <p className="eyebrow">Write to</p>
            <a href="mailto:dreagon2010@gmail.com" className="email-link">
              dreagon2010@gmail.com
            </a>
          </Reveal>
        </Drift>

        <ul className="contact-links">
          {links.map((link, i) => (
            <Reveal as="li" from="right" delay={i * 140} key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="contact-link__label">{link.label}</span>
                <span className="contact-link__note">{link.note}</span>
                <span className="contact-link__arrow" aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal as="footer" from="fade" className="credits eyebrow">
        © {new Date().getFullYear()} Andrea González
      </Reveal>
    </div>
  );
};

export default Contact;
