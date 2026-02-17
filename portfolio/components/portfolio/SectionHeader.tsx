interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-3xl">{description}</p>
      )}
    </div>
  );
}
