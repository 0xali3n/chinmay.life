"use client";

import { educationItems } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function EducationSection({ lang = "en" }: { lang?: "en" | "de" }) {
  const t =
    lang === "de"
      ? {
          eyebrow: "Ausbildung",
          title: "Studium",
        }
      : {
          eyebrow: "Education",
          title: "Academic path",
        };

  return (
    <section
      id="education"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-slate-50/50 py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeIn className="mb-6 md:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
            {t.eyebrow}
          </p>
          <h2 className="font-sans text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {t.title}
          </h2>
        </FadeIn>

        <ol className="space-y-6">
          {educationItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04}>
              <li className="rounded-xl border border-slate-200 bg-white px-5 py-4 md:px-6 md:py-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 md:text-[15px]">
                      {item.school}
                    </p>
                    <p className="mt-0.5 text-sm text-blue-700 font-medium">
                      {item.degree}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-medium text-slate-500 sm:text-right">
                    {item.period}
                  </p>
                </div>
                {item.bullets.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-slate-600 before:mr-2 before:text-slate-300 before:content-['•']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
