import { motion } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import { NBMPattern } from "../components/nbm-pattern";
import { NBMGlass } from "../components/nbm-glass";
import aboutHeroImage from "figma:asset/8dba9dec9789e0da290d253a06af2a065f9f8ed8.png";

export function About() {
  const values = [
    {
      icon: Award,
      title: "14 Years of Excellence",
      description: "A step ahead of the rest in depth conversion and stereo production since 2011"
    },
    {
      icon: Eye,
      title: "Frame-Perfect Quality",
      description: "Every frame treated with artistic care and technical precision"
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "We partner with directors, creators, and brands to improve and refine their vision"
    },
    {
      icon: Target,
      title: "Prepared for What's Coming",
      description: "Leading the way in Vision Pro, VR, and modern immersive formats"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0074C7]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              About <NBMGlass size="lg" />
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Next Big Match — Where storytelling meets spatial depth
            </p>
            
            {/* About Hero Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              <img
                src={aboutHeroImage}
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-60"
                style={{ 
                  filter: 'brightness(1.8) contrast(1.3)',
                  objectPosition: 'center 40%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-10"
          >
            <h2 className="text-3xl text-white mb-4 heading-title">Our Mission</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              The mission of <NBMGlass size="sm" /> is to bring depth and dimension back into visual content. With over 14 years of experience working on films, advertising, music videos, and digital projects, we've learned that every frame holds more detail and emotion than what a flat screen can show. Our focus is to reveal that hidden depth and create visuals that feel richer, clearer, and more meaningful.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              We believe the world isn't flat, and content shouldn't be either.
            </p>
            <p className="text-white/60 leading-relaxed">
              Every story carries layers, and <NBMGlass size="sm" /> exists to bring those layers to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-10"
          >
            <h2 className="text-3xl text-white mb-4 heading-title">Our Vision</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              The vision of <NBMGlass size="sm" /> is to set a high standard for depth-focused and immersive visual production across the world. We want to support filmmakers, brands, and creators as they prepare their work for the next era of viewing.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              As spatial video, 3D displays, and devices like Apple Vision Pro change how people experience visuals, <NBMGlass size="sm" /> is building for that future — a future where content is not just watched, but truly felt.
            </p>
            <p className="text-white/60 leading-relaxed">
              One frame at a time, we move closer to that future.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-12 text-center heading-title">What Drives Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <value.icon className="w-12 h-12 text-[#0074C7] mx-auto mb-4" />
                <h3 className="text-lg text-white mb-3 heading-subtitle">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 mb-20 relative overflow-hidden"
        >
          {/* NBM Pattern Background */}
          <NBMPattern />
          
          <h2 className="text-3xl md:text-4xl text-white mb-8 text-center heading-title relative z-10">Our Story</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-white/60 leading-relaxed relative z-10">
            <p>
              <NBMGlass size="sm" /> (Next Big Match) is the result of 14 years of dedication to one craft: depth, stereo, and cinematic depth work.
            </p>
            <p>
              Before creating this brand, our team spent years working across leading film and VFX studios, contributing to a wide range of projects — from feature films and commercials to music videos, documentaries, and thousands of creator-driven videos. During this time, we learned every detail of the process: depth maps, stereo cleanup, conversion workflows, rotoscopy, and frame-by-frame corrections. These years shaped our understanding of how powerful immersive visuals can be when they're done with skill and precision.
            </p>
            <p>
              After more than a decade of building our careers and sharpening our expertise, we decided it was time to bring everything together under one vision. That vision became <NBMGlass size="sm" /> — a studio created to push immersive content forward.
            </p>
            <p>
              <NBMGlass size="sm" /> is not just a new brand; it is the combined experience, discipline, and passion of a team that has lived inside this industry for years. Our work has reached theaters, streaming platforms, VR devices, exhibitions, and millions of online viewers. Now, with new technologies like spatial video and devices such as Apple Vision Pro entering the mainstream, we are stepping into a new era of storytelling.
            </p>
            <p>
              At <NBMGlass size="sm" />, we believe the future will not be flat. It will be immersive — and we are here to help shape that future, one depth-perfect frame at a time.
            </p>
          </div>
        </motion.div>

        {/* Team Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">Join Our Team</h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            We're always looking for talented depth artists, stereo compositors, pipeline developers, and immersive storytellers who share our passion for pushing creative boundaries.
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 rounded-full transition-all hover:scale-105"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </div>
  );
}