"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Command } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

interface NavProps {
  onCmdOpen: () => void;
}

export default function Navigation({ onCmdOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [imageModalOpen, setImageModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(href);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-cyber-blue/10 py-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Profile Picture */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setImageModalOpen(true)}
              className="group cursor-pointer"
              data-hover
              title="Click to view full profile"
            >
              <div className="w-10 h-10 border-2 border-cyber-blue/50 rounded-full overflow-hidden group-hover:border-cyber-cyan transition-colors duration-300 flex items-center justify-center bg-slate-900"
              >
                <Image
                  src="/profile.jpg"
                  alt="Shah Ubair"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </button>
            <button
              onClick={() => scrollTo("#hero")}
              className="group"
              data-hover
            >
              <span className="font-display text-sm font-bold tracking-widest neon-blue hidden sm:block hover:text-cyber-cyan transition-colors">
                SU
              </span>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                data-hover
                className={`relative px-4 py-2 font-mono text-xs tracking-widest transition-all duration-300 group ${
                  active === item.href
                    ? "text-cyber-cyan"
                    : "text-slate-400 hover:text-cyber-blue"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-cyber-blue/60 w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCmdOpen}
              data-hover
              className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-cyber-blue/20 rounded font-mono text-xs text-cyber-blue/50 hover:text-cyber-blue hover:border-cyber-blue/50 transition-all duration-300"
            >
              <Command size={12} />
              <span>⌘K</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-cyber-blue/60 hover:text-cyber-blue transition-colors"
              data-hover
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 glass border-b border-cyber-blue/15 py-4 px-6"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-3 font-mono text-sm text-slate-400 hover:text-cyber-cyan transition-colors border-b border-cyber-blue/10 last:border-0"
                data-hover
              >
                <span className="text-cyber-blue/40 mr-3">0{i + 1}.</span>
                {item.label}
              </motion.button>
            ))}
            <button
              onClick={onCmdOpen}
              className="mt-3 flex items-center gap-2 font-mono text-xs text-cyber-blue/40 hover:text-cyber-blue transition-colors"
              data-hover
            >
              <Command size={12} />
              <span>Command Palette (⌘K)</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Image Modal */}
      <AnimatePresence>
        {imageModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setImageModalOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full"
              >
                <button
                  onClick={() => setImageModalOpen(false)}
                  className="absolute -top-10 right-0 text-cyber-blue/60 hover:text-cyber-cyan transition-colors z-10"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-cyber-blue/30"
                  style={{
                    boxShadow: "0 0 60px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Shah Ubair - Full Profile"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
