import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-content-wrapper">
        <div className="contact-container">
          <div className="contact-heading">
            <span className="pac-dot"></span>
            <h1>Get in Touch</h1>
            <span className="pac-dot"></span>
          </div>

          <div className="contact-content">
            <p className="contact-description">
              Let's connect! Check out my profiles and my resume.
            </p>

            <div className="contact-links-grid">
              <a
                href="https://www.linkedin.com/in/dreagonzalezz/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card pixel-corners linkedin-card"
              >
                <div className="card-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <h3>LinkedIn</h3>
                <p>Connect with me professionally</p>
                <span className="card-link">Visit Profile →</span>
              </a>

              <a
                href="https://github.com/andrea7308"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card pixel-corners github-card"
              >
                <div className="card-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <h3>GitHub</h3>
                <p>Check out my projects and code</p>
                <span className="card-link">View Repositories →</span>
              </a>

              <a
                href="https://github.com/andrea7308/my-portfolio/blob/main/public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="contact-card pixel-corners resume-card"
              >
                <div className="card-icon">
                  <FontAwesomeIcon icon={faFile} />
                </div>
                <h3>Resume</h3>
                <p>Check out my resume</p>
                <span className="card-link">View Resume</span>
              </a>
            </div>

            <div className="contact-footer">
              <p className="footer-text">or email me at:</p>
              <a href="mailto:dreagon2010@gmail.com" className="email-link">
                dreagon2010@gmail.com
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
