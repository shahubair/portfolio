"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "cmdk";
import {
  User,
  Briefcase,
  Code2,
  Cpu,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Zap,
  Terminal,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

const commands = {
  Navigate: [
    { icon: User, label: "About", action: () => scrollTo("#about") },
    { icon: Briefcase, label: "Experience", action: () => scrollTo("#experience") },
    { icon: Code2, label: "Projects", action: () => scrollTo("#projects") },
    { icon: Cpu, label: "Skills", action: () => scrollTo("#skills") },
    { icon: Mail, label: "Contact", action: () => scrollTo("#contact") },
  ],
  Connect: [
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open("https://github.com/shahubair", "_blank"),
      hint: "github.com/shahubair",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () => window.open("https://linkedin.com/in/shahubair", "_blank"),
      hint: "linkedin.com/in/shahubair",
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:shahubair@example.com", "_blank"),
      hint: "shahubair@example.com",
    },
  ],
  Projects: [
    {
      icon: Zap,
      label: "Document Intelligence System",
      action: () => scrollTo("#projects"),
      hint: "RAG + LLMs + FAISS",
    },
    {
      icon: Terminal,
      label: "Real-time Chess App",
      action: () => scrollTo("#projects"),
      hint: "WebSockets + Node.js",
    },
    {
      icon: ExternalLink,
      label: "Campus Connect",
      action: () => scrollTo("#projects"),
      hint: "MERN + OAuth + GCP",
    },
  ],
};

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-[640px] max-w-[90vw]" style={{
              background: "rgba(6, 13, 31, 0.98)",
              border: "1px solid rgba(0, 212, 255, 0.25)",
              borderRadius: "12px",
              boxShadow: "0 0 60px rgba(0, 212, 255, 0.15), 0 25px 50px rgba(0,0,0,0.9)",
              overflow: "hidden",
              fontFamily: "'Share Tech Mono', monospace",
            }}>
              {/* Header */}
              <div style={{
                padding: "12px 20px 8px",
                borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <Terminal size={14} style={{ color: "rgba(0, 212, 255, 0.5)" }} />
                <span style={{ color: "rgba(0, 212, 255, 0.4)", fontSize: "11px", letterSpacing: "0.15em" }}>
                  COMMAND TERMINAL
                </span>
                <div style={{ marginLeft: "auto" }}>
                  <kbd style={{
                    padding: "2px 6px",
                    background: "rgba(0, 212, 255, 0.08)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                    borderRadius: "4px",
                    fontSize: "10px",
                    color: "rgba(0, 212, 255, 0.4)",
                  }}>
                    ESC
                  </kbd>
                </div>
              </div>

              <Command.Input
                placeholder="Type a command or search..."
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(0, 212, 255, 0.1)",
                  color: "#00fff5",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "15px",
                  outline: "none",
                  padding: "18px 20px",
                  width: "100%",
                }}
              />

              <Command.List style={{ maxHeight: "360px", overflowY: "auto", padding: "8px" }}>
                <Command.Empty style={{
                  color: "rgba(0, 212, 255, 0.3)",
                  fontSize: "13px",
                  padding: "24px",
                  textAlign: "center",
                }}>
                  No commands found.
                </Command.Empty>

                {Object.entries(commands).map(([group, items]) => (
                  <Command.Group
                    key={group}
                    heading={group}
                    style={{
                      paddingBottom: "8px",
                    }}
                  >
                    <div style={{
                      color: "rgba(0, 212, 255, 0.35)",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      padding: "10px 12px 4px",
                    }}>
                      {group.toUpperCase()}
                    </div>
                    {items.map((item) => (
                      <Command.Item
                        key={item.label}
                        onSelect={() => {
                          item.action();
                          onClose();
                        }}
                        style={{
                          alignItems: "center",
                          borderRadius: "8px",
                          color: "rgba(226, 232, 240, 0.6)",
                          cursor: "pointer",
                          display: "flex",
                          fontSize: "13px",
                          gap: "12px",
                          padding: "10px 12px",
                          transition: "all 0.1s ease",
                        }}
                      >
                        <item.icon size={14} style={{ color: "rgba(0, 212, 255, 0.5)", flexShrink: 0 }} />
                        <span>{item.label}</span>
                        {"hint" in item && item.hint && (
                          <span style={{ marginLeft: "auto", color: "rgba(0, 212, 255, 0.25)", fontSize: "11px" }}>
                            {item.hint}
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>

              <div style={{
                borderTop: "1px solid rgba(0, 212, 255, 0.08)",
                display: "flex",
                gap: "16px",
                padding: "10px 16px",
              }}>
                {["↑↓ navigate", "↵ select", "esc close"].map((hint) => (
                  <span key={hint} style={{ color: "rgba(0, 212, 255, 0.25)", fontSize: "10px", letterSpacing: "0.1em" }}>
                    {hint}
                  </span>
                ))}
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
