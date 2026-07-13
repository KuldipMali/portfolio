import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--background)] py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[var(--primary)] opacity-10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-20 px-10">
        {/* Left */}
        <div className="w-1/2">
          <p className="mb-4 font-[var(--font-body)] text-xs uppercase tracking-[0.35em] text-[var(--primary)]">
            ABOUT ME
          </p>

          <h2 className="hero-text mb-8 text-6xl leading-none">
            I build modern web experiences with performance, AI, and thoughtful
            design.
          </h2>

          <p className="mb-6 max-w-xl font-[var(--font-body)] leading-8 text-zinc-400">
            I'm Kuldip Mali, a Full Stack Developer focused on building
            AI-powered products using Next.js, React, Node.js, Express, MongoDB,
            and modern cloud technologies.
          </p>

          <p className="max-w-xl font-[var(--font-body)] leading-8 text-zinc-500">
            I enjoy creating products that feel fast, look clean, and solve
            real-world problems. My goal is to combine beautiful interfaces with
            scalable backend systems and intelligent AI workflows.
          </p>

          <button className="mt-10 rounded-full bg-[var(--primary)] px-8 py-3 font-[var(--font-body)] text-sm text-black transition hover:scale-105">
            Download Resume
          </button>
        </div>

        {/* Right */}
        <div className="grid w-1/2 grid-cols-2 gap-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">
            <h3 className="mb-3 hero-text text-5xl text-[var(--primary)]">
              15+
            </h3>
            <p className="font-[var(--font-body)] text-sm text-zinc-400">
              Projects Completed
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">
            <h3 className="mb-3 hero-text text-5xl text-[var(--primary)]">
              MERN
            </h3>
            <p className="font-[var(--font-body)] text-sm text-zinc-400">
              Full Stack Expertise
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">
            <h3 className="mb-3 hero-text text-5xl text-[var(--primary)]">
              AI
            </h3>
            <p className="font-[var(--font-body)] text-sm text-zinc-400">
              LangChain · RAG · LLM Apps
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-xl">
            <h3 className="mb-3 hero-text text-5xl text-[var(--primary)]">
              2026
            </h3>
            <p className="font-[var(--font-body)] text-sm text-zinc-400">
              B.Tech Graduate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;