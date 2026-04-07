import { AchievementsSection } from "@/components/AchievementsSection";
import { FooterContact } from "@/components/FooterContact";
import { HeroSection } from "@/components/HeroSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ProfileExperienceSection } from "@/components/ProfileExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProfileExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <SkillsSection />
        <LanguagesSection />
        <FooterContact />
      </main>
    </>
  );
}
