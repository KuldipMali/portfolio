"use client";

import { useRef } from "react";
import { useGSAP } from "@/libs/gsap";
import { cursorAnimation } from "@/animations/cursorAnimation";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    cursorAnimation(cursorRef.current);
  });

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-[var(--primary)]"
    />
  );
};

export default Cursor;