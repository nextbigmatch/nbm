import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Megaphone, Target, Zap, Award, BarChart3 } from "lucide-react";
import advertisingHeroImage from "figma:asset/e6fc8b645ee38b28bde8f02babf336b6011047dd.png";
import cinematicLightingImage from "figma:asset/7be98251517a6b2bf470f1f432f80bae51b1f445.png";

export function IndustryAgencies() {
  const campaignTypes = [
    { icon: Megaphone, title: "TV Commercials", desc: "30s & 60s spots" },
    { icon: Target, title: "Brand Films", desc: "Hero content pieces" },
    { icon: Sparkles, title: "Product Launches", desc: "Experiential events" },
    { icon: BarChart3, title: "Social Campaigns", desc: "Multi-platform content" }
  ];

  const benefits = [
    {
      title: "Differentiate Your Campaigns",
      description: "Stand out in a saturated market with immersive 3D experiences that captivate audiences and drive brand recall. Transform ordinary commercials into unforgettable brand moments."
    },
    {
      title: "Premium Production Value",
      description: "Add a layer of sophistication and innovation to client work without the complexity of native 3D production. Enhance existing footage with depth and dimension."
    },
    {
      title: "Fast Agency Turnaround",
      description: "We understand tight deadlines. Our streamlined pipeline delivers broadcast-ready 3D content on your schedule, from pitch to final delivery."
    },
    {
      title: "White-Label Partnership",
      description: "Present our conversion work as your own. We provide seamless collaboration and confidential service for agency-client relationships."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero with Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src={advertisingHeroImage}
              alt="Advertising agency campaigns"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.5) contrast(1.25)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="p-8 max-w-4xl">
                <Sparkles className="w-16 h-16 text-[#0074C7] mb-6 mx-auto" />
                <h1 className="text-4xl md:text-6xl text-white mb-6 heading-display">
                  Advertising Agencies
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  High-impact brand campaigns and experiential content that drives engagement
                </p>
                <p className="text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Deliver next-level creative to your clients. We transform TV commercials, brand films, and product launches into immersive 3D experiences that command attention and boost campaign performance.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Campaign Types - 4 Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Perfect For Every Campaign Type</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignTypes.map((type, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#0074C7]/30 transition-all"
              >
                <type.icon className="w-10 h-10 text-[#0074C7] mb-4 mx-auto" />
                <h3 className="text-white text-lg mb-2">{type.title}</h3>
                <p className="text-white/60 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={cinematicLightingImage}
              alt="Neon-lit commercial scene with runner emerging from perfume bottle on display screen"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-12 max-w-2xl">
                <Award className="w-12 h-12 text-[#0074C7] mb-4" />
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  Award-Winning Creative Deserves Award-Winning Presentation
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Your creative vision, elevated with immersive depth. Transform campaign hero films and product showcases into unforgettable brand experiences that resonate across all touchpoints.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits - Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Agencies Trust NBM™</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#0074C7]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-3 heading-subtitle">{benefit.title}</h3>
                    <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agency Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl text-white mb-8 text-center heading-title">What We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                Broadcast-Ready Masters
              </h3>
              <p className="text-white/60 ml-4">TV, cinema, and digital formats optimized for all platforms and specifications.</p>
            </div>
            <div>
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                Client Presentation Cuts
              </h3>
              <p className="text-white/60 ml-4">Preview versions and pitch materials to wow clients before final production.</p>
            </div>
            <div>
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                Multi-Platform Outputs
              </h3>
              <p className="text-white/60 ml-4">Social, web, mobile, OOH, and experiential formats for integrated campaigns.</p>
            </div>
            <div>
              <h3 className="text-white text-xl mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                White-Label Service
              </h3>
              <p className="text-white/60 ml-4">Confidential partnership with no branding, seamless agency-client relationships.</p>
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
            Let's Create Something Unforgettable
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Partner with NBM™ to deliver immersive 3D experiences that elevate your campaigns and delight your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Become a Partner
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