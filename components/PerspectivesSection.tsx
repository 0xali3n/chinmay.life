"use client";

import { motion } from "framer-motion";
import { perspectivesItems } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function PerspectivesSection() {
  return (
    <section
      id="perspectives"
      className="scroll-mt-28 md:scroll-mt-32 py-14 md:py-16 border-t border-slate-100 bg-slate-50"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Resources"
          title="Notes, guides & external profiles"
          description="Longer-form resources and competition history — useful context beyond the project cards."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {perspectivesItems.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.05}>
              <motion.a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <h3 className="font-sans text-sm md:text-base font-semibold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                  Open →
                </span>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
