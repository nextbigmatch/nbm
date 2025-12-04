import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Users, Smartphone, TrendingUp, Instagram, Youtube, Heart, DollarSign, Eye } from "lucide-react";
import reelsVerticalHeroImage from "figma:asset/f238175a84740fb7873c1733e2de77ca77b55b96.png";
import depthMapComparisonImage from "figma:asset/3892ec924fe18f6a22485901b076d640a90c9a7f.png";

export function IndustryCreators() {
  const socialPlatforms = [
    { icon: Instagram, name: "Instagram", content: "Reels & Stories" },
    { icon: Youtube, name: "YouTube", content: "Shorts & Videos" },
    { icon: Smartphone, name: "TikTok", content: "Vertical Content" }
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Stand Out",
      description: "3D immersive content immediately captures attention in crowded social feeds, increasing view time and engagement."
    },
    {
      icon: Heart,
      title: "Higher Engagement",
      description: "Followers spend more time watching and interacting with unique, immersive content experiences."
    },
    {
      icon: TrendingUp,
      title: "Viral Potential",
      description: "Novel 3D effects drive shares and discovery, helping content reach new audiences organically."
    },
    {
      icon: DollarSign,
      title: "Monetization Edge",
      description: "Premium content quality attracts brand partnerships and sponsorship opportunities."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile-First Vertical Hero */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Vertical Phone Visual - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-full min-h-[600px]">
              <img
                src={reelsVerticalHeroImage}
                alt="Creator vertical content"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.9) contrast(1.3)' }}
              />
            </div>
          </motion.div>

          {/* Text Content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
          >
            <Users className="w-16 h-16 text-[#0074C7] mb-6" />
            <h1 className="text-4xl md:text-5xl text-white mb-4 heading-display">
              Creators & Influencers
            </h1>
            <p className="text-xl text-white/70 mb-6">
              Stand out on social media with immersive 3D content
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Transform your reels, shorts, and vertical content into immersive 3D experiences that stop the scroll. Perfect for Instagram, TikTok, and YouTube creators looking to differentiate their content and boost engagement.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                <span>Instagram Reels & Stories</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                <span>YouTube Shorts & Long-form</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#0074C7]" />
                <span>TikTok Viral Content</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow self-start"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Social Platform Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#0074C7]/30 transition-all"
            >
              <platform.icon className="w-12 h-12 text-[#0074C7] mb-4 mx-auto" />
              <h3 className="text-white text-xl mb-2">{platform.name}</h3>
              <p className="text-white/60">{platform.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Depth Comparison Visual */}
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
              alt="Gamer jumping out of mobile screen into immersive 3D space with vibrant blue and purple lighting"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.1) contrast(1.15)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl">
                <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
                  Transform Flat Content Into Immersive Experiences
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  See the difference depth makes. Our conversion technology adds cinematic dimension to your videos, making them impossible to scroll past and dramatically increasing engagement metrics.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Creators Love NBM™</h2>
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



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
            Ready to Stand Out?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Join creators who are transforming their content with NBM™ 3D immersive experiences.
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
              View Examples
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}