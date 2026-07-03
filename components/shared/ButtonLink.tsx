import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}
