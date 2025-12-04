import svgPaths from "../imports/svg-y167k5n7rt";

interface NBMLogoProps {
  className?: string;
  color?: string;
}

export function NBMLogo({ className = "", color = "#1172BA" }: NBMLogoProps) {
  return (
    <div className={`relative inline-flex items-start gap-px ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 105 48">
        <g clipPath="url(#clip0_nbm_logo)">
          <path d={svgPaths.p3822df80} fill={color} />
          <path d={svgPaths.p383c7872} fill={color} />
          <path d={svgPaths.p128b5000} fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_nbm_logo">
            <rect fill="white" height="47.1199" width="104.435" />
          </clipPath>
        </defs>
      </svg>
      <span className="text-[1.2em] font-bold leading-none -mt-0.5" style={{ color }}>™</span>
    </div>
  );
}

// Extracted logo element - simplified geometric version for decorative use
export function NBMLogoMark({ className = "", color = "#1172BA" }: NBMLogoProps) {
  return (
    <svg className={className} viewBox="0 0 105 48" fill="none">
      <g clipPath="url(#clip0_nbm_logo_mark)">
        <path d={svgPaths.p3822df80} fill={color} opacity="0.1" />
        <path d={svgPaths.p383c7872} fill={color} opacity="0.1" />
        <path d={svgPaths.p128b5000} fill={color} opacity="0.1" />
      </g>
      <defs>
        <clipPath id="clip0_nbm_logo_mark">
          <rect fill="white" height="47.1199" width="104.435" />
        </clipPath>
      </defs>
    </svg>
  );
}