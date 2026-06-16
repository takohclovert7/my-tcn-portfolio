import "./../styles/skills.css";

function Skills() {

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
          "TypeScript",
        "React",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
      ]
    },

    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Firebase"
      ]
    },

    {
      title: "Database",
      skills: [
        "MongoDB",
        "MySQL",
        "Firestore"
      ]
    },

    {
      title: "Mobile",
      skills: [
        "React Native",
        "Expo",
        "Android Development"
      ]
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman"
      ]
    },

    {
      title: "Deployment",
      skills: [
        "Vercel",
        "Netlify",
        "Render"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">

      <div className="container">

        <div className="skills-header">

          <span>MY SKILLS</span>

          <h2>
            Technologies & Tools
          </h2>

          <p>
            A collection of technologies,
            frameworks and tools I use
            to build modern digital products.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="glass skill-card"
            >

              <h3>
                {group.title}
              </h3>

              <div className="skill-tags">

                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;