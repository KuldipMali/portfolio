"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 font-(--font-body)">
        {/* Logo */}
        <h2 className="text-xs font-bold md:text-sm">KULDIP .</h2>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 text-xs md:flex">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`rounded-2xl px-3 py-1 tracking-widest transition duration-300 ${
                link.name === "HOME"
                  ? "text-(--primary)"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <button className="hidden rounded-full border px-6 py-2 text-xs uppercase transition duration-200 hover:bg-(--primary) hover:text-black md:block">
          Resume
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`tracking-widest transition ${
                link.name === "HOME"
                  ? "text-(--primary)"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button className="rounded-full border px-6 py-2 text-xs uppercase transition duration-200 hover:bg-(--primary) hover:text-black">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
