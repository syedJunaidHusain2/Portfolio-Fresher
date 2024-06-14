import { useEffect } from "react";
import AboutSection from "./components/about-sec";
import ContactSection from "./components/contact-section";
import FooterSection from "./components/footer";
import Hero from "./components/hero";
import MyAchivement from "./components/my-achivement";
import Navbar from "./components/navbar";
import RecentWork from "./components/recent-work";
import ScrollTopBtn from "./components/scroll-top-btn";
import SkillSection from "./components/skill-section";

function App() {


  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <SkillSection />
      <AboutSection />
      <RecentWork />
      <MyAchivement />
      <ContactSection />
      <FooterSection />
      <ScrollTopBtn />
    </div>
  );
}

export default App;
