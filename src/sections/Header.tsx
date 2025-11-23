"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("#");

  const SelectedSectionCss =
    "bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70";

  return (
    <div className="flex justify-center items-center fixed top-3 z-50 mx-auto w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur">

        <Link
          href="#"
          onClick={() => setActive("#")}
          className={`nav-item ${active === "#" ? SelectedSectionCss : ""}`}
        >
          Home
        </Link>

        <Link
          href="#project"
          onClick={() => setActive("#project")}
          className={`nav-item ${active === "#project" ? SelectedSectionCss : ""}`}
        >
          Projects
        </Link>

        <Link
          href="#about"
          onClick={() => setActive("#about")}
          className={`nav-item ${active === "#about" ? SelectedSectionCss : ""}`}
        >
          About
        </Link>

        <Link
          href="#skill"
          onClick={() => setActive("#skill")}
          className={`nav-item ${active === "#skill" ? SelectedSectionCss : ""}`}
        >
          Skills
        </Link>


        <Link
          href="#contact"
          onClick={() => setActive("#contact")}
          className={`nav-item ${active === "#contact" ? SelectedSectionCss : ""}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
