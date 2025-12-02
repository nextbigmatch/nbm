import { IndustryTemplate } from "../components/industry-template";
import { Music } from "lucide-react";

export function IndustryMusicLabels() {
  return (
    <IndustryTemplate
      icon={Music}
      title="Music Labels"
      subtitle="Immersive music videos that amplify the artist's vision"
      description="Music videos are visual storytelling at its finest. NBM™ transforms music videos into immersive 3D experiences that enhance the artist's creative vision and create unforgettable moments for fans. Perfect for Apple Music, Spotify Canvas, and Vision Pro spatial experiences."
      imageUrl="https://images.unsplash.com/photo-1689793354800-de168c0a4c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjQ1Njk4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
      useCases={[
        "Music video conversion (2D to 3D)",
        "Concert films & live recordings",
        "Visual albums",
        "Behind-the-scenes immersive docs",
        "Album launch experiences",
        "VR concert experiences"
      ]}
      benefits={[
        {
          title: "Artistic Depth Grading",
          description: "We understand music video aesthetics—depth is graded to enhance performance, cinematography, and mood."
        },
        {
          title: "Platform Flexibility",
          description: "Delivered for YouTube 3D, Apple Vision Pro, concert screenings, VR platforms, and traditional 3D displays."
        },
        {
          title: "Fast Turnaround",
          description: "Release-ready timing that aligns with album launches, tours, and marketing campaigns."
        },
        {
          title: "Fan Engagement",
          description: "Immersive music videos drive shares, replays, and deeper fan connection with the artist's vision."
        }
      ]}
      caseStudy={{
        title: "Indie Artist Visual Album",
        description: "Converted a 30-minute visual album for an indie artist. The immersive 3D experience became a tour centerpiece, screened at venues with 3D projection, and drove streaming numbers up 90%."
      }}
    />
  );
}