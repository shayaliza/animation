import { useRef } from "react";
import gsap from "gsap";
import "./cursor.css";
import MyCursorSvg from "./svg";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div id="body">
      <div id="main" onMouseMove={handleMouseMove}>
        <div id="cursor" ref={cursorRef}>
          <MyCursorSvg fill="blue" width="30" height="30" />
        </div>
      </div>
    </div>
  );
}

export default Cursor;
