"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    year: "2026",
    description:
      "Comprehensive certification in MATLAB programming, data analysis, and visualization.",
    icon: "calculate",
    link: "/certificates/matlab-onramp.pdf",
  },
  {
    title: "Simulink Onramp",
    issuer: "MathWorks",
    year: "2026",
    description:
      "Certification in Simulink for model-based design, simulation, and dynamic system modeling.",
    icon: "schema",
    link: "/certificates/simulink-onramp.pdf",
  },
];

export default function Certifications() {
  return (
    <section className="mb-8">
      <AnimatedSection>
        <div className="px-2 mb-6">
          <h2 className="font-headline-md font-bold text-black">
            Certifications
          </h2>
          <p className="font-body-md text-[#4c4546]/60 mt-1">
            Professional certifications and credentials
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="dense-card p-8 flex gap-6 items-start rounded-[24px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4648d4]/10 to-[#8b5cf6]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px] text-[#4648d4]">
                  {cert.icon}
                </span>
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-label-md font-bold text-black">
                    {cert.title}
                  </h3>
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4]">
                    verified
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#4c4546]/40 uppercase tracking-[0.12em] mb-2">
                  {cert.issuer} · {cert.year}
                </p>
                <p className="font-body-md text-[#4c4546]/70">
                  {cert.description}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#4648d4] hover:underline mt-3"
                  >
                    View Certificate
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
