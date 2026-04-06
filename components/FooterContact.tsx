"use client";

import { motion } from "framer-motion";
import { footerSocialLinks, siteMeta } from "@/lib/content";

export function FooterContact() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 md:scroll-mt-32 border-t border-slate-100 bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 mb-2">
              Contact
            </p>
            <h2 className="font-sans text-xl md:text-2xl font-semibold text-slate-900">
              Let&apos;s <span className="text-blue-600">connect</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed">
              {siteMeta.location}. Academic and professional enquiries welcome — MSc applications, collaborations,
              and security/Web3 work.
            </p>
            <motion.a
              href={`mailto:${siteMeta.email}`}
              className="mt-5 inline-flex w-fit items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-600/25 hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {siteMeta.email}
            </motion.a>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
              Links
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              {footerSocialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ x: 2 }}
                >
                  {s.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>
            © {siteMeta.copyrightYear} {siteMeta.name}. All rights reserved.
          </p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
