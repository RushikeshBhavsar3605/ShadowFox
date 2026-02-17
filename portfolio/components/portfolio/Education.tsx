import { SectionHeader } from "./SectionHeader";

interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  startYear: number;
  endYear: number | "Present";
  highlights: string[];
}

export function Education() {
  const educationData: EducationEntry[] = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Sinhgad Academy of Engineering",
      location: "Pune, India",
      startYear: 2024,
      endYear: 2027,
      highlights: [
        "Strong foundation in data structures, databases, operating systems, and computer networks",
        "Focused on backend engineering and distributed systems concepts",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Santosh N. Darade Polytechnic",
      location: "Nashik, India",
      startYear: 2021,
      endYear: 2024,
      highlights: [
        "Hands-on experience with core programming and system fundamentals",
        "Early exposure to software engineering and problem-solving",
      ],
    },
  ];

  return (
    <section id="education" className="section-padding border-t border-border">
      <div className="container-tight">
        <SectionHeader
          label="Education"
          title="Background"
          description="Formal education and continuous learning in systems engineering."
        />

        <div className="space-y-10 md:space-y-12">
          {educationData.map((entry, idx) => (
            <div
              key={idx}
              className="border-l-2 border-accent/40 pl-6 md:pl-8 py-1 hover:border-accent transition-colors"
            >
              {/* Degree & Institution */}
              <div className="mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1.5">
                  {entry.degree}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {entry.institution}
                  {entry.location && ` • ${entry.location}`}
                </p>
              </div>

              {/* Years */}
              <p className="text-sm font-medium text-muted-foreground mb-4">
                {entry.startYear} – {entry.endYear}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5">
                {entry.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-sm md:text-base text-foreground/80 leading-relaxed flex gap-3"
                  >
                    <span className="text-accent font-medium mt-0.5 select-none">
                      ›
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
