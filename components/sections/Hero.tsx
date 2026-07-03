import Container from "../layout/Container";
import Section from "../layout/Section";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="flex min-h-[80vh] items-center">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-primary font-semibold">👋 Hello, I'm</p>

              <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
                {profile.name}
              </h1>

              <h2 className="text-2xl text-muted-foreground">
                {profile.title}
              </h2>

              <p className="max-w-xl text-muted-foreground">
                {profile.description}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button>Download CV</Button>

            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <div className="flex h-96 w-96 items-center justify-center rounded-full border bg-muted">
            Your Photo
          </div>
        </div>
      </Container>
    </Section>
  );
}
