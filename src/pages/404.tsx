import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";
import { NBMLogo } from "../components/nbm-logo";
import { DepthBackground } from "../components/depth-background";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(false);

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown > 0 && autoRedirect) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && autoRedirect) {
      navigate("/");
    }
  }, [countdown, autoRedirect, navigate]);

  // Start countdown after 3 seconds of user staying on page
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setAutoRedirect(true);
    }, 3000);

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Depth Background */}
      <DepthBackground />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        {/* NBM Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <NBMLogo className="w-24 h-auto" color="#1172BA" />
        </motion.div>

        {/* 404 Number with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="heading-hero text-white mb-4"
            style={{
              fontFamily: "Afacad Flux, sans-serif",
              fontSize: "clamp(6rem, 15vw, 12rem)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
            animate={{
              textShadow: [
                "0 0 20px rgba(17, 114, 186, 0.3)",
                "0 0 40px rgba(17, 114, 186, 0.5)",
                "0 0 20px rgba(17, 114, 186, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2
            className="heading-section text-white mb-6"
            style={{ fontFamily: "Afacad Flux, sans-serif" }}
          >
            Page Not Found
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            The immersive content you're looking for doesn't exist. It may have
            been moved, deleted, or the link might be broken.
          </p>

          {/* Glassmorphic Error Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block"
          >
            <div
              className="relative px-8 py-6 rounded-2xl border border-white/10 backdrop-blur-xl max-w-md mx-auto"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)",
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1172BA]/5 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-start gap-4 text-left">
                <AlertCircle className="w-5 h-5 text-[#0074C7] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white/90 mb-2">
                    Common Reasons:
                  </h3>
                  <ul className="text-white/50 text-sm space-y-1">
                    <li>• Page URL was typed incorrectly</li>
                    <li>• Content has been removed or relocated</li>
                    <li>• Link from external source is outdated</li>
                    <li>• Project or resource is no longer available</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-[#0074C7]/60 hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          {/* Home Button - Primary CTA */}
          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-[#0074C7]/20 border-2 border-[#0074C7] text-white hover:bg-[#0074C7]/30 transition-all backdrop-blur-sm glow-blue-sm hover:glow-blue-md hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Take Me Home
          </Link>
        </motion.div>

        {/* Auto-redirect Message */}
        {autoRedirect && countdown > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-white/40 text-sm"
          >
            Taking you home in{" "}
            <span className="text-[#0074C7]">{countdown}</span> seconds...
            <button
              onClick={() => setAutoRedirect(false)}
              className="ml-2 text-white/60 hover:text-white underline"
            >
              Cancel
            </button>
          </motion.div>
        )}

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/40 text-sm mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              to="/services"
              className="text-[#0074C7] hover:text-white transition-colors"
            >
              Services
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/industries"
              className="text-[#0074C7] hover:text-white transition-colors"
            >
              Industries
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/work"
              className="text-[#0074C7] hover:text-white transition-colors"
            >
              Our Work
            </Link>
            <span className="text-white/20">•</span>
            <Link
              to="/contact"
              className="text-[#0074C7] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Floating Shapes - Subtle Animation */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(17, 114, 186, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(17, 114, 186, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
