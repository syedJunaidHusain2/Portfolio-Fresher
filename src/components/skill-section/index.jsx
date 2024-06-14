import React, { useState } from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3, FaJira } from "react-icons/fa";
import { TbBrandJavascript, TbBrandBootstrap, TbSql } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiMui,
} from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import "./styles.scss";

const skillData = [
  {
    icon: <ImHtmlFive2 />,
    name: "HTML5",
    percentage: 85,
  },
  {
    icon: <FaCss3 />,
    name: "CSS3",
    percentage: 80,
  },
  {
    icon: <SiSass />,
    name: "SCSS",
    percentage: 75,
  },
  {
    icon: <SiMui />,
    name: "MUI",
    percentage: 70,
  },
  {
    icon: <TbBrandBootstrap />,
    name: "Bootstrap",
    percentage: 65,
  },
  {
    icon: <TbSql />,
    name: "SQL",
    percentage: 60,
  },
  {
    icon: <IoLogoGithub />,
    name: "GitHub",
    percentage: 55,
  },
  {
    icon: <FaJira />,
    name: "Jira",
    percentage: 50,
  },
  {
    icon: <GrReactjs />,
    name: "React",
    percentage: 89,
  },
  {
    icon: <SiNextdotjs />,
    name: "NextJs",
    percentage: 48,
  },
  {
    icon: <TbBrandJavascript />,
    name: "JavaScript",
    percentage: 84,
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    percentage: 77,
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    percentage: 73,
  },
];

const SkillSection = () => {
  const [hoverColor, setHoverColor] = useState("");
  const colorInsert = (name) => {
    switch (name) {
      case "React":
        setHoverColor("rgb(0, 89, 255)");
        break;
      case "NextJs":
        setHoverColor("white");
        break;
      case "JavaScript":
        setHoverColor("#efd81d");
        break;
      case "Tailwind":
        setHoverColor("#15b8c5");
        break;
      case "TypeScript":
        setHoverColor("#1573c0");
        break;
      default:
        break;
    }
  };
  return (
    <div className="Marquee-main overflow-hidden">
      <div className="Marquee-box" id="skill">
        <h3
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="main-heading-purple"
        >
          My Skills Stack
        </h3>
        <div className="skill-main">
          {skillData.slice(8).map(({ icon, name, percentage }, index) => (
            <div
              className="skill-item wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
              key={index}
              data-aos="zoom-out-left"
              data-aos-delay="50"
              data-aos-duration="3000"
            >
              <div
                className="skill-inner"
                onMouseEnter={() => colorInsert(name)}
              >
                <div className="icon-box">
                  {React.cloneElement(icon, { style: { color: hoverColor } })}
                </div>
                <div className="number">{percentage}%</div>
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="logos logos2">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div className="logos-slide" key={index}>
              <div className="marquee__content">
                {skillData.map(({ icon, name }, id) => (
                  <div
                    className="marquee-img-main"
                    data-aos="zoom-in"
                    key={id}
                  >
                    <h5>{icon}</h5>
                    <div className="skill-info">
                      <div className="skill-name">{name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillSection;
