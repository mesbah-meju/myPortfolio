import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { SkillsOverview } from "@/components/SkillsOverview";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Achievements } from "@/components/Achievements";
import { ContactCTA } from "@/components/ContactCTA";
import { PageTransition } from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <Hero />
    <AboutPreview />
    <SkillsOverview />
    <ExperienceTimeline />
    <Achievements />
    <FeaturedProjects />
    <ContactCTA />
  </PageTransition>
);

export default Index;
