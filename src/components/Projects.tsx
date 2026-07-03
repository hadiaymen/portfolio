"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
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
    title: "Portfolio v2",
    description:
      "High-performance SaaS-inspired developer portfolio with clean typography.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApw6Lv8zsLfwSLcKnjjnJ1FiuzDPjl0fg2yd3NRIPruVlnuOUlsk0R9SRFjSYrtUr9uodnNOLdReCulZSxmdPlIHlq3Ei3neT-2Hg60Xs5Ofy57zPgq-Z1BN5z8-E1Ll7XKIO2znmz4i7Fj6iCS5MEav3c5gS7CyqRbc_mqWBbOhlwRV1HQfmqgu18nvzhVt_FrjHYrzRMXPCHyGJK1WkW-8To6dzucN7uofoUKC3VuAmwMB0r_syrhNm3SdyqFsk1VPsAkj7RkAQ",
    tags: ["Tailwind", "Framer"],
    link: "https://github.com/hadiaymen",
  },
  {
    title: "NeuralCode Hub",
    description:
      "A prompt engineering platform for sharing and fine-tuning AI models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9H8QlPlBQtnwjakR76s_enmQXMbkwHalYkWP_c9RuczqjpUXubQwMMaag8Kjx6wJ7b7DkVWAlpFYO-b0YBA3ld-hOqh8AWC9DTkcr-ILPIFYL34qu-hniYqShdFJRt02O_9fpG2nTNReLWyYJAYyWOwNjdR7xj0yo70N3dofQSSekQgIoUvvmu0BjJ8JlaH00eTbtA9LkCyoJOYWJAPHph07_4-GN4HwaSo9Ev8t5iNIJI94ZwmryJxAuoB1vFkQFF7quYTphjLg",
    tags: ["TypeScript", "Supabase"],
    link: "https://github.com/hadiaymen",
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
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="dense-card overflow-hidden flex flex-col group p-2 cursor-pointer"
          >
            <div className="aspect-[4/3] bg-[#edeeef] overflow-hidden rounded-[24px]">
              <motion.img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.image}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-label-md font-bold text-black">
                  {project.title}
                </h3>
                <motion.span
                  className="material-symbols-outlined text-[#4c4546]/40 text-[18px]"
                  whileHover={{ x: 2, y: -2 }}
                >
                  north_east
                </motion.span>
              </div>
              <p className="font-body-md text-[#4c4546]/70 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill-badge bg-black/[0.04] border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
