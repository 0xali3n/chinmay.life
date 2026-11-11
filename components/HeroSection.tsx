"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent, siteMeta } from "@/lib/content";

/** Minimal centered hero: portrait on top, name + one-line role + short summary, CTAs — easy scan like template portfolios. */
export function HeroSection({ lang = "en" }: { lang?: "en" | "de" }) {
  const t =
    lang === "de"
      ? {
          greeting: "Hallo, ich bin",
          roleLine:
            "Produktorientierter Software Engineer · Full-Stack, angewandte KI & Blockchain",
          summary:
            "Produktorientierter Software Engineer mit Erfahrung in Full-Stack-Entwicklung, angewandter KI und Blockchain. Mitgründer eines Startups, Leitung der Produktentwicklung und Projekte in Emerging Technologies. Derzeit in Mainz, Deutschland — offen für den Austausch mit ambitionierten Buildern, Startup-Teams und spannenden Engineering-Möglichkeiten.",
          primaryCta: "Ausgewählte Projekte",
          secondaryCta: "Lebenslauf (PDF)",
        }
      : {
          greeting: heroContent.greeting,
          roleLine: heroContent.roleLine,
          summary: heroContent.summary,
          primaryCta: heroContent.primaryCta.label,
          secondaryCta: heroContent.secondaryCta.label,
        };

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-32 md:pb-20 scroll-mt-28 bg-white"
    >
      <div className="mx-auto max-w-2xl px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 overflow-hidden rounded-full ring-[3px] ring-blue-100 shadow-[0_12px_40px_-12px_rgba(37,99,235,0.15)] bg-slate-100">
              <Image
                src={heroContent.headshotSrc}
                alt={heroContent.imageAlt}
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 640px) 144px, 192px"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="mt-8 text-sm text-blue-600 font-semibold tracking-wide"
        >
          {t.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-1 font-sans text-3xl sm:text-4xl md:text-[2.5rem] font-semibold tracking-tight"
        >
          {(() => {
            const parts = siteMeta.name.trim().split(/\s+/);
            const first = parts[0] ?? siteMeta.name;
            const rest = parts.slice(1).join(" ");
            return (
              <>
                <span className="text-blue-600">{first}</span>
                {rest ? <span className="text-slate-900"> {rest}</span> : null}
              </>
            );
          })()}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14 }}
          className="mt-3 text-sm sm:text-base text-blue-700 font-medium"
        >
          {t.roleLine}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="mt-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md mx-auto"
        >
          {t.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href={heroContent.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.primaryCta}
          </motion.a>
          <motion.a
            href={heroContent.secondaryCta.href}
            {...(heroContent.secondaryCta.external === true
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/60 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.secondaryCta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
