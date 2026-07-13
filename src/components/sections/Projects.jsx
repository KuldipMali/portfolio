import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AI Interview Platform",
      category: "AI • Full Stack",
      description:
        "An AI-powered interview preparation platform with voice interaction, resume analysis, and personalized feedback.",
    },
    {
      title: "AskPDF",
      category: "RAG • LangChain",
      description:
        "Upload PDFs and chat with documents using embeddings, vector databases, and OpenAI models.",
    },
    {
      title: "Photography Portfolio",
      category: "Next.js",
      description:
        "A premium photography portfolio featuring smooth GSAP animations, image galleries, and a responsive design.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[var(--background)] py-32"
    >
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-20">
          <p className="font-[var(--font-body)] text-xs tracking-[0.35em] uppercase text-[var(--primary)]">
            PROJECTS
          </p>

          <h2 className="hero-text mt-4 text-6xl leading-none">
            Selected Work
          </h2>

          <p className="mt-6 max-w-2xl font-[var(--font-body)] text-zinc-400 leading-8">
            A selection of projects focused on AI, full-stack development, and
            creating exceptional digital experiences.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex items-center justify-between rounded-3xl border border-zinc-800 p-8 transition-all duration-300 hover:border-[var(--primary)]"
            >
              <div>
                <p className="font-[var(--font-body)] text-xs uppercase tracking-widest text-[var(--primary)]">
                  {project.category}
                </p>

                <h3 className="hero-text mt-3 text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-xl font-[var(--font-body)] leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              <button className="rounded-full border border-zinc-700 px-6 py-3 font-[var(--font-body)] text-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;