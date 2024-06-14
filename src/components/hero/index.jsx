import React from "react";
import "./styles.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import whatsappBtn from "../../utils/whatsapBtn/index";
import EmailBtn from "../../utils/emailBtn";
import girl from "../../assets/images/girl.png";
import RightFirst from "./right-container/right-first";
import RightSec from "./right-container/right-sec";
import RightThird from "./right-container/right-third";
import arrow from "../../assets/images/media-line-top.svg";
import arrowbttm from "../../assets/images/media-line-bottom.svg";
import polygonArrow from "../../assets/images/Polygon-arrow.svg";
const Hero = () => {
  const section = "hero"
  return (
    <section className="hero-section" id="hero">
      <div className="main-container">
        <div className="collapse-div">
          <div className="left-box">
            <img src={arrow} alt="" />
            <ul className="wrapper">
              <li className="icon facebook">
                <span className="tooltip">GitHub</span>
                <a
                  href="https://github.com/syedjunaid7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="react-icon" />
                </a>
              </li>
              <li className="icon instagram">
                <span className="tooltip">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/syed-junaid-husain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="react-icon" />
                </a>
              </li>
              <li className="icon twitter">
                <span className="tooltip">Mail</span>
                <EmailBtn section={section}/>
              </li>
              <li className="icon whatsap">
                <span className="tooltip">Whatsap</span>
                <ImWhatsapp className="react-icon" onClick={whatsappBtn} />
              </li>
            </ul>
            <img src={arrowbttm} alt="" />
          </div>

          <div className="middle">
            <div className="heading main-text">
              <p className="animate__animated animate__fadeInDown  animate__slow 0.1s">
                Hellow, I am <span>👋</span>
              </p>
              <h1>
                <mark>React</mark> Developer.
              </h1>
            </div>
            <div style={{ position: "relative", display: "flex" }}>
              <div
                className="junaid-main animate__animated animate__fadeInDown  animate__slow 0.1s"
              >
                <div
                  className="position-relative"
                  style={{
                    transform: "translate3d(-12.575px, -4.81111px, 0px)",
                  }}
                >
                  <img
                    className="junaid-svg"
                    src={polygonArrow}
                    alt="Polygon-arrow"
                  />
                  <p className="jessica-biogi">Syed Junaid</p>
                </div>
              </div>
              <img src={girl} className="my-avatar animate__animated animate__fadeInUp"/>
            </div>
          </div>
        </div>
        <div className="right-main">
          <RightFirst />
          <RightSec />
          <RightThird />
        </div>
      </div>
    </section>
  );
};

export default Hero;
