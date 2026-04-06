import { hackathonProjectsContent, shippedProjectsContent } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects & hackathons"
          description="Outcomes, photos, and proof links sit in Achievements above. Here: two shelves—longer-lived builds first, then hackathon repos and demos. Placements use the white ribbon; participation-only rows show the event name instead."
        />

        <div id="projects-shipped" className="scroll-mt-28 md:scroll-mt-32 pt-2">
          <div className="mb-5 border-b border-slate-100 pb-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">
              Shipped & independent
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
              Products, internships, and side projects you own outside a single hackathon clock—best for depth and maintenance story.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {shippedProjectsContent.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="shipped"
              />
            ))}
          </div>
        </div>

        <div id="projects-hackathons" className="scroll-mt-28 md:scroll-mt-32 mt-14 md:mt-16">
          <div className="mb-5 border-b border-slate-100 pb-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">
              Hackathons & competitions
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
              Timed builds and tracks: prizes when you have them; otherwise the card still lists the event so judges see breadth without fake awards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
            {hackathonProjectsContent.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                variant="hackathon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
