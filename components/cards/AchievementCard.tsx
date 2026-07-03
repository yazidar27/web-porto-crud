interface AchievementCardProps {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export default function AchievementCard({
  title,
  organization,
  year,
  description,
}: AchievementCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {organization} • {year}
      </p>

      <p className="mt-4">{description}</p>
    </div>
  );
}
