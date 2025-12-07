"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("#");

  const SelectedSectionCss =
    "bg-white text-gray-900 hover:text-gray-900 hover:bg-white/70";

  return (
    <div className="flex justify-center items-center fixed top-3 z-50 mx-auto w-full">
      <nav className=
        "max-md:w-[93%] max-md:mx-auto flex justify-between !gap-0 md:gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur max-sm:!text-[10px]">

        <Link
          href="#"
          onClick={() => setActive("#")}
          className={`nav-item ${active === "#" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:!px-2`}
        >
          Home
        </Link>

        <Link
          href="#experience"
          onClick={() => setActive("#experience")}
          className={`nav-item ${active === "#experience" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:!px-2`}
        >
          Experience
        </Link>

        <Link
          href="#project"
          onClick={() => setActive("#project")}
          className={`nav-item ${active === "#project" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:!px-2`}
        >
          Projects
        </Link>

        <Link
          href="#about"
          onClick={() => setActive("#about")}
          className={`nav-item ${active === "#about" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:hidden max-md:!px-2`}
        >
          About
        </Link>
        <Link
          href="#about"
          onClick={() => setActive("#about")}
          className={`nav-item ${active === "#about" ? SelectedSectionCss : ""} md:hidden max-sm:!px-1 max-md:!px-2`}
        >
          Skills
        </Link>

        <Link
          href="#skill"
          onClick={() => setActive("#skill")}
          className={`nav-item ${active === "#skill" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:hidden max-md:!px-2`}
        >
          Skills
        </Link>
        <Link
          href="#certification"
          onClick={() => setActive("#certification")}
          className={`nav-item ${active === "#certification" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:hidden  max-md:!px-2`}
        >
          Certifications
        </Link>
        {/* <Link
          href="#certification"
          onClick={() => setActive("#certification")}
          className={`nav-item ${active === "#certification" ? SelectedSectionCss : ""} md:hidden max-md:!px-2`}
        >
          Certificates
        </Link> */}


        <Link
          href="#contact"
          onClick={() => setActive("#contact")}
          className={`nav-item ${active === "#contact" ? SelectedSectionCss : ""} max-sm:!px-1 max-md:!px-2`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
