import { GlassCard } from "./GlassCard";
import { Code2, Palette, TestTube, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "3+ years building ERP, HRM, School Management, eCommerce, and Security platforms",
    },
    {
      icon: Palette,
      title: "UI/UX Research",
      description: "Creating intuitive, user-friendly interfaces with modern design principles",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Implementing comprehensive unit testing with PHPUnit for reliable code",
    },
    {
      icon: Users,
      title: "Project Leadership",
      description: "Leading development teams and managing client relationships effectively",
    },
  ];

  return (
    <section id="about" className="section bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating robust, scalable solutions that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With over 3 years of professional experience, I specialize in developing enterprise-level 
              applications that solve real business problems. My expertise spans from building complex 
              ERP systems to crafting intuitive user interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm proficient in multiple technologies including <strong className="text-foreground">Laravel</strong>, 
              <strong className="text-foreground"> PHP</strong>, <strong className="text-foreground">JavaScript</strong>, 
              and <strong className="text-foreground">WordPress</strong>. I take pride in writing clean, 
              maintainable code backed by comprehensive unit tests.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fluent in English, I'm comfortable with technical communication and client meetings, 
              ensuring smooth collaboration across teams and stakeholders.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
