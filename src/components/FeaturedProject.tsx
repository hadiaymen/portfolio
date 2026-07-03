"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProject() {
  return (
    <section className="mb-8">
      <AnimatedSection>
        <div className="px-2 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4648d4] block mb-2">
            Featured Project
          </span>
          <h2 className="font-headline-md font-bold text-black">Lekhai AI</h2>
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
                alt="Lekhai AI - AI Financial Statement Generator"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5GdwUH-v5peN4BRmAsZB5AA3dC-oz2WVH8JMcr2G9jHlaVzs9RD8O9vJV4ORnVFzaMShKVXCOAu_dHoSAwfEuFPm9ULvhChoLJ9wTWob1_5UhEyQaqpz9EmixlUfaUCDB6tXRPoHSSyuJSBfyHYdrgpG18LPHQfCCuL5R-XjyWMkSFp4HNPgIcI_elPa12eHQvYmQktGcxSsiHmJiq5BGNEfLqJHbPsl1n5PkScEHchfY5G5QGV7lYKCvHnYPZWk1gFimkPSrf_A"
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
                <h3 className="font-headline-lg mb-3 text-black">Lekhai AI</h3>
                <p className="font-body-lg text-[#4c4546]/70 mb-6 leading-relaxed">
                  AI-powered financial statement generator with automated OCR
                  and LLM data extraction. Upload any financial document and get
                  structured, actionable data instantly.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-[10px] font-bold text-[#4c4546]/40 uppercase tracking-[0.15em] mb-3">
                  Built With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14",
                    "OpenAI",
                    "OCR",
                    "TypeScript",
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
                  href="https://github.com/hadiaymen"
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
                <motion.a
                  href="https://github.com/hadiaymen"
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
  );
}
