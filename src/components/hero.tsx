import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl tracking-tight text-white mb-8">
            The world is not flat.
            <br />
            It's immersive.
            <br />
            It's <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>NBM™</span>.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-blue-200/70 mb-12"
        >
          Launching soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Notified
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}