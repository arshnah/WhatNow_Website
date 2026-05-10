import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* Approximated WhatNow Logo */}
              <path
                d="M4 8L12 24L16 16L20 24L28 8"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 24L12 8L16 16L20 8L28 24"
                stroke="#E5E7EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="4"
                  y1="8"
                  x2="28"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0A8B74" />
                  <stop offset="0.5" stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              WhatNow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Explore Careers
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Exams
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Guides
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Scholarships
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Resources
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </Link>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors p-2">
              <span className="sr-only">Search</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link href="#" className="text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
              Login
            </Link>
            <Link href="#" className="text-sm font-medium text-white bg-[#5B4FE6] hover:bg-[#4d42cc] px-4 py-2 rounded-lg transition-colors">
              Join for Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <span className="sr-only">Open main menu</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
