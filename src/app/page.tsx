import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center pt-8 pb-12 lg:pt-12 lg:pb-0">

            {/* Left Content */}
            <div className="flex flex-col items-start order-1 lg:order-1">
              <span className="inline-block bg-[#E6F5F2] text-[#0A8B74] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
                For Indian Students. By Students.
              </span>

              <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] font-bold text-[#111827] mb-6 tracking-tight">
                You have options.<br />
                We help you find<br />
                the <span className="text-[#0A8B74]">right one</span>.
              </h1>

              <p className="text-gray-600 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                Unbiased guides, real stories, and clear roadmaps for every stage of your journey.
              </p>

              <div className="flex flex-row flex-wrap items-center gap-4">
                <button className="bg-[#0A8B74] text-white px-6 py-3.5 rounded-xl font-medium flex items-center gap-2 hover:bg-[#087a66] transition-colors shadow-sm whitespace-nowrap">
                  Explore Careers
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                  Browse Exams
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-2 lg:order-2 w-full flex justify-center relative">
              <div className="relative w-full max-w-[550px] lg:max-w-[750px] aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                <Image
                  src="/hero.png"
                  alt="Student making career choices"
                  fill
                  priority
                  className="object-contain object-center lg:object-right"
                />
              </div>
            </div>

          </div>

          {/* Stats Section */}
          <div className="pb-16 lg:pb-24">
            <div className="grid grid-cols-4 divide-x divide-gray-200 border border-gray-200 rounded-2xl bg-white shadow-sm w-full overflow-hidden">

              <div className="flex flex-col items-center justify-center py-6 px-2 lg:p-8">
                <span className="text-[#0A8B74] text-xl lg:text-[2.5rem] font-bold mb-1 lg:mb-2">100+</span>
                <span className="text-gray-500 text-[10px] lg:text-sm text-center font-medium">Exams &<br className="lg:hidden" /> Careers</span>
              </div>

              <div className="flex flex-col items-center justify-center py-6 px-2 lg:p-8">
                <span className="text-[#0A8B74] text-xl lg:text-[2.5rem] font-bold mb-1 lg:mb-2">50K+</span>
                <span className="text-gray-500 text-[10px] lg:text-sm text-center font-medium">Students<br className="lg:hidden" /> Helped</span>
              </div>

              <div className="flex flex-col items-center justify-center py-6 px-2 lg:p-8">
                <span className="text-[#0A8B74] text-xl lg:text-[2.5rem] font-bold mb-1 lg:mb-2">200+</span>
                <span className="text-gray-500 text-[10px] lg:text-sm text-center font-medium">In-depth<br className="lg:hidden" /> Guides</span>
              </div>

              <div className="flex flex-col items-center justify-center py-6 px-2 lg:p-8">
                <span className="text-[#0A8B74] text-xl lg:text-[2.5rem] font-bold mb-1 lg:mb-2">0₹</span>
                <span className="text-gray-500 text-[10px] lg:text-sm text-center font-medium">Always<br className="lg:hidden" /> Free</span>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
