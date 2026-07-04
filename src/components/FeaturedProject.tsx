"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProject() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="mb-8">
        <AnimatedSection>
          <div className="px-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4648d4] block mb-2">
              Featured Project
            </span>
            <h2 className="font-headline-md font-bold text-black">StuNet</h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-black/[0.05] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.04)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-[#f3f4f5]">
                <motion.img
                  alt="StuNet - AI Student Learning Platform"
                  className="w-full h-full object-cover"
                  src="/projects/stunet.png"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Project Details */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 pill-badge pill-badge-accent mb-4">
                    <span className="material-symbols-outlined text-[14px]">
                      star
                    </span>
                    Featured
                  </div>
                  <h3 className="font-headline-lg mb-3 text-black">StuNet</h3>
                  <p className="font-body-lg text-[#4c4546]/70 mb-6 leading-relaxed">
                    AI-powered student learning platform with organized study
                    resources, smart assistance, and a modern responsive interface
                    for an enhanced learning experience.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] font-bold text-[#4c4546]/40 uppercase tracking-[0.15em] mb-3">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js 14",
                      "React",
                      "OpenAI",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span key={tech} className="pill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://stunet-six.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-black text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#1b1b1b] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                    View Project
                  </motion.a>

                  <motion.button
                    onClick={() => setIsVideoOpen(true)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-[#4648d4] text-white text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#3b3db8] transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      play_circle
                    </span>
                    Demo Video
                  </motion.button>

                  <motion.a
                    href="https://github.com/hadiaymen/Stunet.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-white text-black text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-black/[0.1] hover:border-black/[0.2] hover:bg-[#f3f4f5] transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      code
                    </span>
                    Source Code
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Subtle gradient accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#4648d4]/[0.04] to-transparent rounded-bl-full pointer-events-none" />
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/projects/stunetad.mov"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
