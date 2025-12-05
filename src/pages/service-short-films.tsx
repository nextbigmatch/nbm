import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Video, Sparkles } from "lucide-react";
import shortFilmsHeroImage from "figma:asset/22385537270528762a543a08479c74af9126d5c9.png";
import cinematicLightingImage from "figma:asset/b1ff9cf36efa1fb48b24f5d3fce025d0f486fef3.png";

export function ServiceShortFilms() {
  const features = [
    { title: "1-30 minute runtime", desc: "Perfect length for festivals" },
    { title: "Festival-ready quality", desc: "DCP and streaming formats" },
    { title: "Artistic depth grading", desc: "Enhances your vision" },
    { title: "Fast turnaround", desc: "1-3 weeks typical" },
    { title: "Student-friendly pricing", desc: "Accessible rates" },
    { title: "Creative consultation", desc: "Included with every project" }
  ];

  const process = [
    { step: "Creative Brief", description: "Understand your vision, festival goals, and artistic intent" },
    { step: "Depth Design", description: "Custom depth grading that amplifies your story's emotional core" },
    { step: "Conversion & Refinement", description: "High-quality conversion with attention to every detail" },
    { step: "Director Collaboration", description: "Iterative review and refinement based on your feedback" },
    { step: "Festival-Ready Delivery", description: "Optimized for projection, streaming, and VR platforms" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Split Hero - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
          >
            <Video className="w-16 h-16 text-[#0074C7] mb-6" />
            <h1 className="text-4xl md:text-5xl text-white mb-4 heading-display">
              3D Short Films
            </h1>
            <p className="text-xl text-white/70 mb-6">
              1-30 minute short films changed for the better into immersive 3D experiences
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Perfect for festival submissions, art installations, and premium streaming platforms. We bring depth and dimension to short-form storytelling, ensuring every frame improves and refines the narrative without overwhelming the director's vision.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <img
              src={shortFilmsHeroImage}
              alt="3D Short Films"
              className="w-full h-full object-cover min-h-[400px]"
              style={{ filter: 'brightness(2.0) contrast(1.4)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </motion.div>
        </div>

        {/* Transforming Atmosphere Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
            <img
              src={cinematicLightingImage}
              alt="Cinematic depth and lighting transformation"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(1.1) contrast(1.15)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 sm:p-8 md:p-12 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 heading-title">
                  Transforming Atmosphere Through Depth
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                  3D conversion doesn't just add dimension—it transforms the entire atmosphere of your film. Watch as flat scenes gain cinematic depth, lighting becomes more dynamic, and every layer of your composition comes alive with spatial presence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards - 2x3 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Why Choose Our Short Film Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all"
              >
                <Sparkles className="w-8 h-8 text-[#0074C7] mb-3" />
                <h3 className="text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process - Horizontal Timeline Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-4xl text-white mb-10 heading-title">From Vision to Reality</h2>
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#0074C7] to-[#0074C7]/50 flex items-center justify-center text-white text-sm">
                  {index + 1}
                </div>
                {index < process.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-[#0074C7]/40 to-transparent" />
                )}
                <div className="pb-6">
                  <h3 className="text-white text-xl mb-2">{item.step}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & Pricing - Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl text-white mb-6 heading-title">Ready to Transform Your Short Film?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Receive your complete 3D short film package including festival DCP, web/streaming versions, side-by-side 3D format, and social media clips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-white/50 text-sm">Pricing</p>
              <p className="text-white text-xl">Contact for Quote</p>
            </div>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-white/50 text-sm">Timeline</p>
              <p className="text-white text-xl">1-10 Weeks</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow text-lg"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
}