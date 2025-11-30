"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-2 md:bottom-6 right-2 md:right-6 p-3 rounded-full bg-white/20 backdrop-blur 
      text-white shadow-lg hover:bg-white/30 transition duration-300 flex items-center justify-center"
    >
      <ArrowUp className="h-4 w-4 md:h-6 md:w-6" />
    </button>
  );
}
