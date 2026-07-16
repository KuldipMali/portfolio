import { gsap } from "@/libs/gsap";

export const skillAnimation = (leftRow, rightRow, leftTween, rightTween) => {
  leftTween.current = gsap.to(leftRow, {
    x: "-50%",
    duration: 20,
    ease: "none",
    repeat: -1,
  });

  rightTween.current = gsap.fromTo(
    rightRow,
    {
      x: "-50%",
    },
    {
      x: "0%",
      duration: 20,
      ease: "none",
      repeat: -1,
    },
  );
};
