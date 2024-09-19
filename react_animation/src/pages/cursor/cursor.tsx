import { useRef } from "react";
import gsap from "gsap";
import "./cursor.css";
import MyCursorSvg from "./svg";
import knifesound from "./knife.mp3";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const knifeAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseMove = (
    dets: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
      duration: 0.3,
      ease: "back.out",
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const main = mainRef.current;
    const cursor = cursorRef.current;
    const knifeAudio = knifeAudioRef.current;

    if (!main || !cursor) return;

    if (knifeAudio) {
      knifeAudio.currentTime = 0; // Reset audio to the beginning
      knifeAudio.play();
    }

    // Create a red dot on click
    const dot = document.createElement("div");
    dot.classList.add("red-dot");
    dot.style.left = `${e.clientX - 10}px`;
    dot.style.top = `${e.clientY - 10}px`;

    // Create a 2nd red dot on click
    const dot2 = document.createElement("div");
    dot2.classList.add("red-dot");
    dot2.style.left = `${e.clientX - 18}px`;
    dot2.style.top = `${e.clientY - 18}px`;

    // Create a 2nd red dot on click
    const dot3 = document.createElement("div");
    dot3.classList.add("red-dot");
    dot3.style.left = `${e.clientX + 2}px`;
    dot3.style.top = `${e.clientY - 5}px`;

    main.appendChild(dot);
    main.appendChild(dot2);
    main.appendChild(dot3);

    // Animate the red dot
    gsap.to(dot, {
      scale: 1,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      onComplete: () => {
        dot.remove();
      },
    });

    gsap.to(dot2, {
      scale: 1,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        dot2.remove();
      },
    });
    gsap.to(dot3, {
      scale: 1,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        dot3.remove();
      },
    });

    // Rotate the cursor to 90 degrees
    gsap.to(cursor, {
      rotate: 90,
      duration: 0.3,
      ease: "back.out",
      onComplete: () => {
        // Return the cursor to the original rotation after 1 second (matching the dot animation)
        gsap.to(cursor, {
          rotate: 0,
          duration: 0.3,
          ease: "back.out",
        });
      },
    });
  };

  return (
    <div id="body">
      <audio ref={knifeAudioRef} src={knifesound} preload="auto"></audio>
      <div
        id="main"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        ref={mainRef}
      >
        <div id="cursor" ref={cursorRef}>
          <MyCursorSvg fill="black" width="30" height="30" />
        </div>
      </div>
    </div>
  );
}

export default Cursor;
