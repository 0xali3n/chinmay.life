import {
  educationItems,
  heroContent,
  siteMeta,
  socialLinks,
} from "@/lib/content";
import { showcaseProjectsDummy } from "@/lib/projectsPageDummy";

/** Accurate Schema.org JSON-LD only — no invented ratings/credentials. */
export function JsonLd() {
  const sameAs = [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.twitter,
    socialLinks.instagram,
    socialLinks.devfolio,
  ];

  const person = {
    "@type": "Person",
    "@id": `${socialLinks.website}/#person`,
    name: siteMeta.name,
    url: socialLinks.website,
    email: siteMeta.email,
    image: `${socialLinks.website}${heroContent.headshotSrc}`,
    jobTitle: "Software engineer",
    description: heroContent.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mainz",
      addressCountry: "DE",
    },
    sameAs,
    alumniOf: educationItems.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.school,
    })),
    knowsAbout: [
      "Full-stack development",
      "Applied AI",
      "Blockchain",
      "Product engineering",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${socialLinks.website}/#website`,
    url: socialLinks.website,
    name: siteMeta.brand,
    description: heroContent.summary,
    inLanguage: "en",
    publisher: { "@id": `${socialLinks.website}/#person` },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${socialLinks.website}/#profilepage`,
    url: socialLinks.website,
    name: `${siteMeta.name} — Portfolio`,
    isPartOf: { "@id": `${socialLinks.website}/#website` },
    mainEntity: { "@id": `${socialLinks.website}/#person` },
    about: { "@id": `${socialLinks.website}/#person` },
  };

  const projects = showcaseProjectsDummy.map((project) => {
    const base = {
      "@type": project.githubUrl ? "SoftwareSourceCode" : "CreativeWork",
      "@id": `${socialLinks.website}/#project-${project.id}`,
      name: project.title,
      description: project.description,
      author: { "@id": `${socialLinks.website}/#person` },
      keywords: project.stack.join(", "),
    } as Record<string, unknown>;

    if ("githubUrl" in project && project.githubUrl) {
      base.codeRepository = project.githubUrl;
      base.programmingLanguage = project.stack;
    }
    if ("liveUrl" in project && project.liveUrl) {
      base.url = project.liveUrl;
    }
    return base;
  });

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, ...projects],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
