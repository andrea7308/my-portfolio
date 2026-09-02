const projects = [
  {
    id: "airline-system",
    title: "Airline Reservation System",
    tag: "DATABASES · SQL ·FLASK · PYTHON",
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
    tag: "ROBOTICS · SENSOR FUSION · PATH PLANNING · ROS2",
    description:
      "An autonomous rover project that utilizes sensor fusion and path planning algorithms to navigate through various terrains. The rover is equipped with a Realsense, web cameras, and IMU sensors to perceive its environment and make real-time decisions. The project involves implementing ROS2 for communication between different modules, allowing the rover to process sensor data, plan optimal paths, and avoid obstacles autonomously. I worked on integrating the sensors and developing the control algorithms to ensure smooth navigation and obstacle avoidance.",
    stats: [
      { label: "OBSTACLE AVOIDANCE", value: "90%+" },
      { label: "SENSOR RANGE", value: "0.5–5 M" },
      { label: "TOP SPEED", value: "1 M/S" },
    ],
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

            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
