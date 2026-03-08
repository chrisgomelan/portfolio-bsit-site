import { IconBrandJavascript, IconBrandReact, IconBrandNodejs, IconBrandPython, IconBrandTailwind, IconBrandHtml5, IconBrandCpp, IconBrandPhp, IconBrandMysql, IconBrandLaravel, IconBrandBootstrap, IconBrandGit, IconBrandGithub, IconBrandFigma, IconSchool, IconBriefcase } from "@tabler/icons-react";
import { experiences, education } from "../data/project.js";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll.jsx";
import React from "react";
function About() {
  const languages = [
    { icon: IconBrandHtml5, name: "HTML", color: "text-orange-500" },
    { icon: IconBrandJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: IconBrandPhp, name: "PHP", color: "text-indigo-600" },
    { icon: IconBrandCpp, name: "C++", color: "text-blue-600" },
    { icon: IconBrandMysql, name: "MySQL", color: "text-orange-600" },
  ];

  const frameworks = [
    { icon: IconBrandReact, name: "React", color: "text-blue-400" },
    { icon: IconBrandTailwind, name: "Tailwind", color: "text-cyan-400" },
    { icon: IconBrandLaravel, name: "Laravel", color: "text-red-600" },
    { icon: IconBrandBootstrap, name: "Bootstrap", color: "text-purple-600" },
  ];

  const tools = [
    { icon: IconBrandGit, name: "Git", color: "text-orange-600" },
    { icon: IconBrandGithub, name: "Github", color: "text-gray-700" },
    { icon: IconBrandFigma, name: "Figma", color: "text-pink-500" },
  ];

  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <section id="about" className="min-h-screen py-16 sm:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* 3D Global Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* TOP SECTION: THE FLIPPABLE CARD & PORTRAIT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-center mb-20">

          {/* LEFT: ID CARD CONTAINER */}
          <div className="w-full lg:w-[60%] perspective-2000 group">
            <div
              className={`relative w-full aspect-[1.6/1] cursor-pointer transition-all duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : 'hover:scale-[1.02]'}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 backface-hidden bg-[#5ba4ca] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-6 sm:p-10 flex flex-col justify-between border-b-[10px] border-r-[10px] border-black/15">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-black">i</div>
                      <span className="text-[10px] sm:text-xs font-black border-2 border-black px-2 py-0.5 tracking-tighter bg-white/10">CARD</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black leading-[0.85] tracking-tighter uppercase">
                      CHRISTIAN <br /> GOMELAN
                    </h2>
                  </div>
                  <div className="text-black text-right hidden sm:block">
                    <p className="text-[10px] font-black opacity-80 uppercase tracking-widest">(Web開発者)</p>
                    <p className="text-xs font-black uppercase tracking-tighter mt-1">Full-Stack Dev</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-8 mt-6">
                  <div className="border-t border-black/20 pt-2">
                    <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Nationality</p>
                    <p className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">Filipino (+63)</p>
                  </div>
                  <div className="border-t border-black/20 pt-2">
                    <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Status</p>
                    <p className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">Intern</p>
                  </div>
                  <div className="border-t border-black/20 pt-2">
                    <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Location</p>
                    <p className="text-xs sm:text-sm font-black text-black uppercase tracking-tight">Taguig City</p>
                  </div>

                </div>

                <div className="flex justify-between items-end mt-8 border-t-2 border-black/10 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[8px] font-black rotate-90 mb-2 opacity-50">SIGNATURE</span>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-black/40 flex items-center justify-center relative bg-white/5">
                        <span className="text-2xl font-light text-black/60">+</span>
                      </div>
                    </div>
                    <p className="text-[9px] sm:text-[11px] max-w-[280px] leading-[1.3] font-bold text-black/80">
                      ● This card verifies the holder as a skilled software engineer specializing in modern web ecosystems.
                    </p>
                  </div>
                  <div className="text-[12px] font-black bg-black text-[#5ba4ca] px-2 py-0.5 rounded-sm transform -rotate-3">VERIFIED</div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#5ba4ca] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-6 sm:p-10 flex flex-col justify-between border-b-[10px] border-r-[10px] border-black/15 overflow-hidden">
                <div className="relative z-10 flex gap-8 h-full">
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <p className="text-xs font-black bg-black text-[#5ba4ca] px-2 py-1 uppercase tracking-widest">About.me</p>
                        <div className="h-[2px] flex-grow bg-black/20"></div>
                      </div>
                      <p className="text-xs sm:text-sm text-black leading-relaxed font-bold">
                        Hi, I'm Christian — a web developer based in Taguig City specializing in custom WordPress development, PHP logic, and technical SEO.
                      </p>
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase opacity-40">Core Expertise</p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Laravel', 'Tailwind', 'WordPress', 'SEO', 'MySQL'].map(s => (
                            <span key={s} className="text-[9px] font-black border border-black/30 px-2 py-0.5 uppercase tracking-tighter">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">Simple Man, Simple Life</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-6 border-l border-black/10 pl-8">
                    <div className="bg-white p-3 rounded-xl shadow-inner border border-black/5 flex flex-col items-center">
                      {/* QR CODE MOCK */}
                      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white p-1 rounded-md overflow-hidden">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/chrisgomelan"
                          alt="GitHub QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[8px] font-black mt-2 tracking-widest opacity-40">SCAN FOR REPO</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-[10px] font-black tracking-[0.5em] rotate-90 origin-center translate-y-8 uppercase opacity-60">MORE INFO</p>
                      <div className="text-3xl mt-4">→</div>
                    </div>
                  </div>
                </div>

                {/* Texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
              </div>
            </div>
            <p className="text-center mt-8 text-xs text-gray-400 font-black uppercase tracking-[0.3em] animate-pulse">Click card to Flip Details</p>
          </div>

          {/* RIGHT: PORTRAIT & QUICK STATS */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start space-y-8">
            <FadeInOnScroll className="relative group">
              <div className="absolute inset-0 bg-[#5ba4ca] rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 opacity-20"></div>
              <div className="absolute -inset-2 bg-white rounded-[3rem] shadow-xl"></div>
              <img
                src="/christian.png"
                alt="Christian Profile"
                className="relative w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-x-8 border-gray-100"
              />
              <div className="absolute bottom-6 -right-4 bg-black text-white px-4 py-2 text-xs font-black skew-x-[-12deg] shadow-xl">
                CHRISTIAN GOMELAN
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* BOTTOM SECTION: DETAILED TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-12 border-t border-gray-200">

          {/* Education */}
          <FadeInOnScroll>
            <div className="flex items-center mb-10 gap-4">
              <div className="p-3 bg-black text-white rounded-xl transform -rotate-3">
                <IconSchool size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Academic Path</h3>
            </div>
            <div className="relative border-l-4 border-black pl-8 ml-6 space-y-12">
              {education.map((edu) => (
                <div key={edu.id} className="relative group">
                  <div className="absolute -left-[42px] top-1.5 w-[20px] h-[20px] bg-black border-4 border-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <h4 className="text-xl font-black text-gray-900 leading-none mb-2 underline decoration-4 decoration-black/10 underline-offset-4">{edu.degree}</h4>
                  <p className="text-base font-bold text-gray-600 mb-1">{edu.institution} — {edu.location}</p>
                  <p className="text-sm font-black text-[#5ba4ca] uppercase tracking-widest">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

          {/* Experience */}
          <FadeInOnScroll>
            <div className="flex items-center mb-10 gap-4">
              <div className="p-3 bg-[#5ba4ca] text-black rounded-xl transform rotate-3 shadow-lg shadow-[#5ba4ca]/20">
                <IconBriefcase size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Career Record</h3>
            </div>
            <div className="relative border-l-4 border-[#5ba4ca] pl-8 ml-6 space-y-16">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[42px] top-1.5 w-[20px] h-[20px] bg-[#5ba4ca] border-4 border-white rounded-full group-hover:scale-150 transition-transform duration-300 flex items-center justify-center">
                    {!exp.endDate && <span className="absolute w-full h-full rounded-full bg-[#5ba4ca] animate-ping opacity-50"></span>}
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-3">
                    <h4 className="text-xl font-black text-gray-900 leading-none">{exp.position}</h4>
                    <span className="text-xs font-black bg-gray-100 text-gray-500 px-2 py-1 rounded border border-gray-200 uppercase whitespace-nowrap">
                      {exp.startDate} – {exp.endDate || "Present"}
                    </span>
                  </div>
                  <p className="text-base font-bold text-[#5ba4ca] mb-4">{exp.company}</p>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((point, index) => (
                      <li key={index} className="text-sm font-bold text-gray-600 pl-6 relative before:content-['▼'] before:absolute before:left-0 before:text-[8px] before:top-1 before:text-[#5ba4ca]">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-black text-white text-[9px] font-black uppercase rounded-sm hover:translate-y-[-2px] transition-transform">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  );
}

export default About;