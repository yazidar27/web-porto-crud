interface ProgramCardProps {
  title: string;
  organizer: string;
  period: string;
  description: string;
}

export default function ProgramCard({
  title,
  organizer,
  period,
  description,
}: ProgramCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{organizer}</p>

      <p className="text-sm text-muted-foreground">{period}</p>

      <p className="mt-4">{description}</p>
    </div>
  );
}
