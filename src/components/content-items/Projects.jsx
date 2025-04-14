function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      type: "Web Application",
      description:
        "A React-based portfolio website showcasing my work & qualifications.",
      tech: ["React", "HTML", "CSS", "JavaScript", "Vite"],
      github: "github-link",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <h4 className="project-type">{project.type}</h4>
          <br />
          <p>
            <i>{project.description}</i>
          </p>
          <br />
          <div className="tech-stack">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">
                {"  " + tech}
              </span>
            ))}
          </div>
          <br />
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
