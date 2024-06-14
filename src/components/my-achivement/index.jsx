import "./styles.scss";
import { HiAcademicCap } from "react-icons/hi";
import { SiMicrosoftacademic } from "react-icons/si";

const AchievementsSection = () => {
  return (
    <div className="achievement-container padding-top">
      <div className="achievement-box">
        <div className="achievement-content">
          <h1
            className="main-heading-purple"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <SiMicrosoftacademic />
            My Experience
          </h1>
          <div
            className="exp-tab"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="time" data-aos="zoom-in" data-aos-duration="2100">
              2022 - 2023
            </div>
            <div className="title" data-aos="zoom-in" data-aos-duration="2100">
              FreeLancing
            </div>
            <div
              className="company"
              data-aos="zoom-in"
              data-aos-duration="2100"
              style={{ visibility: "hidden" }}
            >
              Techpotam PVT LTD, Noida
            </div>
          </div>
          <div className="exp-tab" data-aos="zoom-in" data-aos-duration="2000">
            <div className="time" data-aos="zoom-in" data-aos-duration="2100">
              2023 - 2024
            </div>
            <div className="title" data-aos="zoom-in" data-aos-duration="2100">
              Apprenticeship
            </div>
            <div
              className="company"
              data-aos="zoom-in"
              data-aos-duration="2100"
            >
              Eagle7WebApps PVT LTD, Allahabad
            </div>
          </div>
        </div>

        <div className="achievement-content">
          <h1
            className="main-heading-purple"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <HiAcademicCap /> My Education
          </h1>
          <div
            className="exp-tab"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div className="time" data-aos="zoom-in" data-aos-duration="2100">
              2018 - 2022
            </div>
            <div className="title" data-aos="zoom-in" data-aos-duration="2100">
              B.Tech
            </div>
            <div
              className="company"
              data-aos="zoom-in"
              data-aos-duration="2100"
            >
              Integral University, Lucknow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
