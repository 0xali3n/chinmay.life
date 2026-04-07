import type { ShowcaseProject } from "@/lib/projectsPageDummy";

export function ShowcaseProjectCard({ project }: { project: ShowcaseProject }) {
  const resources = [
    { label: "GitHub ↗", href: project.githubUrl },
    ...(project.liveUrl ? [{ label: "Live Demo ↗", href: project.liveUrl }] : []),
    ...(project.videoUrl ? [{ label: "Video ↗", href: project.videoUrl }] : []),
    ...(project.reportUrl ? [{ label: "Report ↗", href: project.reportUrl }] : []),
  ];

  return (
    <article
      className="group flex min-h-[22rem] flex-col rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-300"
    >
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {project.description}
        </p>

        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((tag) => (
              <li key={tag}>
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-gray-100 pt-4">
            {resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
              >
                {resource.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
