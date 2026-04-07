import { showcaseProjectsDummy } from "@/lib/projectsPageDummy";
import { SectionHeading } from "./SectionHeading";
import { ShowcaseProjectCard } from "./ShowcaseProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Engineering work"
          description="One clean grid of products and prototypes with code-first context."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {showcaseProjectsDummy.map((project) => (
            <ShowcaseProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
