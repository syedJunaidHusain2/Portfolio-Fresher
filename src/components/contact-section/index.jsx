import "./styles.scss";
import { FiPhone, FiMail, FiDownload } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import EmailBtn from "../../utils/emailBtn";
import { handleDownload } from "../../utils/downloadLogic";

const ContactSection = () => {
  const section = "contact";
  return (
    <section className="contact-section" id="contact">
      <div className="contact-box">
        <div className="heading-box">
          <h1
            className="main-heading-purple"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            {" "}
            Get In Touch
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
        </div>
        <div className="wrapper">
          <div className="wrapper-sec">
            <div
              className="icon-wrapper"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="icon-box">
                <FiPhone />
              </div>
              <div className="content">
                <p>Phone</p>
                <a href="tel:+91-6392789722" className="phone-link">
                  <h3 className="phone-number">+91-6392789722</h3>
                </a>
              </div>
            </div>
            <div
              className="icon-wrapper"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="icon-box">
                <FiMail />
              </div>
              <div className="content">
                <p>Mail</p>
                <EmailBtn section={section} />
              </div>
            </div>
            <div
              className="icon-wrapper"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="icon-box">
                <TfiLocationPin />
              </div>
              <div className="content">
                <p>Address</p>
                <h3>A108 - ABCZ East Avenue Sector 73, Noida</h3>
              </div>
            </div>
          </div>
          <div className="left-box">
            <div className="icon-box">
              <FiDownload />
            </div>
            <div className="rotate-text">
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                onClick={() => handleDownload("/cv.pdf", "Resume - SyedJunaid")}
                style={{ cursor: "pointer" }}
              >
                <defs>
                  <path
                    id="circle"
                    d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="9.5">
                  <textPath xlinkHref="#circle">
                    CLICK . TO . DOWNLOAD . CV . NOW .
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
