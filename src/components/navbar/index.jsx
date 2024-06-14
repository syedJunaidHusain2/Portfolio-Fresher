import "./styles.scss";
import React, { useState, useEffect } from "react";
import "animate.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <img src={logo} alt="junaid-logo" />
          </Link>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <div className={`navbar__toggle-icon ${isMenuOpen ? "open" : ""}`}>
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
          </div>
        </div>
        <ul
          className={`navbar__list ${
            isMenuOpen
              ? "navbar__list--open animate__animated animate__zoomIn"
              : ""
          }`}
        >
          <li className="navbar__item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`navbar__link`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              className={`navbar__link`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={`navbar__link `}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={`navbar__link`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={`navbar__link `}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
