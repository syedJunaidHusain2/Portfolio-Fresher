import React from "react";

const RightThird = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };

  return (
    <div className="right-third">
      <div className="mouse" onClick={handleScrollDown}>
        <svg
          className="mouse-arrow-down"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
        >
          <g clipPath="url(#clip0_37_162)">
            <path
              d="M12 5L12 35"
              stroke="#FFDB59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 31L12 35"
              stroke="#FFDB59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 31L12 35"
              stroke="#FFDB59"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <defs>
            <clipPath id="clip0_37_162">
              <rect width="24" height="40" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <h2 className="scroll-down main-text">SCROLL DOWN</h2>
    </div>
  );
};

export default RightThird;
