
import "./../styles/skills.css";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "Frontend",
      description: "Building responsive, accessible and engaging web interfaces.",
      symbol: "</>",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      number: "02",
      category: "SERVER & LOGIC",
      title: "Backend",
      description: "Creating application logic, server-side features and APIs.",
      symbol: "{ }",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Firebase",
      ],
    },
    {
      number: "03",
      category: "DATA MANAGEMENT",
      title: "Databases",
      description: "Working with data storage and application databases.",
      symbol: "▤",
      skills: ["MongoDB", "MySQL", "Firestore"],
    },
    {
      number: "04",
      category: "MOBILE EXPERIENCES",
      title: "Mobile",
      description: "Developing mobile applications with a focus on usability.",
      symbol: "▯",
      skills: ["React Native", "Expo", "Android Development"],
    },
    {
      number: "05",
      category: "DEVELOPMENT WORKFLOW",
      title: "Tools",
      description: "Tools I use to build, test, manage and improve projects.",
      symbol: "⌘",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      number: "06",
      category: "GOING LIVE",
      title: "Deployment",
      description: "Platforms I use to deploy and make applications available.",
      symbol: "↗",
      skills: ["Vercel", "Netlify", "Render"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <span className="skills-eyebrow">WHAT I WORK WITH</span>

          <h2>
            My tools of the <span>trade.</span>
          </h2>

          <p>
            Different projects call for different tools. These are some of
            the technologies I use to turn ideas into working digital products.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill-card"
              key={group.number}
              style={{ "--card-order": index }}
            >
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-symbol" aria-hidden="true">
                  {group.symbol}
                </span>
              </div>

              <span className="skill-category">{group.category}</span>

              <h3>{group.title}</h3>

              <p className="skill-description">{group.description}</p>

              <div className="skill-divider" />

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-note">
          <span className="skills-note-mark">✳</span>
          <p>
            Always learning, experimenting and adding new tools to my workflow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
