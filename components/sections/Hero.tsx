import Container from "../layout/Container";
import Section from "../layout/Section";

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <div className="flex min-h-[80vh] items-center">
          <div>
            <p className="text-blue-600 font-semibold">👋 Hello, I'm</p>

            <h1 className="mt-4 text-5xl font-bold">Yazid Aqsa Raisnaldi</h1>

            <h2 className="mt-4 text-2xl text-gray-500">Frontend Developer</h2>

            <p className="mt-6 max-w-xl">
              I build modern, responsive, and user-friendly web applications
              using React, Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
