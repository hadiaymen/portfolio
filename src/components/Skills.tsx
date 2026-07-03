"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Python", icon: "code", size: "normal" },
  { name: "Java", icon: "coffee", size: "normal" },
  { name: "JavaScript", icon: "javascript", size: "normal" },
  { name: "React", icon: "web", size: "normal" },
  { name: "Next.js", icon: "rocket_launch", size: "wide" },
  { name: "Tailwind CSS", icon: "palette", size: "normal" },
  { name: "Node.js", icon: "dns", size: "normal" },
  { name: "Git", icon: "merge_type", size: "normal" },
  { name: "MATLAB", icon: "calculate", size: "normal" },
  { name: "Simulink", icon: "schema", size: "normal" },
  { name: "AI Integration", icon: "smart_toy", size: "wide" },
  { name: "Prompt Engineering", icon: "chat", size: "normal" },
  { name: "OCR", icon: "document_scanner", size: "normal" },
  { name: "UI/UX Design", icon: "design_services", size: "normal" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="mb-8">
      <AnimatedSection>
        <div className="px-2 mb-6">
          <h2 className="font-headline-md font-bold text-black">
            Skills & Technologies
          </h2>
          <p className="font-body-md text-[#4c4546]/60 mt-1">
            Tools and technologies I work with daily
          </p>
        </div>
      </AnimatedSection>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`dense-card p-5 flex flex-col items-center gap-3 cursor-default group rounded-[24px] ${
              skill.size === "wide" ? "sm:col-span-1" : ""
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-[#f3f4f5] group-hover:bg-[#e7e8e9] flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[22px] text-[#4c4546]/70 group-hover:text-black transition-colors">
                {skill.icon}
              </span>
            </div>
            <span className="font-label-sm text-[#191c1d] text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
