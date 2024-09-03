import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Exp() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "0" },
      {
        x: "0%",
        start: "top center",
        end: "top -150%",
        scrollTrigger: {
          trigger: textRef.current,

          scrub: 2,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-screen flex items-center justify-center" ref={textRef}>
      <h1
        className="text-[300px] font-bold text-gray-900"
        style={{ whiteSpace: "nowrap" }}
      >
        Experience
      </h1>
    </div>
  );
}

export default Exp;
