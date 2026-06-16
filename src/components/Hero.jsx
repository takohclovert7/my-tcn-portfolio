import "./../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            Available For Work
          </span>

          <h1>
           Takoh Clovert Nfua
          </h1>

          <h2>
            Full Stack Developer &
            Mobile App Engineer
          </h2>

          <p>
            I build beautiful digital
            experiences, scalable web
            applications and modern
            mobile solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              View Projects
            </a>

            <a href="#contact">
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image">

           <img
              src="../../tcn.png"
              alt="TCN Logo"
              className="logo-image-hero"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;