"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-[#22d3ee] rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: isHovering ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        className="fixed w-8 h-8 border border-[#22d3ee]/50 rounded-full pointer-events-none z-[9998] transition-transform duration-300"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />
    </>
  );
}
