import Hero from "./components/Hero";
import Experience from "./components/Experience";
import MagicMomentsSection from "./components/MagicMomentsSection";
import WhyChooseMe from "./components/WhyChooseMe";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <Experience />

      <MagicMomentsSection />

      <WhyChooseMe />

    </main>
  );
}