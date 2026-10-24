import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            05 — Parcours
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
            Formation & diplômes
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Un parcours en informatique, du DUT à la Licence, avec une
            spécialisation progressive vers le développement web et les bases
            de données.
          </p>
        </div>

        <ol className="mt-12 border-l border-border">
          {experiences.map((item) => (
            <li
              key={`${item.period}-${item.title}`}
              className="relative pl-6 pb-10 last:pb-0"
            >
              <span className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg" />

              <p className="text-xs uppercase tracking-wider text-muted">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-display font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-accent">{item.organization}</p>
              {item.description && (
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}