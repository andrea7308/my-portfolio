import "./index.scss"
import React from 'react'
import Typewriter from "../Typewriter";
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <Typewriter text={"Hi, I'm Andrea\n Welcome to my portfolio!"} speed={50} delay={1800} />
          </h1>
          <h2>
            I'm a Computer Engineering major with a minor in Robotics 
            at NYU Tandon.
          </h2>
          
         <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offest={-50}
          className='flat-button'
          >
            CONTACT ME
          </ScrollLink>
        </div>

      </div>

  );
}

export default Home;