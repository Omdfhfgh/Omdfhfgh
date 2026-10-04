import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { RoyalTrayFeature } from "@/components/home/RoyalTrayFeature";
import { FeaturedMenuSection } from "@/components/home/FeaturedMenuSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CurrentOffersSection } from "@/components/home/CurrentOffersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationCtaSection } from "@/components/home/LocationCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpecialtiesSection />
      <RoyalTrayFeature />
      <FeaturedMenuSection />
      <WhyUsSection />
      <CurrentOffersSection />
      <TestimonialsSection />
      <LocationCtaSection />
    </>
  );
}
