import Hero from "@/components/home/Hero";
import FeaturedGuides from "@/components/home/FeaturedGuides";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <FeaturedGuides />
      <Testimonials />
    </div>
  );
}
