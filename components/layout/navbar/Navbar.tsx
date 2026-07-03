import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
