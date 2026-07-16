import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SNITCH",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "A scalable e-commerce platform featuring secure authentication, seller dashboard, product variants, inventory management, and optimized image delivery.",
      image: "/images/snitch.png",
      tech: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "ImageKit",
        "REST API",
      ],
      features: [
        "JWT authentication with Buyer & Seller roles",
        "Seller dashboard for product and order management",
        "Variant-based products with inventory tracking",
        "Optimized image delivery using ImageKit CDN",
        "RESTful backend architecture",
      ],
      github: "https://github.com/yourusername/snitch",
      live: "https://snitch.vercel.app",
    },

    {
      id: 2,
      title: "AI Arena",
      subtitle: "AI Model Comparison Platform",
      description:
        "An AI-powered platform that compares responses from multiple LLMs side-by-side using LangChain and LangGraph workflows with intelligent response evaluation.",
      image: "/images/aiarena.png",
      tech: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "LangChain",
        "LangGraph",
        "AI APIs",
      ],
      features: [
        "Compare multiple LLM responses simultaneously",
        "AI Judge System for ranking responses",
        "LangChain & LangGraph workflow orchestration",
        "Real-time AI response visualization",
        "Modular backend supporting multiple AI providers",
      ],
      github: "https://github.com/yourusername/ai-arena",
      live: "https://aiarena.vercel.app",
    },

    {
      id: 3,
      title: "Moodify",
      subtitle: "AI Emotion-Based Music Recommender",
      description:
        "A real-time emotion recognition application that analyzes facial expressions using MediaPipe and recommends music based on the detected mood.",
      image: "/images/moodify.png",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "MediaPipe", "Redis"],
      features: [
        "Real-time facial emotion detection",
        "Live camera integration using MediaDevices API",
        "Mood-based music recommendation engine",
        "Redis JWT blacklist authentication",
        "Responsive full-stack architecture",
      ],
      github: "https://github.com/yourusername/moodify",
      live: "https://moodify.vercel.app",
    },
    {
      id: 4,
      title: "RAM Photo Films",
      subtitle: "Professional Photography Portfolio",
      description:
        "A modern photography portfolio website designed to showcase wedding and cinematic photography. Built with smooth GSAP animations, optimized image delivery, and an immersive user experience.",
      image: "/images/rpf.png",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "GSAP",
        "Lenis",
        "Cloudinary",
        "JavaScript",
      ],
      features: [
        "Fully responsive premium portfolio design",
        "GSAP-powered scroll and reveal animations",
        "Lenis smooth scrolling experience",
        "Optimized Cloudinary image delivery",
        "Interactive gallery with lightbox",
        "Contact form integration",
        "Performance-focused Next.js architecture",
      ],
      github: "https://github.com/Kuldipmali05/Ram-Photo-Films",
      live: "https://ram-photo-films.vercel.app",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-(--primary) opacity-10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-(--primary)">
            FEATURED WORK
          </p>

          <h2 className="mt-5 text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-none">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            A collection of projects showcasing my expertise in full-stack
            development, AI integration, and creating scalable web applications.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid items-center gap-10 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-500 hover:border-(--primary)/40 hover:bg-zinc-900/50 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-(--primary) font-body">
                  {project.subtitle}
                </p>

                <h3 className="mt-4 text-4xl font-semibold font-heading">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 font-medium text-black transition hover:scale-105"
                  >
                    Live Demo
                    <FiArrowUpRight />
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-(--primary) hover:text-(--primary)"
                  >
                    GitHub
                    <FiGithub />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-20 text-center">
          <Link
            href="https://github.com/Kuldipmali05"
            target="_blank"
            className="inline-flex items-center gap-2 text-lg text-zinc-400 transition hover:text-(--primary)"
          >
            View More Projects
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
