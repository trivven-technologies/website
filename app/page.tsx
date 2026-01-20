import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import FoundingClientCTA from "@/components/FoundingClientCTA";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <FoundingClientCTA />
      <SiteFooter />
    </main>
  );
}
