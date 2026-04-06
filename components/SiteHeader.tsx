"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteMeta } from "@/lib/content";

function splitBrand(brand: string) {
  const i = brand.indexOf(".");
  if (i === -1) return { head: brand, tail: "" };
  return { head: brand.slice(0, i), tail: brand.slice(i) };
}

function useActiveSectionHref() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const links = [...navLinks];
    const run = () => {
      const markerY = 112;
      let current: string | null = null;
      for (const link of links) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= markerY) current = link.href;
      }
      setActiveHref(current);
    };

    run();
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run);
    return () => {
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
    };
  }, []);

  return activeHref;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveSectionHref();
  const { head, tail } = splitBrand(siteMeta.brand);

  return (
    <header className="fixed top-4 md:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-4 pointer-events-none">
      {/* Light frosted bar — matches white / slate-50 page background */}
      <div className="pointer-events-auto flex w-full max-w-4xl items-center gap-1 sm:gap-2 rounded-full border border-slate-200/90 bg-white/75 px-2 py-1.5 pl-3 sm:pl-4 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/65">
        <motion.a
          href="#top"
          className="group flex shrink-0 items-center gap-2 rounded-full py-1 pl-0.5 pr-1.5 sm:pr-2 transition-colors"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
        >
          <span className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
            <Image
              src={siteMeta.navIconSrc}
              alt={`${siteMeta.brand} icon`}
              fill
              className="object-contain object-center"
              sizes="40px"
              priority
            />
          </span>
          <span className="flex items-baseline text-[15px] sm:text-base font-semibold tracking-tight">
            <span className="text-slate-900 group-hover:text-blue-700 transition-colors">
              {head}
            </span>
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
              {tail}
            </span>
          </span>
        </motion.a>

        <nav className="mx-auto hidden min-[820px]:flex flex-1 items-center justify-center gap-0.5 px-2">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-600/25"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
                whileHover={{ y: -0.5 }}
                transition={{ type: "spring", stiffness: 450, damping: 28 }}
              >
                {link.label}
              </motion.a>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 transition-colors sm:px-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>

          <button
            type="button"
            className="min-[820px]:hidden relative flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute left-1/2 top-[13px] h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-200 ${open ? "top-1/2 translate-y-0 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-1/2 top-[19px] h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-200 ${open ? "top-1/2 translate-y-0 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto mt-2 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 p-2 shadow-lg backdrop-blur-2xl min-[820px]:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  activeHref === link.href
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}
