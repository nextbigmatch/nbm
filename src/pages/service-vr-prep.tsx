import { ServiceTemplate } from "../components/service-template";
import { Glasses } from "lucide-react";
import vrPrepHeroImage from "figma:asset/fba70702a60a0651f39f3f0c291a756b804f0311.png";

export function ServiceVRPrep() {
  return (
    <ServiceTemplate
      icon={Glasses}
      title="VR / Vision Pro Content Preparation"
      subtitle="Content made to work smoother for Apple Vision Pro and modern immersive platforms"
      description="Prepare your content for what's coming with spatial computing. We prepare and make your films, videos, and experiences work better for Apple Vision Pro, Meta Quest, and emerging immersive platforms. Whether you're adapting existing content or creating new experiences, we ensure your vision translates perfectly to the immersive medium."
      heroBackgroundImage={vrPrepHeroImage}
      imageUrl="https://images.unsplash.com/photo-1660190366607-9b192135e0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXQlMjBWUnxlbnwxfHx8fDE3NjQ1Njk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      features={[
        "Apple Vision Pro optimization",
        "Meta Quest compatibility",
        "180° / 360° video support",
        "Spatial audio integration",
        "MV-HEVC encoding",
        "Platform-specific testing",
        "Future-proof formats",
        "Technical consultation"
      ]}
      process={[
        {
          step: "Platform Planning",
          description: "Determine target platforms and technical requirements"
        },
        {
          step: "Content Optimization",
          description: "Adapt depth, resolution, and format for VR/AR viewing"
        },
        {
          step: "Encoding & Formatting",
          description: "Platform-specific encoding (MV-HEVC, side-by-side, etc.)"
        },
        {
          step: "Device Testing",
          description: "Real-world testing on Vision Pro, Quest, and other headsets"
        },
        {
          step: "Multi-Platform Delivery",
          description: "Optimized files for each target platform"
        }
      ]}
      deliverables={[
        "Vision Pro optimized files",
        "Meta Quest compatible versions",
        "MV-HEVC encoded masters",
        "Side-by-side stereo formats",
        "Spatial audio files (if needed)",
        "Platform testing reports",
        "Upload specifications",
        "Technical documentation"
      ]}
      pricing="From $1,500"
    />
  );
}