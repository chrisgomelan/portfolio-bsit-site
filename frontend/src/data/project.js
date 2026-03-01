export const experiences = [
  {
    id: 1,
    position: "Web Developer Intern",
    company: "Vite SEO Digital Advertising OPC",
    location: "Philippines",
    startDate: "February 2026",
    endDate: null,
    duration: "Present",
    description: [
      "Specializing in custom WordPress development with child themes and PHP logic.",
      "Applying technical SEO best practices to build high-performing, search-optimized websites.",
      "Collaborating with the team on client projects and site optimization."
    ],
    technologies: ["WordPress", "PHP", "SEO", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    position: "PHP Web Developer Voluntary Intern",
    company: "iEMINENCE, INC.",
    location: "Makati, National Capital Region, Philippines",
    startDate: "October 2025",
    endDate: "January 2026",
    duration: "4 mos",
    description: [
      "Developed frontend and backend features for internal medical system.",
      "Built dashboards with data visualization and Excel import/export integrations.",
      "Handled bug fixes, database optimization, and Git version control."
    ],
    technologies: ["PHP", "Laravel", "Git", "MySQL", "JavaScript"]
  },
  {
    id: 3,
    position: "Wordpress Developer",
    company: "Bicutan Parochial School, inc.",
    location: "Taguig, PH",
    startDate: "March 2025",
    description: [
      "Led full-stack development of school website using WordPress and Elementor.",
      "Designed custom layouts aligned with school branding standards.",
      "Collaborated with team on module implementation and site functionality."
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS"]
  }
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Science in Information Technology",
        institution: "Polytechnic University of the Philippines - Taguig Branch",
        location: "Taguig City, PH",
        startDate: "2022",
        endDate: "2026",
    
    }
]

export const projects = [
  {
    id: 1,
    title: "BPS E-Library PWA",
    company: "Bicutan Parochial School, inc.",
    description: "A comprehensive library management system built with modern web technologies featuring Progressive Web App capabilities.",
    features: [
      "Multi-User Authentication",
      "Digital & Physical Book Management",
      "Progressive Web App",
      "Smart Reservation System",
      "Email Notifications"
    ],
    technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL", "PWA"],
    image: "/projects/bps-elibrary.jpg",
    github: "https://github.com/username/bps-elibrary",
    live: "https://e-library.bps.edu.ph",
    featured: true,
    image: "/images/elib.png"
  },
  {
    id: 2,
    title: "BPS Library Management System",
    company: "Bicutan Parochial School, inc.",
    description: "Full-stack library management system with RFID/barcode technology for book circulation and attendance monitoring.",
    features: [
      "Book Circulation Management",
      "RFID/Barcode Integration",
      "Attendance Monitoring",
      "CI/CD Deployment Pipeline",
      "Live Production System"
    ],
    technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL", "RFID/Barcode"],
    image: "/images/lib.png",
    live: "https://",
    featured: true,
  },
  {
    id: 3,
    title: "BPS Official Website",
    company: "Bicutan Parochial School, inc.",
    description: "Catholic school's official website with custom layouts and modern design.",
    features: [
      "Custom Elementor Layouts",
      "School Branding Standards",
      "Responsive Design",
      "Module Integration",
      "Content Management"
    ],
    technologies: ["WordPress", "Elementor", "HTML", "CSS"],
    image: "/images/website.png",
    live: "https://bps.edu.ph",
    featured: true
  },
  {
    id: 4,
    title: "Process Scheduler System",
    company: "School Group Project",
    description: "Process scheduler application built with C++ for efficient task management.",
    features: [
      "Process Scheduling Algorithms",
      "Frontend Interface Design",
      "Core System Implementation",
      "Task Management",
      "Visual Studio Development"
    ],
    technologies: ["C++", "Visual Studio"],
    image: "/images/process_sched.png",
    github: "https://github.com/Amari2002/Ops",
    live: "https://github.com/Amari2002/Ops",
    featured: true
  }
];

export const documents = [
  {
    id: 1,
    name: "Resume",
    description: "A comprehensive summary of skills, experience, and qualifications.",
    driveUrl: "https://drive.google.com/file/d/1s__KOWtqypYMzhE84qtGU6ZbQdQa-6gu/preview",
    type: "pdf",
  },
  {
    id: 2,
    name: "Student Information Sheet",
    description: "Personal and academic details of the student intern.",
    driveUrl: "https://drive.google.com/file/d/1ZBlSLCUx_3l08HM-xWSeEenXyEzPRj07/preview",
    type: "pdf",
  },
  {
    id: 3,
    name: "Recommendation Letter",
    description: "A formal letter endorsing the student for on-the-job training.",
    driveUrl: "https://drive.google.com/file/d/1Caq9kZ1WiTSOW3V70r7Qxlr2jVjrIuor/preview",
    type: "pdf",
  },
  {
    id: 4,
    name: "MOA",
    description: "Memorandum of Agreement between the school and the host company.",
    driveUrl: "",
    fallbackMessage: "MOA is currently being processed by the school. Submitted to Ma'am Gina (Feb 10, 2026).",
    type: "pdf",
  },
  {
    id: 5,
    name: "Consent Form",
    description: "Parental or guardian consent for the student's OJT participation.",
    driveUrl: "https://drive.google.com/file/d/1wjuOmsM_x3-Ze71wGYZ580bA9tdd5pEz/preview",
    type: "pdf",
  },
  {
    id: 6,
    name: "DTR",
    description: "Daily Time Record tracking attendance and working hours.",
    driveUrl: "",
    fallbackMessage: "DTR will be available soon",
    type: "pdf",
  },
  {
    id: 7,
    name: "Written Evaluation",
    description: "Performance evaluation written by the company supervisor.",
    driveUrl: "",
    fallbackMessage: "Evaluation form will be submitted upon OJT completion.",
    type: "pdf",
  },
  {
    id: 8,
    name: "Certificate of Completion",
    description: "Official certificate confirming completion of the OJT program.",
    driveUrl: "",
    fallbackMessage: "Certificate will be issued after completing all OJT hours.",
    type: "pdf",
  },
  {
    id: 9,
    name: "Acceptance Letter",
    description: "Letter from the host company accepting the student for internship.",
    driveUrl: "https://drive.google.com/file/d/10VRA2PNrPyDQ0tCRgYeHs_jnNbLAVlbB/preview",
    type: "pdf",
  },
];