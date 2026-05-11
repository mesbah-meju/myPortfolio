import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { aboutSummary, education, experience, skillGroups, personal } from "@/data/portfolio";

const About = () => (
  <PageTransition>
    <section className="pt-36 pb-20">
      <div className="container-tight">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
            About
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Building software for <span className="text-gradient-primary">real businesses.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {aboutSummary}
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Based in {personal.location} · Open to remote & on-site senior roles.
          </div>
        </Reveal>
      </div>
    </section>

    <section className="pb-24">
      <div className="container-tight">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        </Reveal>
        <Stagger className="space-y-5">
          {experience.map((e) => (
            <StaggerItem key={e.role + e.company}>
              <div className="glass-card glass-card-hover p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="text-xs text-primary-glow font-medium">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{e.company} · {e.location}</p>
                <ul className="space-y-2 text-sm text-foreground/85">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-primary-glow mt-1">›</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <section className="pb-24">
      <div className="container-tight">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
        </Reveal>
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="glass-card glass-card-hover p-6 h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/60 border border-border">{i}</span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    <section className="pb-32">
      <div className="container-tight">
        <Reveal className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-5">
          {education.map((e) => (
            <StaggerItem key={e.degree}>
              <div className="glass-card glass-card-hover p-6 h-full">
                <p className="text-xs text-primary-glow font-medium mb-2">{e.period}</p>
                <h3 className="font-semibold mb-1 leading-snug">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  </PageTransition>
);

export default About;
