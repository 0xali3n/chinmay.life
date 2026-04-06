import { skillsContent } from "@/lib/content";
import { FadeIn } from "./FadeIn";

const categories = Object.keys(skillsContent) as (keyof typeof skillsContent)[];

export function SkillsSection() {
  return (
    <section className="py-12 md:py-14 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <FadeIn className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 mb-1">
            Capabilities
          </p>
          <h2 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-slate-900">
            Skills & tools
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">
            Grouped for quick scanning on applications; details and dates are on the CV (PDF).
          </p>
        </FadeIn>

        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 md:p-6">
          <div className="flex flex-col gap-3">
            {categories.map((category, i) => (
              <FadeIn key={category} delay={i * 0.02}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-2 border-b border-slate-100 last:border-b-0 last:pb-0 first:pt-0">
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:w-40">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillsContent[category].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
