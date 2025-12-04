import svgPaths from "../imports/svg-u7tjdmey6y";

interface NBMDecorativeElementProps {
  variant?: "top-right" | "bottom-left" | "center";
  opacity?: number;
  color?: string;
}

export function NBMDecorativeElement({ 
  variant = "top-right", 
  opacity = 0.03,
  color = "#1172BA"
}: NBMDecorativeElementProps) {
  const positionClasses = {
    "top-right": "absolute top-0 right-0 w-[400px] h-[400px] -translate-y-1/4 translate-x-1/4",
    "bottom-left": "absolute bottom-0 left-0 w-[400px] h-[400px] translate-y-1/4 -translate-x-1/4",
    "center": "absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2"
  };

  return (
    <div className={`${positionClasses[variant]} pointer-events-none`}>
      <svg 
        className="block size-full" 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 176 167"
        style={{ opacity }}
      >
        <g filter="blur(40px)">
          <path d={svgPaths.p7d45c00} fill={color} />
          <path d={svgPaths.p31d434c0} fill={color} />
          <path d={svgPaths.p3d1ea380} fill={color} />
        </g>
      </svg>
    </div>
  );
}

// Animated logo particles for hero sections
export function NBMLogoParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating N */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.02] animate-float-slow">
        <svg viewBox="0 0 176 167" fill="none">
          <path d={svgPaths.p7d45c00} fill="#1172BA" />
        </svg>
      </div>
      
      {/* Floating B */}
      <div className="absolute top-2/3 right-1/3 w-40 h-40 opacity-[0.03] animate-float-medium">
        <svg viewBox="0 0 176 167" fill="none">
          <path d={svgPaths.p31d434c0} fill="#1172BA" />
        </svg>
      </div>
      
      {/* Floating M */}
      <div className="absolute bottom-1/4 right-1/4 w-36 h-36 opacity-[0.02] animate-float-fast">
        <svg viewBox="0 0 176 167" fill="none">
          <path d={svgPaths.p3d1ea380} fill="#1172BA" />
        </svg>
      </div>
    </div>
  );
}