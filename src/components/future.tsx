import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Future() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-3xl text-center"
      >
        {/* Glow behind title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-12 tracking-tight">
            The Future
          </h2>
          
          <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14">
            <div className="space-y-8 text-lg md:text-xl text-blue-100/50">
              <p className="leading-relaxed">
                What if space itself became your canvas?
              </p>
              <p className="leading-relaxed">
                What if presence wasn't limited by distance?
              </p>
              <p className="leading-relaxed">
                The answers are closer than you think.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
