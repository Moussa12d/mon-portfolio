import { site } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">
            03 — Services
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
            Ce que je peux construire
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            De l&apos;analyse du besoin jusqu&apos;à la mise en production, en
            passant par la sécurité et la documentation.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border border border-border rounded-md overflow-hidden sm:grid-cols-2">
          {site.services.map((service) => (
            <div key={service.number} className="bg-surface p-6 md:p-8">
              <span className="text-sm font-display font-semibold text-accent">
                {service.number}
              </span>
              <h3 className="mt-2 text-lg font-display font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}