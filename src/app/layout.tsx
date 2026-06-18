import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ContextMenu from "@/components/ContextMenu";
import NoticeBoard from "@/components/NoticeBoard";
import AdminNoticeBoard from "@/components/AdminNoticeBoard";
import { Geist, Mukta } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
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

export const metadata: Metadata = {
  title: {
    template: "%s | WhatNow",
    default: "WhatNow — You have options.",
  },
  description: "You have options. We help you find the right one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${mukta.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 dark:bg-[#0B0F1A] dark:text-slate-100 font-medium pt-20">
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
      </body>
    </html>
  );
}
