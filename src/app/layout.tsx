import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ContextMenu from "@/components/ContextMenu";
import NoticeBoard from "@/components/NoticeBoard";
import AdminNoticeBoard from "@/components/AdminNoticeBoard";
import { Geist, Mukta, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

// Runs before paint. Light is the default; only apply dark when the user has explicitly chosen it.
const themeScript = `(function(){try{if(localStorage.getItem('whatnow-theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Display face for English headings — a characterful editorial grotesk, a
// deliberate pairing against Geist body (not a default). Devanagari headings
// stay on Mukta via the lang-hi override in globals.css.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://whatnowindia.vercel.app";
const SITE_DESCRIPTION =
  "Honest guides to every course, career, and entrance exam — from people who don't earn a cut when you choose.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | WhatNow",
    default: "WhatNow — Honest career & exam guidance for India",
  },
  description: SITE_DESCRIPTION,
  applicationName: "WhatNow",
  keywords: [
    "career guidance India",
    "after 12th",
    "entrance exams",
    "CLAT", "UCEED", "NIFT", "IMU-CET",
    "career options India",
    "exam preparation",
  ],
  openGraph: {
    type: "website",
    siteName: "WhatNow",
    title: "WhatNow — Honest career & exam guidance for India",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatNow — Honest career & exam guidance for India",
    description: SITE_DESCRIPTION,
  },
};

// Site-wide structured data: who runs the site + a searchable WebSite entry.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WhatNow",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "indiawhatnow@gmail.com",
  sameAs: [
    "https://instagram.com/whatnow.in",
    "https://www.youtube.com/@indiawhatnow",
  ],
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WhatNow",
  url: SITE_URL,
  inLanguage: ["en-IN", "hi-IN"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${mukta.variable} ${bricolage.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 dark:bg-[#0E111E] dark:text-slate-100 font-medium pt-20">
        <MotionProvider>
          <ThemeProvider>
            <LanguageProvider>
              <Navbar />

              {children}

              <Footer />
              <SearchModal />
              <ContextMenu />
              <NoticeBoard />
              <AdminNoticeBoard />
            </LanguageProvider>
          </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
