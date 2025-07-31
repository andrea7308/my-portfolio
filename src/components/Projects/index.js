import React from "react";

function Projects() {
    return (
        <section className="projects">
            <a href="https://github.com/andrea7308" 
            target="_blank"
            rel="noopener noreferrer">
                <h2>My Projects</h2>
            </a>
            <div className="project-list">
                <div className="project">
                    <h3>Project 1 - April Tag Detection</h3>
                    <p>In my work this past semester with the NYU Robotic Design, I focused on using AprilTags to improve a robot's 
                        ability to recognize and locate objects in its environment. I set up a system
                        that could detect and distinguish between multiple AprilTags, allowing for 
                        accurate positioning within about ±5 cm. I programmed the camera to read tags 
                        from 0.5 to 3 meters away and worked on implementing transformations between 
                        the robot and tag positions for consistent spatial alignment. To make it 
                        versatile, I configured ROS to support multiple tag families and sizes, so 
                        the system could handle up to 15 tags at different scales. This setup is expected to 
                        allow the robot to navigate the terrain at the NASA Lunarbotics Competetition this 
                        upcoming Spring.</p>
                </div>
                <div className="project">
                    <h3>Project 2 - Autonomy</h3>
                    <p>Last semester I worked on the NYU Robotic Design Team to develop the autonomy for 
                        the rover. I developed and implemented algorithms that enabled robots to navigate 
                        complex environments without human intervention, utilizing sensor fusion and path 
                        planning techniques. Our team developed algorithms that enabled a robot to navigate 
                        complex environments with over 90% success in obstacle avoidance tests, utilizing LiDAR 
                        and camera inputs to detect and respond to obstacles within a range of 0.5 to 5 meters. 
                        We designed a path-following system that allowed the robot to autonomously traverse 
                        designated routes while maintaining a speed of up to 1 meter per second. 
                    </p>


                </div>

            </div>
        </section>
    );
}

export default Projects;