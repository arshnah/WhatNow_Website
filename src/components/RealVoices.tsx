"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { VOICES } from "@/data/voices";

const isDev = process.env.NODE_ENV !== "production";

export default function RealVoices({ vertical }: { vertical: string }) {
  const { language } = useLanguage();

  // Public: published + consented only. Dev: also show drafts for team review.
  const voices = VOICES.filter(
    (v) => v.vertical === vertical && ((v.status === "published" && v.consent) || isDev),
  );
  if (voices.length === 0) return null;

  const t =
    language === "hi"
      ? { label: "असली आवाज़ें", heading: "इस करियर को जी रहे लोगों से, सीधे।", read: "उनके जवाब पढ़ें", draft: "ड्राफ़्ट" }
      : { label: "Real Voices", heading: "Straight from people doing the job.", read: "Read their answers", draft: "Draft" };

  return (
    <section>
      <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-400 border-b-2 border-slate-200 dark:border-slate-700 pb-4 mb-8">
        {t.label}
      </h2>
      <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8">{t.heading}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {voices.map((v) => (
          <Link
            key={v.slug}
            href={`/careers/${vertical}/voices/${v.slug}`}
            className="group relative flex flex-col bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-[1.75rem] p-6 md:p-7 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
          >
            {v.status !== "published" && (
              <span className="absolute top-5 right-5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-900/40">
                {t.draft}
              </span>
            )}
            <Icon icon="solar:quote-up-bold" className="w-7 h-7 text-primary/30 mb-3" aria-hidden="true" />
            <p className="text-base md:text-lg font-black text-neutral-dark leading-snug mb-5 flex-1">
              “{v.pullQuote}”
            </p>
            <div className="text-sm font-black text-neutral-dark">{v.name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-4">
              {v.rank} · {v.dept}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary group-hover:gap-2.5 transition-all">
              {t.read}
              <Icon icon="ph:arrow-right" className="w-4 h-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
