import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumeButton() {
  return (
    <Link href="/resume.pdf">
      <Button>Resume</Button>
    </Link>
  );
}
