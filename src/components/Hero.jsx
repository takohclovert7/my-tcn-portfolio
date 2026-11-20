
import "./../styles/hero.css";

function Hero() {
  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
  ];

  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        {/* LEFT: INTRODUCTION */}
        <div className="hero-left">

          <div className="hero-availability">
            <span className="availability-dot"></span>
            Open to new opportunities
          </div>

          <span className="hero-intro">
            Hello, I'm
          </span>

          <h1>
            Takoh Clovert
            <span>Nfua.</span>
          </h1>

          <h2>
            Software Developer
            <span className="hero-heading-accent">
              {" "}building for the real world.
            </span>
          </h2>

          <p className="hero-description">
            I enjoy turning ideas into useful digital products.
            I work across web and mobile development, creating
            applications that are practical, intuitive and
            enjoyable to use.
          </p>

          {/* TECHNOLOGIES */}
          <div className="hero-tech">
            <span className="hero-tech-label">WHAT I WORK WITH</span>

            <div className="hero-tech-list">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="hero-buttons">

            <a href="#projects" className="hero-btn-primary">
              Explore my work
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn-secondary">
              Let's talk
            </a>

          </div>

          <div className="hero-bottom-note">
            <span>Based in Cameroon</span>
            <span className="hero-note-divider"></span>
            <span>Working with ideas everywhere</span>
          </div>

        </div>

        {/* RIGHT: VISUAL COMPOSITION */}
        <div className="hero-right">

          <div className="hero-visual">

            {/* Background decoration */}
            <div className="hero-visual-circle"></div>
            <div className="hero-visual-grid"></div>

            {/* Main logo card */}
            <div className="hero-main-card">

              <div className="hero-card-top">
                <span className="hero-card-label">
                  DEVELOPER PROFILE
                </span>
                <span className="hero-card-number">
                  01 / 01
                </span>
              </div>

              <div className="hero-logo-wrap">
                <img
                  src="/tcn.png"
                  alt="TCN personal brand logo"
                  className="hero-logo"
                />
              </div>

              <div className="hero-card-bottom">
                <div>
                  <span className="hero-card-caption">
                    DESIGNING & BUILDING
                  </span>
                  <h3>Digital experiences.</h3>
                </div>

                <span className="hero-card-arrow">↗</span>
              </div>

            </div>

            {/* Floating technology card */}
            <div className="hero-floating-card hero-floating-top">
              <span className="floating-icon">{"</>"}</span>
              <div>
                <strong>Clean code</strong>
                <small>Built with purpose</small>
              </div>
            </div>

            {/* Floating availability card */}
            <div className="hero-floating-card hero-floating-bottom">
              <span className="floating-status"></span>
              <div>
                <strong>Ideas welcome</strong>
                <small>Let's build something</small>
              </div>
            </div>

            <span className="hero-decoration-plus">+</span>
            <span className="hero-decoration-star">✳</span>

          </div>

        </div>

      </div>

 
      <a href="#about" className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </a>

    </section>
  );
}

export default Hero;
