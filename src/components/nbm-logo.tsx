import svgPaths from "../imports/svg-u7tjdmey6y";

interface NBMLogoProps {
  className?: string;
  color?: string;
}

export function NBMLogo({ className = "", color = "#1172BA" }: NBMLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 176 167">
        <g id="NBM-Logo">
          <path d={svgPaths.p7d45c00} fill={color} />
          <path d={svgPaths.p31d434c0} fill={color} />
          <path d={svgPaths.p3d1ea380} fill={color} />
        </g>
      </svg>
    </div>
  );
}

// Extracted logo element - simplified geometric version for decorative use
export function NBMLogoMark({ className = "", color = "#1172BA" }: NBMLogoProps) {
  return (
    <svg className={className} viewBox="0 0 176 167" fill="none">
      <path d={svgPaths.p7d45c00} fill={color} opacity="0.1" />
      <path d={svgPaths.p31d434c0} fill={color} opacity="0.1" />
      <path d={svgPaths.p3d1ea380} fill={color} opacity="0.1" />
    </svg>
  );
}
