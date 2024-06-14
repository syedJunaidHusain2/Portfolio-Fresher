import "./styles.scss";

import LeftSection from "./left-sec";
import RightSec from "./right-sec";
const AboutSection = () => {
  return (
    <section className="about-container" id="about">
      <div className="main-container-about">
        
        <RightSec />
        <LeftSection />
      </div>
    </section>
  );
};

export default AboutSection;
