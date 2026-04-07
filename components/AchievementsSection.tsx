"use client";

import { motion } from "framer-motion";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { achievementsContent, localizedCopy } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type AchievementListItem = (typeof achievementsContent.items)[number];

function getProductLink(item: AchievementListItem) {
  return "productLink" in item ? item.productLink : undefined;
}

function getEventLink(item: AchievementListItem) {
  return "eventLink" in item ? item.eventLink : undefined;
}

function getResultLink(item: AchievementListItem) {
  return "resultLink" in item ? item.resultLink : undefined;
}

/** Row ↗: live product first, then result/proof, then program page. */
function achievementPrimaryLink(item: AchievementListItem) {
  return getProductLink(item) ?? getResultLink(item) ?? getEventLink(item);
}

const achLinkOutline =
  "inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 sm:flex-initial sm:justify-center";

const achLinkSolid =
  "inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-center text-xs font-semibold text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-700 sm:flex-initial sm:justify-center";

function RowIcon({ index }: { index: number }) {
  const kind = index % 3;
  const cls = "h-6 w-6 shrink-0 text-slate-400";
  if (kind === 0) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m4.5-13.5v6.75m3-6.75v6.75M4.5 19.5l1.62-8.955A2.25 2.25 0 018.288 9h7.424a2.25 2.25 0 012.168 1.545L19.5 19.5M6 22.5h12.75a.75.75 0 00.75-.75V19.5H5.25v2.25a.75.75 0 00.75.75zM9.75 9V6a2.25 2.25 0 012.25-2.25h.371c1.007 0 1.934.514 2.465 1.361l.188.319M9.75 9h4.5"
        />
      </svg>
    );
  }
  if (kind === 1) {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

function PrizeHighlight({ text }: { text: string | null }) {
  if (!text) {
    return <span className="text-sm tabular-nums text-slate-400">—</span>;
  }
  const parts = text.split(/(\$[0-9,.]+[kK]?)/gi);
  return (
    <span className="inline-block w-full text-sm tabular-nums text-slate-800 md:text-right">
      {parts.map((part, i) =>
        /^\$[0-9,.]+[kK]?$/i.test(part) ? (
          <span key={i} className="font-semibold tabular-nums text-blue-700">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </span>
  );
}

function AchievementBulletList({
  built,
  stack,
  lang,
  deLabels,
}: {
  built: string;
  stack: string;
  lang: "en" | "de";
  deLabels: (typeof localizedCopy)["de"]["achievements"];
}) {
  return (
    <ul className="space-y-2 text-left text-sm leading-relaxed text-slate-700">
      <li className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-blue-600">
        <span className="font-medium text-slate-800">{lang === "de" ? deLabels.architecture : "Architecture: "}</span>
        {built}
      </li>
      <li className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-400">
        <span className="font-medium text-slate-800">{lang === "de" ? deLabels.stack : "Stack: "}</span>
        {stack}
      </li>
    </ul>
  );
}

function AchievementDetailModal({
  item,
  onClose,
  lang,
}: {
  item: AchievementListItem;
  onClose: () => void;
  lang: "en" | "de";
}) {
  const de = localizedCopy.de.achievements;
  const product = getProductLink(item);
  const event = getEventLink(item);
  const result = getResultLink(item);
  const hasSecondaryAccent = Boolean(product || result);
  const eventOutline = hasSecondaryAccent;
  const resultOutline = Boolean(product);

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
        aria-label={lang === "de" ? de.closeDetails : "Close achievement details"}
        className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="relative z-10 w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/20"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-5">
          <div className="min-w-0 flex-1 pr-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">{item.track}</p>
            <h3 id="achievement-modal-title" className="mt-1 font-sans text-base font-semibold leading-snug text-slate-900 sm:text-lg">
              {item.event}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              {item.when ? <span className="whitespace-nowrap tabular-nums">{item.when}</span> : null}
              {item.prize ? <PrizeHighlight text={item.prize} /> : null}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={lang === "de" ? de.close : "Close"}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="max-h-[min(70vh,520px)] overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
          <AchievementBulletList
            built={
              lang === "de"
                ? de.detailTextById[item.id as keyof typeof de.detailTextById]?.built ?? item.built
                : item.built
            }
            stack={
              lang === "de"
                ? de.detailTextById[item.id as keyof typeof de.detailTextById]?.stack ?? item.stack
                : item.stack
            }
            lang={lang}
            deLabels={de}
          />
          {(event || product || result) && (
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              {event ? (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={eventOutline ? achLinkOutline : achLinkSolid}
                >
                  {event.label}
                  <span className={eventOutline ? "text-sm opacity-70" : "text-sm"} aria-hidden>
                    ↗
                  </span>
                </a>
              ) : null}
              {product ? (
                <a href={product.href} target="_blank" rel="noopener noreferrer" className={achLinkSolid}>
                  {product.label}
                  <span className="text-sm" aria-hidden>
                    ↗
                  </span>
                </a>
              ) : null}
              {result ? (
                <a
                  href={result.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resultOutline ? achLinkOutline : achLinkSolid}
                >
                  {result.label}
                  <span className={resultOutline ? "text-sm opacity-70" : "text-sm"} aria-hidden>
                    ↗
                  </span>
                </a>
              ) : null}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Metric strip + data-dense competition leaderboard (no media). */
export function AchievementsSection({ lang = "en" }: { lang?: "en" | "de" }) {
  const { eyebrow, title, stats, items } = achievementsContent;
  const de = localizedCopy.de.achievements;
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
            {lang === "de" ? de.eyebrow : eyebrow}
          </p>
          <h2 className="mt-2 font-sans text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {lang === "de" ? de.title : title}
          </h2>
        </FadeIn>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-4 shadow-sm"
            >
              {"pairValue" in stat && stat.pairValue ? (
                <div className="flex min-w-0 items-stretch gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-lg font-semibold tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:text-[11px]">
                      {lang === "de" && stat.id === "podiums" ? de.labelPodiums : stat.label}
                    </p>
                  </div>
                  <div className="w-px shrink-0 bg-slate-200/90" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-lg font-semibold tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                      {stat.pairValue}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:text-[11px]">
                      {lang === "de" ? de.labelEntered : stat.pairLabel}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-sans text-lg font-semibold tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-500 sm:text-[11px]">
                    {lang === "de" && stat.id === "prize-money"
                      ? de.labelPrizeMoney
                      : lang === "de" && stat.id === "ecosystems"
                        ? de.labelEcosystems
                        : lang === "de" && stat.id === "tenure"
                          ? de.labelTenure
                          : stat.label}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
          <div className="hidden border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 md:grid md:grid-cols-12 md:items-center md:gap-x-6 md:px-5">
            <div className="col-span-4">{lang === "de" ? "Event" : "Event"}</div>
            <div className="col-span-3">{lang === "de" ? de.tableTrack : "Track · focus"}</div>
            <div className="col-span-3 text-right">{lang === "de" ? de.tablePlacement : "Placement & prize"}</div>
            <div className="col-span-2 text-right">{lang === "de" ? de.tableWhen : "When · link"}</div>
          </div>
          {items.map((item, i) => {
            const primary = achievementPrimaryLink(item);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                role="button"
                tabIndex={0}
                aria-label={`${lang === "de" ? de.detailsPrefix : "Details"}: ${item.event}`}
                className="grid cursor-pointer grid-cols-1 gap-2 border-b border-gray-200 px-4 py-3.5 transition-colors last:border-b-0 hover:bg-slate-50/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 md:grid-cols-12 md:items-center md:gap-x-6 md:px-5"
                onClick={() => openAch(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openAch(item);
                  }
                }}
              >
                <div className="flex items-start gap-3 md:col-span-4 md:items-center">
                  <RowIcon index={i} />
                  <span className="font-semibold leading-snug text-slate-900">{item.event}</span>
                </div>
                <div className="pl-9 text-xs leading-snug text-slate-500 md:col-span-3 md:min-w-0 md:pl-0">{item.track}</div>
                <div className="pl-9 md:col-span-3 md:min-w-0 md:pl-0 md:text-right">
                  <PrizeHighlight text={item.prize} />
                </div>
                <div className="flex items-center justify-between gap-4 pl-9 md:col-span-2 md:justify-end md:pl-0">
                  <span className="min-w-[4.5ch] max-w-[7.5rem] whitespace-nowrap text-right text-xs tabular-nums text-slate-500">
                    {item.when ?? "—"}
                  </span>
                  {primary ? (
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={primary.label}
                      aria-label={`${primary.label} ${lang === "de" ? de.opensInNewTab : "(opens in new tab)"}`}
                      className="shrink-0 text-base text-slate-400 transition-colors hover:text-blue-600"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="text-slate-200" aria-hidden>
                      ↗
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {selectedItem ? <AchievementDetailModal item={selectedItem} onClose={closeAch} lang={lang} /> : null}
    </section>
  );
}
