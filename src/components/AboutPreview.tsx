import { Link } from "react-router-dom";
import { ArrowRight, Code2, Zap, Users, Database, GitBranch, Package } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { aboutSummary } from "@/data/portfolio";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    body: "Laravel backend with scalable APIs, React/JS frontends, and complete system architecture design.",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    body: "ERP, CRM, and workflow engines. Multi-tenant SaaS with complex reporting and data processing.",
  },
  {
    icon: Zap,
    title: "Performance & Scale",
    body: "Query optimization, caching strategies, CI/CD pipelines, and production-grade deployment systems.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    body: "Sprint planning, client communication, requirement analysis, and mentoring engineers.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Tooling",
    body: "Git workflows, automated testing, Linux server management, Nginx/Apache configuration.",
  },
  {
    icon: Package,
    title: "Real-Time Features",
    body: "WebSockets, WebRTC integration, live streaming, event broadcasting, and real-time dashboards.",
  },
];

export const AboutPreview = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl pointer-events-none" />

    <div className="container-tight relative z-10">
      {/* Header Section */}
      <Reveal direction="up" className="mx-auto text-center mb-16">
        <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
          About Me
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Senior Full-Stack Engineer building
          <span className="text-gradient-primary"> scalable enterprise software</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
          {aboutSummary} I specialize in turning complex business requirements into clean, maintainable systems.
        </p>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((item) => {
          const Icon = item.icon;
          return (
            <StaggerItem key={item.title}>
              <div className="glass-card glass-card-hover p-6 h-full group flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow mb-4 grid place-items-center text-primary-foreground group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
        <Link
          to="/about"
          className="inline-flex mt-8 items-center gap-2 text-sm font-medium text-primary-glow hover:gap-3 transition-all"
        >
          View Full Background <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>

      {/* Expertise Grid */}
      
    </div>
  </section>
);
