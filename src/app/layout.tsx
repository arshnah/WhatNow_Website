import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 font-medium">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
