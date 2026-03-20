"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: string;
}

interface ProjectFilterProps {
  projects: Project[];
}

const categories = ["All", "Web App", "E-Commerce", "Dashboard", "Mobile"];

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-[#22d3ee] text-black"
                : "bg-[#1f1f1f] text-[#a3a3a3] hover:text-[#22d3ee] border border-[#262626]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-[#1f1f1f] rounded-2xl border border-[#262626] overflow-hidden hover:border-[#22d3ee] transition-all hover:scale-[1.02] group"
          >
            <div className="h-48 bg-gradient-to-br from-[#262626] to-[#1f1f1f] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
              {project.image}
            </div>
            <div className="p-6">
              <div className="text-xs text-[#22d3ee] mb-2">{project.category}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[#a3a3a3] mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-[#262626] rounded-full text-[#a3a3a3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-[#22d3ee] hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
