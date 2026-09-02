import "./index.scss"
import Typewriter from "typewriter-effect"
import { useState } from "react"
import Projects from "../../pages/Projects"
import Contact from "../../pages/Contact"

const Home = () => {
  const [typingDone, setTypingDone] = useState(false)

  return (
    <div className="container home-page">
      <div className="home-scroll-track">
        <section className="hero-section">
          <div className="text-zone">
            <h1>
              <Typewriter
                options={{ autoStart: false, loop: false, delay: 55 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi I'm Andrea González")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm a Computer Engineer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Please check out my portfolio!")
                    .callFunction(() => setTypingDone(true))
                    .start()
                }}
              />
            </h1>

            {typingDone && (
              <p className="scroll-hint">scroll down to see my projects ↓</p>
            )}
          </div>
        </section>

        <section className="projects-section">
          <Projects />
        </section>

        <section className="contact-section">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default Home
