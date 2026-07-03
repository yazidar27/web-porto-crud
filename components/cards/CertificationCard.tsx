interface CertificationCardProps {
  title: string;
  issuer: string;
  issuedAt: string;
  credentialUrl: string;
}

export default function CertificationCard({
  title,
  issuer,
  issuedAt,
  credentialUrl,
}: CertificationCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2">{issuer}</p>

      <p>{issuedAt}</p>

      <a href={credentialUrl} className="mt-4 inline-block text-blue-600">
        View Credential
      </a>
    </div>
  );
}
