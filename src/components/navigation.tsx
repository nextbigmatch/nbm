import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NBMLogo } from "./nbm-logo";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 -my-5 ml-4">
            <NBMLogo className="w-20 h-auto" color="#1172BA" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm transition-colors relative ${
                isActive("/") ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`text-sm transition-colors flex items-center gap-1 relative ${
                  location.pathname.startsWith("/services")
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Services
                <ChevronDown className="w-3 h-3" />
                {location.pathname.startsWith("/services") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
                )}
              </Link>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-2xl p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.90) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                    }}
                  >
                    {/* Inner glow overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1172BA]/10 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Menu items */}
                    <div className="relative z-10">
                      <Link
                        to="/services/movie-conversion"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        3D Movie Conversion
                      </Link>
                      <Link
                        to="/services/short-films"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        3D Short Films
                      </Link>
                      <Link
                        to="/services/reels"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        3D Reels & Vertical Content
                      </Link>
                      <Link
                        to="/services/advertising"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Immersive Advertising
                      </Link>
                      <Link
                        to="/services/depth-compositing"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Depth Compositing & Cleanup
                      </Link>
                      <Link
                        to="/services/vr-prep"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        VR / Vision Pro Prep
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <Link
                to="/industries"
                className={`text-sm transition-colors flex items-center gap-1 relative ${
                  location.pathname.startsWith("/industries")
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Industries
                <ChevronDown className="w-3 h-3" />
                {location.pathname.startsWith("/industries") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
                )}
              </Link>
              
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-2xl p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] border border-white/20"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.90) 100%)',
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                    }}
                  >
                    {/* Inner glow overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1172BA]/10 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Menu items */}
                    <div className="relative z-10">
                      <Link
                        to="/industries/film-studios"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Film Studios
                      </Link>
                      <Link
                        to="/industries/ott"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        OTT Platforms
                      </Link>
                      <Link
                        to="/industries/creators"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Creators & Influencers
                      </Link>
                      <Link
                        to="/industries/agencies"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Advertising Agencies
                      </Link>
                      <Link
                        to="/industries/music-labels"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Music Labels
                      </Link>
                      <Link
                        to="/industries/documentaries"
                        className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        Documentary Teams
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/partnership"
              className="relative group"
            >
              {/* Animated pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#1172BA]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main button */}
              <div className="relative px-5 py-2 border-2 border-[#1172BA] text-[#1172BA] hover:bg-[#1172BA]/10 rounded-full transition-all group-hover:scale-105 text-sm backdrop-blur-sm flex items-center gap-2">
                <motion.span
                  className="inline-block w-1.5 h-1.5 bg-[#1172BA] rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Partnership Program
              </div>
            </Link>
            <Link
              to="/work"
              className={`text-sm transition-colors relative ${
                isActive("/work") ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Work
              {isActive("/work") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
              )}
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors relative ${
                isActive("/about") ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
              )}
            </Link>
            <Link
              to="/careers"
              className={`text-sm transition-colors relative ${
                isActive("/careers") ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              Careers
              {isActive("/careers") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0074C7]" />
              )}
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-[#1172BA]/40 text-white hover:bg-[#1172BA]/20 hover:border-[#1172BA]/60 rounded-full text-sm transition-all glow-blue-sm hover:glow-blue-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pt-4 pb-2"
            >
              <div className="flex flex-col gap-2">
                <Link to="/" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
                <Link to="/services" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
                <Link to="/industries" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Industries
                </Link>
                <Link to="/partnership" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Partnership Program
                </Link>
                <Link to="/work" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Work
                </Link>
                <Link to="/about" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
                <Link to="/careers" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Careers
                </Link>
                <Link to="/contact" className="px-4 py-2 text-white/60 hover:text-white rounded-lg" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}