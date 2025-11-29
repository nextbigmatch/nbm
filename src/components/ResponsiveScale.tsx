import { useEffect, useState, ReactNode } from "react";

interface ResponsiveScaleProps {
  children: ReactNode;
  baseWidth?: number;
  baseHeight?: number;
}

export default function ResponsiveScale({
  children,
  baseWidth = 1920,
  baseHeight = 1080,
}: ResponsiveScaleProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate scale based on 1920×1080 base resolution
      // Scale proportionally to fit viewport while maintaining aspect ratio
      const scaleX = viewportWidth / baseWidth;
      const scaleY = viewportHeight / baseHeight;
      
      // Use the smaller scale to ensure everything fits within viewport
      // Cap at 1.0 maximum so content never appears enlarged/zoomed-in
      const calculatedScale = Math.min(scaleX, scaleY, 1.0);
      
      setScale(calculatedScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [baseWidth, baseHeight]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        transition: "transform 0.3s ease-out",
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}
