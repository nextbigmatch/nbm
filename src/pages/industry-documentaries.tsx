import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileText, Globe, GraduationCap, Eye, Mountain, BookOpen } from "lucide-react";
import depthCompositingHeroImage from "figma:asset/3a5d9e4c0703518e67e2c9b04b6c7a3ad79ae785.png";
import teamBrandImage from "figma:asset/b064ab13ee4f5df5edcbc87a73708216089c8756.png";

export function IndustryDocumentaries() {
  const documentaryTypes = [
    { icon: Mountain, title: "Nature & Wildlife", desc: "Immersive natural world storytelling" },
    { icon: GraduationCap, title: "Educational Content", desc: "Schools, museums, & learning platforms" },
    { icon: Globe, title: "Cultural & History", desc: "Heritage preservation & exploration" },
    { icon: BookOpen, title: "Science & Discovery", desc: "Complex concepts with visual depth" }
  ];

  const benefits = [
    {
      title: "Enhanced Educational Impact",
      description: "Depth and dimension make complex concepts more accessible and engaging. Students and viewers retain information better when immersed in spatial storytelling that brings subjects to life."
    },
    {
      title: "Preserve Cultural Heritage",
      description: "Document historical sites, artifacts, and cultural practices in immersive 3D that allows future generations to experience them with unprecedented presence and detail."
    },
    {
      title: "Festival & Distribution Ready",
      description: "From theatrical premieres to streaming platforms and museum installations, we deliver optimized formats for every exhibition and distribution channel."
    },
    {
      title: "Respectful Enhancement",
      description: "We understand documentary ethics. Our conversion process enhances without manipulating, preserving journalistic integrity while adding cinematic depth."
    }
  ];

  const useCases = [
    "Nature documentaries for streaming platforms",
    "Museum exhibits and installations",
    "Educational content for schools and universities",
    "Historical preservation projects",
    "Science and technology explainers",
    "Cultural heritage documentation"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Centered Hero with Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-16"
        >
          <div className="relative h-[500px] md:h-[600px]">
            <img
              src={depthCompositingHeroImage}
              alt="Documentary 3D conversion"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(1.4) contrast(1.2)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="p-8 max-w-4xl">
                <FileText className="w-16 h-16 text-[#0074C7] mb-6 mx-auto" />
                <h1 className="text-4xl md:text-6xl text-white mb-6 heading-display">
                  Documentary Teams
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Bring educational and documentary content to life with depth that enhances storytelling
                </p>
                <p className="text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Transform factual storytelling into immersive experiences. We work with documentary filmmakers, educational institutions, and cultural organizations to add dimension that deepens viewer connection and understanding.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documentary Types - 4 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Perfect For Every Documentary Genre</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentaryTypes.map((type, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-[#0074C7]/30 transition-all"
              >
                <type.icon className="w-12 h-12 text-[#0074C7] mb-4 mx-auto" />
                <h3 className="text-white text-lg mb-2">{type.title}</h3>
                <p className="text-white/60 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Split Content - Image Right, Text Left */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
          >
            <Eye className="w-12 h-12 text-[#0074C7] mb-6" />
            <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
              Stories That Demand to Be Seen in 3D
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Documentary filmmaking captures reality in ways that demand attention and empathy. Adding immersive depth amplifies that connection without compromising authenticity.
            </p>
            <p className="text-white/60 leading-relaxed">
              Whether you're documenting nature's beauty, preserving cultural heritage, or explaining complex science, our 3D conversion enhances educational impact while maintaining the integrity of your factual storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >
            <img
              src={teamBrandImage}
              alt="Documentary production"
              className="w-full h-full object-cover min-h-[400px]"
              style={{ filter: 'brightness(1.5) contrast(1.2)' }}
            />
          </motion.div>
        </div>

        {/* Use Cases - 2x3 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 heading-title text-center">Common Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#0074C7]/30 transition-all flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#0074C7] flex-shrink-0" />
                <p className="text-white/80">{useCase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits - Large Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl text-white mb-8 text-center heading-title">Why Documentary Filmmakers Trust NBM™</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0074C7]/30 transition-all"
              >
                <h3 className="text-2xl text-white mb-3 heading-subtitle">{benefit.title}</h3>
                <p className="text-white/60 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Distribution Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl text-white mb-8 text-center heading-title">Delivery Formats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#0074C7]" />
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Streaming Platforms</h3>
                <p className="text-white/60 text-sm">Netflix, Disney+, Prime Video, and educational platforms</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#0074C7]" />
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Theatrical Distribution</h3>
                <p className="text-white/60 text-sm">DCP masters for film festivals and cinema releases</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-[#0074C7]" />
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Educational Institutions</h3>
                <p className="text-white/60 text-sm">Interactive formats for schools, universities, and training</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#0074C7]/20 border border-[#0074C7]/40 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-6 h-6 text-[#0074C7]" />
              </div>
              <div>
                <h3 className="text-white text-lg mb-2">Museum Installations</h3>
                <p className="text-white/60 text-sm">Custom formats for exhibits and immersive experiences</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-title">
            Ready to Deepen Your Story?
          </h2>
          <p className="text-white/50 mb-8 max-w-2xl mx-auto">
            Let's transform your documentary into an immersive experience that educates, inspires, and resonates with audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 rounded-xl transition-all cta-glow"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-[#0074C7]/40 rounded-xl transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}