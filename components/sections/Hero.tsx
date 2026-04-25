"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ChevronDown, MapPin, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const NeuralBackground = dynamic(() => import("@/components/three/NeuralBackground"), { ssr: false });

const stats = [
  { value: "8.04", label: "GPA", suffix: "" },
  { value: "98", label: "12th Grade", suffix: "%" },
  { value: "2", label: "Internships", suffix: "+" },
  { value: "3", label: "Projects", suffix: "+" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      <NeuralBackground />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/3 right-1/5 w-64 h-64 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)", filter: "blur(50px)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyber-blue/50" />
          <div className="flex items-center gap-1.5 px-3 py-1 glass rounded-full border border-cyber-blue/20">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
            <MapPin size={11} className="text-cyber-blue/60" />
            <span className="font-mono text-xs text-cyber-blue/60 tracking-wider">
              SRINAGAR, INDIA
            </span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyber-blue/50" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4"
        >
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl font-black tracking-wider leading-none"
            style={{
              background: "linear-gradient(135deg, #e2e8f0 0%, #00d4ff 40%, #a855f7 70%, #e2e8f0 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 6s ease infinite",
            }}
          >
            SHAH UBAIR
          </h1>
          <style jsx global>{`
            @keyframes gradientShift {
              0% { background-position: 0% center; }
              50% { background-position: 100% center; }
              100% { background-position: 0% center; }
            }
          `}</style>
        </motion.div>

        {/* Typewriter roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 font-mono text-lg md:text-xl text-cyber-blue/80 tracking-wider"
        >
          <span className="text-cyber-blue/30">{">"} </span>
          {mounted && (
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1500,
                "Full Stack Developer",
                1500,
                "Systems Builder",
                1500,
                "RAG Architect",
                1500,
                "Problem Solver",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
              className="neon-cyan"
            />
          )}
          <span className="animate-pulse text-cyber-cyan">_</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed"
        >
          Building intelligent systems at the intersection of AI and full-stack engineering.
          Currently at{" "}
          <span className="text-cyber-blue">NIT Srinagar</span>, crafting scalable
          solutions that matter.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass px-5 py-3 rounded-lg border border-cyber-blue/15 hover:border-cyber-blue/40 transition-all duration-300 group"
            >
              <div className="font-display text-2xl font-bold neon-blue group-hover:neon-cyan transition-all">
                {s.value}
                <span className="text-cyber-purple text-lg">{s.suffix}</span>
              </div>
              <div className="font-mono text-xs text-slate-500 tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-3 font-mono text-sm tracking-wider overflow-hidden"
            data-hover
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
              border: "1px solid rgba(0,212,255,0.4)",
              borderRadius: "4px",
            }}
          >
            <span className="relative z-10 text-cyber-cyan group-hover:text-white transition-colors">
              VIEW PROJECTS
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(168,85,247,0.25))" }} />
            <ExternalLink size={13} className="relative z-10 inline ml-2 text-cyber-cyan" />
          </button>

          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 font-mono text-sm tracking-wider text-slate-400 hover:text-cyber-blue border border-slate-700 hover:border-cyber-blue/40 rounded transition-all duration-300"
            data-hover
          >
            GET IN TOUCH
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-5"
        >
          {[
            { Icon: Github, href: "https://github.com/shahubair", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/in/shahubair", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:shahubair@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-hover
              className="w-10 h-10 flex items-center justify-center border border-cyber-blue/20 rounded hover:border-cyber-blue/60 text-slate-500 hover:text-cyber-blue transition-all duration-300 hover:shadow-[0_0_12px_rgba(0,212,255,0.3)]"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-cyber-blue/30 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-cyber-blue/40" />
        </motion.div>
      </motion.div>

      {/* Corner HUD decorations */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((classes, i) => (
        <div key={i} className={`absolute ${classes} w-10 h-10 border-cyber-blue/20`} />
      ))}
    </div>
  );
}
