import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Play, MonitorPlay, TrendingUp, Globe, Layers, Zap } from "lucide-react";
import ottPlatformsHeroImage from "figma:asset/add36d298883cdaae70e5ef7070a3d9f5c430fc2.png";
import immersiveExperienceImage from "figma:asset/9b12d47adc899fbc8ac1e3db7a3dc86d1df18f66.png";

export function IndustryOTT() {
  const platforms = [
    { name: "Netflix", type: "Global Streaming" },
    { name: "Apple TV+", type: "Premium Content" },
    { name: "Disney+", type: "Family Entertainment" },
    { name: "Prime Video", type: "Original Series" },
    { name: "Vision Pro", type: "Spatial Computing" },
    { name: "Meta Quest", type: "VR Platforms" }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Premium Tier Differentiation",
      description: "Offer immersive 3D content as a premium subscription feature that sets your platform apart from competitors."
    },
    {
      icon: Globe,
      title: "Multi-Platform Delivery",
      description: "Optimized for web, mobile, smart TVs, and spatial computing devices including Apple Vision Pro."
    },
    {
      icon: Layers,
      title: "Catalog Enhancement",
      description: "Breathe new life into existing libraries with 3D conversion, increasing viewer engagement and retention."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Scalable pipeline designed for episodic content, feature films, and rapid release schedules."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Split Hero - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
          >
            <Play className="w-16 h-16 text-[#0074C7] mb-6" />
            <h1 className="text-4xl md:text-5xl text-white mb-4 heading-display">
              OTT Platforms
            </h1>
            <p className="text-xl text-white/70 mb-6">
              Streaming content optimization for the future of entertainment
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Transform your streaming catalog with premium 3D content. From Netflix to Apple Vision Pro, we help OTT platforms deliver immersive experiences that drive subscriber growth and reduce churn across all devices.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Partner With Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <img
              src={ottPlatformsHeroImage}
              alt="VR view of living room with streaming platforms Netflix, Hulu, Apple TV, HBO, ESPN, Disney+"
              className="w-full h-full object-cover min-h-[400px]"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </motion.div>
        </div>

        {/* Platform Support Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Upcoming 3D Stereo Leading Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#0074C7]/30 transition-all"
              >
                <MonitorPlay className="w-8 h-8 text-[#0074C7] mb-3 mx-auto" />
                <h3 className="text-white text-lg mb-1">{platform.name}</h3>
                <p className="text-white/50 text-sm">{platform.type}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full-Width Immersive Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={immersiveExperienceImage}
              alt="Immersive streaming experience"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.6) contrast(1.25)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  The Future of Streaming is Spatial
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  As spatial computing devices gain adoption, audiences crave more immersive content. Position your platform at the forefront with premium 3D experiences that keep viewers engaged longer and coming back for more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why OTT Leaders Choose NBM™</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all"
              >
                <feature.icon className="w-12 h-12 text-[#0074C7] mb-4" />
                <h3 className="text-2xl text-white mb-3 heading-subtitle">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl text-white mb-8 text-center heading-title">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Original Series</h3>
              <p className="text-white/60 text-sm">Episodic content & exclusive originals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Catalog Content</h3>
              <p className="text-white/60 text-sm">Legacy libraries & archive titles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <MonitorPlay className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Premium Tiers</h3>
              <p className="text-white/60 text-sm">Exclusive immersive content offerings</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
            Ready to Elevate Your Platform?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Let's discuss how NBM™ can transform your streaming catalog into an immersive experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Get Started
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-[#0074C7]/40 rounded-xl transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
