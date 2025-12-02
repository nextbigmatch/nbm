import { ServiceTemplate } from "../components/service-template";
import { Film } from "lucide-react";
import movieConversionHeroImage from "figma:asset/4403335c636840020825fc8bdaea8738c0bbc259.png";
import theaterAudienceImage from "figma:asset/8944c83c511fd9244ed3d36c0a863abb0a40bfc2.png";
import { motion } from "motion/react";

export function ServiceMovieConversion() {
  return (
    <ServiceTemplate
      icon={Film}
      title="3D Movie Conversion"
      subtitle="Feature-length cinematic depth conversion with frame-by-frame precision"
      description="Transform your feature films into premium 3D experiences with our conversion process that's a step ahead of the rest. With 14 years of expertise, we deliver theatrical-grade depth that improves and refines storytelling while maintaining the director's original vision. Perfect for theatrical releases, premium streaming, and archival preservation."
      heroBackgroundImage={movieConversionHeroImage}
      features={[
        "Frame-by-frame depth analysis",
        "Theatrical-grade quality",
        "Director-approved workflows",
        "Full-length features (60-180 min)",
        "Multiple output formats",
        "Quality assurance at every stage",
        "Stereo cleanup included",
        "Archive-ready deliverables"
      ]}
      process={[
        {
          step: "Analysis & Planning",
          description: "Deep dive into your film's visual language, shot complexity, and creative goals"
        },
        {
          step: "Depth Grading",
          description: "Artistic depth mapping that enhances narrative and emotional beats"
        },
        {
          step: "Stereo Conversion",
          description: "Frame-by-frame conversion with precision rotoscoping and depth refinement"
        },
        {
          step: "Quality Control",
          description: "Multi-stage QC including stereo alignment, ghosting elimination, and director review"
        },
        {
          step: "Final Delivery",
          description: "Multiple formats delivered: theatrical DCP, streaming masters, and archival files"
        }
      ]}
      deliverables={[
        "Full 3D feature film",
        "Theatrical DCP (if needed)",
        "Streaming-ready masters",
        "Multiple resolution outputs",
        "Stereo alignment reports",
        "Quality assurance documentation",
        "Archival-grade files"
      ]}
      pricing="Custom Quote"
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
              src={theaterAudienceImage}
              alt="Immersive theatrical 3D experience"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(2.2) contrast(1.5)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  The Ultimate Theatrical Experience
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Our 3D conversion brings audiences deeper into the story, creating an immersive cinematic experience that transforms passive viewing into emotional engagement. Every frame is crafted to enhance depth, dimension, and visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      }
    />
  );
}