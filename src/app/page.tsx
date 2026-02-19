"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/common/loader";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import ExperienceSection from "@/components/sections/experience-section";
import SkillsSection from "@/components/sections/skills-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic loader simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CtaSection />
    </main>
  );
}
