import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/RushikeshBhavsar3605",
      icon: <Github className="w-5 h-5" />,
      description: "View my projects and contributions",
    },
    {
      name: "Email",
      url: "mailto:rvbhavsar36@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "rvbhavsar36@gmail.com",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rushikesh-bhavsar-swe/",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Professional profile",
    },
    {
      name: "Resume",
      url: "#",
      icon: <FileText className="w-5 h-5" />,
      description: "Download PDF (available on request)",
    },
  ];

  return (
    <section id="contact" className="section-padding border-t border-border">
      <div className="container-tight">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          description="Open to backend, platform, or full-stack roles. Happy to discuss systems, architecture, or interesting problems."
        />

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={
                link.url.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex items-center gap-4 p-5 md:p-6 rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <span className="p-3 rounded-lg bg-secondary text-foreground group-hover:bg-accent-muted group-hover:text-accent transition-colors shrink-0">
                {link.icon}
              </span>
              <div className="min-w-0">
                <p className="font-medium text-foreground group-hover:text-accent transition-colors mb-1">
                  {link.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
