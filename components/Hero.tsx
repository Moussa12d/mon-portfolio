"use client";

import { motion } from "framer-motion";
import { ArrowRight, EnvelopeSimple, MapPin, ArrowDown, DownloadSimple } from "@phosphor-icons/react";
import { site } from "@/data/site";

const quickStats = [
  { value: "2", label: "Projets livrés" },
  { value: "Licence", label: "Génie Informatique" },
  { value: "Full Stack", label: "Spécialité" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:items-end">
          <motion.div variants={container} initial="hidden" animate="show">
            {site.available && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 h-8 px-3 rounded-md border border-border bg-surface text-sm text-muted"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Disponible pour de nouveaux défis
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="mt-6 text-4xl md:text-6xl font-display font-bold tracking-tight leading-[1.05]"
            >
              Je construis des{" "}
              <span className="text-accent">applications web</span> utiles et
              bien documentées.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
            >
              {site.role} basé à Bamako, spécialisé en Django, React et Next.js.
              Je conçois des API REST sécurisées, des interfaces modernes et des
              systèmes de gestion des rôles — de la modélisation des données
              jusqu&apos;au déploiement.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} weight="regular" />
                {site.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <EnvelopeSimple size={16} weight="regular" />
                {site.email}
              </span>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Voir mes projets
                <ArrowRight
                  size={16}
                  weight="regular"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border bg-surface text-text text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <EnvelopeSimple size={16} weight="regular" />
                Me contacter
              </a>
              <a
                href="/cv-moussa-dagno.pdf"
                download
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border bg-surface text-text text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <DownloadSimple size={16} weight="regular" />
                Télécharger mon CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="hidden md:block"
          >
            <dl className="border border-border bg-surface rounded-md overflow-hidden">
              {quickStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-5 flex items-baseline justify-between gap-4 ${
                    i !== quickStats.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <dt className="text-sm text-muted">{stat.label}</dt>
                  <dd className="text-2xl font-display font-bold tracking-tight text-text">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#about"
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
            >
              En savoir plus
              <ArrowDown size={14} weight="regular" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}