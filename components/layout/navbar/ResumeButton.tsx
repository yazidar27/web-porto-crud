import Link from "next/link";

export default function ResumeButton() {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700"
    >
      Resume
    </Link>
  );
}
