import { gsap } from "@/libs/gsap";

export const loaderAnimation = (onComplete) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.to(".loader-bar", {
    scaleX: 1,
    duration: 2,
    ease: "power2.inOut",
  }).to(".loader", {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut",
  });
};
