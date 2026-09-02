const projects = [
  {
    id: "airline-system",
    title: "Airline Reservation System",
    tag: "DATABASES · SQL ·FLASK · PYTHON",
    description:
      "In my work this past semester with the NYU Robotic Design, I focused on using AprilTags to improve a robot's ability to recognize and locate objects in its environment. I set up a system that could detect and distinguish between multiple AprilTags, allowing for accurate positioning within about ±5 cm. I programmed the camera to read tags from 0.5 to 3 meters away and worked on implementing transformations between the robot and tag positions for consistent spatial alignment. To make it versatile, I configured ROS to support multiple tag families and sizes, so the system could handle up to 15 tags at different scales. This setup is expected to allow the robot to navigate the terrain at the NASA Lunarbotics Competition this upcoming Spring.",
    stats: [
      { label: "ACCURACY", value: "±5 CM" },
      { label: "RANGE", value: "0.5–3 M" },
      { label: "TAG FAMILIES", value: "UP TO 15" },
    ],
    screen: { type: "image", note: "SCREENSHOT COMING SOON" },
    link: "https://github.com/andrea7308/airline-system.git",
  },
  {
    id: "rdt-rover",
    title: "Autonomous Rover",
    tag: "ROBOTICS · SENSOR FUSION · PATH PLANNING · ROS2",
    description:
      "Last semester I worked on the NYU Robotic Design Team to develop the autonomy for the rover. I developed and implemented algorithms that enabled robots to navigate complex environments without human intervention, utilizing sensor fusion and path planning techniques. Our team developed algorithms that enabled a robot to navigate complex environments with over 90% success in obstacle avoidance tests, utilizing LiDAR and camera inputs to detect and respond to obstacles within a range of 0.5 to 5 meters. We designed a path-following system that allowed the robot to autonomously traverse designated routes while maintaining a speed of up to 1 meter per second.",
    stats: [
      { label: "OBSTACLE AVOIDANCE", value: "90%+" },
      { label: "SENSOR RANGE", value: "0.5–5 M" },
      { label: "TOP SPEED", value: "1 M/S" },
    ],
    // This is the slot for the 3D robot render — see the "model3d" screen
    // type below. Drop a react-three-fiber <Canvas> straight into
    // .project-screen[data-screen="model3d"] when the model is ready.
    screen: { type: "model3d", note: "3D MODEL LOADING..." },
  },
  {
    id: "quadruped-pupper",
    title: "Quadruped Pupper Robot",
    tag: "ROBOTICS · KINEMATICS · CONTROL SYSTEMS",
    description:
      "A quadruped robot project focusing on locomotion and control systems. The robot is designed to walk, trot, and perform basic maneuvers using a combination of kinematic modeling and control algorithms. The project involves the integration of sensors for balance and navigation. I worked on giving the robot the ability to track and follow a target using computer vision and sensor feedback, allowing it to navigate its environment autonomously. The robot's control system was optimized for stability and responsiveness using state estimation techniques and ROS-based control loops.",
    stats: [
      { label: "LEGS", value: "4" },
      { label: "DOF", value: "12" },
      { label: "TYPE", value: "QUADRUPED" },
    ],
    screen: { type: "image", note: "SCREENSHOT COMING SOON" },
    link: "https://github.com/andrea7308/ROB_2004_Final_Project.git",
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="projects-heading">
      </div>

      <div className="project-list">
        {projects.map((project, i) => (
          <article className="project pixel-corners" key={project.id}>
            <div className="project-header">
              <span className="player-tag pixel-corners">P{i + 1}</span> 
              <span className="project-category">{project.tag}</span>
            </div>

            <div className="project-hover-link">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              )}
            </div>

            <div className="project-screen pixel-corners" data-screen={project.screen.type}>
              {/* Reserved slot: drop an <img>, <video>, or a <Canvas>
                  (react-three-fiber) in here once real media is ready. */}
              <div className="screen-scanlines"></div>
              <div className="screen-glow"></div>

              {project.screen.type === "model3d" && (
                <div className="loading-cube">
                  <div className="cube-face front"></div>
                  <div className="cube-face back"></div>
                  <div className="cube-face left"></div>
                  <div className="cube-face right"></div>
                  <div className="cube-face top"></div>
                  <div className="cube-face bottom"></div>
                </div>
              )}

              <p className="screen-note">{project.screen.note}</p>
            </div>

            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
