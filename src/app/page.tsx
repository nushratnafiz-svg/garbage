import Link from "next/link";
import { TypingEffect } from "@/components/TypingEffect";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const skills = [
  { name: "React", icon: "⚛️", level: 95 },
  { name: "TypeScript", icon: "📘", level: 90 },
  { name: "Next.js", icon: "▲", level: 92 },
  { name: "Node.js", icon: "🟢", level: 88 },
  { name: "Python", icon: "🐍", level: 85 },
  { name: "PostgreSQL", icon: "🐘", level: 82 },
  { name: "AWS", icon: "☁️", level: 80 },
  { name: "Docker", icon: "🐳", level: 78 },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "🛒",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative tool with real-time updates, drag-and-drop boards, and team features.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "✅",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecasts, interactive maps, and severe alerts.",
    tags: ["Vue.js", "OpenWeather API", "Chart.js"],
    image: "🌤️",
    link: "#",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered content generation with custom prompts and export capabilities.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "🤖",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics platform with engagement tracking and scheduled post management.",
    tags: ["Next.js", "Prisma", "Tailwind"],
    image: "📊",
    link: "#",
  },
  {
    title: "Real-time Chat App",
    description: "End-to-end encrypted messaging with voice calls and file sharing.",
    tags: ["Socket.io", "WebRTC", "Redis"],
    image: "💬",
    link: "#",
  },
];

const experience = [
  {
    company: "TechCorp Inc.",
    role: "Senior Full Stack Developer",
    period: "2023 - Present",
    description: "Leading development of enterprise SaaS platform serving 10k+ users.",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built MVP from scratch and scaled to 50k monthly active users.",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed 20+ client websites with modern frameworks.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    text: "Absolutely fantastic developer! Delivered our project on time and exceeded expectations. The attention to detail was remarkable.",
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow",
    text: "One of the best developers I've worked with. Great communication skills and technical expertise. Highly recommend!",
    avatar: "👨‍💻",
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    text: "Transformed our vision into reality. The code quality was excellent and the project was delivered ahead of schedule.",
    avatar: "👩‍💻",
  },
];

const blogPosts = [
  {
    title: "Building Scalable APIs with Next.js 14",
    date: "Feb 15, 2026",
    category: "Development",
    excerpt: "Learn how to build performant APIs using the latest Next.js features.",
  },
  {
    title: "Mastering TypeScript in 2026",
    date: "Jan 28, 2026",
    category: "Tutorial",
    excerpt: "Advanced TypeScript patterns that will level up your code.",
  },
  {
    title: "The Future of Web Development",
    date: "Jan 10, 2026",
    category: "Opinion",
    excerpt: "My thoughts on where web development is heading in the coming years.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#22d3ee]">
            JD
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="#about" className="hover:text-[#22d3ee] transition-colors">About</Link>
            <Link href="#skills" className="hover:text-[#22d3ee] transition-colors">Skills</Link>
            <Link href="#experience" className="hover:text-[#22d3ee] transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-[#22d3ee] transition-colors">Projects</Link>
            <Link href="#testimonials" className="hover:text-[#22d3ee] transition-colors">Testimonials</Link>
            <Link href="#blog" className="hover:text-[#22d3ee] transition-colors">Blog</Link>
            <Link href="#contact" className="hover:text-[#22d3ee] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#22d3ee]/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollAnimation>
            <p className="text-[#22d3ee] font-medium mb-4">Hello, I&apos;m</p>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-white via-[#22d3ee] to-white bg-clip-text text-transparent">
              John Doe
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="flex justify-center mb-6">
              <TypingEffect />
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <p className="text-lg text-[#a3a3a3] max-w-2xl mx-auto mb-10">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about creating elegant solutions to complex problems.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className="flex gap-4 justify-center">
              <Link
                href="#projects"
                className="px-8 py-3 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#06b6d4] transition-all hover:scale-105"
              >
                View Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border border-[#262626] rounded-lg hover:border-[#22d3ee] hover:text-[#22d3ee] transition-all hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </ScrollAnimation>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#a3a3a3] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#a3a3a3] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#171717]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="text-[#22d3ee]">Me</span>
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#22d3ee] to-blue-600 flex items-center justify-center text-[120px]">
                  👨‍💻
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#22d3ee] rounded-xl flex items-center justify-center text-4xl">
                  🚀
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div>
                <h3 className="text-2xl font-semibold mb-4">I&apos;m a passionate developer</h3>
                <p className="text-[#a3a3a3] leading-relaxed mb-6">
                  With over 5 years of experience in web development, I&apos;ve worked with startups 
                  and enterprises to build scalable applications. I love turning ideas into reality 
                  through clean, efficient code.
                </p>
                <p className="text-[#a3a3a3] leading-relaxed mb-8">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "5+", label: "Years Exp." },
                    { value: "50+", label: "Projects" },
                    { value: "30+", label: "Clients" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-[#1f1f1f] rounded-xl">
                      <div className="text-3xl font-bold text-[#22d3ee]">{stat.value}</div>
                      <div className="text-sm text-[#a3a3a3]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              My <span className="text-[#22d3ee]">Skills</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
              Technologies I work with daily
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <ScrollAnimation key={skill.name} delay={index * 50}>
                <div className="p-6 bg-[#1f1f1f] rounded-2xl border border-[#262626] hover:border-[#22d3ee] transition-all hover:scale-105 group cursor-default">
                  <div className="text-4xl mb-3 group-hover:animate-bounce">{skill.icon}</div>
                  <div className="font-semibold mb-2">{skill.name}</div>
                  <div className="w-full bg-[#262626] rounded-full h-2">
                    <div 
                      className="bg-[#22d3ee] h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-xs text-[#a3a3a3] mt-1">{skill.level}%</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-[#171717]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Work <span className="text-[#22d3ee]">Experience</span>
            </h2>
          </ScrollAnimation>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#262626]" />
            {experience.map((exp, index) => (
              <ScrollAnimation key={exp.company} delay={index * 150}>
                <div className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#22d3ee] rounded-full -translate-x-1/2" />
                  <div className={`ml-12 md:ml-0 md:w-[45%] p-6 bg-[#1f1f1f] rounded-2xl border border-[#262626] hover:border-[#22d3ee] transition-all ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}>
                    <div className="text-sm text-[#22d3ee] mb-2">{exp.period}</div>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <div className="text-[#a3a3a3] mb-3">{exp.company}</div>
                    <p className="text-sm text-[#a3a3a3]">{exp.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Featured <span className="text-[#22d3ee]">Projects</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-[#a3a3a3] text-center mb-12 max-w-2xl mx-auto">
              Here are some projects I&apos;ve worked on
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 100}>
                <div className="bg-[#1f1f1f] rounded-2xl border border-[#262626] overflow-hidden hover:border-[#22d3ee] transition-all hover:scale-[1.02] group">
                  <div className="h-48 bg-gradient-to-br from-[#262626] to-[#1f1f1f] flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                    {project.image}
                  </div>
                  <div className="p-6">
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
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-[#22d3ee] hover:underline"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-[#171717]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Client <span className="text-[#22d3ee]">Testimonials</span>
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} delay={index * 100}>
                <div className="p-6 bg-[#1f1f1f] rounded-2xl border border-[#262626] hover:border-[#22d3ee] transition-all">
                  <div className="text-5xl mb-4">{testimonial.avatar}</div>
                  <p className="text-[#a3a3a3] mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#22d3ee]">{testimonial.role}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Latest <span className="text-[#22d3ee]">Blog Posts</span>
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollAnimation key={post.title} delay={index * 100}>
                <div className="p-6 bg-[#1f1f1f] rounded-2xl border border-[#262626] hover:border-[#22d3ee] transition-all hover:scale-[1.02] group cursor-pointer">
                  <div className="text-xs text-[#22d3ee] mb-2">{post.category}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#22d3ee] transition-colors">{post.title}</h3>
                  <p className="text-sm text-[#a3a3a3] mb-4">{post.excerpt}</p>
                  <div className="text-xs text-[#a3a3a3]">{post.date}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#171717]">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Get In <span className="text-[#22d3ee]">Touch</span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-[#a3a3a3] text-center mb-12">
              Have a project in mind? Let&apos;s talk!
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
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
                className="w-full py-4 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-[#06b6d4] transition-all hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </ScrollAnimation>
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
            <Link href="#" className="text-[#a3a3a3] hover:text-[#22d3ee] transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
