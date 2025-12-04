import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Glasses, Apple, Box, Cpu } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import vrPrepHeroImage from "figma:asset/fba70702a60a0651f39f3f0c291a756b804f0311.png";

export function ServiceVRPrep() {
  const platforms = [
    { name: "Apple Vision Pro", icon: Apple, color: "#0074C7" },
    { name: "Meta Quest", icon: Box, color: "#0074C7" },
    { name: "VR Platforms", icon: Glasses, color: "#0074C7" }
  ];

  const specs = [
    "Apple Vision Pro optimization",
    "Meta Quest compatibility",
    "180° / 360° video support",
    "Spatial audio integration",
    "MV-HEVC encoding",
    "Platform-specific testing",
    "Future-proof formats",
    "Technical consultation"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Futuristic Hero - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={vrPrepHeroImage}
              alt="VR / Vision Pro Content Preparation"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(2.0) contrast(1.4)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <Glasses className="w-20 h-20 text-[#0074C7] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl text-white mb-6 heading-display">
              VR / Vision Pro Content Preparation
            </h1>
            <p className="text-2xl text-white/80 mb-6 max-w-3xl mx-auto">
              Content made to work smoother for Apple Vision Pro and modern immersive platforms
            </p>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Prepare your content for what's coming with spatial computing. We prepare and make your films, videos, and experiences work better for Apple Vision Pro, Meta Quest, and emerging immersive platforms.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#0074C7]/30 backdrop-blur-xl border-2 border-[#0074C7]/60 text-white hover:bg-[#0074C7]/40 hover:border-[#0074C7]/80 rounded-xl transition-all cta-glow"
            >
              Future-Proof Your Content
            </Link>
          </div>
        </motion.div>

        {/* Platform Support - Featured Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-[#0074C7]/40 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0074C7]/10 border border-[#0074C7]/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0074C7]/20 transition-all">
                <platform.icon className="w-8 h-8" style={{ color: platform.color }} />
              </div>
              <h3 className="text-xl text-white">{platform.name}</h3>
              <p className="text-white/60 text-sm mt-2">Optimized & Tested</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs & Image - Reversed Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image First */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[450px] rounded-2xl overflow-hidden border border-white/10 order-2 lg:order-1"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1660190366607-9b192135e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjBWUnxlbnwxfHx8fDE3NjQ1Njk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="VR headset"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl text-white mb-2">Next-Gen Viewing</h3>
              <p className="text-white/80">Prepared for the future of immersive entertainment</p>
            </div>
          </motion.div>

          {/* Specs Second */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center order-1 lg:order-2"
          >
            <Cpu className="w-12 h-12 text-[#0074C7] mb-6" />
            <h2 className="text-3xl text-white mb-6 heading-title">Technical Specifications</h2>
            <div className="space-y-3">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0074C7] mt-2" />
                  <p className="text-white/80">{spec}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process - Modern Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-4xl text-white mb-10 heading-title text-center">Optimization Pipeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Platform Planning", desc: "Determine target platforms & specs", num: "01" },
              { title: "Content Optimization", desc: "Adapt depth & resolution for VR", num: "02" },
              { title: "Encoding & Formatting", desc: "Platform-specific encoding", num: "03" },
              { title: "Device Testing", desc: "Real-world headset testing", num: "04" },
              { title: "Multi-Platform Delivery", desc: "Optimized files for each platform", num: "05" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all h-full">
                  <div className="text-[#0074C7]/40 text-4xl mb-3">{step.num}</div>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#0074C7]/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl text-white mb-8 heading-title">Complete Deliverables Package</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Vision Pro optimized files",
              "Meta Quest compatible versions",
              "MV-HEVC encoded masters",
              "Side-by-side stereo formats",
              "Spatial audio files (if needed)",
              "Platform testing reports",
              "Upload specifications",
              "Technical documentation"
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/80 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl text-white mb-4 heading-title">Ready for Spatial Computing?</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Get your content prepared for Apple Vision Pro, Meta Quest, and the future of immersive viewing.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Get Your Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}