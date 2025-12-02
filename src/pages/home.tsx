import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Film, Video, Megaphone, Layers, Glasses, Play, Building2, Users, Sparkles, Building, Music, FileText } from "lucide-react";
import { DepthGrid } from "../components/depth-grid";
import { HeroParallax } from "../components/hero-parallax";
import { NBMLogoParticles } from "../components/nbm-decorative-element";
import { Icon3DConversion, IconReels, IconAds, IconDepth, IconVR } from "../components/icons/nbm-icons";
import { NBMGlass } from "../components/nbm-glass";
import { InteractiveDepthReveal } from "../components/interactive-depth-reveal";
import visionProRGB from "figma:asset/a9e8ee1f31a76ccbc2da9c27c627856adb852d13.png";
import visionProDepth from "figma:asset/f2336ff5458c5e0729750688b36d48ca23e2f7bc.png";
import teamBrandImage from "figma:asset/7e88f87d141e99cedc8502e548459f398bb6f00b.png";
import { useState, useRef } from "react";

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setIsHovering(true);
  };

  const handleHeroMouseLeave = () => {
    setIsHovering(false);
  };

  const services = [
    {
      icon: Icon3DConversion,
      title: "3D Movie Conversion",
      description: "Feature-length cinematic depth conversion with frame-by-frame precision",
      link: "/services/movie-conversion"
    },
    {
      icon: IconReels,
      title: "3D Reels & Vertical Content",
      description: "Transform short-form content into immersive experiences",
      link: "/services/reels"
    },
    {
      icon: IconAds,
      title: "Immersive Advertising",
      description: "Brand films that stand out with spatial depth",
      link: "/services/advertising"
    },
    {
      icon: IconDepth,
      title: "Depth Compositing",
      description: "Professional stereo cleanup and depth refinement",
      link: "/services/depth-compositing"
    },
    {
      icon: IconVR,
      title: "VR / Vision Pro Optimization",
      description: "Content prepared for modern immersive platforms",
      link: "/services/vr-prep"
    }
  ];

  const industries = [
    { icon: Film, title: "Film Studios", link: "/industries/film-studios" },
    { icon: Play, title: "OTT Platforms", link: "/industries/ott" },
    { icon: Users, title: "Creators", link: "/industries/creators" },
    { icon: Sparkles, title: "Agencies", link: "/industries/agencies" },
    { icon: Music, title: "Music Labels", link: "/industries/music-labels" },
    { icon: FileText, title: "Documentaries", link: "/industries/documentaries" }
  ];

  const whyPoints = [
    {
      title: "14 Years of Excellence",
      description: "A step ahead of the rest in depth conversion and stereo expertise"
    },
    {
      title: "Frame-Perfect Quality",
      description: "Every frame treated with precision and artistic care"
    },
    {
      title: "Scalable Solutions",
      description: "From 30-second reels to 2-hour feature films"
    },
    {
      title: "Vision Pro Ready",
      description: "Content made to work smoother for Apple Vision Pro and future platforms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Interactive Vision Pro RGB/Depth Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="relative w-full h-full">
            {/* Base RGB Image (Always Visible) */}
            <img
              src={visionProRGB}
              alt="RGB view"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Depth Image (Revealed on Hover) */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-300"
              style={{
                opacity: isHovering ? 1 : 0,
                maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 90%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 90%, transparent 100%)`,
              }}
            >
              <img
                src={visionProDepth}
                alt="Depth map"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.2)'
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        
        {/* Depth grid background */}
        <DepthGrid variant="diagonal" opacity={0.04} />
        {/* Floating logo particles */}
        <NBMLogoParticles />
        
        <HeroParallax>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-6xl relative z-10"
          >
            {/* Soft blue glow behind hero text */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1172BA]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl text-white mb-6 heading-display">
                The world is not flat.
                <br />
                It's immersive.
                <br />
                It's <NBMGlass size="xl" />.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto">
                Premium 3D Conversion & Immersive Content Production
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#1172BA]/40 text-white hover:bg-[#1172BA]/20 hover:border-[#1172BA]/60 rounded-full transition-all hover:scale-105 cta-glow"
                >
                  Start a Project
                </Link>
                <Link
                  to="/partnership"
                  className="px-8 py-4 bg-[#1172BA]/10 backdrop-blur-xl border-2 border-[#1172BA]/40 text-white hover:bg-[#1172BA]/20 hover:border-[#1172BA]/60 rounded-full transition-all hover:scale-105 cta-glow"
                >
                  Partnership Program
                </Link>
              </div>
            </div>
          </motion.div>
        </HeroParallax>
      </section>

      {/* What We Do */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6 heading-title">What We Do</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Truly exceptional depth, stereo, and immersive workflows for every format
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <div className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all group h-full card-interactive">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0074C7]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <service.icon className="mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <h3 className="text-xl text-white mb-3 heading-subtitle">{service.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT'S NBM - Brand Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden relative"
          >
            {/* Soft glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1172BA]/10 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Content Grid */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-12 md:p-16">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl text-white mb-6 heading-title">
                    IT'S <NBMGlass size="lg" />
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    14 years of depth expertise. A team dedicated to immersive storytelling. One vision: to bring dimension back into visual content.
                  </p>
                  <p className="text-white/60 leading-relaxed mb-8">
                    From feature films to creator content, from Hollywood studios to independent artists — we've been there, converting frame by frame, pushing the boundaries of what's possible in 3D and spatial video.
                  </p>
                  <Link
                    to="/about"
                    className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#1172BA]/40 text-white hover:bg-[#1172BA]/20 hover:border-[#1172BA]/60 rounded-full transition-all hover:scale-105 cta-glow"
                  >
                    Our Story
                  </Link>
                </motion.div>
              </div>

              {/* Brand Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={teamBrandImage}
                    alt="IT'S NBM - The Team"
                    className="w-full h-auto"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6 heading-title">Who We Work With</h2>
            <p className="text-xl text-white/50">
              Trusted by leading studios, platforms, and creators worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={industry.link}>
                  <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all text-center group card-interactive-sm">
                    <industry.icon className="w-8 h-8 text-[#0074C7] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-white/70 text-sm">{industry.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NBM */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6 heading-title">Why <NBMGlass size="lg" /></h2>
            <p className="text-xl text-white/50">
              The trusted choice for premium immersive content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all card-interactive"
              >
                <h3 className="text-xl text-white mb-3 heading-subtitle">{point.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}