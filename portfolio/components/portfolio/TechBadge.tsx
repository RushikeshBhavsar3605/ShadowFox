interface TechBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function TechBadge({ children, variant = "default" }: TechBadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md transition-colors";

  const variants = {
    default:
      "bg-secondary text-secondary-foreground hover:bg-accent-muted hover:text-accent",
    accent: "bg-accent-muted text-accent",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>
  );
}
