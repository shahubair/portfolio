"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    label: "AI / ML",
    color: "#ec4899",
    skills: [
      { name: "Python", level: 92 },
      { name: "LangChain", level: 85 },
      { name: "RAG Systems", level: 88 },
      { name: "FAISS / VectorDB", level: 82 },
      { name: "Prompt Engineering", level: 87 },
    ],
  },
  {
    label: "Full Stack",
    color: "#00d4ff",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    label: "Systems",
    color: "#a855f7",
    skills: [
      { name: "C++", level: 80 },
      { name: "Data Structures", level: 88 },
      { name: "System Design", level: 75 },
      { name: "Redis", level: 72 },
      { name: "Docker", level: 70 },
    ],
  },
];

const floatingSkills = [
  { name: "Python", x: 15, y: 20, color: "#ec4899", size: "lg" },
  { name: "React", x: 75, y: 15, color: "#00d4ff", size: "md" },
  { name: "Node.js", x: 45, y: 10, color: "#00ff9f", size: "md" },
  { name: "LangChain", x: 85, y: 45, color: "#ec4899", size: "md" },
  { name: "MongoDB", x: 10, y: 65, color: "#00d4ff", size: "sm" },
  { name: "FAISS", x: 60, y: 70, color: "#a855f7", size: "sm" },
  { name: "Redis", x: 30, y: 80, color: "#00d4ff", size: "sm" },
  { name: "Docker", x: 80, y: 75, color: "#00fff5", size: "sm" },
  { name: "PostgreSQL", x: 50, y: 50, color: "#a855f7", size: "md" },
  { name: "C++", x: 20, y: 45, color: "#ec4899", size: "sm" },
  { name: "Java", x: 90, y: 25, color: "#00ff9f", size: "sm" },
  { name: "TypeScript", x: 35, y: 35, color: "#00d4ff", size: "sm" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-xs text-slate-400">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-cyber-navy rounded-full overflow-hidden border border-cyber-blue/10">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

function RadarChart({ categories }: { categories: typeof skillCategories }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const animate = () => {
      frame++;
      setProgress(Math.min(frame / total, 1));
      if (frame < total) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.38;

    // All skills for radar
    const allSkills = [
      { label: "AI/ML", value: 87, color: "#ec4899" },
      { label: "React", value: 88, color: "#00d4ff" },
      { label: "Node.js", value: 85, color: "#00ff9f" },
      { label: "Systems", value: 80, color: "#a855f7" },
      { label: "DSA", value: 88, color: "#00fff5" },
      { label: "Python", value: 92, color: "#ec4899" },
    ];

    const n = allSkills.length;
    const angles = allSkills.map((_, i) => (Math.PI * 2 * i) / n - Math.PI / 2);

    ctx.clearRect(0, 0, size, size);

    // Grid rings
    for (let r = 1; r <= 5; r++) {
      ctx.beginPath();
      const radius = (R * r) / 5;
      angles.forEach((a, i) => {
        const x = cx + Math.cos(a) * radius;
        const y = cy + Math.sin(a) * radius;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 212, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axes
    angles.forEach((a) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.strokeStyle = "rgba(0, 212, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Data polygon
    ctx.beginPath();
    allSkills.forEach((s, i) => {
      const val = (s.value / 100) * progress;
      const x = cx + Math.cos(angles[i]) * R * val;
      const y = cy + Math.sin(angles[i]) * R * val;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
    grad.addColorStop(0, "rgba(0, 212, 255, 0.3)");
    grad.addColorStop(1, "rgba(168, 85, 247, 0.1)");
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 212, 255, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Dots + labels
    allSkills.forEach((s, i) => {
      const val = (s.value / 100) * progress;
      const x = cx + Math.cos(angles[i]) * R * val;
      const y = cy + Math.sin(angles[i]) * R * val;

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.fill();

      // Label
      const lx = cx + Math.cos(angles[i]) * (R + 24);
      const ly = cy + Math.sin(angles[i]) * (R + 24);
      ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
      ctx.font = "11px 'Share Tech Mono'";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(s.label, lx, ly);
    });
  }, [progress]);

  return (
    <div ref={ref} className="flex items-center justify-center">
      <canvas ref={canvasRef} width={300} height={300} className="opacity-90" />
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Floating skill nodes background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="absolute font-mono text-xs px-2.5 py-1 rounded border"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              color: skill.color + "50",
              borderColor: skill.color + "15",
              background: skill.color + "06",
              fontSize: skill.size === "lg" ? "13px" : skill.size === "md" ? "11px" : "10px",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="font-mono text-xs text-cyber-blue/40 tracking-[0.3em]">04.</div>
            <div className="h-px w-12 bg-gradient-to-r from-cyber-blue/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-wider text-slate-100 section-line">
            SKILLS
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl font-body">
            Technical capabilities across AI engineering, full-stack development, and systems programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — skill bars per category */}
          <div className="space-y-8">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-xl p-6 border border-cyber-blue/10"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                  <span className="font-display text-sm font-bold tracking-widest" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={ci * 0.1 + si * 0.08}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Right — radar chart + extras */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-cyber-blue/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyber-blue" style={{ boxShadow: "0 0 8px #00d4ff" }} />
                <span className="font-display text-sm font-bold tracking-widest neon-blue">SKILL RADAR</span>
              </div>
              <RadarChart categories={skillCategories} />
            </motion.div>

            {/* Other skills / tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-6 border border-cyber-blue/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cyber-purple" style={{ boxShadow: "0 0 8px #a855f7" }} />
                <span className="font-display text-sm font-bold tracking-widest neon-purple">TOOLS & CONCEPTS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git", "Linux", "Agile", "REST APIs", "WebSockets",
                  "OAuth 2.0", "JWT", "GCP", "CI/CD", "System Design",
                  "Microservices", "OCR", "Embeddings", "Prompt Engineering",
                ].map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="font-mono text-xs px-2.5 py-1 rounded border text-slate-400 border-cyber-blue/15 hover:border-cyber-blue/40 hover:text-cyber-blue transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
