import { GlassCard } from "./GlassCard";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Security Management & Risk Analysis System",
      description: "Comprehensive platform for security management, risk assessment, and compliance tracking with real-time monitoring and reporting.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    },
    {
      title: "Audit & Recommendation Management System",
      description: "Enterprise solution for managing audits, tracking recommendations, and ensuring compliance across multiple departments.",
      tech: ["Laravel", "PHP", "REST API", "jQuery", "MySQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
    },
    {
      title: "Enterprise ERP System",
      description: "Full-featured ERP platform handling inventory, accounting, HR, and operations with role-based access control.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
    {
      title: "School Management System",
      description: "Complete school administration platform managing students, teachers, classes, attendance, and grade reporting.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop",
    },
    {
      title: "Multi-Vendor eCommerce Platform",
      description: "Scalable marketplace supporting multiple vendors, payment gateways, inventory management, and order tracking.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of enterprise solutions and impactful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={index}
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-card hover:glow-primary-hover"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-card hover:glow-primary-hover"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
