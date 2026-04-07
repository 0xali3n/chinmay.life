import type { Metadata } from "next";
import { FooterContact } from "@/components/FooterContact";
import { ShowcaseProjectCard } from "@/components/ShowcaseProjectCard";
import { SiteHeader } from "@/components/SiteHeader";
import { siteMeta, socialLinks } from "@/lib/content";
import { showcaseProjectsDummy } from "@/lib/projectsPageDummy";

const siteUrl = socialLinks.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteMeta.brand} — Projects`,
  description:
    "Engineering depth, UI, and systems work — curated project grid (technical portfolio).",
  openGraph: {
    title: `${siteMeta.brand} — Projects`,
    description: "Engineering-focused project showcase — architecture, stack, and links.",
    url: `${siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-6 md:px-8 md:pb-28 md:pt-32">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              Engineering
            </p>
            <h1 className="mt-2 font-sans text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-[17px]">
              Engineering-first case studies focused on architecture, UI decisions, and shipped code.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-12">
            {showcaseProjectsDummy.map((project) => (
              <ShowcaseProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <FooterContact />
    </>
  );
}
