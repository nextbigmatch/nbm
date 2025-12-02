import { ServiceTemplate } from "../components/service-template";
import { Video } from "lucide-react";
import reelsVerticalHeroImage from "figma:asset/f238175a84740fb7873c1733e2de77ca77b55b96.png";
import depthMapComparisonImage from "figma:asset/b59c7a81e8b2ffe7763f236dfd8287e88607ec08.png";
import { motion } from "motion/react";

export function ServiceReels() {
  return (
    <ServiceTemplate
      icon={Video}
      title="3D Reels & Vertical Content"
      subtitle="Transform short-form social content into immersive vertical experiences"
      description="Stand out on Instagram Reels, YouTube Shorts, and TikTok with immersive 3D content. Perfect for creators, brands, and influencers who want to capture attention in crowded feeds. Fast turnaround, affordable pricing, and formats made to work smoother for mobile viewing and modern platforms."
      heroBackgroundImage={reelsVerticalHeroImage}
      features={[
        "Vertical format optimization (9:16)",
        "15-90 second duration",
        "Social media ready",
        "Quick turnaround (2-5 days)",
        "Mobile-first depth grading",
        "Platform-specific exports",
        "Batch pricing available",
        "Creator-friendly workflow"
      ]}
      process={[
        {
          step: "Content Review",
          description: "Analyze your reel for depth potential and platform requirements"
        },
        {
          step: "Vertical Depth Grading",
          description: "Mobile-optimized depth that works on small screens"
        },
        {
          step: "Rapid Conversion",
          description: "Fast, high-quality conversion with social media specs in mind"
        },
        {
          step: "Platform Testing",
          description: "Verify playback on target platforms and devices"
        },
        {
          step: "Multi-Platform Delivery",
          description: "Optimized files for Instagram, TikTok, YouTube, and Vision Pro"
        }
      ]}
      deliverables={[
        "3D vertical video (9:16)",
        "Platform-specific formats",
        "Side-by-side 3D version",
        "2D fallback version",
        "Vision Pro optimized file",
        "Thumbnail previews",
        "Upload specifications guide"
      ]}
      pricing="From $500/reel"
      beforeProcess={
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
        >
          {/* Wide Image Container */}
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
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-12 max-w-3xl relative z-10">
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
      }
    />
  );
}