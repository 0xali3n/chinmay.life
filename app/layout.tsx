import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { heroContent, siteMeta, siteIconUrl, socialLinks } from "@/lib/content";

const siteUrl = socialLinks.website;
const metaDescription = `${siteMeta.name} — product-minded software engineer in ${siteMeta.location}. Full-stack, applied AI, and blockchain. Portfolio of startups, products, and engineering work.`;
const ogDescription = heroContent.summary;

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
  title: `${siteMeta.brand} — Product-minded software engineer · AI & blockchain`,
  description: metaDescription,
  applicationName: siteMeta.brand,
  authors: [{ name: siteMeta.name, url: siteUrl }],
  creator: siteMeta.name,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "D-NN1OE4DuhH32OAXeG3y0TwQF8yhszv7n3077IXbCM",
  },
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
    title: `${siteMeta.name} — ${siteMeta.brand}`,
    description: ogDescription,
    images: [
      {
        url: siteIconUrl,
        alt: `${siteMeta.name} — portfolio site icon`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteMeta.name} — ${siteMeta.brand}`,
    description: ogDescription,
    images: [siteIconUrl],
    creator: "@Chinmay_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
