import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies and tools I use." />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">Frontend</h3>

            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Backend</h3>

            <ul className="space-y-2">
              {skills.backend.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Tools</h3>

            <ul className="space-y-2">
              {skills.tools.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Languages</h3>

            <ul className="space-y-2">
              {skills.languages.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
