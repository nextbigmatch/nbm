import { IndustryTemplate } from "../components/industry-template";
import { Sparkles } from "lucide-react";

export function IndustryAgencies() {
  return (
    <IndustryTemplate
      icon={Sparkles}
      title="Advertising Agencies"
      subtitle="High-impact immersive brand campaigns that drive engagement"
      description="Advertising agencies and brands trust NBM™ to create immersive 3D commercials and brand films that capture attention and drive results. From TV spots to digital campaigns, our depth conversion makes your creative work stand out in crowded markets."
      imageUrl="https://images.unsplash.com/photo-1762525984874-83d6ddf6a069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGJpbGxib2FyZCUyMGNyZWF0aXZlJTIwZGlzcGxheXxlbnwxfHx8fDE3NjQ1Njk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "TV commercials (15-60 sec)",
        "Digital ad campaigns",
        "Product launch films",
        "Brand experience content",
        "Automotive showcases",
        "Luxury & lifestyle ads"
      ]}
      benefits={[
        {
          title: "Fast Agency Turnaround",
          description: "We understand campaign timelines. Quick turnaround without compromising quality, with iterative reviews built in."
        },
        {
          title: "Creative Amplification",
          description: "3D depth enhances your creative vision—product detail pops, talent stands out, and brand moments land harder."
        },
        {
          title: "Multi-Format Delivery",
          description: "Broadcast masters, digital/social cuts, cinema DCPs, and experiential event files—all made to work smoother."
        },
        {
          title: "Proven ROI",
          description: "Immersive ads drive higher engagement, better recall, and increased brand favorability across audiences."
        }
      ]}
      caseStudy={{
        title: "Automotive Product Launch",
        description: "Converted a 60-second automotive commercial for a luxury brand. The 3D depth showcased vehicle design details and spatial presence, driving 2.5x higher engagement and 40% more dealership inquiries."
      }}
    />
  );
}