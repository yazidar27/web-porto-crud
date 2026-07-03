import Container from "../layout/Container";
import Section from "../layout/Section";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="flex min-h-[80vh] items-center">
          <div>
            <p className="text-blue-600 font-semibold">👋 Hello, I'm</p>

            <h1>{profile.name}</h1>

            <h2>{profile.title}</h2>

            <p>{profile.description}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
