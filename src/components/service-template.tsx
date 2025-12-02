import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  heroBackgroundImage?: string;
  features: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
  pricing?: string;
  beforeProcess?: React.ReactNode;
}

export function ServiceTemplate({
  icon: Icon,
  title,
  subtitle,
  description,
  imageUrl,
  heroBackgroundImage,
  features,
  process,
  deliverables,
  pricing,
  beforeProcess
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 mb-16 overflow-hidden"
        >
          {/* Hero Background Image */}
          {heroBackgroundImage && (
            <>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src={heroBackgroundImage}
                  alt={`${title} background`}
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'brightness(2.0) contrast(1.4)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60" />
              </div>
            </>
          )}
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0074C7]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <Icon className="w-16 h-16 text-[#0074C7] mb-6" />
            <h1 className="text-5xl md:text-6xl text-white mb-4 heading-display">
              {title}
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            {imageUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-2xl overflow-hidden border border-white/10"
              >
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </motion.div>
            )}
            
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl text-white mb-4 heading-title">Overview</h2>
              <p className="text-white/60 leading-relaxed">{description}</p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl text-white mb-6 heading-title">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0074C7] mt-2" />
                    <p className="text-white/70">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-xl text-white mb-4 heading-subtitle">Deliverables</h3>
              <div className="space-y-3">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#0074C7] mt-2" />
                    <p className="text-white/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {pricing && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-2">Starting at</p>
                  <p className="text-2xl text-white">{pricing}</p>
                </div>
              )}

              <Link
                to="/contact"
                className="mt-6 w-full block text-center px-6 py-3 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
              >
                Request Estimate
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Wide Section Before Process */}
        {beforeProcess && (
          <div className="mb-16">
            {beforeProcess}
          </div>
        )}

        {/* Process and Deliverables Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-3xl text-white mb-6 heading-title">Our Process</h2>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-white text-lg mb-1">{item.step}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}