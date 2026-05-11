import { GlassCard } from "./GlassCard";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Lead Developer & Focal Person",
      company: "4axiz IT Ltd",
      location: "Dhaka, Bangladesh",
      period: "2025 - Present",
      responsibilities: [
        "Leading development teams across multiple enterprise projects",
        "Architecting scalable solutions for complex business requirements",
        "Managing client relationships and technical consultations",
        "Implementing best practices for code quality and testing",
        "Mentoring junior developers and conducting code reviews",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "4axiz IT Ltd",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2025",
      responsibilities: [
        "Developed enterprise ERP, HRM, and School Management systems",
        "Built security management and risk analysis platforms",
        "Created multi-vendor eCommerce solutions with payment integration",
        "Implemented comprehensive unit testing with PHPUnit",
        "Collaborated with UI/UX teams for optimal user experience",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2020 - 2022",
      responsibilities: [
        "Delivered custom WordPress and Laravel solutions for various clients",
        "Built responsive websites and web applications",
        "Provided maintenance and support for existing projects",
        "Managed client communications and project timelines",
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <GlassCard className="md:ml-20">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-muted-foreground">• {exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
