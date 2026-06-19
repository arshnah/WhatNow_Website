import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVoice, publishedVoices } from "@/data/voices";

const VERTICAL = "merchant-navy";
const isDev = process.env.NODE_ENV !== "production";

export function generateStaticParams() {
  return publishedVoices(VERTICAL).map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVoice(slug);
  if (!v) return {};
  const draft = v.status !== "published" || !v.consent;
  return {
    title: `${v.name} — ${v.rank} | Real Voices`,
    description: v.pullQuote,
    robots: draft ? { index: false, follow: false } : undefined,
    alternates: { canonical: `/careers/${VERTICAL}/voices/${slug}` },
  };
}

export default async function VoicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVoice(slug);
  const published = v && v.status === "published" && v.consent;

  // Public only sees published+consented voices. Drafts render in dev for review.
  if (!v || v.vertical !== VERTICAL || (!published && !isDev)) notFound();

  const draft = !published;

  return (
    <main className="flex-grow bg-white dark:bg-[#0E111E]">
      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B111C] pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-extrabold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-400 mb-6">
            <Link href={`/careers/${VERTICAL}`} className="hover:text-orange-600 transition-colors">
              Merchant Navy
            </Link>
            <span>›</span>
            <span className="text-orange-600">Real Voices</span>
          </div>

          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5563ED] mb-3">Real Voices</p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-3 leading-tight">
            {v.name} — <span className="text-slate-500 dark:text-slate-400">{v.rank}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span>{v.dept} department</span>
            {v.handle && (
              <>
                <span aria-hidden="true">·</span>
                <span>{v.handle}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{v.date}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {draft && (
          <div className="mb-10 rounded-2xl border border-amber-300 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 px-6 py-4 text-sm text-amber-800 dark:text-amber-300 font-semibold">
            Draft — not for public sharing. Pending the interviewee&rsquo;s consent and the fact-checks
            flagged below. This page is hidden from search and not linked publicly.
          </div>
        )}

        <p className="text-lg font-black text-slate-900 dark:text-slate-100 mb-10 leading-relaxed">
          {v.intro}
        </p>

        <div className="space-y-9">
          {v.qa.map((item, i) => (
            <div key={i}>
              <h2 className="text-base md:text-lg font-black text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                {item.q}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
                {item.a}
              </p>
              {draft && item.note && (
                <p className="mt-3 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50 dark:bg-amber-950/30 px-4 py-2.5 text-xs text-amber-800 dark:text-amber-300 font-semibold">
                  ⚠ {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
          <Link href={`/careers/${VERTICAL}`} className="text-sm font-black text-[#5563ED] hover:underline">
            ← Back to Merchant Navy
          </Link>
        </div>
      </div>
    </main>
  );
}
