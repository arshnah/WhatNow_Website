import Marquee from "./Marquee";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
    return (<main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center pt-8 pb-12 lg:pt-12 lg:pb-0">

                {/* Left Content */}
                <div className="flex flex-col items-start order-1 lg:order-1">

                    <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] font-extrabold text-[#111827] mb-6 tracking-tight">
                        You have options.<br />
                        We help you find<br />
                        the <span className="text-secondary">right one</span>.
                    </h1>

                    <p className="text-gray-600 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                        Unbiased guides, real stories, and clear roadmaps for every stage of your journey.
                    </p>

                    <div className="flex flex-row flex-wrap items-center gap-4">
                        <Button
                            variant="primary"
                            icon={
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        >
                            Explore Careers
                        </Button>
                        <Button variant="outline">
                            Browse Exams
                        </Button>
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
        </div>

        {/* Marquee Section */}
        <div className="w-full mb-16 lg:mb-24">
            <Marquee />
        </div>
    </main>)
}