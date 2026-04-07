"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { experienceItems, localizedCopy } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type ArtifactState = {
  src: string;
  title: string;
  mediaKind: "image" | "pdf";
  downloadFilename: string;
};

function ExperienceLogo({
  company,
  logoLetter,
  logoSrc,
  logoObjectFit = "contain",
  logoCoverLight = false,
}: {
  company: string;
  logoLetter: string;
  logoSrc?: string;
  logoObjectFit?: "contain" | "cover";
  /** When using cover, use white backdrop (e.g. Pravinya) instead of dark (e.g. Anthe). */
  logoCoverLight?: boolean;
}) {
  if (logoSrc) {
    const isCover = logoObjectFit === "cover";
    const coverBg = logoCoverLight ? "bg-white" : "bg-neutral-950";
    return (
      <div
        className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-sm shadow-slate-200/60 ring-1 ring-slate-200/80 ${
          isCover ? coverBg : "bg-white"
        }`}
        aria-hidden
      >
        <Image
          src={logoSrc}
          alt={`${company} logo`}
          fill
          className={
            isCover
              ? "rounded-full object-cover object-center"
              : "object-contain p-1 object-center"
          }
          sizes="48px"
        />
      </div>
    );
  }
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white shadow-sm shadow-blue-600/30 ring-1 ring-blue-500/20"
      aria-hidden
    >
      {logoLetter}
    </div>
  );
}

function ExperienceIcon({ kind, className }: { kind: "website" | "x" | "linktree"; className?: string }) {
  const cn = className ?? "h-4 w-4";
  if (kind === "website") {
    return (
      <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    );
  }
  if (kind === "x") {
    return (
      <svg className={cn} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m4.242 4.242a9 9 0 010-12.728m4.242 4.242L21 21"
      />
    </svg>
  );
}

function DocumentKindIcon({ kind, className }: { kind: "image" | "pdf"; className?: string }) {
  const cn = className ?? "h-4 w-4";
  if (kind === "pdf") {
    return (
      <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    );
  }
  return (
    <svg className={cn} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}

function externalLinkButtonLabel(kind: "website" | "x" | "linktree", lang: "en" | "de") {
  if (kind === "website") return "Website";
  if (kind === "x") return lang === "de" ? "X (Twitter)" : "X (Twitter)";
  return "Linktree";
}

/** Horizontal pill buttons with icon + label (e.g. Anthe). */
function ExperienceIconLinkRow({
  links,
  lang,
}: {
  links: readonly { kind: "website" | "x" | "linktree"; href: string; label: string }[];
  lang: "en" | "de";
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          aria-label={link.label}
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 sm:px-3.5 text-slate-600 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExperienceIcon kind={link.kind} className="h-3.5 w-3.5 shrink-0" />
          <span className="text-xs font-semibold tracking-tight">
            {externalLinkButtonLabel(link.kind, lang)}
          </span>
        </motion.a>
      ))}
    </div>
  );
}

function InternshipArtifactButtons({
  documents,
  onOpen,
}: {
  documents: readonly {
    label: string;
    href: string;
    mediaKind: "image" | "pdf";
    downloadFilename: string;
  }[];
  onOpen: (a: ArtifactState) => void;
}) {
  const pillClass =
    "inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 sm:px-3.5 text-slate-600 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700";

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {documents.map((doc) =>
        doc.mediaKind === "pdf" ? (
          <motion.a
            key={doc.href}
            href={encodeURI(doc.href)}
            target="_blank"
            rel="noopener noreferrer"
            className={pillClass}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={doc.label}
            aria-label={`${doc.label} (opens in new tab)`}
          >
            <DocumentKindIcon kind="pdf" className="h-3.5 w-3.5 shrink-0" />
            <span className="text-xs font-semibold tracking-tight">{doc.label}</span>
          </motion.a>
        ) : (
          <motion.button
            key={doc.href}
            type="button"
            onClick={() =>
              onOpen({
                src: doc.href,
                title: doc.label,
                mediaKind: doc.mediaKind,
                downloadFilename: doc.downloadFilename,
              })
            }
            className={pillClass}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <DocumentKindIcon kind="image" className="h-3.5 w-3.5 shrink-0" />
            <span className="text-xs font-semibold tracking-tight">{doc.label}</span>
          </motion.button>
        ),
      )}
    </div>
  );
}

function ArtifactPreviewModal({
  artifact,
  onClose,
  lang,
}: {
  artifact: ArtifactState;
  onClose: () => void;
  lang: "en" | "de";
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label={lang === "de" ? "Vorschau schließen" : "Close preview"}
        className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="relative z-10 flex max-h-[min(90vh,920px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/20"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-5">
          <h3 id="artifact-modal-title" className="text-sm font-semibold text-slate-900 truncate pr-2">
            {artifact.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={artifact.src}
              download={artifact.downloadFilename}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-700"
            >
              {lang === "de" ? "Download" : "Download"}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100"
              aria-label={lang === "de" ? "Schließen" : "Close"}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-slate-100/80 p-3 sm:p-4">
          {artifact.mediaKind === "image" ? (
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element -- modal preview; dynamic user asset */}
              <img
                src={artifact.src}
                alt=""
                className="max-h-[min(75vh,800px)] w-auto max-w-full rounded-lg border border-slate-200 bg-white object-contain shadow-sm"
              />
            </div>
          ) : (
            <iframe
              title={artifact.title}
              src={artifact.src}
              className="h-[min(75vh,780px)] w-full rounded-lg border border-slate-200 bg-white shadow-sm"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Full-width experience timeline. */
export function ProfileExperienceSection({ lang = "en" }: { lang?: "en" | "de" }) {
  const [artifact, setArtifact] = useState<ArtifactState | null>(null);
  const de = localizedCopy.de.experience;
  const deEntries = de.entryTextById as Record<
    string,
    { subtitle?: string; summary?: readonly string[]; bullets?: readonly string[] }
  >;
  const t =
    lang === "de"
      ? {
          eyebrow: de.eyebrow,
          title: de.title,
          closePreview: de.closePreview,
        }
      : {
          eyebrow: "Experience",
          title: "Track record",
          closePreview: "Close preview",
        };

  return (
    <section className="scroll-mt-28 md:scroll-mt-32 bg-slate-50 border-t border-slate-100 py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <div id="experience" className="scroll-mt-28 md:scroll-mt-32 min-w-0">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600 mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 leading-snug">
              {t.title}
            </h2>
          </FadeIn>

          <ul className="mt-6 space-y-5 max-w-3xl">
            {experienceItems.map((item, index) => {
              const deEntry = deEntries[item.id];
              return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="border-b border-slate-200 pb-5 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="pt-0.5">
                  <ExperienceLogo
                    company={item.company}
                    logoLetter={item.logoLetter}
                    logoSrc={item.logoSrc}
                    logoObjectFit={"logoObjectFit" in item ? item.logoObjectFit : "contain"}
                    logoCoverLight={"logoCoverLight" in item ? Boolean(item.logoCoverLight) : false}
                  />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500">{item.period}</p>
                    <p className="mt-0.5 font-semibold text-slate-900">{item.company}</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === "de" && deEntry?.subtitle
                        ? deEntry.subtitle
                        : "subtitleLine" in item && item.subtitleLine
                          ? item.subtitleLine
                          : `${item.role} · ${item.location}`}
                    </p>
                    {"summaryParagraphs" in item && item.summaryParagraphs.length > 0 ? (
                      <div className="mt-3 space-y-3">
                        {(lang === "de" && deEntry?.summary
                          ? deEntry.summary
                          : item.summaryParagraphs
                        ).map((paragraph: string, i: number) => (
                          <p
                            key={i}
                            className="text-sm text-slate-600 leading-relaxed text-pretty"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}
                    <ul
                      className={`space-y-2.5 ${"summaryParagraphs" in item && item.summaryParagraphs.length > 0 ? "mt-4" : "mt-3"}`}
                    >
                      {(lang === "de" && deEntry?.bullets
                        ? deEntry.bullets
                        : item.bullets
                      ).map((b, idx) => (
                        <li
                          key={idx}
                          className="relative pl-5 text-sm text-slate-600 leading-relaxed text-pretty before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-600"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    {"internshipDocuments" in item && item.internshipDocuments.length > 0 ? (
                      <InternshipArtifactButtons
                        documents={item.internshipDocuments}
                        onOpen={setArtifact}
                      />
                    ) : null}
                    {"externalIconLinks" in item && item.externalIconLinks.length > 0 ? (
                      <ExperienceIconLinkRow links={item.externalIconLinks} lang={lang} />
                    ) : null}
                  </div>
                </div>
              </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
      {artifact ? <ArtifactPreviewModal artifact={artifact} onClose={() => setArtifact(null)} lang={lang} /> : null}
    </section>
  );
}
