import { SectionHeader } from "./SectionHeader";

const theses = [
  {
    principle: "Scale by default",
    detail:
      "Every data model, API contract, and queue is designed for 10x growth before it's needed.",
  },
  {
    principle: "Simplicity until proven otherwise",
    detail:
      "A single Postgres instance beats a microservice mesh until your bottleneck says otherwise.",
  },
  {
    principle: "Cost is a constraint",
    detail:
      "Infrastructure choices are engineering decisions. I treat cloud spend like memory—budget it, measure it, optimize it.",
  },
  {
    principle: "Reliability over features",
    detail:
      "Graceful degradation, retries, and circuit breakers ship before the next feature does.",
  },
  {
    principle: "Measure before optimizing",
    detail:
      "No premature tuning. Instrument first, profile second, optimize third.",
  },
  {
    principle: "Backend-first thinking",
    detail:
      "Data models, system boundaries, and failure modes are defined before any UI is drawn.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-tight">
        <SectionHeader label="Philosophy" title="Engineering Thesis" />

        <p className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-3xl">
          I evaluate every system I build against three questions:{" "}
          <span className="text-foreground font-medium">
            What breaks at 10x scale?
          </span>{" "}
          <span className="text-foreground font-medium">
            What's the failure mode?
          </span>{" "}
          <span className="text-foreground font-medium">
            What does it cost to run?
          </span>
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {theses.map((t) => (
            <div
              key={t.principle}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {t.principle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
