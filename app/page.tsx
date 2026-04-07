import { AchievementsSection } from "@/components/AchievementsSection";
import { FooterContact } from "@/components/FooterContact";
import { HeroSection } from "@/components/HeroSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProfileExperienceSection } from "@/components/ProfileExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

type Lang = "en" | "de";
export const dynamic = "force-dynamic";

type SearchParamsInput =
  | { [key: string]: string | string[] | undefined }
  | Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams?: SearchParamsInput;
}) {
  const resolvedSearchParams = searchParams
    ? typeof (searchParams as Promise<unknown>).then === "function"
      ? await (searchParams as Promise<{ [key: string]: string | string[] | undefined }>)
      : (searchParams as { [key: string]: string | string[] | undefined })
    : {};

  const langRaw = resolvedSearchParams.lang;
  const langParam = Array.isArray(langRaw) ? langRaw[0] : langRaw;
  const lang: Lang = langParam === "de" ? "de" : "en";

  return (
    <>
      <SiteHeader lang={lang} />
      <main className="flex-1">
        <HeroSection lang={lang} />
        <ProfileExperienceSection lang={lang} />
        <AchievementsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <SkillsSection lang={lang} />
        <LanguagesSection lang={lang} />
        <FooterContact lang={lang} />
      </main>
    </>
  );
}
