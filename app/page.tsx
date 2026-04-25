"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BootSequence from "@/components/sections/BootSequence";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/ui/Navigation";
import CommandPalette from "@/components/ui/CommandPalette";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import SectionTransition from "@/components/ui/SectionTransition";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <CustomCursor />
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <main className="relative bg-cyber-black overflow-x-hidden">
          <Navigation onCmdOpen={() => setCmdOpen(true)} />
          <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
          
          <section id="hero">
            <Hero />
          </section>

          <SectionTransition />

          <section id="about">
            <About />
          </section>

          <SectionTransition reverse />

          <section id="experience">
            <Experience />
          </section>

          <SectionTransition />

          <section id="projects">
            <Projects />
          </section>

          <SectionTransition reverse />

          <section id="skills">
            <Skills />
          </section>

          <SectionTransition />

          <section id="contact">
            <Contact />
          </section>

          {/* Ambient background elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-blue/3 blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyber-purple/4 blur-[100px]" />
          </div>
        </main>
      )}
    </>
  );
}
