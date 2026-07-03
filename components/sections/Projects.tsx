import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "../cards/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle title="Projects" subtitle="Some projects I've built." />

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
