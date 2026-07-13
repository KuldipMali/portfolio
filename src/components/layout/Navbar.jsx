import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-60  backdrop-blur-xl shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5 font-(--font-body)">
        <div className="left flex ">
          <h2 className="font-bold text-xs">KULDIP .</h2>
        </div>
        <div className="right flex gap-10 text-xs">
          {navLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.href}
                className="px-3 py-1 rounded-2xl tracking-widest text-gray-400 transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="text-xs uppercase px-6 py-2 rounded-full border transition duration-200 hover:bg-[#BEE459] hover:text-black">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
