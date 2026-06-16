import "./../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h3>Takoh Clovert Nfua</h3>

            <p>
              Full Stack Developer &
              Mobile App Engineer building
              modern digital experiences.
            </p>

          </div>

          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
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
              GitHub
            </a>

            <a
              href="https://wa.me/237679994243"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} TCN.
            All Rights Reserved.
          </p>

          <a href="#home" className="back-top">
            ↑ Back To Top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;