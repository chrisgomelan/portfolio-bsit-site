import { IconBrandJavascript, IconBrandReact, IconBrandNodejs, IconBrandPython, IconBrandTailwind, IconBrandHtml5, IconBrandCpp, IconBrandPhp, IconBrandMysql, IconBrandLaravel, IconBrandBootstrap, IconBrandGit, IconBrandGithub, IconBrandFigma, IconSchool, IconBriefcase } from "@tabler/icons-react";
import { experiences, education } from "../data/project.js";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll.jsx";
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


  return (
    <section id="about" className="min-h-[50vh] sm:min-h-[40vh] md:min-h-[40vh] sm:p-8 md:p-8 flex items-center justify-center py-8 sm:py-12 md:py-16">
      <FadeInOnScroll className="max-w-5xl gap-4 mx-auto text-center px-3 sm:px-4 flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-3/4 left-about flex flex-col items-center md:items-center mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>

          <img src="/christian.png" alt="Christian's Profile" className="mx-auto md:mx-0 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-cover mb-4 sm:mb-6" />

          <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg font-medium text-gray-800 text-start">
            Hi, I'm Christian — a web developer based in Taguig City.
          </p>

          <p className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base text-gray-600 text-start leading-relaxed">
            Currently a <span className="font-semibold text-gray-800">Web Developer Intern at Vite SEO Digital Advertising OPC</span>, specializing in custom WordPress development, child themes, PHP logic, and technical SEO.
          </p>

          <p className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base text-gray-600 text-start leading-relaxed">
            I build web applications using <span className="font-semibold text-gray-800">React, Laravel, and Tailwind CSS</span>. As a freelance developer, I created <span className="font-semibold text-gray-800">Repair Hub</span> — a full-stack Service Marketplace PWA with real-time booking and automated technician assignments.
          </p>

          <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-gray-600 text-start leading-relaxed">
            My portfolio also includes a capstone <span className="font-semibold text-gray-800">Library Management System</span> and the official website for a <span className="font-semibold text-gray-800">Catholic school in Taguig</span>.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">

            {languages.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                    <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}

            {frameworks.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                    <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}

            {tools.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                    <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
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
                <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-1 tracking-wider">{edu.startDate} – {edu.endDate}</p>
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
                  <span className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wider whitespace-nowrap">
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
    </section>
  )
}

export default About