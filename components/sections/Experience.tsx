"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, Calendar, ChevronDown, Zap, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "DRDO",
    fullName: "Defence Research & Development Organisation",
    role: "Software Developer Intern",
    period: "2024 – 2025",
    type: "Government Research",
    logo: "🛡️",
    color: "#ec4899",
    accentColor: "#be185d",
    techStack: ["Python", "LangChain", "FAISS", "OCR", "Vector DB", "LLMs", "FastAPI", "PostgreSQL"],
    impact: [
      "Built end-to-end RAG-based document intelligence system for classified documents",
      "Engineered OCR → embeddings → vector DB → LLM pipeline with sub-second latency",
      "Optimized memory usage by 40% through chunking strategies and cache layers",
      "Enabled semantic search across 10,000+ defense documents",
    ],
    highlights: ["RAG Pipeline", "Defense-grade", "LLM Integration"],
    description:
      "Developed a production-grade document intelligence platform leveraging Retrieval-Augmented Generation (RAG) for the Indian defence sector. The system enables intelligent querying of large document corpora with high accuracy and low latency.",
  },
  {
    company: "iQuasar",
    fullName: "iQuasar Software Solutions",
    role: "Web Development Intern",
    period: "2024",
    type: "Software Company",
    logo: "⚡",
    color: "#00d4ff",
    accentColor: "#0284c7",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "REST API", "Redis", "Agile", "Git"],
    impact: [
      "Developed 3 full-stack MERN applications with production deployments",
      "Designed RESTful APIs handling 1000+ concurrent requests",
      "Optimized database queries reducing response time by 35%",
      "Worked in Agile sprints with daily standups and code reviews",
    ],
    highlights: ["MERN Stack", "API Design", "DB Optimization"],
    description:
      "Built robust web applications using the MERN stack in a fast-paced agile environment. Focused on performance optimization and clean API design, shipping features across multiple client-facing products.",
  },
];

function ExperienceCard({ exp, i }: { exp: (typeof experiences)[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
    >
      <div
        className="relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer group"
        style={{
          background: expanded
            ? `linear-gradient(135deg, rgba(10,22,40,0.9), ${exp.color}0a)`
            : "rgba(10, 22, 40, 0.5)",
          borderColor: expanded ? exp.color + "40" : "rgba(0,212,255,0.12)",
          boxShadow: expanded ? `0 0 30px ${exp.color}15` : "none",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Hover line top */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${exp.color}80, transparent)`,
            opacity: expanded ? 1 : 0,
          }}
        />

        {/* Header */}
        <div className="p-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0 border transition-all duration-300"
              style={{
                borderColor: exp.color + "30",
                background: exp.color + "12",
                boxShadow: expanded ? `0 0 15px ${exp.color}30` : "none",
              }}
            >
              {exp.logo}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                  {exp.company}
                </h3>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded border"
                  style={{ color: exp.color, borderColor: exp.color + "30", background: exp.color + "10" }}
                >
                  {exp.type}
                </span>
              </div>
              <div className="font-body text-sm text-slate-400">{exp.fullName}</div>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex items-center gap-1.5">
                  <Building2 size={12} className="text-slate-500" />
                  <span className="font-mono text-xs text-slate-500">{exp.role}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-slate-500" />
                  <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expand icon */}
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown size={18} style={{ color: exp.color }} />
          </motion.div>
        </div>

        {/* Tech badges */}
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {exp.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded"
              style={{
                color: exp.color + "cc",
                background: exp.color + "0d",
                border: `1px solid ${exp.color}20`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div
                  className="h-px mb-5"
                  style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }}
                />

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-body">
                  {exp.description}
                </p>

                {/* Impact */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={12} style={{ color: exp.color }} />
                    <span className="font-mono text-xs tracking-wider" style={{ color: exp.color }}>
                      KEY IMPACT
                    </span>
                  </div>
                  <div className="space-y-2">
                    {exp.impact.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.08 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: exp.color + "80" }} />
                        <span className="text-slate-400 text-sm font-body">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Highlight tags */}
                <div className="flex gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="font-mono text-xs px-3 py-1 rounded-full"
                      style={{
                        color: exp.color,
                        background: exp.color + "15",
                        border: `1px solid ${exp.color}30`,
                        boxShadow: `0 0 10px ${exp.color}15`,
                      }}
                    >
                      ◈ {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="font-mono text-xs text-cyber-blue/40 tracking-[0.3em]">02.</div>
            <div className="h-px w-12 bg-gradient-to-r from-cyber-blue/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-wider text-slate-100 section-line">
            EXPERIENCE
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl font-body">
            Hands-on experience building production systems — from defense research labs
            to agile software companies.
          </p>
        </motion.div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
