import { EnvelopeSimple, GithubLogo, WhatsappLogo, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { cacheLife } from "next/cache";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display font-bold text-lg tracking-tight text-text"
            >
              {site.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {site.role} basé à {site.location}. Disponible pour un stage ou
              une collaboration.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <EnvelopeSimple size={18} weight="regular" />
              </a>
              <a
                href="https://github.com/Moussa12d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <GithubLogo size={18} weight="regular" />
              </a>
              <a
                href="https://wa.me/22364729858"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <WhatsappLogo size={18} weight="regular" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-text">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-text">Haut de page</p>
            <a
              href="#top"
              className="mt-4 inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border text-sm text-muted hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowUp size={16} weight="regular" />
              Remonter
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted">
          <p>
            © {year} {site.name}. Portfolio professionnel.
          </p>
          <p>Next.js et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}