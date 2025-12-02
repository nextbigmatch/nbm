import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { DepthGrid } from "../components/depth-grid";
import { Icon3DConversion, IconReels, IconAds, IconDepth, IconVR, IconFilm } from "../components/icons/nbm-icons";
import servicesHeroImage from "figma:asset/b1ff9cf36efa1fb48b24f5d3fce025d0f486fef3.png";
import depthVisualizationImage from "figma:asset/5391d68f6bbf2c71ddfad14628819a0c21d32c2d.png";

export function ServicesMain() {
  const services = [
    {
      icon: Icon3DConversion,
      title: "3D Movie Conversion",
      description: "Feature-length cinematic depth conversion with frame-by-frame precision. Perfect for theatrical releases and premium streaming.",
      link: "/services/movie-conversion",
      features: ["Feature Films", "High-End Quality", "Theatrical Grade"]
    },
    {
      icon: IconFilm,
      title: "3D Short Films",
      description: "1-6 minute short films changed for the better into immersive 3D experiences with artistic depth grading.",
      link: "/services/short-films",
      features: ["1-6 Minutes", "Festival Ready", "Artistic Depth"]
    },
    {
      icon: IconReels,
      title: "3D Reels & Vertical Content",
      description: "Transform Instagram Reels, YouTube Shorts, and TikTok content into immersive vertical experiences.",
      link: "/services/reels",
      features: ["Vertical Format", "Social Media", "Quick Turnaround"]
    },
    {
      icon: IconAds,
      title: "Immersive Advertising",
      description: "Brand films and commercials with spatial depth that capture attention and drive engagement.",
      link: "/services/advertising",
      features: ["Brand Films", "Commercials", "High Impact"]
    },
    {
      icon: IconDepth,
      title: "Depth Compositing & Cleanup",
      description: "Professional stereo cleanup, depth refinement, and technical quality assurance for any 3D project.",
      link: "/services/depth-compositing",
      features: ["Stereo Cleanup", "Quality Assurance", "Technical Excellence"]
    },
    {
      icon: IconVR,
      title: "VR / Vision Pro Content Prep",
      description: "Content optimization and preparation for Apple Vision Pro, Meta Quest, and modern immersive platforms.",
      link: "/services/vr-prep",
      features: ["Vision Pro Ready", "VR Made Smoother", "Prepared for What's Coming"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <DepthGrid variant="vertical" opacity={0.03} />
          
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden -mx-6 -my-6">
            <img
              src={depthVisualizationImage}
              alt="3D immersive production services"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.4) contrast(1.3)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60" />
          </div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0074C7]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 py-16">
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              Premium 3D Conversion &<br />Immersive Production Services
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Truly exceptional depth, stereo, and immersive workflows for every format and platform.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link}>
                <div className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all group h-full flex flex-col card-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0074C7]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex-1">
                    <service.icon className="mb-6 group-hover:scale-110 transition-transform" size={48} />
                    <h3 className="text-2xl text-white mb-4 heading-subtitle">{service.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-6 border-t border-[#0074C7]/20">
                    <span className="text-[#0074C7] text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
              Not sure which service you need?
            </h2>
            <p className="text-white/50 mb-8">
              Let's discuss your project and find the perfect solution.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 glow-blue-md"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}