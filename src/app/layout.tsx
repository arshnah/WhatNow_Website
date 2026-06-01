import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import ContextMenu from "@/components/ContextMenu";
import NoticeBoard from "@/components/NoticeBoard";
import AdminNoticeBoard from "@/components/AdminNoticeBoard";
import { Geist, Mukta } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

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
  title: "WhatNow",
  description: "You have options. We help you find the right one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${mukta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 font-medium pt-20">
        <LanguageProvider>
          <Navbar />

          {children}
          
          <Footer />
          <SearchModal />
          <ContextMenu />
          <NoticeBoard />
          <AdminNoticeBoard />
        </LanguageProvider>
      </body>
    </html>
  );
}
