interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M24 37c0-8 5-12 13-13-1 8-5 13-13 13Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 37c0-8-5-12-13-13 1 8 5 13 13 13Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M24 37V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="15" r="3.2" fill="var(--ember)" />
    </svg>
  );
}
