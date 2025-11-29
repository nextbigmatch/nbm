import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ResponsiveScale from "./ResponsiveScale";
import svgPaths from "../imports/svg-fkun3ltbny";

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    // Change loading text progression
    const timer1 = setTimeout(() => setLoadingText("Loading Environment..."), 400);
    const timer2 = setTimeout(() => setLoadingText("Entering Immersive Mode..."), 900);
    const timer3 = setTimeout(() => onComplete(), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 1920 - 960,
    y: Math.random() * 1080 - 540,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 0.5,
  }));

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(17, 114, 186, 0.15) 0%, rgba(0, 0, 0, 1) 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Soft Glow Layer */}
      <motion.div
        className="absolute"
        style={{
          width: '800px',
          height: '800px',
          left: '50%',
          top: '50%',
          marginLeft: '-400px',
          marginTop: '-400px',
          background: 'radial-gradient(circle, rgba(17, 114, 186, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <ResponsiveScale baseWidth={1920} baseHeight={1080}>
        <div
          className="relative flex items-center justify-center"
          style={{
            width: '1920px',
            height: '1080px',
          }}
        >
          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: `${particle.x}px`,
                marginTop: `${particle.y}px`,
                width: '4px',
                height: '4px',
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [-50, 50],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Centered Unit: Logo + Text + Progress Bar */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Central NBM Logo with Rings */}
            <motion.div
              className="relative"
              style={{
                width: '200px',
                height: '200px',
                marginLeft: '-100px',
                marginTop: '-100px',
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, 2, -2, 0] }}
              transition={{
                scale: { duration: 1.2, ease: "easeOut" },
                opacity: { duration: 0.8, ease: "easeOut" },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Outer Glowing Ring */}
              <motion.div
                className="absolute"
                style={{
                  left: '-30px',
                  top: '-30px',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  border: '3px solid rgba(17, 114, 186, 0.4)',
                  boxShadow: '0 0 40px rgba(17, 114, 186, 0.8), 0 0 80px rgba(17, 114, 186, 0.4), inset 0 0 40px rgba(17, 114, 186, 0.2)',
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Middle Ring */}
              <motion.div
                className="absolute"
                style={{
                  left: '-20px',
                  top: '-20px',
                  width: '240px',
                  height: '240px',
                  borderRadius: '50%',
                  border: '2px solid rgba(17, 114, 186, 0.5)',
                  boxShadow: '0 0 30px rgba(17, 114, 186, 0.6)',
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute"
                style={{
                  left: '-10px',
                  top: '-10px',
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  border: '2px solid rgba(17, 114, 186, 0.6)',
                  boxShadow: '0 0 20px rgba(17, 114, 186, 0.7)',
                }}
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />

              {/* NBM Logo */}
              <motion.div
                className="relative"
                style={{ width: '200px', height: '200px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 128 128"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(17, 114, 186, 0.6))',
                  }}
                >
                  <circle cx="64" cy="64" fill="white" r="64" />
                </svg>
                <div className="absolute inset-[25%_15%_25%_15%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 114 50"
                  >
                    <g>
                      <path d={svgPaths.p2647f500} fill="#1172BA" />
                      <path d={svgPaths.p3c27a600} fill="#1172BA" />
                      <path d={svgPaths.p3cec2880} fill="#1172BA" />
                    </g>
                  </svg>
                </div>
              </motion.div>

              {/* Bloom Glow Effect */}
              <motion.div
                className="absolute"
                style={{
                  left: '-50px',
                  top: '-50px',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(17, 114, 186, 0.4) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 0.8, 0.6], scale: [0.8, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              style={{
                position: 'absolute',
                left: '0',
                top: '180px',
                width: '400px',
                marginLeft: '-200px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.p
                key={loadingText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '18px',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                }}
              >
                {loadingText}
              </motion.p>
            </motion.div>

            {/* Loading Progress Indicator */}
            <motion.div
              style={{
                position: 'absolute',
                left: '0',
                top: '220px',
                width: '160px',
                height: '3px',
                marginLeft: '-80px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, rgba(17, 114, 186, 0.8) 0%, rgba(17, 114, 186, 1) 100%)',
                  borderRadius: '2px',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </ResponsiveScale>
    </div>
  );
}
