import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";

function First() {
  const gsapRef = useRef(null);

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1000,
      duration: 2,
      delay: 1,
    });
  });

  //@context safe

  //   const boxRef = useRef()
  //   const {contextSafe} = useGSAP()
  // const rotateBox = contextSafe(() => {
  //   gsap.to(boxRef.current, {
  //     rotate: 360,
  //     duration: 2,
  //     delay: 1,
  //   })
  // })

  return (
    <div ref={gsapRef} className="container h-[300px] w-[300px] bg-red-900">
      <div className="box"></div>
    </div>
  );
}

export default First;

//@ using scope so only that box will animate which has parent class container
// useGSAP(() => {
//     gsap.to(".box", {
//       x: 1000,
//       duration: 2,
//       delay: 1,
//     });
//   },{
//     scope:".container"
//   });
