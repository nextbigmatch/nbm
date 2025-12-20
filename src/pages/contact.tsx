import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import contactHeroImage from "figma:asset/3a08618e76f5a5243c7d19ca3586c880c163da7c.png";

export function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0074C7]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl text-white mb-6 heading-display">
              Let's Create Something<br />Immersive
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Reach out to discuss your project and we'll get back to you within 6 hours
            </p>
            
            {/* Contact Hero Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 max-w-5xl mx-auto">
              <img
                src={contactHeroImage}
                alt="Contact and communication"
                className="w-full h-full object-cover opacity-60"
                style={{ 
                  filter: 'brightness(1.8) contrast(1.3)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Cards - Centered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 grid md:grid-cols-3 gap-6"
          >
            {/* Contact Details */}
            <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl text-white mb-6 heading-subtitle">Get in Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@nextbigmatch.com"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0074C7]" />
                  <div>
                    <p className="text-sm text-white/40 mb-1">Email</p>
                    <p className="group-hover:underline">contact@nextbigmatch.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0074C7]" />
                  <div>
                    <p className="text-sm text-white/40 mb-1">Location</p>
                    <p>Remote / Global</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Inquiry */}
            <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg text-white mb-3">Partnership Inquiries</h3>
              <p className="text-white/60 text-sm mb-4">
                Interested in our Partnership Program?
              </p>
              <a
                href="mailto:partnerships@nextbigmatch.com"
                className="text-[#0074C7] text-sm hover:underline"
              >
                partnerships@nextbigmatch.com
              </a>
            </div>

            {/* Careers */}
            <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg text-white mb-3">Career Opportunities</h3>
              <p className="text-white/60 text-sm mb-4">
                Join our team of immersive storytellers
              </p>
              <Link
                to="/careers"
                className="text-[#0074C7] text-sm hover:underline"
              >
                View Open Positions →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}