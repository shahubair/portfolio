"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Layers, Zap, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "doc-intel",
    title: "Document Intelligence System",
    subtitle: "RAG + LLMs + Vector Search",
    emoji: "🧠",
    color: "#ec4899",
    category: "AI / ML",
    year: "2024",
    description:
      "A production-grade Retrieval-Augmented Generation system built for DRDO. Enables semantic search and intelligent Q&A over large document corpora using state-of-the-art LLMs.",
    longDescription:
      "Built an end-to-end document intelligence pipeline processing thousands of documents. The system uses OCR for text extraction, generates dense embeddings via sentence transformers, indexes them in FAISS for sub-100ms retrieval, then feeds context to an LLM for precise answers. Achieved 40% memory reduction through smart chunking and caching strategies.",
    techStack: ["Python", "LangChain", "FAISS", "OpenAI API", "Tesseract OCR", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "OCR → Embeddings → Vector DB → LLM pipeline",
      "Semantic search across 10,000+ documents",
      "40% memory optimization",
      "Sub-second query latency",
    ],
    github: "https://github.com/shahubair",
    live: null,
    gradient: "from-pink-900/40 to-purple-900/20",
    borderHover: "#ec489940",
    featured: true,
  },
  {
    id: "chess",
    title: "Real-time Chess App",
    subtitle: "WebSockets · Node.js · Live Multiplayer",
    emoji: "♟️",
    color: "#00d4ff",
    category: "Full Stack",
    year: "2024",
    description:
      "A fully functional multiplayer chess application with real-time game state synchronization using WebSockets and Node.js backend.",
    longDescription:
      "Built a real-time chess platform supporting live multiplayer matches with sub-50ms move propagation. Features include room creation, spectator mode, game history, and move validation using chess.js. The WebSocket server handles concurrent rooms efficiently with event-driven architecture.",
    techStack: ["React", "Node.js", "Socket.io", "Express", "chess.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Real-time move synchronization",
      "Room-based multiplayer system",
      "Full chess rule enforcement",
      "Game history & replay",
    ],
    github: "https://github.com/shahubair",
    live: "https://chess.shahubair.dev",
    gradient: "from-cyan-900/30 to-blue-900/20",
    borderHover: "#00d4ff40",
    featured: true,
  },
  {
    id: "campus-connect",
    title: "Campus Connect",
    subtitle: "MERN · OAuth · GCP Deployed",
    emoji: "🏛️",
    color: "#a855f7",
    category: "Full Stack",
    year: "2023",
    description:
      "A college social platform connecting NIT Srinagar students with resources, events, and peer networking — deployed on Google Cloud Platform.",
    longDescription:
      "Campus Connect is a full-featured social platform built for university students. Implements OAuth 2.0 authentication, role-based access control, real-time notifications, and a feed algorithm. Deployed on GCP with CI/CD pipelines and horizontally scalable architecture.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "OAuth 2.0", "GCP", "Docker", "JWT"],
    features: [
      "OAuth 2.0 authentication",
      "Role-based access control",
      "GCP cloud deployment",
      "Real-time notifications",
    ],
    github: "https://github.com/shahubair",
    live: "https://campusconnect.shahubair.dev",
    gradient: "from-purple-900/30 to-violet-900/20",
    borderHover: "#a855f740",
    featured: false,
  },
];

function ProjectModal({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative glass rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          border: `1px solid ${project.color}30`,
          boxShadow: `0 0 60px ${project.color}20`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-br ${project.gradient}`}>
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
          />
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div
                className="text-4xl w-16 h-16 flex items-center justify-center rounded-xl border"
                style={{ borderColor: project.color + "30", background: project.color + "15" }}
              >
                {project.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded border"
                    style={{ color: project.color, borderColor: project.color + "30", background: project.color + "10" }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{project.year}</span>
                </div>
                <h3 className="font-display text-2xl font-black text-slate-100">{project.title}</h3>
                <p className="font-mono text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-300 transition-colors"
              data-hover
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <p className="text-slate-400 leading-relaxed font-body mb-6">{project.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={12} style={{ color: project.color }} />
              <span className="font-mono text-xs tracking-wider" style={{ color: project.color }}>
                KEY FEATURES
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <ArrowRight size={12} style={{ color: project.color + "60" }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Layers size={12} style={{ color: project.color }} />
              <span className="font-mono text-xs tracking-wider" style={{ color: project.color }}>
                TECH STACK
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded border"
                  style={{ color: project.color + "cc", borderColor: project.color + "25", background: project.color + "0d" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded border font-mono text-sm transition-all duration-300"
              style={{ borderColor: project.color + "30", color: project.color + "cc" }}
              data-hover
            >
              <Github size={14} />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded font-mono text-sm transition-all duration-300"
                style={{
                  background: project.color + "18",
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                }}
                data-hover
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, i }: { project: (typeof projects)[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: i * 0.12 }}
        whileHover={{ y: -6 }}
        className={`relative rounded-xl overflow-hidden cursor-pointer group ${
          project.featured ? "lg:col-span-1" : ""
        }`}
        style={{
          background: "rgba(10, 22, 40, 0.7)",
          border: "1px solid rgba(0,212,255,0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={() => setOpen(true)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = project.color + "40";
          e.currentTarget.style.boxShadow = `0 0 25px ${project.color}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Top accent */}
        <div
          className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="text-3xl w-12 h-12 flex items-center justify-center rounded-lg border"
              style={{ borderColor: project.color + "30", background: project.color + "10" }}
            >
              {project.emoji}
            </div>
            <div className="flex items-center gap-2">
              <span
                className="font-mono text-xs px-2 py-0.5 rounded border"
                style={{ color: project.color, borderColor: project.color + "25", background: project.color + "0a" }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-yellow-500/20 text-yellow-500/60 bg-yellow-500/05">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          <h3 className="font-display text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-slate-500 mb-3">{project.subtitle}</p>
          <p className="text-slate-400 text-sm font-body leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ color: project.color + "aa", background: project.color + "0a", border: `1px solid ${project.color}15` }}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="font-mono text-xs text-slate-600 px-2">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-slate-500 hover:text-slate-300 transition-colors"
                data-hover
              >
                <Github size={15} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  data-hover
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
            <span
              className="font-mono text-xs transition-all duration-300 flex items-center gap-1 opacity-0 group-hover:opacity-100"
              style={{ color: project.color }}
            >
              View details <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="font-mono text-xs text-cyber-blue/40 tracking-[0.3em]">03.</div>
            <div className="h-px w-12 bg-gradient-to-r from-cyber-blue/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-wider text-slate-100 section-line">
            PROJECTS
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl font-body">
            Selected works ranging from AI/ML systems to full-stack platforms.
            Click any card to explore the full technical breakdown.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
