"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);

      const sections = links
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as Element[];

      let current = "";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = `#${section.id}`;
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-bg"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a
          href="#top"
          className="font-display font-bold text-lg tracking-tight text-text"
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm transition-colors ${
                  active === link.href
                    ? "text-accent"
                    : "text-muted hover:text-accent"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center h-9 px-4 rounded-md border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors"
        >
          Me contacter
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-text"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center h-9 px-4 mt-2 rounded-md border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-white transition-colors"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}