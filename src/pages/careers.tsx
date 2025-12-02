import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles, Eye, Code, Users } from "lucide-react";
import { NBMGlass } from "../components/nbm-glass";
import careersHeroImage from "figma:asset/37ff1a11913de662507b41837b4fbc67658ace29.png";

export function Careers() {
  const positions = [
    {
      icon: Sparkles,
      title: "Senior Depth Artist",
      type: "Full-Time",
      location: "Remote / Hybrid",
      description: "Lead depth conversion projects with artistic vision and technical excellence. 3+ years experience in stereo conversion required."
    },
    {
      icon: Eye,
      title: "Stereo Compositor",
      type: "Full-Time",
      location: "Remote",
      description: "Handle stereo cleanup, alignment, and quality control. Experience with Nuke and stereo workflows preferred."
    },
    {
      icon: Code,
      title: "Pipeline Developer",
      type: "Full-Time",
      location: "Remote",
      description: "Build and maintain conversion pipeline tools. Python, C++, and VFX pipeline experience required."
    },
    {
      icon: Users,
      title: "Project Manager",
      type: "Full-Time",
      location: "Hybrid",
      description: "Manage client relationships and production timelines. VFX/post-production project management experience required."
    }
  ];

  const benefits = [
    "Competitive salary + equity options",
    "Fully remote or hybrid work",
    "Health, dental, and vision insurance",
    "Professional development budget",
    "Latest hardware and software",
    "Flexible hours",
    "Unlimited PTO",
    "401(k) matching"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0074C7]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              Join <NBMGlass size="lg" />
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Build the future of immersive storytelling with passionate artists and technologists
            </p>
            
            {/* Careers Hero Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              <img
                src={careersHeroImage}
                alt="Career opportunity and growth"
                className="w-full h-full object-cover opacity-60"
                style={{ 
                  filter: 'brightness(1.8) contrast(1.3)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-6 heading-title">Why Work at <NBMGlass size="sm" /></h2>
          <p className="text-white/60 leading-relaxed max-w-3xl mx-auto">
            We're a team of artists, engineers, and storytellers pushing the boundaries of immersive content. 
            Work on fresh and innovative projects for major studios, global brands, and innovative creators. 
            Shape the future of spatial computing, Vision Pro content, and 3D storytelling.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8 text-center heading-title">Open Positions</h2>
          
          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all group card-interactive"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0074C7]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <position.icon className="w-10 h-10 text-[#0074C7] flex-shrink-0" />
                    
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-2 heading-subtitle">{position.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                          {position.location}
                        </span>
                      </div>
                      <p className="text-white/60 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-[#0074C7]/20 backdrop-blur-xl border border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 rounded-xl transition-all whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8 text-center heading-title">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-white/70">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
            Don't see the right role?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            We're always open to meeting talented people. Send us your portfolio and tell us how you'd like to contribute to the future of immersive content.
          </p>
          <a
            href="mailto:careers@nextbigmatch.com"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 rounded-full transition-all hover:scale-105"
          >
            careers@nextbigmatch.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}