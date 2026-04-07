import { spokenLanguages } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function LanguagesSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/50 py-12 md:py-14">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeIn className="mb-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600">
            Communication
          </p>
          <h2 className="font-sans text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
            Languages
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Working language profile for German university applications, internships, and research collaboration.
          </p>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2">
          {spokenLanguages.map((item, i) => (
            <FadeIn key={item.language} delay={i * 0.04}>
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">{item.language}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.level}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
