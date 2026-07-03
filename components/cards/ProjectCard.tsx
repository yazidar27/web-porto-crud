interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-3">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded bg-gray-200 px-2 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a href={github}>GitHub</a>
        <a href={live}>Live Demo</a>
      </div>
    </div>
  );
}
