import {gsap} from "@/libs/gsap"

export const cursorAnimation = (cursor) => {
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
  });

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    gsap.to(cursor, {
      x,
      y,
      duration: 0.55,
      ease: "power3.out",
    });
  });
};