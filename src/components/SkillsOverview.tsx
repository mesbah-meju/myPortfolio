import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

export const SkillsOverview = () => (
  <section id="skills" className="section-padding relative">
    <div
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"
      aria-hidden
    />
    <div className="container-tight relative">
      <Reveal className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          A toolkit built for <span className="text-gradient-primary">enterprise scale</span>
        </h2>
        <p className="text-muted-foreground">
          Years of focused work across backend, frontend, data and DevOps —
          turning requirements into reliable production systems.
        </p>
      </Reveal>

      <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <div className="glass-card glass-card-hover p-6 h-full">
              <h3 className="text-sm font-semibold text-muted-foreground tracking-wide mb-4 uppercase">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/60 border border-border text-foreground/90 hover:border-primary/40 hover:text-primary-glow transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
