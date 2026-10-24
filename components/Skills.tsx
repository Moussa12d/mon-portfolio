import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            02 — Compétences
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
            Les outils que je maîtrise
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            De la modélisation des données à la mise en production, en passant
            par la sécurité et la documentation.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border border border-border rounded-md overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div key={category.title} className="bg-surface p-6">
              <h3 className="text-sm font-medium text-text">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center h-7 px-2.5 rounded-sm border border-border text-xs text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}