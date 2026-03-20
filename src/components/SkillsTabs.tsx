"use client";

import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: 95 },
      { name: "TypeScript", icon: "📘", level: 90 },
      { name: "Next.js", icon: "▲", level: 92 },
      { name: "Vue.js", icon: "💚", level: 85 },
      { name: "Tailwind CSS", icon: "🎨", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", level: 88 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "PostgreSQL", icon: "🐘", level: 82 },
      { name: "MongoDB", icon: "🍃", level: 80 },
      { name: "GraphQL", icon: "◼️", level: 78 },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "AWS", icon: "☁️", level: 80 },
      { name: "Docker", icon: "🐳", level: 78 },
      { name: "Kubernetes", icon: "☸️", level: 72 },
      { name: "CI/CD", icon: "🔄", level: 85 },
      { name: "Linux", icon: "🐧", level: 82 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: "📚", level: 90 },
      { name: "Figma", icon: "🎯", level: 85 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Jest", icon: "🃏", level: 82 },
      { name: "Webpack", icon: "📦", level: 78 },
    ],
  },
];

export function SkillsTabs() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.name
                ? "bg-[#22d3ee] text-black"
                : "bg-[#1f1f1f] text-[#a3a3a3] hover:text-[#22d3ee] border border-[#262626]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillCategories
          .find((c) => c.name === activeCategory)
          ?.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-[#1f1f1f] rounded-xl border border-[#262626] hover:border-[#22d3ee] transition-all hover:scale-105 group cursor-default"
            >
              <div className="text-3xl mb-2 group-hover:animate-bounce">{skill.icon}</div>
              <div className="font-semibold mb-1 text-sm">{skill.name}</div>
              <div className="w-full bg-[#262626] rounded-full h-1.5">
                <div
                  className="bg-[#22d3ee] h-1.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-xs text-[#a3a3a3] mt-1">{skill.level}%</div>
            </div>
          ))}
      </div>
    </>
  );
}
