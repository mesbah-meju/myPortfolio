import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { personal } from "@/data/portfolio";

export const ContactCTA = () => (
  <section id="contact-cta" className="section-padding relative">
    <div className="container-tight">
      <Reveal direction="zoom">
        <div className="relative glass-card overflow-hidden p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary-glow/10" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/30 blur-3xl rounded-full" />

          <div className="relative">
            <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-5">
              Let's build something
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              Have a <span className="text-gradient-primary">complex product</span> to ship?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              I partner with teams to design and deliver enterprise-grade
              platforms — from architecture through release.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-7 group">
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <a href={`mailto:${personal.email}`}>
                  <Mail className="w-4 h-4 mr-1" />
                  {personal.email}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
