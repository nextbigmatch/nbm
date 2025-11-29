import { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "motion/react";
import IntroAnimation from "./components/IntroAnimation";
import AppGrid from "./components/AppGrid";
import AppWindow from "./components/AppWindow";
import imgBackgroundApartment from "figma:asset/37a7bb5c3cce1cb84cadd7abd5c805a1c1e605ec.png";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [appOpen, setAppOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  
  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse values with layer-specific multipliers
  const bgXRaw = useMotionValue(0);
  const bgYRaw = useMotionValue(0);
  const midXRaw = useMotionValue(0);
  const midYRaw = useMotionValue(0);
  
  // Smooth spring animations for parallax layers
  // Background: 1px movement (deepest)
  const bgX = useSpring(bgXRaw, { stiffness: 80, damping: 30 });
  const bgY = useSpring(bgYRaw, { stiffness: 80, damping: 30 });
  
  // Mid-depth: 3px movement (icons and floating cards)
  const midX = useSpring(midXRaw, { stiffness: 120, damping: 25 });
  const midY = useSpring(midYRaw, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset from center, normalized (-1 to 1)
      const offsetX = (e.clientX - centerX) / centerX;
      const offsetY = (e.clientY - centerY) / centerY;
      
      // Apply layer-specific multipliers
      // Background: 1px movement (deepest layer)
      bgXRaw.set(offsetX * 1);
      bgYRaw.set(offsetY * 1);
      
      // Mid-depth: 3px movement (icons + floating cards all together)
      midXRaw.set(offsetX * 3);
      midYRaw.set(offsetY * 3);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [bgXRaw, bgYRaw, midXRaw, midYRaw]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleAppClick = (index: number) => {
    setSelectedApp(index);
    setTimeout(() => {
      setAppOpen(true);
    }, 100);
  };

  const handleClose = () => {
    setAppOpen(false);
    setTimeout(() => {
      setSelectedApp(null);
    }, 600);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <IntroAnimation onComplete={handleIntroComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Background - Center/Fill Container, slowest parallax (deepest layer) */}
            <div 
              className="absolute inset-0"
              style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <motion.img
                alt=""
                src={imgBackgroundApartment}
                className="pointer-events-none"
                style={{
                  width: '103%',
                  height: '103%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  x: bgX,
                  y: bgY,
                }}
              />
            </div>

            {/* Content Layer - 1920×1080 base resolution, scales from center */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              <AnimatePresence mode="wait">
                {!appOpen ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <AppGrid 
                      onAppClick={handleAppClick} 
                      selectedApp={selectedApp}
                      midX={midX}
                      midY={midY}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="window"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <AppWindow 
                      onClose={handleClose}
                      midX={midX}
                      midY={midY}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
