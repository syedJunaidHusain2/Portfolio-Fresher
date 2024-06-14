import "./styles.css";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollTopBtn = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollTop / (docHeight - windowHeight), 1); // Clamp to 0-1

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollProgress > 0 && (
        <div
          className="progress-circle-container"
          onClick={scrollToTop}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <svg className="progress-circle" viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${scrollProgress * 100}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <BsArrowUp className="arrow" />
        </div>
      )}
    </>
  );
};

export default ScrollTopBtn;
