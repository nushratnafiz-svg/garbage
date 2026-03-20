import Link from "next/link";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "GraphQL", icon: "◼️" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop boards, and team features.",
    tags: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecasts, interactive maps, and severe weather alerts.",
    tags: ["Vue.js", "OpenWeather API", "Chart.js"],
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered content generation tool with custom prompts and export capabilities.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#22d3ee]">
            Portfolio
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="#about" className="hover:text-[#22d3ee] transition-colors">About</Link>
            <Link href="#skills" className="hover:text-[#22d3ee] transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-[#22d3ee] transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-[#22d3ee] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#22d3ee] font-medium mb-4 opacity-0 animate-fade-in-up">Hello, I&apos;m</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
            John Doe
          </h1>
          <p className="text-2xl text-[#a3a3a3] mb-8 opacity-0 animate-fade-in-up delay-200">
            Full Stack Developer & Designer
          </p>
          <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-300">
            I build exceptional digital experiences with modern technologies. 
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex gap-4 justify-center opacity-0 animate-fade-in-up delay-400">
            <Link
              href="#projects"
              className="px-8 py-3 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#06b6d4] transition-colors"
            >
              View Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-[#262626] rounded-lg hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#171717]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-[#22d3ee]">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#22d3ee] to-blue-600 flex items-center justify-center text-8xl">
              👨‍💻
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">I&apos;m a passionate developer</h3>
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                With over 5 years of experience in web development, I&apos;ve worked with startups 
                and enterprises to build scalable applications. I love turning ideas into reality 
                through clean, efficient code.
              </p>
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                When I&apos;m not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22d3ee]">5+</div>
                  <div className="text-sm text-[#a3a3a3]">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22d3ee]">50+</div>
                  <div className="text-sm text-[#a3a3a3]">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22d3ee]">30+</div>
                  <div className="text-sm text-[#a3a3a3]">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            My <span className="text-[#22d3ee]">Skills</span>
          </h2>
          <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies throughout my career
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 bg-[#1f1f1f] rounded-xl border border-[#262626] hover:border-[#22d3ee] transition-colors group cursor-default"
              >
                <div className="text-4xl mb-3 group-hover:animate-float">{skill.icon}</div>
                <div className="font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-[#171717]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="text-[#22d3ee]">Projects</span>
          </h2>
          <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-[#1f1f1f] rounded-2xl border border-[#262626] overflow-hidden hover:border-[#22d3ee] transition-colors group"
              >
                <div className="h-48 bg-gradient-to-br from-[#262626] to-[#1f1f1f] flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  💼
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#a3a3a3] mb-4">{project.description}</p>
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
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-[#22d3ee] hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Get In <span className="text-[#22d3ee]">Touch</span>
          </h2>
          <p className="text-[#a3a3a3] text-center mb-12">
            Have a project in mind? Let&apos;s talk!
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-[#262626] rounded-lg focus:border-[#22d3ee] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#1f1f1f] border border-[#262626] rounded-lg focus:border-[#22d3ee] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-[#1f1f1f] border border-[#262626] rounded-lg focus:border-[#22d3ee] focus:outline-none transition-colors"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-[#1f1f1f] border border-[#262626] rounded-lg focus:border-[#22d3ee] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#06b6d4] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#a3a3a3] text-sm">
            © 2026 John Doe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[#a3a3a3] hover:text-[#22d3ee] transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-[#a3a3a3] hover:text-[#22d3ee] transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-[#a3a3a3] hover:text-[#22d3ee] transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
