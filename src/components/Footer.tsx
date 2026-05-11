import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-10">
    <div className="container-tight py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="text-sm">
          <div className="text-muted-foreground text-xs ">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
      </nav>

      <div className="flex items-center gap-4 text-muted-foreground">
        <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary-glow transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary-glow transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={`mailto:${personal.email}`} aria-label="Email" className="hover:text-primary-glow transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);
