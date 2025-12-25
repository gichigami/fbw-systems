import Card from './Card';

interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  benefits: string[];
  technicalDetails?: string;
}

export default function ProjectCard({
  title,
  challenge,
  solution,
  benefits,
  technicalDetails,
}: ProjectCardProps) {
  return (
    <Card hover className="h-full">
      <h3 className="mb-4 text-[var(--color-primary)]">{title}</h3>
      
      <div className="mb-6">
        <h5 className="mb-2 font-semibold">Challenge</h5>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          {challenge}
        </p>
      </div>
      
      <div className="mb-6">
        <h5 className="mb-2 font-semibold">Solution</h5>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
          {solution}
        </p>
      </div>
      
      <div className="mb-6">
        <h5 className="mb-2 font-semibold">Benefits</h5>
        <ul className="space-y-2 text-sm">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-[var(--color-text-muted)]">
              <svg
                className="w-5 h-5 text-[var(--color-success)] mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {technicalDetails && (
        <div className="pt-4 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-secondary)]">
            <strong>Technical:</strong> {technicalDetails}
          </p>
        </div>
      )}
    </Card>
  );
}

