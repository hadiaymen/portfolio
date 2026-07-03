"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hadiaymen22@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = "hadiaymen22@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="about" className="mb-8">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/[0.04] border border-black/[0.05] overflow-hidden rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.04)]">
          {/* Profile Image */}
          <div className="md:col-span-4 bg-white p-6 flex flex-col justify-between">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#f3f4f5] mb-6">
              <motion.img
                alt="Hadi Aymen - AI & Full Stack Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHVIewy-lxxCQEnkruElNzRcSSFlW1sENF5ir2QkHq9CQh4de4w4ek8q9UFE56SzINsWJX9dLwJ1djLyg1GswAaWFa-seKwZJzzynVAVQeReMcIGYOx6OnJkV7yrDgNabdrb8TYTViIkbECTrZ7LMcTMURi21MOWozlgAQuD_6CQ9YlPe7TlqBlsE5fzAJa-Doh1Z0YdMLHFIMLwiQXK2rd4tHHohIWCcYcF5w0Q-nSukbvCuwg6ge_FGxZYfruFbcMUnU4eXIMQE"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
            <p className="font-label-sm text-[#4c4546]/80 leading-relaxed">
              I consider myself a hardworking developer who constantly seeks new
              skills and explores diverse tech stacks to deliver the best
              results.
            </p>
          </div>

          {/* Bio & Contact */}
          <div className="md:col-span-8 flex flex-col gap-px">
            {/* Main Bio */}
            <div className="bg-white flex-1 p-8 sm:p-12">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4c4546]/40">
                  Introduction
                </span>
                <span className="material-symbols-outlined text-[#4c4546]/40">
                  expand_more
                </span>
              </div>
              <div className="mb-8">
                <h1 className="font-display text-[clamp(40px,7vw,72px)] mb-2 leading-none text-black tracking-tighter">
                  Hadi Aymen
                </h1>
                <p className="font-headline-md font-semibold text-[#4c4546]/60">
                  AI &amp; Full Stack Developer
                </p>
              </div>
              <p className="font-body-lg text-[#4c4546]/80 max-w-2xl mb-6">
                Computer Science Student at CUSAT School of Engineering. Specialized in building intelligent software, AI-powered products, and high-density digital experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "#Artificial_Intelligence",
                  "#Full_Stack",
                  "#NextJS",
                  "#LLM_Ops",
                  "#UI_UX",
                ].map((tag) => (
                  <span key={tag} className="pill-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-black text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#1b1b1b] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    work
                  </span>
                  View Projects
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-black text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-black/[0.1] hover:border-black/[0.2] hover:bg-[#f3f4f5] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  Resume
                </motion.a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-white text-black text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-black/[0.1] hover:border-black/[0.2] hover:bg-[#f3f4f5] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                  {copied ? "Copied!" : "Copy Email"}
                </motion.button>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/[0.04]">
              {/* Email */}
              <a
                href="mailto:hadiaymen22@gmail.com"
                className="bg-black p-6 flex flex-col justify-between group hover:opacity-90 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">
                    mail
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.15em] mb-1">
                    Email
                  </p>
                  <p className="font-label-sm font-bold text-white">
                    hadiaymen22@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hadiaymen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4648d4] p-6 flex flex-col justify-between group hover:opacity-90 transition-all text-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">
                    link
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.15em] mb-1">
                    LinkedIn
                  </p>
                  <p className="font-label-sm font-bold text-white">in/hadiaymen</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hadiaymen"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f3f4f5] p-6 flex flex-col justify-between group hover:bg-[#e7e8e9] transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="material-symbols-outlined text-black text-2xl">
                    terminal
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#4c4546]/40 uppercase tracking-[0.15em] mb-1">
                    GitHub
                  </p>
                  <p className="font-label-sm font-bold text-black">github/hadiaymen</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
