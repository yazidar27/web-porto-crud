import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";
import CertificationCard from "../cards/CertificationCard";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and courses."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certificate) => (
            <CertificationCard key={certificate.id} {...certificate} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
