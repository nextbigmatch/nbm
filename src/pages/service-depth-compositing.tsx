import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Layers, CheckCircle2, AlertCircle, Settings } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import depthCompositingHeroImage from "figma:asset/ac5eb085481a230c66084a517e6a2db8e8ac5723.png";

export function ServiceDepthCompositing() {
  const services = [
    { icon: CheckCircle2, title: "Stereo Alignment Correction", desc: "Fix convergence and alignment issues" },
    { icon: AlertCircle, title: "Ghosting Elimination", desc: "Remove unwanted stereo artifacts" },
    { icon: Settings, title: "Depth Map Refinement", desc: "Enhance and optimize existing depth data" },
    { icon: Layers, title: "VFX Depth Integration", desc: "Seamlessly integrate effects into stereo" }
  ];

  const technicalFeatures = [
    "Stereo alignment correction",
    "Ghosting elimination",
    "Depth map refinement",
    "Convergence optimization",
    "VFX depth integration",
    "Technical QA services",
    "Format conversion",
    "Archive restoration"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Technical Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-10 mb-12"
        >
          <div className="flex items-start gap-6">
            <Layers className="w-16 h-16 text-[#0074C7] flex-shrink-0" />
            <div>
              <h1 className="text-4xl md:text-5xl text-white mb-3 heading-display">
                Depth Compositing & Stereo Cleanup
              </h1>
              <p className="text-xl text-white/70 mb-4">
                Professional stereo refinement and technical quality assurance
              </p>
              <p className="text-white/60 leading-relaxed">
                Already have 3D content but need expert cleanup, refinement, or technical QA? Our depth compositing and stereo cleanup services ensure your content meets the highest technical and artistic standards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image - Full Width Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16 h-[450px]"
        >
          <img
            src={depthCompositingHeroImage}
            alt="Depth Compositing & Stereo Cleanup"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(2.0) contrast(1.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                Technical Excellence in Every Frame
              </h2>
              <p className="text-white/80 text-lg">
                From fixing stereo issues to preparing content for theatrical distribution, our technical team ensures flawless playback across all platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid - 4 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all"
            >
              <service.icon className="w-10 h-10 text-[#0074C7] mb-4" />
              <h3 className="text-white text-lg mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Features & Secondary Image - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl text-white mb-6 heading-title">Technical Capabilities</h2>
            <div className="space-y-3">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759647323656-8b6de2c839fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0JTIwcHJvZHVjdGlvbiUyMGVkaXRpbmclMjBzdWl0ZXxlbnwxfHx8fDE3NjQ1Njk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Post production editing suite"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>
        </div>

        {/* Process - List Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title">Technical Workflow</h2>
          <div className="space-y-6">
            {[
              { step: "Technical Analysis", desc: "Comprehensive review of existing 3D content and issues" },
              { step: "Issue Identification", desc: "Detailed breakdown of stereo problems and recommended fixes" },
              { step: "Cleanup & Refinement", desc: "Frame-by-frame correction of alignment, ghosting, and depth issues" },
              { step: "Quality Verification", desc: "Multi-stage QC including automated and manual review" },
              { step: "Final Delivery", desc: "Corrected masters with technical documentation" }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-4 bg-white/5 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-2">{item.step}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & Pricing - Bottom Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 heading-title">Deliverables Package</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Cleaned stereo masters",
                "Before/after comparison",
                "Technical QA reports",
                "Depth map revisions",
                "Alignment documentation",
                "Format conversions",
                "Archive-ready files",
                "Issue resolution notes"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#0074C7] flex-shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-white mb-4 heading-title">Pricing</h3>
              <div className="mb-6">
                <p className="text-3xl text-white mb-2">Custom Quote</p>
                <p className="text-white/60 text-sm">
                  Pricing based on content length, issue complexity, and required deliverables.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="w-full block text-center px-6 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Request Technical Assessment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
