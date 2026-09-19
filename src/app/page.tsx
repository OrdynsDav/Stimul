import { CareSection } from "@/components/organisms/CareSection/CareSection";
import ContactsSection from "@/components/organisms/ContactsSection/ContactsSection";
import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection/HowItWorksSection";
import ReviewsSection from "@/components/organisms/ReviewsSection/ReviewsSection";
import { TariffsSection } from "@/components/organisms/TariffsSection/TariffsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <TariffsSection />
      <ReviewsSection />
      <CareSection />
      <ContactsSection />
    </>
  );
}
