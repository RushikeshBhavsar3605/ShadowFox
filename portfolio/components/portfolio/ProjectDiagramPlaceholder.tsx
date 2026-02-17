import { Image, Play } from "lucide-react";

interface ProjectDiagramPlaceholderProps {
  type: "demo" | "architecture";
  projectTitle: string;
  description?: string;
  image?: string;
}

export function ProjectDiagramPlaceholder({
  type,
  projectTitle,
  description,
  image,
}: ProjectDiagramPlaceholderProps) {
  const isDemo = type === "demo";

  return (
    <div className="relative aspect-video rounded-lg border border-border bg-card overflow-hidden flex flex-col items-center justify-center gap-3 group">
      {!image ? (
        <>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-2 text-center px-6">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              {isDemo ? (
                <Play className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Image className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {isDemo ? "Demo" : "Architecture Diagram"}
            </p>
            <p className="text-xs text-muted-foreground/60 max-w-xs">
              {description ||
                (isDemo
                  ? `${projectTitle} walkthrough — coming soon`
                  : `${projectTitle} system design — coming soon`)}
            </p>
          </div>
        </>
      ) : (
        <img src={image} alt="image" />
      )}
    </div>
  );
}
