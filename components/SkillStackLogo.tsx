interface SkillStackLogoProps {
  className?: string;
  size?: number;
}

export function SkillStackLogo({ className = "", size = 32 }: SkillStackLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bottom layer - largest */}
      <rect
        x="4"
        y="22"
        width="24"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.6"
      />
      
      {/* Middle layer */}
      <rect
        x="6"
        y="14"
        width="20"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Top layer - smallest */}
      <rect
        x="8"
        y="6"
        width="16"
        height="6"
        rx="2"
        fill="currentColor"
        opacity="1"
      />
      
      {/* Sparkle/star accent on top */}
      <circle cx="25" cy="7" r="2" fill="currentColor" opacity="0.9" />
      <circle cx="25" cy="7" r="1" fill="white" />
    </svg>
  );
}
