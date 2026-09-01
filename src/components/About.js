import React from 'react'
import useScrollAnimation from './useScrollAnimation';

function About() {
    useScrollAnimation();

    return (
        <div style= {{textAlign: 'left'}}>
            <h1>About Me</h1>
            <p>
                Hi, I'm Andrea González! Welcome to my portfolio! I'm studying Computer Engineering
                at NYU with a minor in Robotics. I plan to go to law school after undergraduate and 
                pursue a Patent Law degree where I hope to support and empower women inventors by 
                helping them secure and develop their ideas.
            </p>


            <div>
            <section className="fade-in">Home</section>
            <section className="fade-in">Home</section>
            <section className="fade-in">Home</section>
            </div>

        </div>
    );
}
export default About;