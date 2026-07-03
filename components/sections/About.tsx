import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";
import { about } from "@/data/about";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me better." />

        <div className="space-y-6">
          <p>{about.description}</p>

          <div>
            <h3 className="font-semibold">Current Position</h3>
            <p>{about.currentPosition}</p>
          </div>

          <div>
            <h3 className="font-semibold">Education</h3>
            <p>{about.education}</p>
          </div>

          <div>
            <h3 className="font-semibold">Experience</h3>
            <p>{about.experience}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
