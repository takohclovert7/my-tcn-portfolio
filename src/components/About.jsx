import "./../styles/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <div className="about-header">

          <span>ABOUT ME</span>

          <h2>
            My Background & Journey
          </h2>

          <p>
            My passion is building digital products
            that combine beautiful user experiences
            with scalable and reliable technology.
          </p>

        </div>

        <div className="about-grid">

          <div className="glass info-card">

            <h3>Professional Summary</h3>

            <p>
              I'm a Full Stack Developer specializing
              in modern web and mobile technologies.
              I enjoy solving real world problems
              through software and continuously
              learning new technologies.
            </p>

          </div>

          <div className="glass info-card">

            <h3>Education</h3>

            <p>
              Bachelor of Engineering in Computer Engineering
            </p>

            <span>
             Faculty of Engineering and Technology (FET) University of Buea Cameroon• Batch of 2021 - 2025
            </span>

          </div>

          {/* <div className="glass info-card">

            <h3>Certifications</h3>

            <ul>
              <li>React Development</li>
              <li>JavaScript Advanced Concepts</li>
              <li>Responsive Web Design</li>
            </ul>

          </div> */}

         <div className="glass info-card">

  <h3>Specializations</h3>

  <div className="skill">

    <div className="skill-header">
      <span>Frontend Development</span>
      <span>90%</span>
    </div>

    <div className="skill-bar">
      <div className="skill-progress frontend"></div>
    </div>

  </div>
    <div className="skill">

    <div className="skill-header">
      <span>Mobile Development</span>
      <span>90%</span>
    </div>

    <div className="skill-bar">
      <div className="skill-progress mobile"></div>
    </div>

  </div>

  <div className="skill">

    <div className="skill-header">
      <span>Backend Development</span>
      <span>65%</span>
    </div>

    <div className="skill-bar">
      <div className="skill-progress backend"></div>
    </div>

  </div>


  <div className="skill">

    <div className="skill-header">
      <span>UI / UX Design</span>
      <span>50%</span>
    </div>

    <div className="skill-bar">
      <div className="skill-progress design"></div>
    </div>

  </div>

  <div className="skill">

    <div className="skill-header">
      <span>Database Design</span>
      <span>60%</span>
    </div>

    <div className="skill-bar">
      <div className="skill-progress database"></div>
    </div>

  </div>

</div>

        </div>

      <div className="journey">

  <h3>My Journey</h3>

  <div className="timeline">

    <div className="timeline-item">
      <span>2021</span>
      <p>
        Began my software development journey by learning HTML, CSS, and JavaScript, building my first static websites and gaining a strong foundation in web development.
      </p>
    </div>

    <div className="timeline-item">
      <span>2022</span>
      <p>
        Learned React.js, database management, and backend development, enabling me to build complete web applications from front to back.
      </p>
    </div>

    <div className="timeline-item">
      <span>2022</span>
      <p>
        Developed several personal projects and portfolio websites to strengthen my React skills, improve problem solving abilities, and gain hands on experience.
      </p>
    </div>

    <div className="timeline-item">
      <span>2023</span>
      <p>
        Expanded into mobile app development using React Native, creating cross platform applications for Android and iOS.
      </p>
    </div>

    <div className="timeline-item">
      <span>2023</span>
      <p>
        Built full stack mobile and web applications integrating APIs, authentication systems, and cloud databases to simulate real world business solutions.
      </p>
    </div>

    <div className="timeline-item">
      <span>2025</span>
      <p>
        Successfully delivered my first client e-commerce application, applying professional development practices and real world business requirements.
      </p>
    </div>

    <div className="timeline-item">
      <span>2026</span>
      <p>
        Focused on building scalable web and mobile solutions, continuously improving my expertise in full-stack development, modern software architecture.
      </p>
    </div>

  </div>

</div>

      </div>

    </section>
  );
}

export default About;