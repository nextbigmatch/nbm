import { IndustryTemplate } from "../components/industry-template";
import { FileText } from "lucide-react";

export function IndustryDocumentaries() {
  return (
    <IndustryTemplate
      icon={FileText}
      title="Documentary Teams"
      subtitle="Immersive depth that enhances educational and documentary storytelling"
      description="Documentary filmmakers trust NBM™ to bring educational content to life with immersive 3D depth. From nature docs to historical films, our conversion enhances storytelling without distracting from the message. Perfect for museums, educational platforms, and streaming services."
      imageUrl="https://images.unsplash.com/photo-1632670467494-c7c6de897290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY0NTY5ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "Nature & wildlife documentaries",
        "Cultural & historical films",
        "Educational content",
        "Museum installations",
        "Underwater & aerial footage",
        "Science & space docs"
      ]}
      benefits={[
        {
          title: "Storytelling-First Approach",
          description: "Depth is used to enhance narrative, not distract—we work with directors to serve the story."
        },
        {
          title: "Technical Expertise",
          description: "Specialized in challenging footage: underwater, aerial, archival restoration, and mixed-format content."
        },
        {
          title: "Educational Impact",
          description: "Immersive 3D increases viewer retention, comprehension, and emotional engagement—especially for educational audiences."
        },
        {
          title: "Festival & Institutional Ready",
          description: "Delivered for festival circuits, museum installations, educational streaming, and theatrical distribution."
        }
      ]}
      caseStudy={{
        title: "Nature Documentary Excellence",
        description: "Converted a 75-minute ocean documentary, enhancing underwater cinematography with depth that brought marine life closer to audiences. The film won festival awards and became a museum installation centerpiece."
      }}
    />
  );
}