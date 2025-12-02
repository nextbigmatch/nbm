import { IndustryTemplate } from "../components/industry-template";
import { Users } from "lucide-react";

export function IndustryCreators() {
  return (
    <IndustryTemplate
      icon={Users}
      title="Creators & Influencers"
      subtitle="Stand out with immersive reels and modern social content"
      description="Social media creators and influencers can differentiate their content with stunning 3D reels and shorts. NBM™ changes your Instagram Reels, YouTube Shorts, and TikTok videos for the better into immersive experiences that capture attention and drive engagement in crowded feeds."
      imageUrl="https://images.unsplash.com/photo-1758273238952-9f9521504c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGluZmx1ZW5jZXIlMjBzZXR1cHxlbnwxfHx8fDE3NjQ1Njk4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "Instagram Reels (3D vertical)",
        "YouTube Shorts immersive",
        "TikTok standout content",
        "Vision Pro creator content",
        "Brand collaboration reels",
        "Portfolio showcases"
      ]}
      benefits={[
        {
          title: "Creator-Friendly Pricing",
          description: "Affordable batch pricing for multiple reels, with fast turnaround times that fit your content calendar."
        },
        {
          title: "Engagement Boost",
          description: "3D content increases view time, shares, and saves—key metrics for algorithm performance."
        },
        {
          title: "Platform-Ready Delivery",
          description: "Optimized for Instagram, TikTok, YouTube, and Apple Vision Pro with platform-specific formats."
        },
        {
          title: "Creative Consultation",
          description: "We help you understand what works in 3D and how to shoot content that converts beautifully."
        }
      ]}
      caseStudy={{
        title: "Travel Creator Success",
        description: "A travel influencer converted 10 destination reels to immersive 3D. Average view time increased 65%, saves went up 3x, and brand partnership inquiries doubled within two months."
      }}
    />
  );
}