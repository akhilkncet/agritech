import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HighlightsSection from "@/components/HighlightsSection";
import ThemesSection from "@/components/ThemesSection";
import TimelineSection from "@/components/TimelineSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import PrizesSection from "@/components/PrizesSection";
import RegisterCTA from "@/components/RegisterCTA";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

const Index = () => (
  <div className="dark">
    <GlobalBackground />
    <Navbar />
    <div className="relative z-10">
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <GallerySection />
      <HighlightsSection />
      <TimelineSection />
      <ParticipantsSection />
      <PrizesSection />
      <RegisterCTA />
      <SponsorsSection />
      <Footer />
    </div>
  </div>
);

export default Index;
