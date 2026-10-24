import Image from "next/image";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              01 — À propos
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
              Qui je suis
            </h2>

            {/* Photo */}
            <div className="mt-8 border border-border rounded-md overflow-hidden bg-surface">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/images/moussa.jpg"
                  alt="Portrait de Moussa Dagno"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <dl className="mt-8 flex flex-col gap-4">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 border-b border-border pb-3"
                >
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="text-lg font-display font-semibold text-text">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="text-sm font-medium text-text">Langues</p>
              <ul className="mt-3 flex flex-col gap-1 text-sm text-muted">
                <li>Français — courant</li>
                <li>Anglais — intermédiaire</li>
                <li>Bamanan — natif</li>
              </ul>
            </div>
          </div>

          <div className="md:pt-16">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {site.about}
            </p>

            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed">
              De la modélisation des données jusqu&apos;au déploiement, je
              travaille sur l&apos;ensemble de la chaîne : conception
              d&apos;API REST sécurisées, gestion des rôles et des droits
              d&apos;accès, interfaces modernes et documentation technique.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Django", "Next.js", "React", "PostgreSQL", "JWT", "RBAC"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center h-8 px-3 rounded-md border border-border text-sm text-muted"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}