import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Marquee = () => {
  useGSAP(() => {
    gsap.to(".marquee", {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "none",
    });
  });
  const data = ["THINK", "PLAN", "DESIGN", "DEVELOP", "DEPLOY", "IMPROVE"];
  const marqueData = [...data, ...data, ...data];

  return (
    <div className="overflow-hidden py-10">
      <div className="marquee flex w-max items-center gap-10">
        {[...marqueData, ...marqueData].map((item, index) => (
          <React.Fragment key={index}>
            <span className="whitespace-nowrap text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {item}
            </span>

            <span className="text-5xl text-(--primary)">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
