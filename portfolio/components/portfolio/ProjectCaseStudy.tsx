import { ExternalLink, Github } from "lucide-react";
import { TechBadge } from "./TechBadge";
import { ProjectMetrics } from "./ProjectMetrics";
import { ProjectDiagramPlaceholder } from "./ProjectDiagramPlaceholder";

interface KeyDecision {
  decision: string;
  rationale: string;
}

interface Metric {
  label: string;
  value: string;
  detail?: string;
}

interface ProjectCaseStudyProps {
  title: string;
  summary: string;
  problemStatement: string;
  architecture: {
    overview: string;
    modules: string[];
  };
  keyDecisions: KeyDecision[];
  demonstrates: string;
  techStack: string[];
  metrics: Metric[];
  architectureDiagramDesc?: string;
  demoDesc?: string;
  architectureDiagram?: string;
  demoImage?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCaseStudy({
  title,
  summary,
  problemStatement,
  architecture,
  keyDecisions,
  demonstrates,
  techStack,
  metrics,
  architectureDiagramDesc,
  demoDesc,
  architectureDiagram,
  demoImage,
  githubUrl,
  liveUrl,
}: ProjectCaseStudyProps) {
  return (
    <article className="py-12 md:py-16 border-b border-border last:border-b-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="View source on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <p className="text-lg text-foreground/90 leading-relaxed mb-8 max-w-3xl">
        {summary}
      </p>

      {/* Metrics */}
      <div className="mb-10">
        <ProjectMetrics metrics={metrics} />
      </div>

      {/* Visual Artifacts: Demo + Architecture Diagram */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <ProjectDiagramPlaceholder
          type="demo"
          projectTitle={title}
          description={demoDesc}
          image={demoImage}
        />
        <ProjectDiagramPlaceholder
          type="architecture"
          projectTitle={title}
          description={architectureDiagramDesc}
          image={architectureDiagram}
        />
      </div>

      {/* Core Content: Problem, Architecture, Decisions */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Problem Statement */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Problem Statement
            </h4>
            <p className="text-foreground/80 leading-relaxed">
              {problemStatement}
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Architecture & System Design
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {architecture.overview}
            </p>
            <ul className="space-y-2">
              {architecture.modules.map((module, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Key Technical Decisions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Key Technical Decisions
            </h4>
            <div className="space-y-4">
              {keyDecisions.map((item, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-medium text-foreground mb-1">
                    {item.decision}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What This Demonstrates */}
          <div className="p-5 rounded-lg bg-accent/5 border border-accent/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2.5">
              What This Demonstrates
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {demonstrates}
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </article>
  );
}
