import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Megaphone, Target, Award, Rocket } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import advertisingHeroImage from "figma:asset/e6fc8b645ee38b28bde8f02babf336b6011047dd.png";

export function ServiceAdvertising() {
  const features = [
    "TV commercials (15-60 sec)",
    "Brand films (1-5 min)",
    "Product showcases",
    "High-impact visuals",
    "Campaign-ready delivery",
    "Multi-platform optimization",
    "Fast agency turnaround",
    "Creative collaboration"
  ];

  const impact = [
    { icon: Target, stat: "3x", label: "Higher Brand Recall" },
    { icon: Award, stat: "85%", label: "Viewer Engagement" },
    { icon: Rocket, stat: "2x", label: "Campaign Performance" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Bold Agency-Style Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={advertisingHeroImage}
              alt="Immersive Advertising background"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(2.0) contrast(1.4)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-20 max-w-4xl">
            <Megaphone className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[#0074C7] mb-4 sm:mb-5 md:mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-5 md:mb-6 heading-display">
              Immersive Advertising
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-5 sm:mb-6 md:mb-8 max-w-2xl">
              Brand films and commercials with spatial depth that capture attention
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Stand out in the crowded advertising landscape with immersive 3D commercials and brand films. Perfect for TV spots, digital campaigns, product launches, and experiential marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0074C7]/30 backdrop-blur-xl border-2 border-[#0074C7]/60 text-white hover:bg-[#0074C7]/40 hover:border-[#0074C7]/80 rounded-xl transition-all cta-glow text-center"
              >
                Start Your Campaign
              </Link>
              <Link
                to="/work"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-xl transition-all text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Impact Stats - Full Width */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {impact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#0074C7]/40 transition-all"
            >
              <item.icon className="w-12 h-12 text-[#0074C7] mx-auto mb-4" />
              <p className="text-5xl text-white mb-2">{item.stat}</p>
              <p className="text-white/60">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Section with Side Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762525984874-83d6ddf6a069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNyZWF0aXZlJTIwZGlzcGxheXxlbnwxfHx8fDE3NjQ1Njk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative advertising display"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center"
          >
            <h2 className="text-4xl text-white mb-8 heading-title">Campaign-Ready Solutions</h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                  <p className="text-white/70 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process - Horizontal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Collaborative Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Brand Alignment", desc: "Understand goals & audience" },
              { title: "Depth Strategy", desc: "Design depth grading" },
              { title: "Premium Conversion", desc: "High-end production" },
              { title: "Agency Review", desc: "Collaborative refinement" },
              { title: "Campaign Delivery", desc: "All formats ready" }
            ].map((step, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all"
              >
                <div className="text-[#0074C7] text-3xl mb-3">{index + 1}</div>
                <h3 className="text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deliverables & Pricing */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Deliverables - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 heading-title">Complete Campaign Package</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "3D commercial/brand film",
                "Broadcast-ready masters",
                "Digital/social versions",
                "Cinema/theatrical DCP",
                "Experiential/event files",
                "2D backup versions",
                "Asset library access",
                "Campaign toolkit"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0074C7] mt-2" />
                  <p className="text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing CTA - 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-white mb-4 heading-title">Get Started</h3>
              <p className="text-white/60 text-sm mb-6">Contact us to discuss your advertising project and receive a custom estimate.</p>
            </div>
            <Link
              to="/contact"
              className="w-full block text-center px-6 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Launch Your Campaign
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}