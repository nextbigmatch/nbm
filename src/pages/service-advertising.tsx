import { ServiceTemplate } from "../components/service-template";
import { Megaphone } from "lucide-react";
import advertisingHeroImage from "figma:asset/e6fc8b645ee38b28bde8f02babf336b6011047dd.png";

export function ServiceAdvertising() {
  return (
    <ServiceTemplate
      icon={Megaphone}
      title="Immersive Advertising"
      subtitle="Brand films and commercials with spatial depth that capture attention"
      description="Stand out in the crowded advertising landscape with immersive 3D commercials and brand films. Perfect for TV spots, digital campaigns, product launches, and experiential marketing. Our depth conversion transforms standard ads into premium experiences that drive engagement and brand recall."
      heroBackgroundImage={advertisingHeroImage}
      imageUrl="https://images.unsplash.com/photo-1762525984874-83d6ddf6a069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNyZWF0aXZlJTIwZGlzcGxheXxlbnwxfHx8fDE3NjQ1Njk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      features={[
        "TV commercials (15-60 sec)",
        "Brand films (1-5 min)",
        "Product showcases",
        "High-impact visuals",
        "Campaign-ready delivery",
        "Multi-platform optimization",
        "Fast agency turnaround",
        "Creative collaboration"
      ]}
      process={[
        {
          step: "Brand Alignment",
          description: "Understand your brand identity, campaign goals, and target audience"
        },
        {
          step: "Depth Strategy",
          description: "Design depth grading that amplifies your key brand moments"
        },
        {
          step: "Premium Conversion",
          description: "High-end conversion with focus on product and talent"
        },
        {
          step: "Agency Review",
          description: "Collaborative refinement with your creative team"
        },
        {
          step: "Campaign Delivery",
          description: "All formats needed for broadcast, digital, and experiential"
        }
      ]}
      deliverables={[
        "3D commercial/brand film",
        "Broadcast-ready masters",
        "Digital/social versions",
        "Cinema/theatrical DCP",
        "Experiential/event files",
        "2D backup versions",
        "Asset library access",
        "Campaign toolkit"
      ]}
      pricing="From $2,500"
    />
  );
}