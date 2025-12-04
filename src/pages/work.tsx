import { motion } from "motion/react";
import { Film, Video, Megaphone, Music, FileText, Play } from "lucide-react";
import workHeroImage from "figma:asset/517f9d369f315ec617ee7ed0e189ac71673d655c.png";

export function Work() {
  // const categories = [
  //   { icon: Film, title: "Feature Films", count: "12+ Projects" },
  //   { icon: Video, title: "Short Films & Reels", count: "200+ Conversions" },
  //   { icon: Megaphone, title: "Advertising & Brand Films", count: "50+ Campaigns" },
  //   { icon: Music, title: "Music Videos", count: "30+ Artists" },
  //   { icon: FileText, title: "Documentaries", count: "8+ Series" },
  //   { icon: Play, title: "OTT & Streaming", count: "15+ Platforms" }
  // ];

  // const showcaseProjects = [
  //   {
  //     title: "Indie Drama Feature",
  //     category: "Feature Film",
  //     description: "92-minute dramatic feature converted for theatrical and festival distribution",
  //     tags: ["Theatrical DCP", "Festival Circuit", "Streaming Masters"]
  //   },
  //   {
  //     title: "Nature Documentary Series",
  //     category: "Documentary",
  //     description: "6-episode wildlife series for premium streaming tier",
  //     tags: ["Streaming Series", "Wildlife", "4K 3D"]
  //   },
  //   {
  //     title: "Luxury Brand Campaign",
  //     category: "Advertising",
  //     description: "60-second automotive commercial with immersive product showcase",
  //     tags: ["TV Commercial", "Luxury Brand", "Multi-Format"]
  //   },
  //   {
  //     title: "Travel Creator Reels",
  //     category: "Social Media",
  //     description: "10 destination reels changed for the better into vertical 3D experiences",
  //     tags: ["Instagram Reels", "Vertical 3D", "Creator Content"]
  //   },
  //   {
  //     title: "Visual Album Experience",
  //     category: "Music",
  //     description: "30-minute visual album for indie artist tour screenings",
  //     tags: ["Music Video", "Tour Experience", "3D Screening"]
  //   },
  //   {
  //     title: "Ocean Exploration Doc",
  //     category: "Documentary",
  //     description: "75-minute underwater documentary with enhanced depth",
  //     tags: ["Museum Installation", "Festival Winner", "Educational"]
  //   }
  // ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0074C7]/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Our Work
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Premium immersive experiences across film, advertising, music, and beyond.
            </p>
            
            {/* Work Portfolio Hero Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              <img
                src={workHeroImage}
                alt="Portfolio showcase work"
                className="w-full h-full object-cover opacity-60"
                style={{ 
                  filter: 'brightness(1.8) contrast(1.3)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Categories Overview */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <category.icon className="w-8 h-8 text-[#0074C7] mx-auto mb-3" />
              <p className="text-white/70 text-sm mb-1">{category.title}</p>
              <p className="text-white/40 text-xs">{category.count}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Showcase Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8 text-center" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 700, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Featured Projects</h2>
        </motion.div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#0074C7]/30 transition-all group card-interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0074C7]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-full h-48 bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                  <p className="text-white/30 text-sm">Preview Under NDA</p>
                </div>
                
                <p className="text-[#0074C7] text-sm mb-2">{project.category}</p>
                <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* NDA Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-12 text-center mb-12"
        >
          <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Afacad Flux', sans-serif", fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>Some of our best work is under NDA</h3>
          <p className="text-white/50 max-w-2xl mx-auto mb-8">
            We've worked with major studios, global brands, and leading platforms on confidential projects. During consultation, we can share detailed case studies and samples relevant to your industry.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/20 hover:border-[#0074C7]/60 rounded-full transition-all hover:scale-105 cta-glow"
          >
            Request Portfolio Review
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "14+", label: "Years Experience" },
            { number: "300+", label: "Projects Delivered" },
            { number: "50+", label: "Industry Partners" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="backdrop-blur-[30px] bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <p className="text-4xl text-[#0074C7] mb-2">{stat.number}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}