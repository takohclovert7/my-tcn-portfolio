import projects from "../data/projects";
import "./../styles/projects.css";

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
    >

      <div className="container">

        <div className="projects-header">

          <span>MY WORK</span>

          <h2>
            Featured Projects
          </h2>

          <p>
            A collection of applications,
            websites and digital products
            I have designed and developed.
          </p>

        </div>

        {projects.map((project, index) => (
                
          <div
            key={project.id}
            className={`project ${
              index % 2 !== 0
                ? "reverse"
                : ""
}`}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>
                {project.title}
              </h3>
               <div className="project-box glass">

                <h4>My Role</h4>

                <p>
                  {project.role}
                </p>

              </div>
              <div className="project-box glass">

                <h4>Overview</h4>

                <p>
                  {project.overview}
                </p>

              </div>

              <div className="project-box glass">

                <h4>Purpose</h4>

                <p>
                  {project.purpose}
                </p>

              </div>

              <div className="tech-stack">

                {project.technologies.map(
                  (tech, index) => (
                    <span
                      key={index}
                    >
                      {tech}
                    </span>
                  )
                )}

              </div>

              <div className="project-buttons">

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if ([2, 3].includes(project.id)) {
                      e.preventDefault();
                    }
                  }}
                >
                  {[2, 3].includes(project.id)
                    ? "Code on Private Repo"
                    : "View Code"}
                </a>

           <a
                  href={project.demoDoc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo Video
                </a> 
              
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;