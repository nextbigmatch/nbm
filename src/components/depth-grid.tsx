interface DepthGridProps {
  variant?: 'diagonal' | 'vertical';
  opacity?: number;
}

export function DepthGrid({ variant = 'diagonal', opacity = 0.04 }: DepthGridProps) {
  if (variant === 'vertical') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vertical-grid" x="0" y="0" width="120" height="100%" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#0A1929" strokeWidth="0.5" opacity={opacity} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vertical-grid)" />
        </svg>
      </div>
    );
  }

  // Diagonal grid
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="100" stroke="#0A1929" strokeWidth="0.5" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-grid)" />
      </svg>
    </div>
  );
}