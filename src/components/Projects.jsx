
import projects from "../data/projects";
import "./../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <span className="projects-eyebrow">A SELECTION OF MY WORK</span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A look at some of the applications and digital products I've
            worked on, the problems they explore, and the work behind them.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const isPrivateRepo = [2, 3].includes(Number(project.id));

            return (
              <article
                key={project.id}
                className={`project-item ${
                  index % 2 !== 0 ? "project-reverse" : ""
                }`}
              >
                <div className="project-visual">
                  <div className="project-image-frame">
                    <div className="project-image-topbar">
                      <span />
                      <span />
                      <span />
                      <small>PROJECT PREVIEW</small>
                    </div>

                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                      />
                    </div>

                    <span className="project-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-heading">
                    <span className="project-label">FEATURED PROJECT</span>
                    <h3>{project.title}</h3>
                  </div>

                  <div className="project-details">
                    <div className="project-detail">
                      <span className="detail-label">MY ROLE</span>
                      <p>{project.role}</p>
                    </div>

                    <div className="project-detail">
                      <span className="detail-label">THE OVERVIEW</span>
                      <p>{project.overview}</p>
                    </div>

                    <div className="project-detail">
                      <span className="detail-label">THE PURPOSE</span>
                      <p>{project.purpose}</p>
                    </div>
                  </div>

                  <div className="project-tech">
                    <span className="detail-label">BUILT WITH</span>

                    <div className="tech-stack">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-buttons">
                    {isPrivateRepo ? (
                      <span className="project-private">
                        <span className="private-dot" />
                        Code on private repository
                      </span>
                    ) : project.github ? (
                      <a
                        className="project-link project-link-primary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View source code <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}

                    {project.demoDoc && (
                      <a
                        className="project-link project-link-secondary"
                        href={project.demoDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch demo <span aria-hidden="true">▶</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-footer">
          <span className="projects-footer-line" />
          <p>More ideas, experiments and projects are always in progress.</p>
          <span className="projects-footer-line" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
