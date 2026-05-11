import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { personal } from "@/data/portfolio";

export const Hero = () => {
  const typeRef = useTypewriter([
    "Senior Full-Stack Software Engineer",
    "Laravel & SaaS Architect",
    "ERP / CRM Systems Builder",
    "Workflow Engine Designer",
  ]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="blob bg-primary/40"
        style={{ width: 520, height: 520, top: -120, left: -100 }}
      />
      <div
        className="blob bg-primary-glow/30"
        style={{ width: 460, height: 460, bottom: -120, right: -80 }}
      />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium tracking-wide text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse" />
            Available for senior engineering roles
          </div>

          <h1 className="font-bold tracking-tight leading-[1.05] mb-6">
            <span className="block text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">{personal.name}.</span>
            <span className="block text-gradient-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-y4">
              <span ref={typeRef} className="caret" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {personal.tagline} 3+ years shipping ERP, CRM, and multi-tenant SaaS
            for production teams.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full px-7 group">
              <Link to="/projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary-glow transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary-glow transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="hover:text-primary-glow transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <span className="h-4 w-px bg-border" />
            <span className="text-xs">{personal.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        >
          <div className="scroll-indicator" />
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};
