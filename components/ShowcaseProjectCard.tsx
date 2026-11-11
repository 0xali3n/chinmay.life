"use client";

import type { ShowcaseProject } from "../lib/projectsPageDummy";
import { localizedCopy } from "@/lib/content";

export function ShowcaseProjectCard({
  project,
  lang = "en",
}: {
  project: ShowcaseProject;
  lang?: "en" | "de";
}) {
  const de = localizedCopy.de.projects;
  const copy = lang === "de" ? de.projectTextById[project.id as keyof typeof de.projectTextById] : undefined;
  const title = copy?.title ?? project.title;
  const description = copy?.description ?? project.description;
  const highlights = copy?.highlights ?? project.highlights;

  const resources = [
    ...(project.githubUrl ? [{ label: lang === "de" ? de.cardLabels.github : "GitHub ↗", href: project.githubUrl }] : []),
    ...(project.liveUrl
      ? [{
          label:
            project.id === "cryptoluck-casino"
              ? lang === "de"
                ? de.cardLabels.devfolio
                : "Devfolio ↗"
              : lang === "de"
                ? de.cardLabels.liveDemo
                : "Live Demo ↗",
          href: project.liveUrl,
        }]
      : []),
    ...(project.deckUrl ? [{ label: lang === "de" ? de.cardLabels.deck : "Deck ↗", href: project.deckUrl }] : []),
    ...(project.reportUrl ? [{ label: lang === "de" ? de.cardLabels.report : "Report ↗", href: project.reportUrl }] : []),
    ...(project.linkedinUrl
      ? [{ label: lang === "de" ? de.cardLabels.linkedin : "LinkedIn ↗", href: project.linkedinUrl }]
      : []),
    ...(project.videoUrl
      ? [{ label: lang === "de" ? de.cardLabels.video : "Video ↗", href: project.videoUrl }]
      : []),
  ];

  const opensNewTabHint = lang === "de" ? "(öffnet in neuem Tab)" : "(opens in new tab)";

  return (
    <article
      className="group flex min-h-[22rem] flex-col rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-300"
    >
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-700">
          {highlights.map((point: string) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-[0.48rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.stack.map((tag: string) => (
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
                key={`${resource.href}-${resource.label}`}
                href={encodeURI(resource.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-700 underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
                aria-label={`${resource.label.replace("↗", "").trim()} ${opensNewTabHint}`}
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
