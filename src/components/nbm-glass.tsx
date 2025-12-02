import { motion } from "motion/react";

interface NBMGlassProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function NBMGlass({ size = "md", className = "" }: NBMGlassProps) {
  // Size variants
  const sizeClasses = {
    sm: "text-sm px-2 py-1 rounded-lg",
    md: "text-base px-3 py-1.5 rounded-xl",
    lg: "text-xl px-4 py-2 rounded-2xl",
    xl: "text-3xl md:text-5xl lg:text-7xl px-6 py-3 rounded-3xl",
  };

  const glowSizes = {
    sm: "blur-xl",
    md: "blur-2xl",
    lg: "blur-3xl",
    xl: "blur-[60px]",
  };

  return (
    <span className={`relative inline-block align-middle ${className}`}>
      {/* Outer glow - pulsing */}
      <motion.span
        className={`absolute inset-0 bg-[#1172BA]/20 rounded-[inherit] ${glowSizes[size]}`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "scale(1.2)" }}
      />

      {/* Glass container */}
      <span
        className={`relative inline-block backdrop-blur-[30px] bg-gradient-to-br from-white/12 via-white/8 to-white/5 border border-white/20 ${sizeClasses[size]}`}
        style={{
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.25),
            inset 0 -1px 2px rgba(0, 0, 0, 0.15),
            0 0 30px rgba(17, 114, 186, 0.25),
            0 8px 32px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Inner border highlight */}
        <span className="absolute inset-[1px] rounded-[inherit] border border-white/15 pointer-events-none" />

        {/* Animated liquid glow - moving left to right */}
        <motion.span
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black, black)",
          }}
        >
          <motion.span
            className="absolute inset-0 opacity-60"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(17, 114, 186, 0.4) 30%, rgba(17, 114, 186, 0.6) 50%, rgba(17, 114, 186, 0.4) 70%, transparent 100%)",
            }}
            animate={{
              x: ["-200%", "200%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          />
        </motion.span>

        {/* Chromatic aberration effect */}
        <span className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-30">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-transparent rounded-[inherit] blur-sm translate-x-[-1px]" />
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-pink-400/20 rounded-[inherit] blur-sm translate-x-[1px]" />
        </span>

        {/* Specular highlight - top left */}
        <span
          className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px] pointer-events-none"
        />

        {/* Specular reflection - VisionOS style */}
        <motion.span
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-40"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
          }}
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient mesh texture */}
        <span
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(17, 114, 186, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(30, 136, 229, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        {/* NBM™ Text */}
        <span className="relative inline-block" style={{ 
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility'
        }}>
          {/* Main text with gradient - CRISP */}
          <span className="relative bg-gradient-to-r from-[#1172BA] via-[#1E88E5] to-[#42A5F5] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(17,114,186,0.4)]" style={{
            WebkitFontSmoothing: 'antialiased',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            fontWeight: 'bold',
            fontFamily: 'Afacad Flux, sans-serif',
          }}>
            NBM™
          </span>
        </span>

        {/* Noise texture overlay for realism */}
        <span
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Bottom rim light */}
        <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#1172BA]/40 to-transparent blur-sm pointer-events-none" />
      </span>

      {/* Additional outer glow layer - animated sweep */}
      <motion.span
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(17, 114, 186, 0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}