interface Metric {
  label: string;
  value: string;
  detail?: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="p-4 rounded-lg bg-card border border-border"
        >
          <p className="text-2xl font-semibold text-accent tracking-tight">
            {metric.value}
          </p>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-1">
            {metric.label}
          </p>
          {metric.detail && (
            <p className="text-xs text-muted-foreground/70 mt-1.5 leading-relaxed">
              {metric.detail}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
