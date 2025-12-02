import { IndustryTemplate } from "../components/industry-template";
import { Play } from "lucide-react";

export function IndustryOTT() {
  return (
    <IndustryTemplate
      icon={Play}
      title="OTT Platforms"
      subtitle="Immersive content for streaming services and premium video platforms"
      description="Streaming platforms are embracing spatial content as the next frontier. NBM™ helps OTT services like Netflix, Apple TV+, and Disney+ differentiate their catalogs with immersive 3D content that enhances subscriber value and engagement."
      imageUrl="https://images.unsplash.com/photo-1762340273439-53837fb95727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjB2aWRlbyUyMHBsYXRmb3JtJTIwc2NyZWVufGVufDF8fHx8MTc2NDU2OTg2NHww&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "Series & original content",
        "Catalog enhancement (back catalog 3D conversion)",
        "Premium tier exclusives",
        "Apple Vision Pro optimization",
        "Documentary series",
        "Live events & concerts"
      ]}
      benefits={[
        {
          title: "Platform Optimization",
          description: "Content delivered in formats made to work smoother for Apple TV+, Netflix 3D, Vision Pro, and emerging immersive platforms."
        },
        {
          title: "Subscriber Value",
          description: "3D content differentiates premium tiers and drives subscriber retention through exclusive immersive experiences."
        },
        {
          title: "Prepared for What's Coming Formats",
          description: "MV-HEVC encoding, side-by-side stereo, and compatibility with modern streaming specs."
        }
      ]}
      caseStudy={{
        title: "Documentary Series Enhancement",
        description: "Converted a 6-episode nature documentary series for a streaming platform's premium 3D tier. The spatial depth brought wildlife and landscapes to life, increasing viewer engagement by 40% and boosting premium subscriptions."
      }}
    />
  );
}