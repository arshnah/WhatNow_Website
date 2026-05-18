import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1B1A62] to-[#5563ED] text-white pt-20 lg:pt-40 overflow-hidden mt-auto">
      <div className="w-full mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32 mb-20 lg:mb-32">

          {/* Left Side: Logo, Language & Socials */}
          <div className="flex flex-col gap-10 lg:gap-12 w-full lg:w-1/4">

            {/* Logo */}
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
                <Image src="/logo.png" alt="WhatNow Logo" width={140} height={40} className="h-24 w-auto brightness-0 invert" />
              </Link>
            </div>

            {/* Language Dropdown */}
            <div>
              <p className="text-white/80 text-sm mb-4">Language</p>
              <div className="flex items-center justify-between bg-white/10 hover:bg-white/5 border border-transparent rounded-xl px-6 py-3 w-48 cursor-pointer transition-colors">
                <span className="text-sm font-medium">English</span>
                <Icon icon="solar:alt-arrow-down-linear" className="w-5 h-5" />
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/80 text-sm mb-4">Social</p>
              <div className="flex items-center gap-5">
                <Link href="https://twitter.com" className="text-white hover:text-white/80 transition-colors" aria-label="X (Twitter)">
                  <Icon icon="ri:twitter-x-line" className="w-7 h-7" />
                </Link>
                <Link href="https://instagram.com" className="text-white hover:text-white/80 transition-colors" aria-label="Instagram">
                  <Icon icon="ri:instagram-line" className="w-7 h-7" />
                </Link>
                <Link href="https://youtube.com" className="text-white hover:text-white/80 transition-colors" aria-label="YouTube">
                  <Icon icon="ri:youtube-fill" className="w-7 h-7" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16 w-full lg:w-3/4">
            {/* Column 1 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><Link href="/careers" className="text-white/90 hover:text-white hover:underline transition-all">Careers</Link></li>
                <li><Link href="/exams" className="text-white/90 hover:text-white hover:underline transition-all">Exams</Link></li>
                <li><Link href="/reads" className="text-white/90 hover:text-white hover:underline transition-all">Editorial Reads</Link></li>
                <li><Link href="/guides" className="text-white/90 hover:text-white hover:underline transition-all">Featured Guides</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-white/90 hover:text-white hover:underline transition-all">About Us</Link></li>
                <li><Link href="/contact" className="text-white/90 hover:text-white hover:underline transition-all">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="/community" className="text-white/90 hover:text-white hover:underline transition-all">Community Discord</Link></li>
                <li><Link href="/content-policy" className="text-white/90 hover:text-white hover:underline transition-all">Content Policy</Link></li>
                <li><Link href="/faq" className="text-white/90 hover:text-white hover:underline transition-all">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-base font-semibold text-white/70 mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="text-white/90 hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-white/90 hover:text-white hover:underline transition-all">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-white/90 hover:text-white hover:underline transition-all">Cookie Policy</Link></li>
                <li><Link href="/guidelines" className="text-white/90 hover:text-white hover:underline transition-all">Editorial Guidelines</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant WhatNow Text */}
      <div className="w-full flex justify-center items-end overflow-hidden select-none">
        <h1 className="text-[23vw] font-black text-white/95 leading-[0.7] tracking-tighter whitespace-nowrap translate-y-2 lg:translate-y-4">
          WhatNow
        </h1>
      </div>
    </footer>
  );
}
