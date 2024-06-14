import "./styles.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="footer-box">
        <div className="navbar__logo">
          <img src={logo} alt="junaid-logo" />
        </div>
        <div className="link-box">
          <p>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              offset={5}
              duration={500}
            >
              Skills
            </Link>
          </p>
          <p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              About
            </Link>
          </p>
          <p>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Projects
            </Link>
          </p>
          <p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-5}
              duration={500}
            >
              Contacts
            </Link>
          </p>
        </div>
        <p className="disc">
          © 2024 All rights reserved by <span>Syed Junaid</span>
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
