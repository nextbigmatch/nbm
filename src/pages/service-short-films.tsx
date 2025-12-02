import { ServiceTemplate } from "../components/service-template";
import { Video } from "lucide-react";
import shortFilmsHeroImage from "figma:asset/22385537270528762a543a08479c74af9126d5c9.png";
import cinematicLightingImage from "figma:asset/b1ff9cf36efa1fb48b24f5d3fce025d0f486fef3.png";
import { motion } from "motion/react";

export function ServiceShortFilms() {
  return (
    <ServiceTemplate
      icon={Video}
      title="3D Short Films"
      subtitle="1-6 minute short films changed for the better into immersive 3D experiences"
      description="Perfect for festival submissions, art installations, and premium streaming platforms. We bring depth and dimension to short-form storytelling, ensuring every frame improves and refines the narrative without overwhelming the director's vision. Ideal for indie filmmakers, students, and experimental projects."
      heroBackgroundImage={shortFilmsHeroImage}
      features={[
        "1-6 minute runtime",
        "Festival-ready quality",
        "Artistic depth grading",
        "Fast turnaround (1-3 weeks)",
        "Student-friendly pricing",
        "Creative consultation included",
        "Multiple export formats",
        "Proof-of-concept support"
      ]}
      process={[
        {
          step: "Creative Brief",
          description: "Understand your vision, festival goals, and artistic intent"
        },
        {
          step: "Depth Design",
          description: "Custom depth grading that amplifies your story's emotional core"
        },
        {
          step: "Conversion & Refinement",
          description: "High-quality conversion with attention to every detail"
        },
        {
          step: "Director Collaboration",
          description: "Iterative review and refinement based on your feedback"
        },
        {
          step: "Festival-Ready Delivery",
          description: "Optimized for projection, streaming, and VR platforms"
        }
      ]}
      deliverables={[
        "Full 3D short film",
        "Festival DCP (optional)",
        "Web/streaming versions",
        "Side-by-side 3D format",
        "Anaglyph version (optional)",
        "Behind-the-scenes depth map samples",
        "Social media clips"
      ]}
      pricing="Contact for Quote"
      beforeProcess={
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
        >
          {/* Wide Image Container */}
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={cinematicLightingImage}
              alt="Cinematic depth and lighting transformation"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(1.1) contrast(1.15)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  Transforming Atmosphere Through Depth
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  3D conversion doesn't just add dimension—it transforms the entire atmosphere of your film. Watch as flat scenes gain cinematic depth, lighting becomes more dynamic, and every layer of your composition comes alive with spatial presence that draws viewers deeper into your story.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      }
    />
  );
}