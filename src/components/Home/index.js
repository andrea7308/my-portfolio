
import "./index.scss"
import { Link } from 'react-router-dom'
import React from 'react'
import Typewriter from "../Typewriter";

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
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

      </div>

  );
}

export default Home