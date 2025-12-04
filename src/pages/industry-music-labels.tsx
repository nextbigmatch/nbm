import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Music, Play, Radio, Headphones, Sparkles, TrendingUp, Glasses } from "lucide-react";
import shortFilmsHeroImage from "figma:asset/172515cf6040df45cce764cdb2923ddee91c3880.png";
import immersiveExperienceImage from "figma:asset/8cf16fce32a58f7aa4a98299df01de023bd06278.png";

export function IndustryMusicLabels() {
  const videoTypes = [
    "Music Videos",
    "Concert Films & Live Performances",
    "Visual Albums & Concept Projects",
    "Behind-the-Scenes Content",
    "Artist Documentary Features",
    "Streaming Exclusives"
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Artistic Vision Enhancement",
      description: "Add depth and dimension that amplifies the emotional impact of your artist's creative vision without compromising the original aesthetic."
    },
    {
      icon: TrendingUp,
      title: "Premium Streaming Presence",
      description: "Stand out on Apple Music, Spotify, YouTube, and emerging platforms with immersive 3D content that drives engagement and streams."
    },
    {
      icon: Headphones,
      title: "Album Release Experiences",
      description: "Transform visual albums and major releases into immersive experiences that match the sonic ambition of the music."
    },
    {
      icon: Radio,
      title: "Concert & Tour Content",
      description: "Bring the energy of live performances to streaming platforms with depth that places viewers in the front row."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="relative h-full min-h-[600px]">
              <img
                src={shortFilmsHeroImage}
                alt="Neon dancer in blue and pink gradient with music visualizations, speakers, and mobile screens"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.05) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
          >
            <Music className="w-16 h-16 text-[#0074C7] mb-6" />
            <h1 className="text-4xl md:text-5xl text-white mb-4 heading-display">
              Music Labels
            </h1>
            <p className="text-xl text-white/70 mb-6">
              Transform music videos into immersive experiences for artists and fans
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              From chart-topping singles to visual albums, we help music labels and artists create immersive 3D content that resonates with modern audiences across streaming platforms, social media, and spatial computing devices.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow self-start"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </div>

        {/* Video Types - 2x3 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTypes.map((type, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all flex items-center gap-4"
              >
                <Play className="w-8 h-8 text-[#0074C7] flex-shrink-0" />
                <p className="text-white/80">{type}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Immersive Experience Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={immersiveExperienceImage}
              alt="Singer with microphone viewing immersive music video performance across multiple screens with neon blue and pink lighting"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.05) contrast(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  Music That Looks As Good As It Sounds
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Your artists deserve visuals that match their sonic ambition. We transform music videos and concert films into immersive experiences that amplify emotional connection and drive fan engagement across all platforms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Labels Choose NBM™</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all"
              >
                <feature.icon className="w-12 h-12 text-[#0074C7] mb-4" />
                <h3 className="text-2xl text-white mb-3 heading-subtitle">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl text-white mb-8 text-center heading-title">Optimized For Every Platform</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">YouTube</h3>
              <p className="text-white/60 text-sm">3D Music video</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Glasses className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Apple Vision Pro</h3>
              <p className="text-white/60 text-sm">Spatial video</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Glasses className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Meta Quest</h3>
              <p className="text-white/60 text-sm">Immersive VR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center mx-auto mb-4">
                <Glasses className="w-8 h-8 text-[#0074C7]" />
              </div>
              <h3 className="text-white mb-2">Galaxy XR</h3>
              <p className="text-white/60 text-sm">Extended reality</p>
            </div>
          </div>
        </motion.div>

        {/* Success Metric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16 text-center"
        >
          <h2 className="text-3xl text-white mb-6 heading-title">The Numbers Don't Lie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl text-[#0074C7] mb-2">2.5x</div>
              <p className="text-white/70">Average engagement increase</p>
            </div>
            <div>
              <div className="text-5xl text-[#0074C7] mb-2">78%</div>
              <p className="text-white/70">Higher completion rate</p>
            </div>
            <div>
              <div className="text-5xl text-[#0074C7] mb-2">3.2x</div>
              <p className="text-white/70">More shares & saves</p>
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
            Ready to Amplify Your Artist's Vision?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Let's create immersive music experiences that resonate with fans and stand out in a crowded market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-[#0074C7]/40 rounded-xl transition-all"
            >
              View Examples
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}