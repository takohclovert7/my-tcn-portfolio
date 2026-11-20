
import "./../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">TCN</span>
              <span>Takoh Clovert Nfua</span>
            </a>

            <p>
              Software developer passionate about building useful,
              intuitive and meaningful digital products for the real world.
            </p>

            <div className="footer-availability">
              <span />
              Open to opportunities
            </div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>

            <a
              href="https://github.com/takohclovert7"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="https://wa.me/237679994243"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <span>↗</span>
            </a>

            <a href="mailto:takohclovert7@gmail.com">
              Email <span>↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>TCN.</strong> All rights reserved.
          </p>

          <p className="footer-made">
            Designed & built with care.
          </p>

          <a href="#home" className="back-top">
            Back to top <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
