import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-60  backdrop-blur-xl shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="left flex ">
          <h2 className="text-xl font-bold">Kuldip Mali .</h2>
        </div>
        <div className="right flex gap-20">
          {navLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                href={link.href}
                className="px-3 py-1 rounded-2xl text-gray-400 transition duration-300 hover:text-white"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
