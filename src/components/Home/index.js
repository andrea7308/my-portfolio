import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { Link } from 'react-router-dom'
import React, { useState } from "react"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'n', 'd', 'r', 'e', 'a']
  const jobArray = "Computer Engineer".split("")

  return (
      <div className="container home-page">
        <div className="text-zone">
          <h1>Hi, <br /> I'm 
          <br />
          <AnimatedLetters letterClass={{letterClass}}
          strArray={nameArray}
          idx={15} />
          <br />
          Computer Engineer
          </h1>
          <h2>Computer Engineering student at New York University Tandon 
            School of Engineering with a minor in Robotics.
          </h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

      </div>

  );
  
}

export default Home