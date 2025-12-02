import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Film, Play, Users, Sparkles, Music, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import industriesHeroImage from "figma:asset/127430cfdbc21b0cb2faa182ebba2723e31834c3.png";

export function IndustriesMain() {
  const industries = [
    {
      icon: Film,
      title: "Film Studios",
      description: "Feature films, theatrical releases, and premium content for major studios and independent filmmakers.",
      link: "/industries/film-studios",
      examples: ["Feature Films", "Theatrical Distribution", "Archive Projects"]
    },
    {
      icon: Play,
      title: "OTT Platforms",
      description: "Streaming content optimization for Netflix, Apple TV+, Disney+, and emerging immersive platforms.",
      link: "/industries/ott",
      examples: ["Series & Originals", "Catalog Enhancement", "Premium Tiers"]
    },
    {
      icon: Users,
      title: "Creators & Influencers",
      description: "Stand out on social media with immersive reels, shorts, and modern vertical content.",
      link: "/industries/creators",
      examples: ["Instagram Reels", "YouTube Shorts", "TikTok Content"]
    },
    {
      icon: Sparkles,
      title: "Advertising Agencies",
      description: "High-impact brand campaigns, commercials, and experiential content that drives engagement.",
      link: "/industries/agencies",
      examples: ["TV Commercials", "Brand Films", "Product Launches"]
    },
    {
      icon: Music,
      title: "Music Labels",
      description: "Transform music videos into immersive experiences for artists, labels, and streaming platforms.",
      link: "/industries/music-labels",
      examples: ["Music Videos", "Concert Films", "Visual Albums"]
    },
    {
      icon: FileText,
      title: "Documentary Teams",
      description: "Bring educational and documentary content to life with depth that enhances storytelling.",
      link: "/industries/documentaries",
      examples: ["Nature Docs", "Educational Content", "Cultural Films"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden -mx-6 -my-6">
            <img
              src={industriesHeroImage}
              alt="Industries immersive technology"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.4) contrast(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60" />
          </div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0074C7]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 py-16">
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              Industries We Serve
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Trusted by leading studios, platforms, creators, and brands worldwide for premium immersive content.
            </p>
          </div>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={industry.link}>
                <div className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all group h-full flex flex-col card-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0074C7]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex-1">
                    <industry.icon className="w-12 h-12 text-[#0074C7] mb-6" />
                    <h3 className="text-2xl text-white mb-4 heading-subtitle">{industry.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {industry.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                    <span className="text-[#0074C7] text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
              Don't see your industry?
            </h2>
            <p className="text-white/50 mb-8">
              We work with diverse clients across entertainment, education, and technology. Let's discuss your unique needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 cta-glow"
            >
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}