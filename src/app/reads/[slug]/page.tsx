import type { Metadata } from "next";
import ArticleReader from "./ArticleReader";
import { ARTICLE_META } from "@/data/articleMeta";
import { SITE_URL } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = ARTICLE_META[slug];
  if (!meta) return {};

  const url = `${SITE_URL}/reads/${slug}`;
  return {
    title: { absolute: `${meta.title} | WhatNow` },
    description: meta.description,
    alternates: { canonical: `/reads/${slug}` },
    openGraph: {
      type: "article",
      title: `${meta.title} | WhatNow`,
      description: meta.description,
      url,
      publishedTime: meta.datePublished,
      authors: [meta.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | WhatNow`,
      description: meta.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = ARTICLE_META[slug];

  const jsonLd = meta && {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.datePublished,
    author: { "@type": "Organization", name: meta.author },
    publisher: { "@type": "Organization", name: "WhatNow", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/reads/${slug}`,
    inLanguage: "en-IN",
  };

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ArticleReader slug={slug} />
    </>
  );
}
