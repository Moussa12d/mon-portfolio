export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Langages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "PHP",
      "Java",
    ],
  },
  {
    title: "Frameworks & Web",
    items: [
      "Django",
      "Django REST",
      "React",
      "Next.js",
      "Laravel",
      "Spring Boot",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Bases de données",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Architecture & Sécurité",
    items: [
      "API REST",
      "JWT",
      "RBAC",
      "UML",
      "MVC",
      "MERISE",
      "Design Patterns",
    ],
  },
  {
    title: "Outils & Déploiement",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Render",
      "VS Code",
      "Postman",
      "GitHub Pages",
    ],
  },
  {
    title: "Environnements",
    items: ["Windows", "Linux", "Microsoft 365"],
  },
];