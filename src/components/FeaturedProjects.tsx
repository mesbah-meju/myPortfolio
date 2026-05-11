import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-tight">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Selected <span className="text-gradient-primary">projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:gap-3 transition-all"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
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
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-primary-glow mt-1">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 border border-primary/20 text-primary-glow"
                    >
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
  );
};
