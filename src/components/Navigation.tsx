import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="container-tight">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.25)]"
              : "bg-transparent border border-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
            <span className="font-semibold tracking-tight text-sm sm:text-base">
              Mesbah <span className="text-muted-foreground font-normal">Uddin</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full px-5">
              <Link to="/contact">Let's talk</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-lg text-sm font-medium",
                    isActive
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:bg-secondary",
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <Link to="/contact">Let's talk</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
