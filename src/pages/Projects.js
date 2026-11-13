import { Reveal, Drift } from "../components/Motion";
import "./Projects.scss";

const projects = [
  {
    id: "airline-system",
    title: "Airline Reservation System",
    slug: "INT. SERVER ROOM — NIGHT",
    timecode: "00:04:12:08",
    tag: "DATABASES · SQL · FLASK · PYTHON",
    description:
      "A web-based airline reservation system that allows users to search for flights, book tickets, and manage their reservations. The system is built using Flask for the backend and SQL for the database management. It provides a user-friendly interface for customers to view available flights, select seats, and make payments securely. The system also includes an admin panel for managing flight schedules, ticket pricing, and customer information.",
    stats: [
      { label: "ACCURACY", value: "±5 CM" },
      { label: "RANGE", value: "0.5–3 M" },
      { label: "TAG FAMILIES", value: "UP TO 15" },
    ],
    link: "https://github.com/andrea7308/airline-system.git",
  },
  {
    id: "rdt-rover",
    title: "Autonomous Rover",
    slug: "EXT. TEST FIELD — DAY",
    timecode: "00:17:45:21",
    tag: "ROBOTICS · SENSOR FUSION · PATH PLANNING · ROS2",
    description:
      "An autonomous rover project that utilizes sensor fusion and path planning algorithms to navigate through various terrains. The rover is equipped with a Realsense, web cameras, and IMU sensors to perceive its environment and make real-time decisions. The project involves implementing ROS2 for communication between different modules, allowing the rover to process sensor data, plan optimal paths, and avoid obstacles autonomously. I worked on integrating the sensors and developing the control algorithms to ensure smooth navigation and obstacle avoidance.",
    stats: [
      { label: "OBSTACLE AVOIDANCE", value: "90%+" },
      { label: "SENSOR RANGE", value: "0.5–5 M" },
      { label: "TOP SPEED", value: "1 M/S" },
    ],
    link: "https://docs.google.com/document/d/1rdK9TT7sOu4Yd1dGYwUfMYdxBGKj0hzOInrFYdXPmUo/edit?usp=sharing",
  },
  {
    id: "quadruped-pupper",
    title: "Quadruped Pupper Robot",
    slug: "INT. ROBOTICS LAB — LATE",
    timecode: "00:31:02:14",
    tag: "ROBOTICS · KINEMATICS · CONTROL SYSTEMS",
    description:
      "A quadruped robot project focusing on locomotion and control systems. The robot is designed to walk, trot, and perform basic maneuvers using a combination of kinematic modeling and control algorithms. The project involves the integration of sensors for balance and navigation. I worked on giving the robot the ability to track and follow a target using computer vision and sensor feedback, allowing it to navigate its environment autonomously. The robot's control system was optimized for stability and responsiveness using state estimation techniques and ROS-based control loops.",
    stats: [
      { label: "LEGS", value: "4" },
      { label: "DOF", value: "12" },
      { label: "TYPE", value: "QUADRUPED" },
    ],
    link: "https://github.com/andrea7308/ROB_2004_Final_Project.git",
  },
];

function Projects() {
  return (
    <div className="projects">
      <Reveal as="header" className="section-title">
        <span className="numeral">I.</span>
        <h2>
          Selected <em>work</em>
        </h2>
        <span className="scribble" aria-hidden="true">things I've made</span>
        <span className="eyebrow">{String(projects.length).padStart(2, "0")} entries</span>
      </Reveal>

      <ol className="project-list">
        {projects.map((project, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <li
              key={project.id}
              className={`project-row ${fromLeft ? "project-row--left" : "project-row--right"}`}
            >
              <Drift speed={fromLeft ? 40 : -40}>
                <Reveal as="article" from={fromLeft ? "left" : "right"} className="project">
                  <span className="sprockets" aria-hidden="true" />
                  <span className="project-index" aria-hidden="true">
                    <small>Scene</small>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="project-body">
                    <p className="project-slug">{project.slug}</p>
                    <h3>{project.title}</h3>
                    <p className="project-category eyebrow">{project.tag}</p>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-foot">
                      {project.link && (
                        <a
                          className="project-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn more <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      <span className="project-timecode" aria-hidden="true">
                        TC {project.timecode}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </Drift>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Projects;
