import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            04 — Projets
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
            Des solutions concrètes
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Une sélection de plateformes et applications métier, du problème
            initial à la mise en production.
          </p>
        </div>

        {featured && (
          <article className="mt-12 group border border-border bg-surface rounded-md overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_8px_30px_-12px_rgba(22,163,74,0.25)]">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-flex items-center h-6 px-2 rounded-sm border border-accent text-accent">
                    Projet phare
                  </span>
                  <span>{featured.category}</span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-display font-bold tracking-tight">
                  {featured.title}
                </h3>

                <p className="mt-4 text-muted leading-relaxed">
                  {featured.summary}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-flex items-center h-7 px-2.5 rounded-sm border border-border text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 h-10 px-4 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
                  >
                    Voir le projet
                    <ArrowUpRight
                      size={16}
                      weight="regular"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </div>

              <div className="border-t md:border-t-0 md:border-l border-border bg-bg p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-wider text-muted">
                  Ce qui a été construit
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-text">
                  <li className="flex gap-3">
                    <span className="text-accent font-display">01</span>
                    Modélisation relationnelle multi-acteurs (PostgreSQL)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display">02</span>
                    Contrôle d&apos;accès par rôles (RBAC) et isolation des données
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display">03</span>
                    Authentification JWT personnalisée
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display">04</span>
                    API REST sécurisée et interface Next.js
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-display">05</span>
                    Module de transport type VTC et paiements Mobile Money
                  </li>
                </ul>
              </div>
            </div>
          </article>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((project) => (
            <article
              key={project.slug}
              className="group border border-border bg-surface rounded-md p-6 flex flex-col transition-all duration-300 hover:border-accent hover:shadow-[0_8px_30px_-12px_rgba(22,163,74,0.25)]"
            >
              <p className="text-xs text-muted">{project.category}</p>
              <h3 className="mt-2 text-xl font-display font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed flex-1">
                {project.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center h-7 px-2.5 rounded-sm border border-border text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  Voir le projet
                  <ArrowRight
                    size={16}
                    weight="regular"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}