import Contact from "./contact/contact";
import CourseCatalog from "./course-catalog/course-catalog";
import FormatsAndAssessment from "./formats-and-assessment/formats-and-assessment";
import Hero from "./hero/hero";
import LeadershipProof from "./leadership-proof/leadership-proof";
import LearningApproach from "./learning-approach/learning-approach";
import Presentations from "./presentations/presentations";
import StyleGuide from "./style-guide/style-guide";
import TeachingPractices from "./teaching-practices/teaching-practices";
import TechnicalFoundation from "./technical-foundation/technical-foundation";
import TechnicalMarketingVoice from "./technical-marketing-voice/technical-marketing-voice";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadershipProof />
      <LearningApproach />
      <TeachingPractices />
      <CourseCatalog />
      <Presentations />
      <StyleGuide />
      <FormatsAndAssessment />
      <TechnicalFoundation />
      <TechnicalMarketingVoice />
      <Contact />
    </main>
  );
}
