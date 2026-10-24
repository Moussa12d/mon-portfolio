export type Project = {
  slug: string;
  title: string;
  category: string;
  stack: string[];
  summary: string;
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "agrimarket-mali",
    title: "AgriMarket Mali",
    category: "Plateforme agricole tripartite",
    stack: ["Django REST", "Next.js", "PostgreSQL", "JWT", "RBAC"],
    summary:
      "Application web mettant en relation agriculteurs, acheteurs et transporteurs au Mali. Quatre espaces utilisateurs, contrôle d'accès par rôles, API REST sécurisée, module de transport type VTC et paiements Mobile Money (Orange Money, Wave). Projet de fin d'études, 2025–2026.",
    featured: true,
  },
  {
    slug: "boutique-telephones",
    title: "Boutique & réparation téléphones",
    category: "Application métier",
    stack: ["Django REST", "React", "PostgreSQL", "Render"],
    summary:
      "Application e-commerce et suivi de réparation : catalogue de téléphones et accessoires, demande de réparation avec devis après examen, suivi d'avancement par numéro de ticket. Interface moderne et back-office de gestion.",
    url: "https://dagno-frontend.onrender.com/",
  },
  {
    slug: "portfolio",
    title: "Portfolio personnel",
    category: "Site vitrine",
    stack: ["Bootstrap", "GitHub Pages"],
    summary:
      "Site vitrine personnel pour présenter mon parcours et mes projets. Déploiement statique via GitHub Pages.",
  },
];