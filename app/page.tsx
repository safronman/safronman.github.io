import CourseCatalog from "./course-catalog/course-catalog";
import FormatsAndAssessment from "./formats-and-assessment";
import Hero from "./hero/hero";
import LeadershipProof from "./leadership-proof/leadership-proof";
import LearningApproach from "./learning-approach/learning-approach";
import Presentations from "./presentations";
import StyleGuide from "./style-guide";
import TeachingPractices from "./teaching-practices/teaching-practices";
import TeachingVideo from "./teaching-video";
import TechnicalFoundation from "./technical-foundation";
import TechnicalMarketingVoice from "./technical-marketing-voice";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadershipProof />
      <LearningApproach />
      <TeachingPractices>
        <TeachingVideo />
      </TeachingPractices>

      <CourseCatalog />

      <Presentations />

      <StyleGuide />

      <FormatsAndAssessment />

      <TechnicalFoundation />

      <TechnicalMarketingVoice />
    </main>
  );
}
