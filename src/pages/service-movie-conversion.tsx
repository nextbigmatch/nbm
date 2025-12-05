import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Film, Check } from "lucide-react";
import movieConversionHeroImage from "figma:asset/4403335c636840020825fc8bdaea8738c0bbc259.png";
import theaterAudienceImage from "figma:asset/8944c83c511fd9244ed3d36c0a863abb0a40bfc2.png";

export function ServiceMovieConversion() {
  const features = [
    "Frame-by-frame depth analysis",
    "Theatrical-grade quality",
    "Director-approved workflows",
    "Full-length features (60-180 min)",
    "Multiple output formats",
    "Quality assurance at every stage",
    "Stereo cleanup included",
    "Archive-ready deliverables"
  ];

  const process = [
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
  ];

  const deliverables = [
    "Full 3D feature film",
    "Theatrical DCP (if needed)",
    "Streaming-ready masters",
    "Multiple resolution outputs",
    "Stereo alignment reports",
    "Quality assurance documentation",
    "Archival-grade files"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cinematic Hero with Full-Width Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <img
              src={movieConversionHeroImage}
              alt="3D Movie Conversion background"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(2.0) contrast(1.4)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/70" />
          </div>
          
          <div className="relative z-10 px-12 py-20 md:px-20 md:py-28">
            <Film className="w-20 h-20 text-[#0074C7] mb-6" />
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display max-w-4xl">
              3D Movie Conversion
            </h1>
            <p className="text-2xl text-white/70 max-w-3xl mb-8">
              Feature-length cinematic depth conversion with frame-by-frame precision
            </p>
            <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
              Transform your feature films into premium 3D experiences with our conversion process that's a step ahead of the rest. With 14 years of expertise, we deliver theatrical-grade depth that improves and refines storytelling while maintaining the director's original vision.
            </p>
          </div>
        </motion.div>

        {/* Immersive Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
            <img
              src={theaterAudienceImage}
              alt="Immersive theatrical 3D experience"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(1.8) contrast(1.4)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 sm:p-8 md:p-12 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 heading-title">
                  The Ultimate Theatrical Experience
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  Our 3D conversion brings audiences deeper into the story, creating an immersive cinematic experience that transforms passive viewing into emotional engagement. Every frame is crafted to enhance depth, dimension, and visual storytelling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features Grid - 4 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title">Comprehensive Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0074C7] flex-shrink-0 mt-1" />
                <p className="text-white/70">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process and Deliverables - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl text-white mb-6 heading-title">Our Process</h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1">{item.step}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Deliverables & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-3xl text-white mb-6 heading-title">What You Get</h3>
            <div className="space-y-3 mb-8">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0074C7] mt-2" />
                  <p className="text-white/70">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-6">
              <p className="text-white/50 text-sm mb-2">Investment</p>
              <p className="text-3xl text-white mb-4">Custom Quote</p>
              <p className="text-white/60 text-sm">
                Pricing varies based on film length, complexity, and delivery timeline. Contact us for a detailed estimate.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full block text-center px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}