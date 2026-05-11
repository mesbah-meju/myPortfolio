import { ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

const Projects = () => (
  <PageTransition>
    <section className="pt-36 pb-16">
      <div className="container-tight">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
            Projects
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Selected work across <span className="text-gradient-primary">ERP, CRM & SaaS.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A look at the platforms, modules and systems I've designed and shipped
            over the last few years.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="pb-32">
      <div className="container-tight">
        <Stagger className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group glass-card glass-card-hover p-7 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{p.period}</p>
                    <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-glow group-hover:rotate-12 transition-all" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.summary}</p>
                <ul className="space-y-1.5 mb-6 text-sm text-foreground/85">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-primary-glow mt-1">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 border border-primary/20 text-primary-glow">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  </PageTransition>
);

export default Projects;
