import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { NBMGlass } from "./nbm-glass";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface IndustryTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  useCases: string[];
  benefits: { title: string; description: string }[];
  caseStudy?: {
    title: string;
    description: string;
  };
}

export function IndustryTemplate({
  icon: Icon,
  title,
  subtitle,
  description,
  imageUrl,
  useCases,
  benefits,
  caseStudy
}: IndustryTemplateProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 md:p-20 mb-16 overflow-hidden text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0074C7]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <Icon className="w-20 h-20 text-[#0074C7] mb-6 mx-auto" />
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              {title}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              {subtitle}
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 cta-glow"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-xl text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            {description}
          </p>
          
          {/* Hero Image */}
          {imageUrl && (
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 mt-8">
              <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          )}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-white/80">{useCase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Choose <NBMGlass size="md" /></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl text-white mb-3 heading-subtitle">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Study (Optional) */}
        {caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16"
          >
            <h2 className="text-3xl text-white mb-4 text-center heading-title">Success Story</h2>
            <h3 className="text-xl text-[#0074C7] mb-6 text-center">{caseStudy.title}</h3>
            <p className="text-white/70 leading-relaxed text-center max-w-3xl mx-auto">
              {caseStudy.description}
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
            Ready to create something immersive?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how <NBMGlass size="sm" /> can bring your vision to life in 3D.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 cta-glow"
            >
              Get Started
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-[#0074C7]/40 rounded-full transition-all hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}