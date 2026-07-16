"use client";

import { heroAnimation } from "@/animations/heroAnimation";
import { useGSAP } from "@/libs/gsap";
import React, { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      heroAnimation(heroRef);
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="hero-glow absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary) opacity-20 blur-[150px] sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[38rem] lg:w-[38rem]" />

      <div className="heroContainer relative z-10 flex min-h-[100svh] items-center justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-2 sm:px-6 md:px-10 lg:px-16 text-center">
          {/* Subtitle */}
          <p className="hero-subtitle text-[10px] sm:text-xs uppercase tracking-[0.25rem] sm:tracking-[0.35rem] text-(--primary)">
            KULDIP MALI • FULL-STACK DEVELOPER
          </p>

          {/* Heading */}
          <h1 className="hero-title hero-text mt-6 max-w-6xl text-[2.9rem] leading-[0.95] font-semibold sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[0.9]">
            Turning ideas into scalable applications & user{" "}
            <span className="whitespace-nowrap text-(--primary) underline decoration-1 underline-offset-8 sm:underline-offset-12">
              <i>experiences</i>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:text-xl">
            Full-stack developer passionate about building modern, interactive,
            and AI-powered web experiences with clean code, thoughtful design,
            and exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="w-full rounded-full bg-(--primary) px-8 py-3 text-sm font-medium text-black sm:w-auto">
              View Work
            </button>

            <button className="w-full rounded-full border border-zinc-700 px-8 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-(--primary) hover:text-(--primary) sm:w-auto">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-6 justify-center rounded-full border border-(--primary)">
            <div className="scroll-dot mt-2 h-2.5 w-1.5 animate-bounce rounded-full bg-(--primary)" />
          </div>

          <span className="font-(--body) text-[10px] uppercase tracking-[0.35rem] text-zinc-400">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
