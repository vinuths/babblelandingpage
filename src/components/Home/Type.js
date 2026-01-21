import React from "react";
// import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      {/* <Typewriter
        options={{
          strings: ["Matrix Hr Technologies"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      /> */}

      <style jsx>{`
        .typewriter-container {
          width: 100%;
          text-align: left; /* align with other text */
          overflow-wrap: break-word;
          margin-top: 10px; /* add spacing so it doesn't overlap heading */
        }

        .typewriter-container span {
          display: inline-block;
          white-space: normal;
          font-size: clamp(1rem, 4vw, 1.5rem); /* responsive font size */
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .typewriter-container {
            text-align: center; /* center on mobile */
            margin-top: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default Type;
