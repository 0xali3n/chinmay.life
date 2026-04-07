import { showcaseProjectsDummy } from "@/lib/projectsPageDummy";
import { SectionHeading } from "./SectionHeading";
import { ShowcaseProjectCard } from "./ShowcaseProjectCard";

export function ProjectsSection({ lang = "en" }: { lang?: "en" | "de" }) {
  const t =
    lang === "de"
      ? {
          eyebrow: "Projekte",
          title: "Engineering-Arbeit",
          description:
            "Eine klare Übersicht von Produkten und Prototypen mit Fokus auf Architektur, Umsetzung und Code.",
        }
      : {
          eyebrow: "Projects",
          title: "Engineering work",
          description: "One clean grid of products and prototypes with code-first context.",
        };
  return (
    <section
      id="projects"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {showcaseProjectsDummy.map((project) => (
            <ShowcaseProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
