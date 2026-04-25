"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shahobair20@gmail.com",
    href: "mailto:shahobair20@gmail.com",
    color: "#00d4ff",
    description: "Fastest response",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shahubair",
    href: "https://github.com/shahubair",
    color: "#a855f7",
    description: "Code & projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shahubair",
    href: "https://linkedin.com/in/shahubair",
    color: "#00d4ff",
    description: "Professional network",
  },
];

export default function Contact() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shahobair20@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.04), transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyber-blue/40" />
            <div className="font-mono text-xs text-cyber-blue/40 tracking-[0.3em]">05.</div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyber-blue/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-wider text-slate-100 mb-4">
            CONTACT
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-body text-lg leading-relaxed">
            Ready to build something impactful together?
          </p>
          <p className="text-slate-500 max-w-xl mx-auto font-body mt-2">
            Whether it's an AI system, a scalable web app, or an ambitious project —
            I'm always open to the right opportunity.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-2xl p-8 md:p-12 mb-10 text-center overflow-hidden"
          style={{
            border: "1px solid rgba(0, 212, 255, 0.2)",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.06)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #00d4ff60, #a855f760, transparent)" }}
          />

          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-cyber-blue/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="font-mono text-xs text-cyber-green/70 tracking-wider">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h3
              className="font-display text-3xl md:text-4xl font-black mb-4"
              style={{
                background: "linear-gradient(135deg, #e2e8f0, #00d4ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LET'S BUILD SOMETHING IMPACTFUL
            </h3>
            <p className="text-slate-400 max-w-md mx-auto font-body">
              Internships, full-time roles, freelance projects, or just a great tech conversation —
              my inbox is always open.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shahubair@example.com"
              className="group flex items-center gap-2 px-8 py-3.5 rounded font-mono text-sm tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
                border: "1px solid rgba(0,212,255,0.35)",
                color: "#00d4ff",
                boxShadow: "0 0 20px rgba(0,212,255,0.1)",
              }}
              data-hover
            >
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              SEND EMAIL
            </a>
            <button
              onClick={copyEmail}
              className="px-8 py-3.5 rounded font-mono text-sm tracking-wider text-slate-400 hover:text-cyber-blue border border-slate-700 hover:border-cyber-blue/30 transition-all duration-300"
              data-hover
            >
              {copied ? "✓ COPIED!" : "COPY EMAIL"}
            </button>
          </div>
        </motion.div>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-xl p-5 border border-cyber-blue/10 hover:border-cyber-blue/30 transition-all duration-300"
              style={{ textDecoration: "none" }}
              data-hover
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: link.color + "30",
                    background: link.color + "10",
                  }}
                >
                  <link.icon size={16} style={{ color: link.color }} />
                </div>
                <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1" />
              </div>
              <div className="font-display text-sm font-bold text-slate-200 group-hover:text-white transition-colors mb-0.5">
                {link.label}
              </div>
              <div className="font-mono text-xs text-slate-500 mb-1 truncate">{link.value}</div>
              <div className="font-mono text-xs" style={{ color: link.color + "60" }}>{link.description}</div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center border-t border-cyber-blue/10 pt-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin size={12} className="text-cyber-blue/30" />
            <span className="font-mono text-xs text-slate-600 tracking-wider">
              SRINAGAR, JAMMU & KASHMIR, INDIA
            </span>
          </div>
          <div className="font-display text-xs font-bold tracking-widest text-slate-700">
            SHAH UBAIR © 2026 — AI + FULL STACK DEVELOPER
          </div>
        
        </motion.div>
      </div>
    </section>
  );
}
