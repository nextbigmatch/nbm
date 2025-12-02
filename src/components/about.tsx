import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        style={{ y, opacity }}
        className="max-w-4xl"
      >
        {/* Glassmorphic panel */}
        <div className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl text-white mb-8 tracking-tight">
                About <span className="text-blue-300 font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>NBM™</span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-blue-100/60">
                <p>
                  We're building the bridge between imagination and reality.
                </p>
                <p>
                  A new medium. A new way to experience what matters.
                </p>
                <p>
                  Beyond screens. Beyond boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}