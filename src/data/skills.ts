export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    kanji: "前",
    color: "#6366f1",
    skills: [
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "Redux", icon: "SiRedux", color: "#764ABC" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS3", icon: "SiCss", color: "#1572B6" },
      { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "ShadCN", icon: "SiRadixui", color: "#ffffff" },
      { name: "Framer Motion", icon: "SiFramer", color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    kanji: "後",
    color: "#8b5cf6",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
      { name: "Socket.IO", icon: "SiSocketdotio", color: "#ffffff" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
      { name: "REST API", icon: "SiPostman", color: "#FF6C37" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    kanji: "語",
    color: "#a78bfa",
    skills: [
      { name: "C", icon: "SiC", color: "#A8B9CC" },
      { name: "C++", icon: "SiCplusplus", color: "#00599C" },
      { name: "Java", icon: "SiJava", color: "#ED8B00" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    kanji: "具",
    color: "#c4b5fd",
    skills: [
      { name: "Git", icon: "SiGit", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
      { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
      { name: "Render", icon: "SiRender", color: "#46E3B7" },
      { name: "Vite", icon: "SiVite", color: "#646CFF" },
      { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
    ],
  },
];

// Google-level skills to highlight as "learning / goals"
export const growthSkills = [
  {
    name: "Next.js",
    icon: "SiNextdotjs",
    color: "#ffffff",
    status: "learning",
  },
  { name: "Docker", icon: "SiDocker", color: "#2496ED", status: "learning" },
  { name: "GraphQL", icon: "SiGraphql", color: "#E10098", status: "goal" },
  {
    name: "AWS",
    icon: "SiAmazonwebservices",
    color: "#FF9900",
    status: "goal",
  },
];
