import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moussa Dagno — Développeur Web Full Stack",
  description:
    "Portfolio de Moussa Dagno, développeur web Full Stack basé à Bamako. Django, React, Next.js, API REST sécurisées et gestion des rôles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-bg text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}