gsap.to(".marque", {
  transform: "translateX(-100%)",
  duration: 2,
  repeat: -1,
  ease: "none",
});

function marqueeAnimation() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque2", {
        transform: "translateX(-200%)",
        duration: 2,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque2 img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque2", {
        transform: "translateX(0%)",
        duration: 2,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque2 img", {
        rotate: 0,
      });
    }
  });
}

marqueeAnimation();
