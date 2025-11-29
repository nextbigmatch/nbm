import { motion, MotionValue } from "motion/react";
import ResponsiveScale from "./ResponsiveScale";
import svgPaths from "../imports/svg-fkun3ltbny";
import imgAppIcon from "figma:asset/2f5789823de03895dfab897323beee048d491d37.png";
import imgAppIcon1 from "figma:asset/a1fa2b52a42daac77a60453ea68cdec11755c470.png";
import imgAppIcon2 from "figma:asset/879a2f145bf432143094e0ba9803b961f880315f.png";
import imgAppIcon3 from "figma:asset/0808a2ffca160f8c539e7482d8c546f6bd80080b.png";
import imgAppIcon4 from "figma:asset/b7b2ade88cff734a66481fd898c94f28bf078028.png";
import imgAppIcon5 from "figma:asset/daff3960e577513ee0c0daef7027a9dc19bae94b.png";
import imgAppIcon6 from "figma:asset/590272aa4f790f379862e0f3771da3ad07ac5fbf.png";
import imgAppIcon7 from "figma:asset/9c3afdc07a59023a04fe31938fba8ee2d886ed8a.png";
import imgAppIcon8 from "figma:asset/eaeed7de0e3faa0b5a188b0a7e1ed168c5235344.png";
import imgAppIcon9 from "figma:asset/10962c0646c03e9a4d81a86650bef97ab88688a5.png";
import imgAppIcon10 from "figma:asset/978f2f38162c8d6089ff7351fff2eb5f180d585d.png";
import imgAppIcon11 from "figma:asset/8c60af0ac26a766461d6c17883da0a99e074d243.png";

interface AppGridProps {
  onAppClick: (index: number) => void;
  selectedApp: number | null;
  midX: MotionValue<number>;
  midY: MotionValue<number>;
}

// Icon positions relative to center - NBM logo will be at (0, 0)
const appIcons = [
  // Top row (y: -260)
  { img: imgAppIcon, x: -361.5, y: -260, isNBM: false },      // Top row left
  { img: imgAppIcon3, x: -120.5, y: -260, isNBM: false },     // Top row center-left
  { img: imgAppIcon6, x: 120.5, y: -260, isNBM: false },      // Top row center-right
  { img: imgAppIcon8, x: 361.5, y: -260, isNBM: false },      // Top row right
  
  // Middle row (y: 0) - NBM logo at center (0, 0)
  { img: imgAppIcon2, x: -482, y: 0, isNBM: false },          // Middle row far left
  { img: imgAppIcon5, x: -241, y: 0, isNBM: false },          // Middle row left
  { img: null, x: 0, y: 0, isNBM: true, hasNotification: true, notificationCount: 1 },   // NBM Logo - CENTER
  { img: imgAppIcon10, x: 241, y: 0, isNBM: false },          // Middle row right
  { img: imgAppIcon11, x: 482, y: 0, isNBM: false },          // Middle row far right
  
  // Bottom row (y: 260)
  { img: imgAppIcon1, x: -361.5, y: 260, isNBM: false },      // Bottom row left
  { img: imgAppIcon4, x: -120.5, y: 260, isNBM: false },      // Bottom row center-left
  { img: imgAppIcon7, x: 120.5, y: 260, isNBM: false },       // Bottom row center-right
  { img: imgAppIcon9, x: 361.5, y: 260, isNBM: false },       // Bottom row right
];

// VisionOS animation order: center → radiating outward
// Returns the delay in milliseconds for each icon based on its distance from center
const getAnimationDelay = (index: number): number => {
  const animationOrder: { [key: number]: number } = {
    6: 0,      // Center NBM logo
    5: 1,      // Middle row left
    7: 1,      // Middle row right
    1: 2,      // Top row center-left
    2: 2,      // Top row center-right
    10: 2,     // Bottom row center-left
    11: 2,     // Bottom row center-right
    4: 3,      // Middle row far left
    8: 3,      // Middle row far right
    0: 4,      // Top row far left
    3: 4,      // Top row far right
    9: 5,      // Bottom row far left
    12: 5,     // Bottom row far right
  };
  return (animationOrder[index] || 0) * 55; // 55ms stagger between waves
};

export default function AppGrid({ onAppClick, selectedApp, midX, midY }: AppGridProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Centered Icon Menu Frame - 1920×1080 base, scales from center */}
      <ResponsiveScale baseWidth={1920} baseHeight={1080}>
        <motion.div 
          className="relative flex items-center justify-center"
          style={{ 
            width: '1920px', 
            height: '1080px',
            x: midX,
            y: midY,
            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
          }}
        >
        {/* All icons in fixed positions - VisionOS authentic animations */}
        {appIcons.map((app, index) => {
          const animDelay = getAnimationDelay(index);
          
          return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: `${app.x}px`,
              marginTop: `${app.y}px`,
              transform: 'translate(-50%, -50%)',
              filter: 'drop-shadow(0 14px 30px rgba(0, 0, 0, 0.22))',
              cursor: app.isNBM ? 'pointer' : 'default',
            }}
            initial={{ 
              opacity: 0, 
              scale: app.isNBM ? 0.85 : 0.92, 
              y: app.isNBM ? -35 : 12,
            }}
            animate={
              selectedApp === index 
                ? {
                    opacity: 0,
                    scale: 1.2,
                  }
                : app.isNBM
                ? {
                    opacity: 1,
                    scale: [1, 1.05, 1, 1.03, 1],
                    y: [0, -10, 0, -6, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
            }
            transition={{
              opacity: app.isNBM
                ? {
                    duration: 0.8,
                    delay: animDelay / 1000,
                    ease: [0.25, 0.1, 0.25, 1],
                  }
                : {
                    duration: 0.3,
                    delay: animDelay / 1000,
                    ease: [0.4, 0, 0.2, 1],
                  },
              scale: app.isNBM && selectedApp !== index
                ? {
                    duration: 4,
                    delay: (animDelay + 800) / 1000,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : app.isNBM
                ? {
                    duration: 1.2,
                    delay: animDelay / 1000,
                    ease: [0.34, 0.16, 0.22, 1],
                  }
                : {
                    duration: 0.3,
                    delay: animDelay / 1000,
                    ease: [0.4, 0, 0.2, 1],
                  },
              y: app.isNBM && selectedApp !== index
                ? {
                    duration: 4,
                    delay: (animDelay + 800) / 1000,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : app.isNBM
                ? {
                    duration: 1.2,
                    delay: animDelay / 1000,
                    ease: [0.34, 0.16, 0.22, 1],
                  }
                : {
                    duration: 0.3,
                    delay: animDelay / 1000,
                    ease: [0.4, 0, 0.2, 1],
                  },
              rotate: app.isNBM && selectedApp !== index
                ? {
                    duration: 4,
                    delay: (animDelay + 800) / 1000,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : app.isNBM
                ? {
                    duration: 1.2,
                    delay: animDelay / 1000,
                    ease: [0.34, 0.16, 0.22, 1],
                  }
                : {
                    duration: 0.3,
                    delay: animDelay / 1000,
                    ease: [0.4, 0, 0.2, 1],
                  },
              default: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            whileHover={app.isNBM ? {
              scale: 1.08,
              y: -8,
              filter: 'drop-shadow(0 20px 50px rgba(17, 114, 186, 0.4))',
            } : undefined}
            whileTap={app.isNBM ? { scale: 0.95 } : undefined}
            onClick={() => app.isNBM && onAppClick(index)}
          >
            {app.isNBM ? (
              /* NBM Logo Icon */
              <div className="relative" style={{ width: '128px', height: '128px', overflow: 'visible' }}>
                {/* Glass Glow Bloom - VisionOS Style */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-20px',
                    top: '-20px',
                    width: '168px',
                    height: '168px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(17, 114, 186, 0.15) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.12, 0.1],
                  }}
                  transition={{
                    duration: 0.15,
                    delay: (animDelay + 110) / 1000, // Appears during last 150ms
                    ease: "easeOut",
                  }}
                />
                
                {/* Breathing Glow - Hover-ready State */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-14px',
                    top: '-14px',
                    width: '156px',
                    height: '156px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(17, 114, 186, 0.12) 0%, transparent 70%)',
                    filter: 'blur(6px)',
                  }}
                  animate={{
                    scale: [1, 1.01, 1],
                    opacity: [0.08, 0.12, 0.08],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (animDelay + 260) / 1000, // After initial animation completes
                  }}
                />
                
                {/* Animated Glowing Ring - NBM Only */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-10px',
                    top: '-10px',
                    width: '148px',
                    height: '148px',
                    borderRadius: '50%',
                    border: '3px solid rgba(17, 114, 186, 0.6)',
                    boxShadow: '0 0 20px rgba(17, 114, 186, 0.8), 0 0 40px rgba(17, 114, 186, 0.4), inset 0 0 20px rgba(17, 114, 186, 0.2)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0.9, 0.6],
                    scale: [0.98, 1, 1.05, 1],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.26,
                      delay: animDelay / 1000,
                      ease: "easeOut",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: (animDelay + 260) / 1000,
                    },
                  }}
                />
                {/* Second Ring Layer for Extra Glow */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-6px',
                    top: '-6px',
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    border: '2px solid rgba(17, 114, 186, 0.3)',
                    boxShadow: '0 0 30px rgba(17, 114, 186, 0.5)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.4, 0.7, 0.4],
                    scale: [0.98, 1.02, 1, 1.02],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.26,
                      delay: animDelay / 1000,
                      ease: "easeOut",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: (animDelay + 260 + 500) / 1000,
                    },
                  }}
                />
                
                {/* Floating Bubbles - NBM Only */}
                {[...Array(8)].map((_, bubbleIndex) => {
                  const angle = (bubbleIndex / 8) * Math.PI * 2;
                  const radius = 50 + Math.random() * 20;
                  const startX = Math.cos(angle) * radius;
                  const startY = Math.sin(angle) * radius;
                  const size = 4 + Math.random() * 8;
                  const duration = 3 + Math.random() * 2;
                  const bubbleDelay = (animDelay + 300) / 1000 + Math.random() * 2;
                  
                  return (
                    <motion.div
                      key={`bubble-${bubbleIndex}`}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: `${size}px`,
                        height: `${size}px`,
                        marginLeft: `${startX - size/2}px`,
                        marginTop: `${startY - size/2}px`,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(17, 114, 186, 0.4))',
                        boxShadow: '0 0 8px rgba(17, 114, 186, 0.6), inset -2px -2px 4px rgba(255, 255, 255, 0.5)',
                        pointerEvents: 'none',
                      }}
                      initial={{ 
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: [0, 0.6, 0.8, 0],
                        scale: [0, 1, 1, 0.8],
                        y: [0, -80 - Math.random() * 40],
                        x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 30],
                      }}
                      transition={{
                        duration: duration,
                        delay: bubbleDelay,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 128 128"
                  style={{
                    filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.4))',
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
                {app.hasNotification && (
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      top: '-4px',
                      right: '-4px',
                      width: app.notificationCount && app.notificationCount > 9 ? '32px' : '28px',
                      height: '28px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #FF3B30 0%, #FF2D55 100%)',
                      border: '2.5px solid rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 4px 12px rgba(255, 59, 48, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {app.notificationCount && (
                      <span
                        style={{
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: '600',
                          lineHeight: '1',
                        }}
                      >
                        {app.notificationCount > 99 ? '99+' : app.notificationCount}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Regular Icon */
              <div className="relative" style={{ width: '128px', height: '128px', overflow: 'visible' }}>
                {/* Glass Glow Bloom - VisionOS Style */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-20px',
                    top: '-20px',
                    width: '168px',
                    height: '168px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    filter: 'blur(7px)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.15, 0.12],
                  }}
                  transition={{
                    duration: 0.15,
                    delay: (animDelay + 110) / 1000, // Appears during last 150ms
                    ease: "easeOut",
                  }}
                />
                
                {/* Breathing Glow - Hover-ready State */}
                <motion.div
                  className="absolute"
                  style={{
                    left: '-14px',
                    top: '-14px',
                    width: '156px',
                    height: '156px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                    filter: 'blur(6px)',
                  }}
                  animate={{
                    scale: [1, 1.01, 1],
                    opacity: [0.08, 0.12, 0.08],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: (animDelay + 260) / 1000, // After initial animation completes
                  }}
                />
                
                {/* Icon Image */}
                <div
                  className="rounded-full relative"
                  style={{
                    width: '128px',
                    height: '128px',
                  }}
                >
                  <img
                    alt=""
                    src={app.img}
                    className="w-full h-full rounded-full object-cover pointer-events-none"
                    style={{
                      width: '128px',
                      height: '128px',
                    }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        );
        })}

        {/* Tab Bar - Left Side */}
        <motion.div
          className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(128,128,128,0.3)] border-[1.4px] border-[rgba(255,255,255,0.4)] border-solid mix-blend-luminosity overflow-clip rounded-[34px]"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-578px',
            marginTop: '-19px',
            transform: 'translate(-50%, -50%)',
            width: '68px',
            height: '165px',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="absolute left-[14.6px] overflow-clip size-[35px] top-[95.6px]">
            <div className="absolute inset-[16.67%]">
              <div className="absolute inset-[-2.68%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 25 25"
                >
                  <g>
                    <path
                      d={svgPaths.p3caf1e80}
                      stroke="white"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    />
                    <path d={svgPaths.p1bb89900} stroke="white" strokeWidth="1.25" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[5.6px] size-[54px] top-[31.6px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 54 54"
            >
              <circle cx="27" cy="27" fill="#D9D9D9" opacity="0.33" r="27" />
            </svg>
          </div>
          <div className="absolute left-[14.6px] size-[35px] top-[39.6px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 35 35"
            >
              <g>
                <path d={svgPaths.p6414800} fill="white" />
              </g>
            </svg>
          </div>
        </motion.div>
        </motion.div>
      </ResponsiveScale>
    </div>
  );
}
