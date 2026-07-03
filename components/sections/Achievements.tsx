import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../shared/SectionTitle";
import AchievementCard from "../cards/AchievementCard";

import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements">
      <Container>
        <SectionTitle
          title="Achievements"
          subtitle="Awards and accomplishments throughout my journey."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} {...achievement} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
