import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          title="Contact"
          subtitle="Let's build something together."
        />

        <form className="mt-8 space-y-4 max-w-xl">
          <input
            className="w-full rounded-lg border p-3"
            placeholder="Your Name"
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Your Email"
          />

          <input
            className="w-full rounded-lg border p-3"
            placeholder="Subject"
          />

          <textarea
            className="w-full rounded-lg border p-3"
            rows={6}
            placeholder="Message"
          />

          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Send Message
          </button>
        </form>
      </Container>
    </Section>
  );
}
