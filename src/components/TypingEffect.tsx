"use client";

import { useState, useEffect } from "react";

const titles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Tech Enthusiast",
];

export function TypingEffect() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <span className="text-2xl md:text-3xl font-medium text-[#22d3ee]">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
