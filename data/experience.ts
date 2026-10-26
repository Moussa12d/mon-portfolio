export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  description?: string;
};

export const experiences: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    title: "Licence en Génie Informatique et Programmation",
    organization: "INTEC SUP, Bamako",
    description:
      "Attestation de fin de cycle obtenue. Projet de fin d'études : AgriMarket Mali, plateforme agricole tripartite.",
  },
  {
    period: "2024 – 2025",
    title: "DUT Informatique de Gestion",
    organization: "INTEC SUP, Bamako",
    description:
      "Bases de données, gestion des comptes utilisateurs et droits d'accès, documentation technique.",
  },
  {
    period: "2020 – 2021",
    title: "Baccalauréat, Sciences Économiques",
    organization: "Lycée Ba Nassou D.",
  },
  {
    period: "2019",
    title: "DEF (Diplôme d'Études Fondamentales)",
    organization: "École Ex-Base Aérienne",
  },
];