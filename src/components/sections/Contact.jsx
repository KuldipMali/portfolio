import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] py-32"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-10 text-center">
        <p className="font-[var(--font-body)] text-xs uppercase tracking-[0.35em] text-[var(--primary)]">
          CONTACT
        </p>

        <h2 className="hero-text mt-6 text-6xl leading-none">
          Let's build something meaningful together.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl font-[var(--font-body)] leading-8 text-zinc-400">
          Whether you have an exciting project, a startup idea, or just want to
          connect, I'd love to hear from you.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          <a
            href="mailto:your@email.com"
            className="rounded-full bg-[var(--primary)] px-8 py-4 font-[var(--font-body)] text-black transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="#"
            className="rounded-full border border-zinc-700 px-8 py-4 font-[var(--font-body)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="rounded-full border border-zinc-700 px-8 py-4 font-[var(--font-body)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            GitHub
          </a>
        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8">
          <p className="font-[var(--font-body)] text-sm text-zinc-500">
            © 2026 Kuldip Mali — Designed & Developed with Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;