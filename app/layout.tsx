import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta, siteIconUrl, socialLinks } from "@/lib/content";

const siteUrl = socialLinks.website;
const defaultOgDescription =
  "M.Sc. CS (TH Bingen) · experience, projects, achievements, and contact — portfolio for Werkstudent roles, internships, and collaboration.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteMeta.brand} — M.Sc. CS · Applied AI & software engineering`,
  description: `${siteMeta.name}: M.Sc. Computer Science (TH Bingen); B.E. CS (KLE Tech). Projects in applied AI, Web3, and secure systems. Based in ${siteMeta.location}.`,
  applicationName: siteMeta.brand,
  authors: [{ name: siteMeta.name, url: siteUrl }],
  creator: siteMeta.name,
  icons: {
    icon: [{ url: siteIconUrl, type: "image/png", sizes: "any" }],
    shortcut: siteIconUrl,
    apple: siteIconUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_DE",
    url: siteUrl,
    siteName: siteMeta.brand,
    title: `${siteMeta.brand} — Portfolio`,
    description: defaultOgDescription,
    images: [
      {
        url: siteIconUrl,
        alt: `${siteMeta.name} — portfolio site icon`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteMeta.brand,
    description: defaultOgDescription,
    images: [siteIconUrl],
    creator: "@Chinmay_io",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
