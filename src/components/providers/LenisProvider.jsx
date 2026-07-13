"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/libs/gsap";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make Lenis available globally if needed
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

export default LenisProvider;
