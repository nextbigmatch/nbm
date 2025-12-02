import { IndustryTemplate } from "../components/industry-template";
import { Film } from "lucide-react";

export function IndustryFilmStudios() {
  return (
    <IndustryTemplate
      icon={Film}
      title="Film Studios"
      subtitle="Premium 3D conversion for theatrical releases and streaming catalog enhancement"
      description="Major studios and independent filmmakers trust NBM™ for theatrical-grade 3D conversion. We bring depth and dimension to feature films, preserving the director's vision while enhancing the cinematic experience for audiences worldwide."
      imageUrl="https://images.unsplash.com/photo-1560806674-a2947ff828f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdsYXNzZXMlMjBtb3ZpZSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzY0NTY5ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "Theatrical releases (2D to 3D)",
        "Archive restoration projects",
        "Director's cut remastering",
        "Festival submissions",
        "Premium streaming content",
        "International distribution"
      ]}
      benefits={[
        {
          title: "A Step Ahead of the Rest in Quality",
          description: "Our frame-by-frame conversion process meets the highest theatrical standards, approved by directors and studios worldwide."
        },
        {
          title: "Scalable Pipeline",
          description: "From indie features to tentpole releases, our infrastructure handles projects of any size with consistent quality."
        },
        {
          title: "Creative Collaboration",
          description: "We work closely with directors, DPs, and creative teams to ensure depth enhances the original vision."
        },
        {
          title: "Full-Service Delivery",
          description: "From analysis to DCP delivery, we handle every stage of the 3D conversion pipeline."
        }
      ]}
      caseStudy={{
        title: "Independent Feature Film Success",
        description: "We converted a 92-minute independent drama for festival distribution, delivering theatrical DCP and streaming masters. The immersive depth enhanced emotional storytelling, leading to official festival selections and distribution deals."
      }}
    />
  );
}