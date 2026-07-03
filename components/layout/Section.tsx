import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="py-24 lg:py-36">
      {children}
    </section>
  );
}
