"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { achievementsContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type AchievementListItem = (typeof achievementsContent.items)[number];

function StatIcon({ id }: { id: string }) {
  const common = "h-5 w-5";
  if (id === "indexed") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9-13.5h-9M12 12h9m-9 6h9m-9-12h9M3.75 4.5h4.5v15h-4.5v-15z" />
      </svg>
    );
  }
  if (id === "focus") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  }
  if (id === "span") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v11.25c0 1.5 1.5 1.5 3 .75l4.5-2.25M6.75 3l-3 9m3-9l4.5 2.25M6.75 3l3 9m6-6.75v11.25c0 1.5-1.5 1.5-3 .75l-4.5-2.25m9-9.75l-3 9m3-9.75l-4.5 2.25m0 0L9.75 9" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function AchievementImages({
  srcs,
  eventLabel,
}: {
  srcs: readonly string[];
  eventLabel: string;
}) {
  if (srcs.length === 0) return null;
  if (srcs.length === 1) {
    return (
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-slate-100 sm:aspect-[3/2]">
        <Image
          src={srcs[0]}
          alt={`${eventLabel} — photo`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
    );
  }
  return (
    <div className="grid w-full grid-cols-2 gap-0.5 bg-slate-200">
      {srcs.slice(0, 2).map((src, i) => (
        <div key={src} className="relative aspect-[4/5] bg-slate-100">
          <Image
            src={src}
            alt={`${eventLabel} — photo ${i + 1}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 50vw, 17vw"
          />
        </div>
      ))}
    </div>
  );
}

function achievementImagesFor(item: AchievementListItem): readonly string[] {
  return "images" in item ? item.images : [];
}

function achievementProof(item: AchievementListItem) {
  return "link" in item ? item.link : undefined;
}

function AchievementDetailModal({ item, onClose }: { item: AchievementListItem; onClose: () => void }) {
  const imgs = achievementImagesFor(item);
  const proof = achievementProof(item);

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
      aria-labelledby="achievement-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        aria-label="Close achievement details"
        className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="relative z-10 flex max-h-[min(92vh,940px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/20"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-5">
          <div className="min-w-0 flex-1 pr-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-600">{item.ecosystem}</p>
            <h3 id="achievement-modal-title" className="mt-1 font-sans text-base font-semibold leading-snug text-slate-900 sm:text-lg">
              {item.event}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              {item.year ? <span>{item.year}</span> : null}
              {item.prize ? (
                <span className="font-medium text-slate-700">{item.prize}</span>
              ) : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50/50">
          {imgs.length > 0 ? (
            <div className="space-y-3 border-b border-slate-100 bg-white p-3 sm:p-4">
              {imgs.map((src) => (
                <div key={src} className="flex justify-center rounded-xl border border-slate-200/90 bg-slate-100/80 p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element -- modal: full-size achievement asset */}
                  <img
                    src={src}
                    alt={`${item.event} — attachment`}
                    className="max-h-[min(72vh,820px)] w-auto max-w-full rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="border-b border-slate-100 bg-white px-4 py-8 text-center text-sm text-slate-500">
              No image on file for this entry.
            </div>
          )}
          <div className="px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-sm leading-relaxed text-slate-700 text-pretty">{item.placement}</p>
            {proof ? (
              <a
                href={proof.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-700"
              >
                {proof.label}
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Stats strip + outcome cards with optional photos and proof links. */
export function AchievementsSection() {
  const { eyebrow, title, subtitle, cvHref, stats, items } = achievementsContent;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = useMemo(
    () => (selectedId ? items.find((x) => x.id === selectedId) ?? null : null),
    [items, selectedId],
  );

  const openAch = useCallback((item: AchievementListItem) => {
    setSelectedId(item.id);
  }, []);

  const closeAch = useCallback(() => setSelectedId(null), []);

  return (
    <section
      id="achievements"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">{eyebrow}</p>
          <h2 className="mt-2 font-sans text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">{subtitle}</p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {stats.map((stat, i) => {
            const isCv = stat.id === "cv";
            const displayValue = stat.id === "indexed" ? String(items.length) : stat.value;
            const inner = (
              <>
                <div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    isCv
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 ring-1 ring-slate-200/90"
                  }`}
                >
                  <StatIcon id={stat.id} />
                </div>
                <p className="font-sans text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {displayValue}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[11px]">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-500">{stat.hint}</p>
              </>
            );

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="h-full"
              >
                {isCv ? (
                  <Link
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 shadow-sm">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const imgs = achievementImagesFor(item);
            const proof = achievementProof(item);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                role="button"
                tabIndex={0}
                aria-label={`Open details: ${item.event}`}
                className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/80 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => openAch(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openAch(item);
                  }
                }}
              >
                <AchievementImages srcs={imgs} eventLabel={item.event} />
                <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 max-w-[65%] rounded-full border border-blue-100 bg-blue-50/80 px-2.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-wide text-blue-800">
                      {item.ecosystem}
                    </span>
                    {item.prize ? (
                      <span className="shrink-0 text-right text-xs font-semibold leading-tight text-slate-800">
                        {item.prize}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3.5 font-sans text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                    {item.event}
                  </h3>
                  <p className="mt-2.5 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-600">{item.placement}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-4">
                    {item.year ? <p className="text-xs font-medium text-slate-400">{item.year}</p> : null}
                    {proof ? (
                      <a
                        href={proof.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 underline-offset-2 hover:text-blue-700 hover:underline sm:ml-auto"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                      >
                        {proof.label}
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      {selectedItem ? <AchievementDetailModal item={selectedItem} onClose={closeAch} /> : null}
    </section>
  );
}
