import Contact from "./contact/contact";
import Header from "./header/header";
import Hero from "./hero/hero";
import LearningApproach from "./learning-approach/learning-approach";
import s from "./page.module.css";
import SelectedWork from "./selected-work/selected-work";
import TeachingPractices from "./teaching-practices/teaching-practices";
import TechnicalFoundation from "./technical-foundation/technical-foundation";
import WorkExperience from "./work-experience/work-experience";

export default function Home() {
  return (
    <>
      <a className={s.skipLink} href="#main-content">
        Перейти к основному содержимому
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WorkExperience />
        <SelectedWork />
        <LearningApproach />
        <TeachingPractices />
        <TechnicalFoundation />
        <Contact />
      </main>
    </>
  );
}
