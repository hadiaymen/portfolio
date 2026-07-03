"use client";

import AnimatedSection from "./AnimatedSection";

export default function ExperienceGrid() {
  return (
    <section className="mb-8">
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/[0.04] border border-black/[0.05] overflow-hidden rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.06),0_20px_48px_rgba(0,0,0,0.04)]">
          {/* Experience Column */}
          <div className="md:col-span-4 bg-white p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-md font-bold text-black">
                Experience
              </h3>
              <span className="material-symbols-outlined text-[#4c4546]/40">
                expand_more
              </span>
            </div>
            <div className="space-y-6">
              {/* Freelance */}
              <div className="relative p-5 border border-black/[0.06] rounded-2xl shadow-sm bg-[#f3f4f5]">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-[#4648d4]" />
                <span className="bg-[#4648d4] text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg inline-block mb-3">
                  2025 - Present
                </span>
                <h4 className="font-label-md font-bold text-black mb-1">
                  Freelance Developer
                </h4>
                <p className="font-body-md text-[#4c4546]/60">
                  Full Stack &amp; AI Specialist
                </p>
              </div>

              {/* MathWorks */}
              <div className="relative p-5 border border-black/[0.06] rounded-2xl shadow-sm bg-[#f3f4f5]">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-[#4648d4]" />
                <span className="bg-[#4648d4] text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg inline-block mb-3">
                  2026 - SUMMER
                </span>
                <h4 className="font-label-md font-bold text-black mb-1">
                  Intern @ MathWorks
                </h4>
                <p className="font-body-md text-[#4c4546]/60">
                  MATLAB and Simulink focus
                </p>
              </div>

              {/* Video Engineer */}
              <div className="relative p-5 border border-black/[0.06] rounded-2xl shadow-sm bg-[#f3f4f5]">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-[#4648d4]" />
                <span className="bg-[#4648d4] text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-lg inline-block mb-3">
                  2024 - PRESENT
                </span>
                <h4 className="font-label-md font-bold text-black mb-1">
                  Video Engineer &amp; Content Creator
                </h4>
                <p className="font-body-md text-[#4c4546]/60 leading-relaxed">
                  I create high-quality videos for SaaS brands, using motion
                  graphics and color grading to tell better product stories.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Column */}
          <div className="md:col-span-4 bg-white p-8 border-l border-black/[0.04]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md font-bold text-black">
                Expertise
              </h3>
              <span className="material-symbols-outlined text-[#4c4546]/40">
                expand_more
              </span>
            </div>
            <p className="font-body-md text-[#4c4546]/70 mb-8">
              Full Stack Development, AI Automation, LLM Integration, UI/UX
              Design, and SaaS product showcasing.
            </p>

            {/* Hardskill */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-label-md font-bold text-black">
                  Hardskill
                </h4>
                <span className="material-symbols-outlined text-[#4c4546]/40 text-[18px]">
                  expand_more
                </span>
              </div>
              <div className="bg-[#f3f4f5] rounded-2xl p-4 shadow-inner overflow-hidden border border-black/[0.04]">
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV7jpAFugj45rCU717FLhFY-vAWW5VoEb6V40Z0iaslAZ7XmTeXO6bgPPh_3N-mihw5qAmHC9qeOaNiLB2cwZW28TUsAyMaQ3zztndbBfWMKikNL8M-QZQ8N6RsFPS2kmi8p-kUjgq8oynfDPZ4fV2PTPAePY_pm3t3-4keBGSkC6VxzU-QefsZVt8l030FMAHz9LrCh7SGqJt0mUUoy6I6CUQ9ggLgXHuiwHzxVhsswSAgzdjav0JheuQ4z5AE6a-8kDXinSdhKA"
                    alt="Hardskill Illustration"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida/AP1WRLs_-7Ckv2wW8EtnvYxQjFy9ZK-w24VMyhQdUKumSwyOGL3KtDB1--LgWz3VNsGWCTBftJvDXr8Gwumu3yJviSc78csm3em3W1LBUo_AZdyAKjXi9totoBVazvN8F9QAd54Ymj4YrnrqDRSuWFsN7xTRCBu0AJFyV-lCFLxuH0-pHIcLb3t7KhJEMLtg7UdX3w3A50ST_uPky9-fNZeybeIuPCLojFynDxIK-w6pruJHoiVY40Om12Lwc3I"
                      className="w-full h-full object-contain scale-[0.65]"
                      alt="CapCut"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">
                    Ps
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida/AP1WRLvDkN2ZzbCBI1Jl1GClcscolqgCWJ0tSR5wyHOvpxJJ7rnX1eq4TyfoOIKgwUkdQT5RcDx2eOyPPlu4AcuG9Ft3mLVGGJL4FLV3hzS56N15ky1Yc_2AmGzHnsrszfn6h1BszFsJuLt0pBM_hLI0a-cuqTx5QqFJrdxSjW8MwyGCAQUU5acpDEFp04t3G4AzKggVPr5GsxdYteC2vDGMBsZOpca4cLYs6zcroC2ig0KI7j3Ywxh4o1mFQw"
                      className="w-full h-full object-contain scale-[0.65]"
                      alt="DaVinci Resolve"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">
                    Id
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">
                      deployed_code
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">
                      category
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Softskill */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-label-md font-bold text-black">
                  Softskill
                </h4>
                <span className="material-symbols-outlined text-[#4c4546]/40 text-[18px]">
                  expand_more
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="pill-badge pill-badge-accent">
                  #Creativity
                </span>
                <span className="pill-badge">#Teamwork</span>
                <span className="pill-badge">#Time_Management</span>
                <span className="pill-badge">#Flexibility</span>
                <span className="pill-badge pill-badge-accent">
                  #Communication
                </span>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="md:col-span-4 bg-white p-8 border-l border-black/[0.04]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline-md font-bold text-black">
                Education
              </h3>
              <span className="material-symbols-outlined text-[#4c4546]/40">
                expand_more
              </span>
            </div>
            <div className="space-y-4">
              {/* CUSAT */}
              <div className="p-5 rounded-xl bg-black text-white">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.15em]">
                    2025 - Now
                  </span>
                  <span className="material-symbols-outlined text-[16px] opacity-60">
                    verified
                  </span>
                </div>
                <h4 className="font-label-md font-bold">CUSAT SOE</h4>
                <p className="text-[11px] opacity-80 uppercase tracking-wider">
                  Computer Science Engineering
                </p>
              </div>

              {/* MATLAB Intern */}
              <div className="p-5 rounded-xl bg-black text-white">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold opacity-60 uppercase tracking-[0.15em]">
                    2026
                  </span>
                  <span className="material-symbols-outlined text-[16px] opacity-60">
                    verified
                  </span>
                </div>
                <h4 className="font-label-md font-bold">MATLAB Intern</h4>
                <p className="text-[11px] opacity-80 uppercase tracking-wider">
                  MathWorks Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
