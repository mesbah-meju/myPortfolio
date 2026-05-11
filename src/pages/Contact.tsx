import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { personal } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client…");
      setSubmitting(false);
    }, 500);
  };

  return (
    <PageTransition>
      <section className="pt-36 pb-16">
        <div className="container-tight">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.25em] text-primary-glow uppercase mb-4">
              Contact
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Let's build the <span className="text-gradient-primary">next platform.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Always open to senior engineering roles, consulting and serious
              freelance engagements. Drop me a note.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-tight grid lg:grid-cols-5 gap-8">
          <Reveal direction="left" className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
              { icon: MapPin, label: "Location", value: personal.location },
              { icon: Linkedin, label: "LinkedIn", value: "in/mesbah-uddin-meju", href: personal.linkedin },
              { icon: Github, label: "GitHub", value: "@mesbah-meju", href: personal.github },
            ].map((c) => {
              const Inner = (
                <div className="glass-card glass-card-hover p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 grid place-items-center text-primary-glow">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </Reveal>

          <Reveal direction="right" className="glass-card lg:col-span-3">
            <form onSubmit={onSubmit} className="p-7 md:p-9 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    maxLength={255}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, role, or idea…"
                  rows={6}
                  maxLength={1000}
                  required
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="rounded-full px-7 group">
                <Send className="w-4 h-4 mr-1" />
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
