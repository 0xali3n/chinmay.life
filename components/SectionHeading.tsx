import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-6 md:mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 mb-2">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-snug text-pretty">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
