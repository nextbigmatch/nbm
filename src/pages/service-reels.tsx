import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Video, Smartphone, Zap, TrendingUp } from "lucide-react";
import reelsVerticalHeroImage from "figma:asset/f238175a84740fb7873c1733e2de77ca77b55b96.png";
import depthMapComparisonImage from "figma:asset/b59c7a81e8b2ffe7763f236dfd8287e88607ec08.png";

export function ServiceReels() {
  const platforms = [
    "Instagram Reels",
    "TikTok",
    "YouTube Shorts",
    "Apple Vision Pro",
    "Facebook Reels",
    "Snapchat Spotlight"
  ];

  const benefits = [
    { icon: TrendingUp, title: "Stand Out", desc: "3D content gets 2-3x more engagement" },
    { icon: Zap, title: "Fast Delivery", desc: "2-5 day turnaround" },
    { icon: Smartphone, title: "Mobile First", desc: "Optimized for vertical viewing" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile-First Hero - Vertical Emphasis */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Vertical Hero Image - Narrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] mx-auto" style={{ aspectRatio: '9/16' }}>
              <img
                src={reelsVerticalHeroImage}
                alt="3D Reels & Vertical Content"
                className="w-full h-full object-cover rounded-xl"
                style={{ filter: 'brightness(2.0) contrast(1.4)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Video className="w-12 h-12 text-[#0074C7] mb-3" />
                <p className="text-white text-lg">Optimized for 9:16</p>
              </div>
            </div>
          </motion.div>

          {/* Content - Wide */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl text-white mb-6 heading-display">
              3D Reels & Vertical Content
            </h1>
            <p className="text-2xl text-white/70 mb-6">
              Transform short-form social content into immersive vertical experiences
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Stand out on Instagram Reels, YouTube Shorts, and TikTok with immersive 3D content. Perfect for creators, brands, and influencers who want to capture attention in crowded feeds. Fast turnaround, affordable pricing, and formats made to work smoother for mobile viewing.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl text-[#0074C7] mb-1">2-5</p>
                <p className="text-white/60 text-sm">Days</p>
              </div>
              <div className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl text-[#0074C7] mb-1">9:16</p>
                <p className="text-white/60 text-sm">Format</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow self-start"
            >
              Start Creating 3D Reels
            </Link>
          </motion.div>
        </div>

        {/* Platform Support - Centered Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 text-center"
        >
          <h2 className="text-2xl text-white mb-6 heading-title">Works Everywhere</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-white/10 border border-[#0074C7]/30 rounded-full text-white/80 text-sm"
              >
                {platform}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Depth Mapping Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src={depthMapComparisonImage}
              alt="2D to Stereo 3D depth map conversion process"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'brightness(1.4) contrast(1.2)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  Advanced Depth Mapping for Vertical Content
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Our proprietary depth mapping technology analyzes every frame of your vertical content to create precise stereo 3D effects. From 2D source footage to fully dimensional experiences, we ensure your reels stand out with natural depth that captivates viewers on mobile devices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits - Icon Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#0074C7]/30 transition-all"
            >
              <benefit.icon className="w-12 h-12 text-[#0074C7] mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-white/60">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title">Fast & Simple Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-xs">1</div>
                <h3 className="text-white">Content Review</h3>
              </div>
              <p className="text-white/60 text-sm pl-9">Analyze your reel for depth potential and platform requirements</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-xs">2</div>
                <h3 className="text-white">Vertical Depth Grading</h3>
              </div>
              <p className="text-white/60 text-sm pl-9">Mobile-optimized depth that works on small screens</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-xs">3</div>
                <h3 className="text-white">Rapid Conversion</h3>
              </div>
              <p className="text-white/60 text-sm pl-9">Fast, high-quality conversion with social media specs</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-xs">4</div>
                <h3 className="text-white">Platform Testing</h3>
              </div>
              <p className="text-white/60 text-sm pl-9">Verify playback on target platforms and devices</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center text-[#0074C7] text-xs">5</div>
                <h3 className="text-white">Multi-Platform Delivery</h3>
              </div>
              <p className="text-white/60 text-sm pl-9">Optimized files for all major social platforms</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
        >
          <h2 className="text-3xl text-white mb-4 heading-title">Ready to Go Viral with 3D?</h2>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Get your 3D vertical video, platform-specific formats, and Vision Pro optimized file delivered in 2-5 days (depend upon reel length).
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Get Your Estimate
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}