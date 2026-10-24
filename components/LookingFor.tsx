import { Briefcase, Clock, MapPin, CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/data/site";

const infos = [
  { icon: Briefcase, label: "Poste", value: site.lookingFor.title },
  { icon: Clock, label: "Durée", value: site.lookingFor.duration },
  { icon: MapPin, label: "Lieu", value: site.lookingFor.location },
  { icon: CalendarCheck, label: "Démarrage", value: site.lookingFor.start },
];

export default function LookingFor() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12 md:items-center">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              Ce que je cherche
            </p>
            <h2 className="mt-2 text-2xl font-display font-bold tracking-tight">
              {site.lookingFor.title}
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {site.lookingFor.description}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="bg-surface p-4 flex items-start gap-3">
                  <Icon size={18} weight="regular" className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      {info.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-text font-medium">
                      {info.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}