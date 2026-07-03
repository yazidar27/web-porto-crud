import Container from "../Container";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-6 py-4 backdrop-blur-xl shadow-sm">
          <Logo />

          <NavLinks />

          <ResumeButton />
        </div>
      </Container>
    </header>
  );
}
