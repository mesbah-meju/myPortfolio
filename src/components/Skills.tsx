import { GlassCard } from "./GlassCard";
import { Code2, Database, Layout, Server, TestTube, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["PHP", "JavaScript", "SQL", "HTML5", "CSS3", "Go (Basic)"],
    },
    {
      icon: Server,
      title: "Frameworks",
      skills: ["Laravel", "CodeIgniter", "WordPress", "jQuery"],
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["Bootstrap", "Tailwind CSS", "Responsive Design", "UI/UX"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Linux", "cPanel", "REST APIs"],
    },
    {
      icon: TestTube,
      title: "Testing & Quality",
      skills: ["PHPUnit", "Unit Testing", "Integration Testing", "Code Review"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build exceptional software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <GlassCard
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-background/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Special highlight for Unit Testing */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <GlassCard className="text-center p-8 glow-primary">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full border border-primary/30 mb-4">
              <TestTube className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Quality-First Development</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Committed to delivering reliable, maintainable code through comprehensive unit testing with PHPUnit. 
              Every feature is tested to ensure stability and performance.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
