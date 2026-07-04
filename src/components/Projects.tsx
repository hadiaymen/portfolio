"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Lekhai AI",
    description:
      "AI financial statement generator with automated OCR and LLM data extraction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5GdwUH-v5peN4BRmAsZB5AA3dC-oz2WVH8JMcr2G9jHlaVzs9RD8O9vJV4ORnVFzaMShKVXCOAu_dHoSAwfEuFPm9ULvhChoLJ9wTWob1_5UhEyQaqpz9EmixlUfaUCDB6tXRPoHSSyuJSBfyHYdrgpG18LPHQfCCuL5R-XjyWMkSFp4HNPgIcI_elPa12eHQvYmQktGcxSsiHmJiq5BGNEfLqJHbPsl1n5PkScEHchfY5G5QGV7lYKCvHnYPZWk1gFimkPSrf_A",
    tags: ["Next.js 14", "OpenAI"],
    link: "https://github.com/hadiaymen",
  },
  {
    title: "MeeCu",
    description:
      "Anonymous campus networking platform for CUSAT students featuring random one-to-one chat, real-time messaging, and secure student-only access.",
    image: "/projects/meecu.png",
    tags: ["Next.js 14", "React", "Tailwind CSS", "Firebase"],
    link: "https://meecu.netlify.app/",
    demo: "https://meecu.netlify.app/",
    github: "https://github.com/hadiaymen/MeeCu.git",
  },
  {
    title: "StuNet",
    description:
      "AI-powered student learning platform with organized study resources, smart assistance, and a modern responsive interface for an enhanced learning experience.",
    image: "/projects/stunet.png",
    tags: ["Next.js 14", "React", "OpenAI", "Tailwind CSS"],
    link: "https://stunet-six.vercel.app",
    demo: "https://stunet-six.vercel.app",
    github: "https://github.com/hadiaymen/Stunet.git",
  },
  {
    title: "iEdgeDetector",
    description:
      "Professional MATLAB image processing application featuring multiple edge detection algorithms with an intuitive UI for real-time image analysis and feature extraction.",
    image: "/projects/iedgedetector.png",
    tags: ["MATLAB", "App Designer", "Image Processing", "Computer Vision"],
    link: "https://github.com/hadiaymen/iEdge.git",
    github: "https://github.com/hadiaymen/iEdge.git",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const imgVariants = {
  hidden: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const arrowVariants = {
  hidden: { rotate: 0, x: 0, y: 0 },
  hover: {
    rotate: 45,
    x: 1,
    y: -1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const tagsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Projects() {
  return (
    <section id="work" className="mb-8">
      <AnimatedSection>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="font-headline-md font-bold text-black">
            Selected Projects
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#4c4546]/60 uppercase tracking-[0.15em]">
              See More
            </span>
            <span className="material-symbols-outlined text-[18px] text-[#4c4546]/60">
              arrow_downward
            </span>
          </div>
        </div>
      </AnimatedSection>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover="hover"
            className="dense-card overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <a
              href={project.demo ?? project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-[4/3] bg-[#edeeef] overflow-hidden rounded-[24px] m-2">
                <motion.img
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.image}
                  variants={imgVariants}
                />
              </div>
            </a>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-label-md font-bold text-black">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {/* GitHub icon link */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-7 h-7 rounded-full bg-[#f3f4f5] flex items-center justify-center hover:bg-[#e1e3e4] transition-colors"
                        title="View on GitHub"
                      >
                        <span className="material-symbols-outlined text-[14px] text-[#4c4546]/70">
                          terminal
                        </span>
                      </motion.a>
                    )}
                    {/* Live demo arrow */}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        variants={arrowVariants}
                        className="material-symbols-outlined text-[#4c4546]/40 text-[18px] cursor-pointer"
                        title="Live Demo"
                      >
                        north_east
                      </motion.a>
                    )}
                    {/* Single link arrow (no demo) */}
                    {!project.demo && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        variants={arrowVariants}
                        className="material-symbols-outlined text-[#4c4546]/40 text-[18px] cursor-pointer"
                      >
                        north_east
                      </motion.a>
                    )}
                  </div>
                </div>
                <p className="font-body-md text-[#4c4546]/70 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags + Live Demo button */}
              <div className="flex items-end justify-between gap-3 flex-wrap">
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  variants={tagsContainerVariants}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="pill-badge bg-black/[0.04] border-black/[0.06]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Live Demo pill — only for projects with a demo */}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4648d4] border border-[#4648d4]/30 bg-[#4648d4]/[0.05] hover:bg-[#4648d4]/[0.1] px-3 py-1 rounded-full transition-colors shrink-0"
                  >
                    <span className="material-symbols-outlined text-[12px]">
                      open_in_new
                    </span>
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
