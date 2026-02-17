import { SectionHeader } from "./SectionHeader";

interface SkillCategory {
  name: string;
  skills: string[];
}

export function Skills() {
  const categories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["Go", "C++", "TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      name: "Backend & Infrastructure",
      skills: [
        "gRPC",
        "REST APIs",
        "WebSockets",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      name: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Mongoose",
        "Connection Pooling",
      ],
    },
    {
      name: "Observability",
      skills: [
        "OpenTelemetry",
        "Jaeger",
        "Distributed Tracing",
        "Load Testing",
      ],
    },
    {
      name: "Frontend",
      skills: ["Next.js", "React", "Tailwind CSS", "Socket.IO Client"],
    },
    {
      name: "Practices",
      skills: [
        "System Design",
        "API Design",
        "Trade-off Analysis",
        "Performance Testing",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-wide">
        <SectionHeader
          label="Skills"
          title="Technical Toolkit"
          description="Technologies I've used in projects"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-5 rounded-xl border border-border bg-card hover:border-accent/20 transition-colors"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-foreground/80 bg-secondary rounded-md hover:bg-accent-muted hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
