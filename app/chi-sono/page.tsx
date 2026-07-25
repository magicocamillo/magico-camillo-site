import HeroStory from "./components/HeroStory";
import RacheleArticle from "./components/RacheleArticle";
import JourneyTraining from "./components/JourneyTraining";
import CapannoFinal from "./components/CapannoFinal";

export default function ChiSono() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-24">
        <HeroStory />
        <RacheleArticle />
        <JourneyTraining />
        <CapannoFinal />
      </div>
    </main>
  );
}