import { useState } from "react";
import "./../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img
            src="/tcn.png"
            alt="TCN Logo"
            className="logo-image"
          />
          PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;