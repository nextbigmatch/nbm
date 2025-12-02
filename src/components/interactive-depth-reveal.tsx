import { useState, useRef, useEffect } from "react";

interface InteractiveDepthRevealProps {
  rgbImage: string;
  depthImage: string;
  revealRadius?: number;
}

export function InteractiveDepthReveal({ 
  rgbImage, 
  depthImage,
  revealRadius = 120 
}: InteractiveDepthRevealProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base RGB Image (Always Visible) */}
      <img
        src={rgbImage}
        alt="RGB view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Depth Image (Revealed on Hover) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 100%)`,
          transition: 'mask-position 0.15s ease-out, -webkit-mask-position 0.15s ease-out',
        }}
      >
        <img
          src={depthImage}
          alt="Depth map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Instruction hint (shows when not hovering) */}
      {!isHovering && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm backdrop-blur-md bg-white/5 px-6 py-3 rounded-full border border-white/10 transition-opacity duration-300">
          Move your mouse to reveal depth map
        </div>
      )}
    </div>
  );
}