"use client";

import { useMemo, useState } from "react";
import type { ShowcaseProject } from "@/lib/projectsPageDummy";

export function ShowcaseProjectCard({ project }: { project: ShowcaseProject }) {
  const [previewResource, setPreviewResource] = useState<{ label: string; href: string } | null>(null);
  const resources = [
    ...(project.githubUrl ? [{ label: "GitHub ↗", href: project.githubUrl }] : []),
    ...(project.liveUrl
      ? [{ label: project.id === "cryptoluck-casino" ? "Devfolio ↗" : "Live Demo ↗", href: project.liveUrl }]
      : []),
    ...(project.deckUrl ? [{ label: "Deck ↗", href: project.deckUrl }] : []),
    ...(project.reportUrl ? [{ label: "Report ↗", href: project.reportUrl }] : []),
  ];
  const previewUrl = useMemo(
    () => (previewResource ? encodeURI(previewResource.href) : ""),
    [previewResource],
  );
  const isPdfPreview = previewResource?.href.toLowerCase().endsWith(".pdf");
  const isPptPreview = previewResource?.href.toLowerCase().endsWith(".pptx");
  const isLocalAsset = (href: string) => href.startsWith("/");

  return (
    <>
      <article
        className="group flex min-h-[22rem] flex-col rounded-xl border border-gray-200 bg-white transition-colors duration-200 hover:border-gray-300"
      >
        <div className="flex flex-1 flex-col px-6 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">{project.description}</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-700">
            {project.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-[0.48rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
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
              {resources.map((resource) => {
                const shouldPreview =
                  isLocalAsset(resource.href) &&
                  (resource.label.startsWith("Report") || resource.label.startsWith("Deck"));
                if (shouldPreview) {
                  return (
                    <button
                      key={resource.label}
                      type="button"
                      onClick={() => setPreviewResource(resource)}
                      className="text-sm font-medium text-gray-700 underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
                    >
                      {resource.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={resource.label}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 underline-offset-4 transition-colors hover:text-gray-900 hover:underline"
                  >
                    {resource.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </article>

      {previewResource ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close preview"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"
            onClick={() => setPreviewResource(null)}
          />
          <div className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 sm:px-5">
              <p className="text-sm font-semibold text-gray-900">{previewResource.label.replace("↗", "").trim()} Preview</p>
              <div className="flex items-center gap-2">
                <a
                  href={previewUrl}
                  download
                  className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewResource(null)}
                  className="rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="h-[70vh] bg-gray-50">
              {isPdfPreview ? (
                <iframe title="Document preview" src={previewUrl} className="h-full w-full border-0" />
              ) : isPptPreview ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="text-sm text-gray-600">PPT preview is limited in-browser.</p>
                  <a
                    href={previewUrl}
                    download
                    className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-800"
                  >
                    Download PPTX
                  </a>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-600">
                  Preview not available for this file type.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
