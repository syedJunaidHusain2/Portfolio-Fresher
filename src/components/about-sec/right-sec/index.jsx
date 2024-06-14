const RightSec = () => {
  return (
    <div className="right-container">
      <div>
        <h1
          className="main-heading-purple"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          About Me
        </h1>
      </div>
      <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
        Hello there, my name is <span className="highlight">Syed Junaid</span>.
        I'm an <span className="highlight">Associate Front-End Developer</span>.
        I am a <span className="highlight">BTech graduate</span> who loves
        crafting <span className="highlight">dynamic user interfaces</span>,
        developing and maintaining
        <span className="highlight">
          {" "}
          dynamic and responsive user interfaces
        </span>
        , enhancing application performance and{" "}
        <span className="highlight"> SEO </span> by implementing{" "}
        <span className="highlight">server-side rendering</span>, and
        contributing to the <span className="highlight">CI/CD pipeline</span> by
        automating the build, test, and deployment processes.
      </p>
    </div>
  );
};

export default RightSec;
