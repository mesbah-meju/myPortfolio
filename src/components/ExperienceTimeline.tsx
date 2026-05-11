import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export const ExperienceTimeline = () => (
  <section id="experience" className="section-padding relative">
    <div className="container-tight">
      <Reveal className="max-w-2xl mb-16">
        <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          A track record of <span className="text-gradient-primary">shipping at scale</span>
        </h2>
      </Reveal>

      <div className="relative">
        <div
          aria-hidden
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />

        <Stagger className="space-y-10 md:space-y-16">
          {experience.map((item, idx) => (
            <StaggerItem
              key={item.role + item.company}
              direction={idx % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-glow ring-4 ring-background shadow-[0_0_18px_hsl(var(--primary)/0.6)]"
                />
                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="glass-card glass-card-hover p-6 inline-block w-full text-left">
                    <div className="flex items-center gap-2 text-xs text-primary-glow font-medium mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      {item.period}
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.company} · {item.location}
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/85">
                      {item.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-primary-glow mt-1">›</span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal delay={0.1} className="mt-12 text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:gap-3 transition-all"
        >
          Read full background <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>
    </div>
  </section>
);
