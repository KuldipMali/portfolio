import { gsap } from "@/libs/gsap";

export const heroAnimation = (scope) => {
  const q = gsap.utils.selector(scope);

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(q(".hero-glow"), {
    scale: 0.8,
    opacity: 0,
    duration: 1.8,
  })
    .from(
      q(".hero-subtitle"),
      {
        y: 40,
        opacity: 0,
        delay: 2,
        duration: 0.6,
      },
      "-=1.2",
    )
    .from(
      q(".hero-title"),
      {
        y: 80,
        opacity: 0,
        duration: 1,
      },
      "-=0.2",
    )
    .from(
      q(".hero-description"),
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.6",
    )
    .from(
      q(".hero-buttons"),
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4",
    )
    .from(
      q(".hero-scroll"),
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
      },
      "-=0.5",
    );

  gsap.to(q(".hero-glow"), {
    scale: 1.08,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(q(".scroll-dot"), {
    y: 8,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut",
  });
};
