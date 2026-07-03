"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[0.05] mt-16 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-label-md font-bold text-black">
              Hadi Aymen
            </span>
            <p className="text-[11px] font-bold text-[#4c4546]/40 uppercase tracking-[0.15em] mt-1">
              © 2026 Built BY IMEN
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/hadiaymen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#4c4546]/60 hover:text-black transition-colors uppercase tracking-[0.15em]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hadiaymen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#4c4546]/60 hover:text-black transition-colors uppercase tracking-[0.15em]"
            >
              GitHub
            </a>
            <a
              href="mailto:hadiaymen22@gmail.com"
              className="text-[11px] font-bold text-[#4c4546]/60 hover:text-black transition-colors uppercase tracking-[0.15em]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
