import Contact from "./contact/contact";
import Header from "./header/header";
import Hero from "./hero/hero";
import LearningApproach from "./learning-approach/learning-approach";
import SelectedWork from "./selected-work/selected-work";
import TeachingPractices from "./teaching-practices/teaching-practices";
import TechnicalFoundation from "./technical-foundation/technical-foundation";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <SelectedWork />
      <TeachingPractices />
      <LearningApproach />
      <TechnicalFoundation />
      <Contact />
    </main>
  );
}
