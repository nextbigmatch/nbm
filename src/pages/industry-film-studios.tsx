import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Film, Check, Award, Clock, Shield, Users } from "lucide-react";
import filmStudiosHeroImage from "figma:asset/97a0df0d5aa0b6b524df1ad78648928048cbd1aa.png";
import depthConversionImage from "figma:asset/da5b988efe337de1f542b928dffd4d7a9f7f09b9.png";

export function IndustryFilmStudios() {
  const useCases = [
    "Theatrical releases (2D to 3D)",
    "Archive restoration projects",
    "Director's cut remastering",
    "Festival submissions",
    "Premium streaming content",
    "International distribution"
  ];

  const benefits = [
    {
      icon: Award,
      title: "A Step Ahead of the Rest in Quality",
      description: "Our frame-by-frame conversion process meets the highest theatrical standards, approved by directors and studios worldwide."
    },
    {
      icon: Shield,
      title: "Scalable Pipeline",
      description: "From indie features to tentpole releases, our infrastructure handles projects of any size with consistent quality."
    },
    {
      icon: Users,
      title: "Creative Collaboration",
      description: "We work closely with directors, DPs, and creative teams to ensure depth enhances the original vision."
    },
    {
      icon: Clock,
      title: "Full-Service Delivery",
      description: "From analysis to DCP delivery, we handle every stage of the 3D conversion pipeline."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Full-Width Cinematic Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src={filmStudiosHeroImage}
              alt="Film Studios 3D Conversion"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.0) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-16 max-w-4xl">
                <Film className="w-16 h-16 text-[#0074C7] mb-6" />
                <h1 className="text-4xl md:text-6xl text-white mb-4 heading-display">
                  Film Studios
                </h1>
                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  Premium 3D conversion for theatrical releases and streaming catalog enhancement
                </p>
                <p className="text-white/60 mb-8 leading-relaxed max-w-2xl">
                  Major studios and independent filmmakers trust NBM™ for theatrical-grade 3D conversion. We bring depth and dimension to feature films, preserving the director's vision while enhancing the cinematic experience for audiences worldwide.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits - 2x2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Studios Choose NBM™</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-[#0074C7] mb-4" />
                <h3 className="text-2xl text-white mb-3 heading-subtitle">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Theatrical Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={depthConversionImage}
              alt="NBM 3D depth conversion technology"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(1.0) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-8 lg:p-12 max-w-3xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-4 heading-title">
                  NBM™ goes beyond technical conversion
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  We craft depth that feels natural, intentional, and true to the filmmaker's language. Our team blends artistic judgment with precision workflows to ensure every scene maintains emotional clarity, visual continuity, and cinematic scale.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all flex items-center gap-4"
              >
                <Check className="w-6 h-6 text-[#0074C7] flex-shrink-0" />
                <p className="text-white/80">{useCase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16 text-center"
        >
          <h2 className="text-3xl text-white mb-4 heading-title">Success Story</h2>
          <h3 className="text-xl text-[#0074C7] mb-6">Independent Feature Film Success</h3>
          <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
            We converted a 92-minute independent drama for festival distribution, delivering theatrical DCP and streaming masters. The immersive depth enhanced emotional storytelling, leading to official festival selections and distribution deals.
          </p>
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
            Ready to create something immersive?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how NBM™ can bring your film to life in 3D.
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