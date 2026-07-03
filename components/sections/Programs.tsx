import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";
import ProgramCard from "../cards/ProgramCard";

import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <Section id="programs">
      <Container>
        <SectionTitle
          title="Programs"
          subtitle="Training, bootcamps, and professional programs."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
