import React from "react";
import { SiGmail } from "react-icons/si";

const EmailBtn = ({ section }) => {
  const handleEmailClick = () => {
    const email = "syedjunaidreact@gmail.com";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <span onClick={handleEmailClick}>
      {section == "contact" ? (
        <h3>syedjunaidreact@gmail.com</h3>
      ) : (
        <SiGmail className="react-icon" onClick={EmailBtn} />
      )}
    </span>
  );
};

export default EmailBtn;
