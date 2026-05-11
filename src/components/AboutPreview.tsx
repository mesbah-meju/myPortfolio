import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { aboutSummary } from "@/data/portfolio";

const pillars = [
  {
    title: "Architecture",
    body: "Multi-tenant SaaS, modular Laravel platforms, scalable workflow engines.",
  },
  {
    title: "Delivery",
    body: "Sprint planning, CI/CD pipelines, release coordination and clean handoffs.",
  },
  {
    title: "Leadership",
    body: "Mentoring engineers, owning client communication and product outcomes.",
  },
];

export const AboutPreview = () => (
  <section id="about" className="section-padding relative">
    <div className="container-tight grid lg:grid-cols-12 gap-12 items-start">
      <Reveal direction="left" className="lg:col-span-5">
        <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
          About
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Engineering software that
          <span className="text-gradient-primary"> moves business forward.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {aboutSummary}
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:gap-3 transition-all"
        >
          More about me <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>

      <Stagger className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <StaggerItem key={p.title}>
            <div className="glass-card glass-card-hover p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow mb-5 grid place-items-center text-primary-foreground text-sm font-bold">
                {p.title.charAt(0)}
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);
