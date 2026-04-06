"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hackathonProjectsContent, shippedProjectsContent } from "@/lib/content";

export type ProjectEntry =
  | (typeof shippedProjectsContent)[number]
  | (typeof hackathonProjectsContent)[number];

export function ProjectCard({
  project,
  index,
  variant = "shipped",
}: {
  project: ProjectEntry;
  index: number;
  variant?: "shipped" | "hackathon";
}) {
  const participationBadge =
    variant === "hackathon" &&
    !project.award &&
    "hackathonName" in project &&
    project.hackathonName ? (
      <span className="absolute right-2.5 top-2.5 z-10 max-w-[min(100%-1rem,13rem)] rounded-md border border-slate-200 bg-slate-50/95 px-2 py-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-slate-600">
        {project.hackathonName}
      </span>
    ) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:border-slate-300/90 hover:shadow-md ${
        variant === "hackathon"
          ? "border-blue-100/90 ring-1 ring-blue-50/80"
          : "border-slate-200/90"
      }`}
    >
      {project.award ? (
        <span className="absolute right-2.5 top-2.5 z-10 max-w-[min(100%-1rem,11rem)] rounded-md border border-slate-200 bg-white/95 px-2 py-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-slate-700">
          {project.award}
        </span>
      ) : (
        participationBadge
      )}

      <div className="relative aspect-[16/10] w-full border-b border-slate-100 bg-slate-100">
        <Image
          src={project.screenshotSrc}
          alt=""
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
          unoptimized={project.screenshotSrc.endsWith(".svg")}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-sans text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-700 md:text-lg">
          {project.title}
        </h3>
        {variant === "hackathon" && "hackathonName" in project && project.hackathonName && project.award ? (
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-blue-600/90">
            {project.hackathonName}
          </p>
        ) : null}
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 md:text-sm">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-5 border-t border-slate-100 pt-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 underline-offset-2 hover:text-blue-800 hover:underline"
            whileHover={{ x: 1 }}
          >
            GitHub →
          </motion.a>
          {"liveUrl" in project && project.liveUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
              whileHover={{ x: 1 }}
            >
              Live →
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
