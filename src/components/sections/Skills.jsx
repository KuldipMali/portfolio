import React from "react";

const Skills = () => {
  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "REST APIs",
    "JWT Authentication",
    "Cloudinary",
    "Git & GitHub",
    "Docker",
    "LangChain",
    "RAG",
    "OpenAI API",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--background)] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-10">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.4em] text-[var(--primary)]">
            SKILLS
          </p>

          <h2 className="hero-text mt-5 text-6xl leading-none">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-[var(--font-body)] leading-8 text-zinc-400">
            I enjoy building scalable web applications using modern frontend,
            backend, cloud, and AI technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:bg-zinc-900"
            >
              <h3 className="font-[var(--font-body)] text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--primary)]">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;