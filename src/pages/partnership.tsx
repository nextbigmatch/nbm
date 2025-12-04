import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Percent, TrendingUp, CheckCircle, TrendingDown } from "lucide-react";

// Animated Background with Floating Sparks
function SparkBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Deep Navy Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1526] to-[#050810]" />
      
      {/* Floating Spark Particles - Reduced from 25 to 12 */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 4px #fff, 0 0 8px #1172BA"
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Blue Accent Sparks - Reduced from 15 to 8 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`blue-${i}`}
          className="absolute w-0.5 h-0.5 bg-[#1172BA] rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
            boxShadow: "0 0 8px #1172BA, 0 0 12px #1172BA"
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}

      {/* Ambient Blue Glow Orbs - Reduced blur and opacity */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#1172BA]/15 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-[#0074C7]/12 rounded-full blur-[110px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.2, 0.12]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}

// Spark Accent Border Component
function SparkBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Main Content */}
      {children}
      
      {/* Animated Spark Corner Highlights - Blue */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #1172BA 0%, transparent 70%)",
          filter: "blur(8px)",
          opacity: 0.6
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(-45deg, #0074C7 0%, transparent 70%)",
          filter: "blur(8px)",
          opacity: 0.6
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}

export function Partnership() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduced Heavy Conversion Expense",
      description: "Eliminate the burden of high per-project conversion costs. Our partnership pricing structure makes premium 3D conversion accessible and sustainable for your ongoing content pipeline."
    },
    {
      icon: Percent,
      title: "Scalable Pricing for Long-Term Work",
      description: "Our partnership model allows studios to scale their 3D production without carrying the usual heavy conversion expenses. The more consistently we work together, the more value you gain."
    },
    {
      icon: TrendingUp,
      title: "Priority Scheduling",
      description: "Fast-track your projects with dedicated resources and priority access to our production pipeline."
    },
    {
      icon: CheckCircle,
      title: "Optional Revenue Share",
      description: "For qualifying projects, we offer revenue share models where NBM™ participates in the upside of successful immersive content."
    }
  ];

  const ideal = [
    "Film studios with active slates",
    "OTT platforms building 3D catalogs",
    "Production companies creating immersive content",
    "Advertising agencies with ongoing campaigns",
    "Music labels with high-volume releases",
    "Educational content creators"
  ];

  return (
    <>
      {/* Animated Background */}
      <SparkBackground />

      <div className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 relative"
          >
            {/* Spotlight Streak */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-40 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ filter: "blur(3px)" }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Spark Glow Orb */}
            <motion.div
              className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1172BA]/30 rounded-full blur-[100px] pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 20px rgba(17, 114, 186, 0.3)",
                    "0 0 40px rgba(17, 114, 186, 0.5)",
                    "0 0 20px rgba(17, 114, 186, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
                  NBM™ Immersive<br />Partnership Program
                </h1>
              </motion.div>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
                Strategic partnerships that unlock premium 3D conversion at scale with exclusive technology licensing.
              </p>

              <Link
                to="/contact"
                className="inline-block relative group"
              >
                <div className="absolute inset-0 bg-[#1172BA] blur-xl opacity-50 group-hover:opacity-70 transition-opacity rounded-full" />
                <div className="relative px-10 py-5 bg-gradient-to-r from-[#1172BA] to-[#0074C7] text-white rounded-full border-2 border-white/30 hover:border-white/50 transition-all group-hover:scale-105">
                  <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Become a Partner</span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Four Glass Benefit Cards */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4 heading-title">Partnership Benefits</h2>
              <p className="text-white/60 text-lg">
                Comprehensive value designed for long-term collaboration
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <SparkBorder className="h-full">
                    <div className="relative h-full backdrop-blur-[30px] bg-white/[0.12] border-2 border-white/30 rounded-3xl p-8 hover:bg-white/[0.18] hover:border-[#1172BA]/60 transition-all hover:-translate-y-1 overflow-hidden">
                      {/* Blue Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1172BA]/20 via-transparent to-[#0074C7]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-4 bg-[#1172BA]/20 rounded-2xl mb-6 border border-[#1172BA]/40">
                          <benefit.icon className="w-8 h-8 text-[#1172BA]" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-2xl text-white mb-4 heading-subtitle">{benefit.title}</h3>
                        <p className="text-white/70 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>

                      {/* Spark Streak Animation */}
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100"
                        style={{ filter: "blur(20px)" }}
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </SparkBorder>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What's Included - Light Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <SparkBorder>
              <div className="backdrop-blur-[40px] bg-white/[0.15] border-2 border-white/30 rounded-3xl p-12 relative overflow-hidden">
                {/* Subtle Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#1172BA]/10 blur-[80px] pointer-events-none" />
                
                <h2 className="text-3xl md:text-4xl text-white mb-12 text-center heading-title relative z-10">What's Included</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {[
                    "50% discount on all services",
                    "Priority project scheduling",
                    "Dedicated account management",
                    "Custom workflow integration",
                    "Co-marketing opportunities",
                    "Volume pricing tiers"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="relative">
                        <CheckCircle className="w-6 h-6 text-[#1172BA] flex-shrink-0 mt-0.5 relative z-10" strokeWidth={2.5} />
                        <div className="absolute inset-0 bg-[#1172BA] blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <p className="text-white/80 group-hover:text-white transition-colors">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SparkBorder>
          </motion.div>

          {/* Ideal Partners Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-12 text-center heading-title">Ideal for</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideal.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="backdrop-blur-[25px] bg-white/[0.1] border border-white/25 rounded-2xl p-6 text-center hover:bg-white/[0.15] hover:border-[#1172BA]/50 transition-all">
                    <p className="text-white/80 group-hover:text-white transition-colors">{item}</p>
                    
                    {/* Spark Accent */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[#1172BA] rounded-full opacity-0 group-hover:opacity-100"
                      style={{ boxShadow: "0 0 10px #1172BA" }}
                      animate={{
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Light-Gray Glass Licensing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-white/90 mb-3 text-center heading-title">
                Usage & Licensing Terms
              </h2>
              <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
                Our licensing structure is designed to maintain clarity, consistency, and long-term support for all partners.
              </p>

              {/* Licensing Table */}
              <div className="backdrop-blur-[35px] bg-white/[0.06] border border-white/20 rounded-3xl overflow-hidden">
                {/* Table Header - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-3 gap-6 bg-white/[0.08] border-b border-white/20 p-8">
                  <div className="text-white/70 uppercase tracking-wider text-sm">License Type</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">NBM's Usage Rights</div>
                  <div className="text-white/70 uppercase tracking-wider text-sm">Ownership</div>
                </div>

                {/* 3-Year Exclusive License */}
                <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8 border-b border-white/10 hover:bg-white/[0.04] transition-colors">
                  <div className="text-white/90 md:mb-0 mb-4">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-1">License Type</span>
                    3-Year Exclusive License
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed md:mb-0 mb-4">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-2">NBM's Usage Rights</span>
                    NBM holds full exclusive usage rights to all 3D depth-converted content during the 3-year term, including the right to distribute and deploy the content as needed.
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-2">Ownership</span>
                    NBM retains exclusive ownership of all 3D depth-converted content throughout the term.
                  </div>
                </div>

                {/* 2-Year Non-Exclusive License */}
                <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8 hover:bg-white/[0.04] transition-colors">
                  <div className="text-white/90 md:mb-0 mb-4">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-1">License Type</span>
                    2-Year Non-Exclusive License
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed md:mb-0 mb-4">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-2">NBM's Usage Rights</span>
                    For the next 2 years, NBM retains non-exclusive usage rights to the converted content for commercial purposes, without distribution rights.
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    <span className="md:hidden text-white/50 uppercase text-xs block mb-2">Ownership</span>
                    Ownership transfers to the partner. NBM retains only non-exclusive commercial usage rights.
                  </div>
                </div>
              </div>

              {/* Legal Notice */}
              <p className="text-white/50 text-sm text-center mt-10 max-w-3xl mx-auto leading-relaxed">
                All ownership and distribution rights remain solely with NBM™ throughout the entire partnership term. 
                Licensing terms are subject to formal partnership agreement and may be customized based on specific project requirements.
              </p>
            </div>
          </motion.div>

          {/* White-Glass Commitment Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-32 max-w-4xl mx-auto"
          >
            <SparkBorder>
              <div className="backdrop-blur-[50px] bg-white/[0.18] border-2 border-white/40 rounded-[3rem] p-12 text-center relative overflow-hidden">
                {/* Gentle Spark Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1172BA]/10 via-transparent to-[#0074C7]/10 opacity-50" />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-block w-16 h-16 bg-[#1172BA]/20 rounded-full mb-6 border border-[#1172BA]/40"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(17, 114, 186, 0.3)",
                        "0 0 40px rgba(17, 114, 186, 0.5)",
                        "0 0 20px rgba(17, 114, 186, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  />
                  <h3 className="text-2xl md:text-3xl text-white mb-4 heading-title">Our Commitment</h3>
                  <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                    Every partnership is built on transparency, quality, and mutual success. We're invested in your content's performance and committed to delivering world-class 3D conversion that elevates your creative vision.
                  </p>
                </div>
              </div>
            </SparkBorder>
          </motion.div>

          {/* Dark-Glass CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SparkBorder>
              <div className="backdrop-blur-[40px] bg-black/40 border-2 border-white/20 rounded-[3rem] p-16 text-center relative overflow-hidden">
                {/* Dark Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1172BA]/20 blur-[100px] pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl text-white mb-6 heading-title">
                    Ready to explore partnership?
                  </h2>
                  <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg">
                    Let's discuss how NBM™ can become your strategic immersive content partner. Schedule a consultation to explore custom partnership structures.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    {/* Bright Spark-Color Button */}
                    <Link
                      to="/contact"
                      className="inline-block relative group"
                    >
                      <div className="absolute inset-0 bg-[#1172BA] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity rounded-full" />
                      <div className="relative px-10 py-5 bg-gradient-to-r from-[#1172BA] to-[#0074C7] text-white rounded-full border-2 border-white/40 hover:border-white/60 transition-all group-hover:scale-105 shadow-[0_0_30px_rgba(17,114,186,0.4)]">
                        <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">Apply for Partnership</span>
                      </div>
                    </Link>

                    {/* Secondary Contact Button */}
                    <a
                      href="mailto:partnerships@nextbigmatch.com"
                      className="px-10 py-5 bg-white/[0.08] backdrop-blur-xl border-2 border-white/30 text-white/90 hover:bg-white/[0.12] hover:border-[#1172BA]/50 hover:text-white rounded-full transition-all hover:scale-105"
                    >
                      partnerships@nextbigmatch.com
                    </a>
                  </div>
                </div>

                {/* Corner Spark Accents */}
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-[#1172BA] rounded-full"
                  style={{ boxShadow: "0 0 15px #1172BA" }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full"
                  style={{ boxShadow: "0 0 15px #fff" }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute top-8 left-8 w-2 h-2 bg-[#0074C7] rounded-full"
                  style={{ boxShadow: "0 0 15px #0074C7" }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-2 h-2 bg-[#1172BA] rounded-full"
                  style={{ boxShadow: "0 0 15px #1172BA" }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                />
              </div>
            </SparkBorder>
          </motion.div>
        </div>
      </div>
    </>
  );
}