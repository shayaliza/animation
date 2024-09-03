import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedLine = () => {
  const lineRef = useRef(null);
  const secondLineRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { width: 0 },
      {
        width: "100%",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%", // Adjust this as needed
          end: "top 20%", // Adjust this as needed
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      secondLineRef.current,
      { width: 0 },
      {
        width: "10%",
        scrollTrigger: {
          trigger: secondLineRef.current,
          start: "top 80%", // Adjust this as needed
          end: "top 20%", // Adjust this as needed
          scrub: 1,
        },
        ease: "none",
      }
    );
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#FFC107",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          height: "4px",
          backgroundColor: "#000",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        ref={lineRef}
      />

      <div
        style={{
          position: "absolute",
          right: 0,
          height: "4px",
          backgroundColor: "#000",
          top: "40%",
          transform: "translateY(-50%)",
        }}
        ref={secondLineRef}
      />
      <div style={{ padding: "20px", color: "#000", fontSize: "24px" }}>
        <p style={{ marginTop: "20px" }}>Shayaliza</p>
      </div>
    </div>
  );
};

export default AnimatedLine;
