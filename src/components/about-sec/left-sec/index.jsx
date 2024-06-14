import React from "react";
import { FiDownload } from "react-icons/fi";
import { handleDownload } from "../../../utils/downloadLogic";
const LeftSection = () => {
  return (
    <div className="left-container">
      <div className="left-box">
        <div className="icon-box">
          <FiDownload />
        </div>
        <div className="rotate-text" >
          <svg
            viewBox="0 0 100 100"
            width="100"
            height="100"
            onClick={() => handleDownload("/cv.pdf", "Resume - SyedJunaid")} 
            style={{ cursor: "pointer" }}

          >
            <defs >
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
              <textPath xlinkHref="#circle" >
                CLICK . TO . DOWNLOAD . CV . NOW .
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
