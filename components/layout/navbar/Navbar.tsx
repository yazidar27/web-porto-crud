import Container from "../Container";
import Logo from "../Logo";

import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <NavLinks />

          <ResumeButton />
        </div>
      </Container>
    </header>
  );
}
