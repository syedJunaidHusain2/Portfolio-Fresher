import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const RightFirst = () => {
  const countUpRef = useRef(null);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.start();
    }
  }, []);

  return (
    <div className="right-first main-text">
      <CountUp
        start={0}
        end={13.012}
        duration={2.75}
        suffix=" +"
        ref={countUpRef}
      >
        {({ countUpRef }) => (
          <h1 className="animate__animated animate__fadeInRight animate__slow 0.1s">
            <span ref={countUpRef} />
          </h1>
        )}
      </CountUp>
      <h4 className="animate__animated animate__fadeInRight">
        PROJECT <br />
        COMPLETED
      </h4>
    </div>
  );
};

export default RightFirst;
