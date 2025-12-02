import { ServiceTemplate } from "../components/service-template";
import { Layers } from "lucide-react";
import depthCompositingHeroImage from "figma:asset/ac5eb085481a230c66084a517e6a2db8e8ac5723.png";

export function ServiceDepthCompositing() {
  return (
    <ServiceTemplate
      icon={Layers}
      title="Depth Compositing & Stereo Cleanup"
      subtitle="Professional stereo refinement and technical quality assurance"
      description="Already have 3D content but need expert cleanup, refinement, or technical QA? Our depth compositing and stereo cleanup services ensure your content meets the highest technical and artistic standards. Perfect for fixing issues, enhancing existing work, or preparing content for theatrical and premium distribution."
      heroBackgroundImage={depthCompositingHeroImage}
      imageUrl="https://images.unsplash.com/photo-1759647323656-8b6de2c839fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0JTIwcHJvZHVjdGlvbiUyMGVkaXRpbmclMjBzdWl0ZXxlbnwxfHx8fDE3NjQ1Njk4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
      features={[
        "Stereo alignment correction",
        "Ghosting elimination",
        "Depth map refinement",
        "Convergence optimization",
        "VFX depth integration",
        "Technical QA services",
        "Format conversion",
        "Archive restoration"
      ]}
      process={[
        {
          step: "Technical Analysis",
          description: "Comprehensive review of existing 3D content and issues"
        },
        {
          step: "Issue Identification",
          description: "Detailed breakdown of stereo problems and recommended fixes"
        },
        {
          step: "Cleanup & Refinement",
          description: "Frame-by-frame correction of alignment, ghosting, and depth issues"
        },
        {
          step: "Quality Verification",
          description: "Multi-stage QC including automated and manual review"
        },
        {
          step: "Final Delivery",
          description: "Corrected masters with technical documentation"
        }
      ]}
      deliverables={[
        "Cleaned stereo masters",
        "Before/after comparison",
        "Technical QA reports",
        "Depth map revisions",
        "Alignment documentation",
        "Format conversions",
        "Archive-ready files",
        "Issue resolution notes"
      ]}
      pricing="Custom Quote"
    />
  );
}