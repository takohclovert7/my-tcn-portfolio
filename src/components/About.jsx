
import "./../styles/about.css";

function About() {
  const specializations = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive, intuitive interfaces with React, JavaScript and TypeScript.",
      tags: ["React.js", "TypeScript", "JavaScript"],
    },
    {
      number: "02",
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with practical features and thoughtful user experiences.",
      tags: ["React Native", "Expo", "Mobile UI"],
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "Working with APIs, authentication, databases and the server-side logic behind applications.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      number: "04",
      title: "Application Design",
      description:
        "Turning product ideas into organized interfaces and user-friendly application experiences.",
      tags: ["UI Design", "Responsive Design", "UX"],
    },
  ];

  const journey = [
    {
      date: "2021",
      title: "The beginning",
      description:
        "Started exploring software development, learning HTML, CSS and JavaScript and building my foundation in web development.",
    },
    {
      date: "2022 – 2023",
      title: "Exploring full-stack development",
      description:
        "Moved into React, backend development and databases, learning how the different parts of an application work together.",
    },
    {
      date: "2023 – 2024",
      title: "Moving into mobile development",
      description:
        "Expanded into React Native and began building mobile applications alongside my web development projects.",
    },
    {
      date: "2024 – 2025",
      title: "Academic milestone",
      description:
        "Completed my studies in Computer Engineering at the University of Buea, Faculty of Engineering and Technology.",
    },
    {
      date: "Today",
      title: "Building and improving",
      description:
        "Continuing to develop practical web and mobile solutions, strengthen my engineering skills and take on new challenges.",
    },
  ];

  return (
    <section id="about" className="about">

      <div className="container">

        {/* SECTION INTRO */}
        <div className="about-header">
          <span className="about-eyebrow">A LITTLE ABOUT ME</span>

          <h2>
            The person behind
            <span> the code.</span>
          </h2>

          <p>
            I'm a Computer Engineering graduate who enjoys building
            things with technology. Here's a little about my background,
            what I work on and how I got here.
          </p>
        </div>

        {/* PERSONAL BACKGROUND */}
        <div className="about-intro-grid">

          <div className="about-story-card">
            <span className="about-card-label">
              MY BACKGROUND
            </span>

            <h3>
              I enjoy turning ideas into things people can actually use.
            </h3>

            <p>
              My journey into software development started with
              curiosity about how websites and applications work.
              That curiosity gradually grew into a genuine interest
              in building digital products.
            </p>

            <p>
              Over time, I've worked across frontend, backend and
              mobile development, learning by building projects,
              experimenting with technologies and solving practical
              problems.
            </p>

            <p>
              I've also had the opportunity to gain experience
              during an ISP internship, where I worked on software
              projects alongside my technical learning.
            </p>

            <div className="about-personal-note">
              <span className="about-note-mark">“</span>
              <span>
                I'm always interested in learning something new
                and finding better ways to build useful software.
              </span>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="about-education-card">

            <div className="education-icon">
              <span>✦</span>
            </div>

            <span className="about-card-label">
              EDUCATION
            </span>

            <h3>Computer Engineering</h3>

            <p className="education-institution">
              University of Buea
            </p>

            <p className="education-faculty">
              Faculty of Engineering and Technology (FET)
            </p>

            <div className="education-divider"></div>

            <div className="education-details">
              <div>
                <span>Qualification</span>
                <strong>Bachelor of Engineering</strong>
              </div>

              <div>
                <span>Academic period</span>
                <strong>2021 – 2025</strong>
              </div>

              <div>
                <span>Completion</span>
                <strong>2024/2025 Academic Year</strong>
              </div>
            </div>

            <div className="education-footer">
              <span className="education-check">✓</span>
              Academic studies completed
            </div>

          </div>

        </div>

        {/* SPECIALIZATIONS */}
        <div className="about-specializations">

          <div className="about-subheading">
            <div>
              <span className="about-eyebrow">WHAT I DO</span>
              <h3>Areas I enjoy working in.</h3>
            </div>

            <p>
              Different parts of software development that
              interest me and shape the products I build.
            </p>
          </div>

          <div className="specialization-grid">

            {specializations.map((item) => (
              <div className="specialization-card" key={item.number}>

                <div className="specialization-top">
                  <span>{item.number}</span>
                  <span className="specialization-arrow">↗</span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <div className="specialization-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* JOURNEY */}
        <div className="about-journey">

          <div className="about-subheading journey-heading">
            <div>
              <span className="about-eyebrow">HOW IT STARTED</span>
              <h3>A journey of learning and building.</h3>
            </div>

            <p>
              Every project and new technology has been
              another step in my development journey.
            </p>
          </div>

          <div className="journey-list">

            {journey.map((item, index) => (
              <div className="journey-item" key={item.date}>

                <div className="journey-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="journey-content">

                  <span className="journey-date">
                    {item.date}
                  </span>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* CLOSING CTA */}
        <div className="about-closing">
          <div>
            <span className="about-eyebrow">ALWAYS MOVING FORWARD</span>
            <h3>There's always something new to build.</h3>
            <p>
              I'm open to meaningful opportunities, interesting
              projects and conversations with people who enjoy
              creating great things.
            </p>
          </div>

          <a href="#contact">
            Get in touch <span>↗</span>
          </a>
        </div>

      </div>

    </section>
  );
}

export default About;
