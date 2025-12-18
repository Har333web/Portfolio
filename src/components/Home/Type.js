import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Work With PHP",
          "React JS Developer",
          "Go With UI",
          "Know About Many Library",
          "Also Work In Canva",
          "Comfortable With Backend"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25
      }}
    />
  );
}

export default Type;
