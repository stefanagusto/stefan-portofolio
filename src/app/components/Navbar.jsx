"use client";
import React, { useState } from "react";
import Navlink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLink = [
  { title: "About", href: "#about" },
  { title: "Skill", href: "#skill" },
  { title: "Projects", href: "#project" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="mx-auto fixed top-5 left-0 right-0 z-20 bg-[#121212]/30 backdrop-blur-md  border border-white md:max-w-[1400px] rounded-full max-w-[95%]">
      <div className="flex flex-wrap items-center justify-center mx-auto px-4 py-3 md:max-w-[1400px]">
        <div className="block menu md:w-auto" id="navbar">
          <ul className="flex p-0 mt-0 md:p-0 md:flex-row md:space-x-14">
            {navLink.map((link, index) => (
              <li key={index}>
                <Navlink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLink} visible={navbarOpen ? true : false} />
      ) : null}
    </nav>
  );
}
