"use client";

import { useGSAP } from "@/libs/gsap";
import { loaderAnimation } from "@/animations/loaderAnimation";
import { useEffect } from "react";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Disable browser scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Stop Lenis
    window.lenis?.stop();

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Restart Lenis
      window.lenis?.start();
    };
  }, []);

  useGSAP(() => {
    loaderAnimation(() => {
      setLoading(false);
    });
  });

  return (
    <div className="loader fixed inset-0 z-9999 flex items-center justify-center bg-[#090909]">
      <div className="text-center">
        <h1 className="loader-logo text-7xl font-bold text-white">नमस्ते</h1>

        <div className="mt-8 h-0.5 w-60 overflow-hidden rounded-full bg-zinc-800">
          <div className="loader-bar h-full origin-left scale-x-0 bg-[var(--primary)]" />
        </div>

        <p className="loader-text mt-5 text-xs uppercase tracking-[0.4em] text-zinc-500">
          Loading Experience...
        </p>
      </div>
    </div>
  );
};

export default Loader;
