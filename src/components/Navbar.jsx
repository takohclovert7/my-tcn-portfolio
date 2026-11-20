
import { useState } from "react";
import "./../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">

        <a href="#home" className="nav-brand" onClick={closeMenu}>
          <img src="/tcn.png" alt="TCN Logo" className="logo-image" />

          <span className="brand-text">
            <strong>TCN</strong>
            <small>Software Developer</small>
          </span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Let's talk <span>↗</span>
        </a>

        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          <span></span>
          <span></span>
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? "active" : ""}`}
        >
          <div className="mobile-menu-header">
            <span>Explore</span>
            <span className="mobile-menu-indicator">
              Software Developer
            </span>
          </div>

          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
              onClick={closeMenu}
              className="mobile-nav-link"
              style={{ "--item-index": index }}
            >
              <span>0{index + 1}</span>
              {item.label}
              <span className="mobile-link-arrow">↗</span>
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-contact"
            onClick={closeMenu}
          >
            Let's work together <span>↗</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
