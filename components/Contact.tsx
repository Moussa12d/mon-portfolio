"use client";

import { useState } from "react";
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { site } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Contact portfolio — ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">
              06 — Contact
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">
              Discutons de votre projet
            </h2>
            <p className="mt-4 text-muted leading-relaxed max-w-md">
              Une question, une opportunité de stage ou un projet à
              digitaliser ? Écrivez-moi, je réponds sous 24 h.
            </p>

            <ul className="mt-8 flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={18} weight="regular" className="text-accent" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-text hover:text-accent transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} weight="regular" className="text-accent" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-text hover:text-accent transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} weight="regular" className="text-accent" />
                <span className="text-muted">{site.location}</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-surface rounded-md p-6 md:p-8 flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-text mb-1.5">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full h-10 px-3 rounded-sm border border-border bg-bg text-text text-sm focus:border-accent focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-text mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full h-10 px-3 rounded-sm border border-border bg-bg text-text text-sm focus:border-accent focus:outline-none transition-colors"
                placeholder="vous@exemple.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-text mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-3 py-2 rounded-sm border border-border bg-bg text-text text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Décrivez votre besoin en quelques lignes..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors disabled:opacity-60"
            >
              <PaperPlaneTilt size={16} weight="regular" />
              {status === "sending" ? "Envoi..." : "Envoyer le message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-accent">
                Votre client mail s&apos;est ouvert avec le message pré-rempli.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}