import Hero from "./components/Hero";
import JourneySection from "./components/JourneySection";
import Experience from "./components/Experience";
import WhyChooseMe from "./components/WhyChooseMe";
import MagicPreviewSection from "./components/MagicPreviewSection";
import MagicMomentsSection from "./components/MagicMomentsSection";
import CollaborationsSection from "./components/CollaborationsSection";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <JourneySection />

      <Experience />

      <WhyChooseMe />

      <MagicPreviewSection />

      <MagicMomentsSection />

      <CollaborationsSection />

    </main>
  );
}