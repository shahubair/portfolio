"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: "BIOS v3.14.159 initializing...", delay: 0 },
  { text: "Loading NEURAL_CORE.sys... [OK]", delay: 400 },
  { text: "Loading AI_MODULES.dll... [OK]", delay: 750 },
  { text: "Connecting to distributed network... [OK]", delay: 1100 },
  { text: "Scanning quantum memory banks... [OK]", delay: 1450 },
  { text: "Initializing holographic render engine... [OK]", delay: 1800 },
  { text: "User profile detected: SHAH_UBAIR", delay: 2300 },
  { text: "Clearance level: ARCHITECT", delay: 2700 },
  { text: "All systems nominal. Launching interface...", delay: 3100 },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [loadPercent, setLoadPercent] = useState(0);
  const [phase, setPhase] = useState<"boot" | "reveal" | "done">("boot");

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        setLoadPercent(Math.round(((i + 1) / bootLines.length) * 100));
      }, line.delay + 400);
    });

    setTimeout(() => setPhase("reveal"), 4400);
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5600);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 bg-cyber-black flex flex-col items-center justify-center scanlines"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Corner decorations */}
          {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8`}>
              <div className={`w-full h-0.5 bg-cyber-blue/60 ${i % 2 === 0 ? '' : 'ml-auto'}`} />
              <div className={`w-0.5 h-full bg-cyber-blue/60 ${i < 2 ? '' : 'absolute bottom-0'} ${i % 2 === 0 ? '' : 'ml-auto'}`} />
            </div>
          ))}

          <AnimatePresence>
            {phase === "boot" && (
              <motion.div
                className="w-full max-w-2xl px-6"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8 text-center"
                >
                  <div className="font-mono text-xs text-cyber-blue/50 tracking-[0.3em] mb-2">
                    ◈ SYSTEM INITIALIZATION PROTOCOL ◈
                  </div>
                  <div className="font-display text-xl font-bold neon-cyan tracking-widest">
                    UBAIR_OS v2027
                  </div>
                </motion.div>

                {/* Boot lines */}
                <div className="font-mono text-sm space-y-1.5 mb-8">
                  {bootLines.map((line, i) => (
                    <AnimatePresence key={i}>
                      {visibleLines.includes(i) && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex items-center gap-2 ${
                            i === bootLines.length - 1
                              ? "text-cyber-green"
                              : "text-slate-400"
                          }`}
                        >
                          <span className="text-cyber-blue/40">{">"}</span>
                          <span>{line.text}</span>
                          {i === visibleLines.length - 1 &&
                            i !== bootLines.length - 1 && (
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                                className="text-cyber-cyan"
                              >
                                █
                              </motion.span>
                            )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-cyber-blue/50">
                      LOADING MODULES
                    </span>
                    <span className="font-mono text-xs text-cyber-cyan">
                      {loadPercent}%
                    </span>
                  </div>
                  <div className="h-1 bg-cyber-navy rounded-full overflow-hidden border border-cyber-blue/20">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #00d4ff, #a855f7, #00fff5)",
                        boxShadow: "0 0 12px rgba(0,212,255,0.8)",
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadPercent}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {phase === "reveal" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-mono text-sm text-cyber-blue/60 tracking-[0.4em] mb-4"
                >
                  ◈ IDENTITY CONFIRMED ◈
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-5xl md:text-7xl font-black tracking-wider"
                  style={{
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #00fff5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(0,212,255,0.5))",
                  }}
                >
                  SHAH UBAIR
                </motion.h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="h-0.5 w-full mt-4"
                  style={{
                    background: "linear-gradient(90deg, transparent, #00d4ff, #a855f7, transparent)",
                    boxShadow: "0 0 10px rgba(0,212,255,0.5)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: "rgba(0, 212, 255, 0.3)" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
