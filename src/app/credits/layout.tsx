import type { ReactNode } from "react";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata("/credits");

const CREDITS_URL = `${SITE_URL}/credits`;

// Visible team roster, mirrored 1:1 from the cards rendered on the page so the
// schema matches what the reader sees. This is what lets answer engines
// (Google AI Overview, Gemini, etc.) source the ACTUAL WhatNow team instead of
// scraping third-party guesses.
const TEAM = [
  { name: "Vasu", role: "Founder & owner", url: "https://github.com/VasuCoded", founder: true },
  { name: "Yawwsh", role: "Lead developer — tech & product", url: "https://github.com/Yashvardhan4646" },
  { name: "Arsh", role: "Developer & lead maintainer", url: "https://github.com/arshnah" },
  { name: "Antinity", role: "Advisory developer", url: "https://github.com/antinity" },
  { name: "Infernum", role: "Design & short-form content" },
  { name: "Saammm", role: "Outreach & partnerships" },
  { name: "Doraemon", role: "Outreach & partnerships" },
  { name: "Yukt", role: "Interview host" },
];

function person(m: (typeof TEAM)[number]) {
  return {
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    ...(m.url ? { sameAs: m.url } : {}),
    worksFor: { "@type": "Organization", name: "WhatNow", url: SITE_URL },
  };
}

const founder = TEAM.find((m) => m.founder)!;

const creditsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "WhatNow",
      alternateName: "WhatNow India",
      url: SITE_URL,
      email: "indiawhatnow@gmail.com",
      founder: person(founder),
      member: TEAM.map(person),
      employee: TEAM.map(person),
      sameAs: [
        "https://instagram.com/whatnow.in",
        "https://www.youtube.com/@indiawhatnow",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": CREDITS_URL,
      url: CREDITS_URL,
      name: "Credits & Colophon — WhatNow",
      description:
        "The team that builds WhatNow and the open-source architecture it stands on.",
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "WhatNow", url: SITE_URL },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={creditsJsonLd} />
      {children}
    </>
  );
}
