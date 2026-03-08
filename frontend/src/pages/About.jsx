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
    <section id="about" className="min-h-[50vh] flex items-center justify-center py-12 sm:py-20 overflow-hidden">
      <FadeInOnScroll className="max-w-6xl w-full mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* ID Card Column */}
        <div className="w-full lg:w-3/5 perspective-1000">
          <div
            className={`relative w-full aspect-[1.6/1] sm:aspect-[1.7/1] cursor-pointer transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* FRONT OF THE CARD */}
            <div className="absolute inset-0 backface-hidden bg-[#5ba4ca] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-10 flex flex-col justify-between border-b-8 border-r-8 border-black/10">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold">i</div>
                    <span className="text-[10px] sm:text-xs font-black border border-black px-1.5 py-0.5 tracking-tighter">CARD</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black leading-none mt-2 sm:mt-4 tracking-tighter">
                    CHRISTIAN <br /> SALAR
                  </h2>
                </div>
                <div className="text-black text-right">
                  <p className="text-[10px] sm:text-xs font-bold opacity-70">(高在賢) DEVELOPER</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-y-6">
                <div>
                  <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest border-b border-black/20 mb-1">Status</p>
                  <p className="text-xs sm:text-sm font-bold text-black uppercase tracking-tight">Technical Intern (+08)</p>
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest border-b border-black/20 mb-1">Contact</p>
                  <p className="text-xs sm:text-sm font-bold text-black uppercase tracking-tight">christian@example.com</p>
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest border-b border-black/20 mb-1">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-black uppercase tracking-tight">Taguig City, PH</p>
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] font-black uppercase opacity-60 tracking-widest border-b border-black/20 mb-1">Field</p>
                  <p className="text-xs sm:text-sm font-bold text-black uppercase tracking-tight">Web Architecture</p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-black/10 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] font-black rotate-90 mb-2">SCENT</span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 border border-black/40 flex items-center justify-center relative">
                      <div className="absolute inset-0 border-r border-b border-black/20 translate-x-1 translate-y-1"></div>
                      <span className="text-xl">+</span>
                    </div>
                  </div>
                  <p className="text-[8px] sm:text-[9px] max-w-[200px] leading-tight font-medium ml-2 opacity-80">
                    ● Specializing in custom WordPress development, PHP logic, and technical SEO. Building modern web experiences with React and Laravel.
                  </p>
                </div>
                <div className="text-[10px] font-black border-2 border-black rounded-sm px-1 italic">V.01</div>
              </div>
            </div>

            {/* BACK OF THE CARD */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#5ba4ca] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-10 flex flex-col justify-between border-b-8 border-r-8 border-black/10 overflow-hidden">
              <div className="flex gap-6 items-start h-full">
                <div className="flex-grow flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tighter uppercase border-b-2 border-black inline-block mb-2">Extended Biography</h3>
                    <p className="text-[10px] sm:text-xs text-black leading-relaxed font-bold">
                      Hi, I'm Christian — a web developer based in Taguig City.
                      I build web applications using React, Laravel, and Tailwind CSS.
                      Currently a Web Developer Intern at Vite SEO Digital Advertising OPC.
                    </p>
                    <p className="text-[10px] sm:text-xs text-black leading-relaxed font-medium opacity-90">
                      Freelance creator of Repair Hub — a full-stack Service Marketplace PWA.
                      Developer of BPS Library System and Official Website.
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-[8px] font-black uppercase tracking-widest mb-2 opacity-60 border-b border-black/20">Certified Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {[...languages, ...frameworks].slice(0, 10).map((tech) => (
                        <span key={tech.name} className="bg-black text-[#5ba4ca] px-1.5 py-0.5 text-[8px] sm:text-[10px] font-black rounded-sm uppercase">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <div className="bg-white p-2 rounded-lg shadow-inner">
                    {/* Mock QR Code */}
                    <div className="w-16 h-16 sm:w-24 sm:h-24 grid grid-cols-4 grid-rows-4 gap-1">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className={`rounded-sm ${(i % 3 === 0 || i % 7 === 0) ? 'bg-black' : 'bg-gray-100'}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px] font-black tracking-widest rotate-90 origin-right translate-y-4 translate-x-[-10px]">MORE</p>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>

              {/* Visual texture/noise pattern overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
            </div>
          </div>
          <p className="text-center mt-6 text-xs text-gray-500 font-medium animate-pulse">Click card to see details ↓</p>
        </div>

        {/* Right side info (Profile Image) */}
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3 group-hover:rotate-6 transition duration-500"></div>
            <img
              src="/christian.png"
              alt="Christian Profile"
              className="relative w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-[3rem] shadow-xl border-4 border-white transition-transform group-hover:scale-105 duration-500"
            />
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 w-full shadow-inner">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick Profile
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Base</span>
                <span className="text-sm font-bold text-gray-700">Taguig, PH</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Specialty</span>
                <span className="text-sm font-bold text-gray-700">Full-Stack Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Experience</span>
                <span className="text-sm font-bold text-gray-700">Internship Rank</span>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
      <div className="w-full md:w-full exp-educ-container">
        <div className="flex items-center mb-6 sm:mb-8 gap-3 sm:gap-4 md:gap-5">
          <IconSchool size={32} className="text-black-600 p-2 bg-[#D6D6D6] border-2 border-black rounded-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Education</h3>
        </div>

        <div className="relative border-l-2 border-dotted border-gray-300 ml-5 sm:ml-7 pl-6 sm:pl-8 mb-12">
          {education.map((edu) => (
            <div key={edu.id} className="relative mb-2 text-start group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#716A5C] group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800">{edu.degree}</h4>
              <p className="text-sm sm:text-base text-gray-600 font-medium">{edu.institution} — {edu.location}</p>
              <p className="text-sm text-gray-700 font-semibold mt-1 tracking-wide">{edu.startDate} – {edu.endDate}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center mb-6 sm:mb-8 gap-3 sm:gap-4 md:gap-5">
          <IconBriefcase size={32} className="text-black-600 p-2 bg-[#D6D6D6] border-2 border-black rounded-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Experience</h3>
        </div>

        <div className="relative border-l-2 border-dotted border-gray-300 ml-5 sm:ml-7 pl-6 sm:pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative mb-10 text-start group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#716A5C] group-hover:scale-125 transition-transform duration-300 shadow-sm flex items-center justify-center">
                {!exp.endDate && (
                  <span className="absolute h-full w-full rounded-full bg-[#716A5C] opacity-75 animate-ping"></span>
                )}
                {!exp.endDate && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#716A5C]"></div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">{exp.position}</h4>
                <span className="text-sm text-gray-700 font-semibold tracking-wide whitespace-nowrap">
                  {exp.startDate} – {exp.endDate ? exp.endDate : "Present"}
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium mb-2">{exp.company} — {exp.location}</p>
              <ul className="space-y-1.5 ml-4">
                {exp.description.map((point, index) => (
                  <li key={index} className="text-xs sm:text-sm text-gray-600 relative before:content-['•'] before:absolute before:-left-4 before:text-gray-400">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.slice(0, 5).map(tech => (
                  <span key={tech} className="px-2 py-0.5 bg-gray-100 text-[10px] sm:text-xs text-gray-500 rounded-md border border-gray-200 uppercase tracking-tighter">
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 5 && (
                  <span className="text-[10px] sm:text-xs text-gray-400 self-center">+{exp.technologies.length - 5} more</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </FadeInOnScroll>
    </section >
  )
}

export default About