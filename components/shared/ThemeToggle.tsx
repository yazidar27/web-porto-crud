interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
