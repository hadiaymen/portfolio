"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const contactItems = [
  {
    label: "GitHub",
    value: "github.com/hadiaymen",
    href: "https://github.com/hadiaymen",
    icon: "terminal",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hadiaymen",
    href: "https://www.linkedin.com/in/hadiaymen",
    icon: "link",
    external: true,
    accent: true,
  },
  {
    label: "Email",
    value: "hadiaymen22@gmail.com",
    href: "mailto:hadiaymen22@gmail.com",
    icon: "mail",
    external: false,
  },
  {
    label: "Instagram",
    value: "instagram.com/hadi.imen",
    href: "https://instagram.com/hadi.imen",
    icon: "photo_camera",
    external: true,
  },
  {
    label: "Phone",
    value: "+91 8089634311",
    href: "tel:+918089634311",
    icon: "phone",
    external: false,
  },
];

export default function Contact() {
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
    <section id="contact" className="mb-8">
      <AnimatedSection>
        <div className="px-2 mb-6">
          <h2 className="font-headline-md font-bold text-black">
            Get in Touch
          </h2>
          <p className="font-body-md text-[#4c4546]/60 mt-1">
            Let&apos;s build something together
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="dense-card overflow-hidden rounded-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="p-8 sm:p-12">
              <h3 className="font-headline-md text-black mb-2">
                Let&apos;s Connect
              </h3>
              <p className="font-body-lg text-[#4c4546]/70 mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                      item.accent
                        ? "bg-[#4648d4] text-white hover:opacity-95"
                        : "bg-[#f3f4f5] hover:bg-[#e7e8e9]"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        item.accent
                          ? "bg-white/20"
                          : "bg-white"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          item.accent ? "text-white" : "text-[#4c4546]/70"
                        }`}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                          item.accent ? "text-white/60" : "text-[#4c4546]/40"
                        }`}
                      >
                        {item.label}
                      </p>
                      <p className="font-label-sm font-bold truncate">
                        {item.value}
                      </p>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        item.accent ? "text-white/40" : "text-[#4c4546]/30"
                      }`}
                    >
                      {item.external ? "north_east" : "arrow_forward"}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="p-8 sm:p-12 bg-[#f8f9fa] flex flex-col justify-center items-center text-center border-l border-black/[0.04]">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4648d4]/10 to-[#8b5cf6]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[36px] text-[#4648d4]">
                  waving_hand
                </span>
              </div>
              <h3 className="font-headline-md text-black mb-3">
                Say Hello!
              </h3>
              <p className="font-body-md text-[#4c4546]/60 mb-8 max-w-sm">
                Whether you have a project in mind or just want to chat about
                AI, development, or design — I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                <motion.a
                  href="mailto:hadiaymen22@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-white text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded-full hover:bg-[#1b1b1b] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Email Me
                </motion.a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded-full border border-black/[0.1] hover:border-black/[0.2] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                  {copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
