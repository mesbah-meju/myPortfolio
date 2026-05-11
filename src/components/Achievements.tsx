import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { achievements } from "@/data/portfolio";

export const Achievements = () => (
  <section id="impact" className="section-padding relative">
    <div className="container-tight">
      <div className="relative glass-card overflow-hidden p-10 md:p-16">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl" />

        <Reveal className="relative text-center mb-12">
          <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
            Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Numbers behind the <span className="text-gradient-primary">work</span>
          </h2>
        </Reveal>

        <Stagger className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {achievements.map((a) => (
            <StaggerItem key={a.label} direction="zoom">
              <div>
                <div className="text-5xl md:text-6xl font-bold tracking-tight text-gradient-primary">
                  {a.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{a.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  </section>
);
