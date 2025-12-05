import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { NBMPattern } from "./nbm-pattern";
import { NBMLogo } from "./nbm-logo";
import { NBMGlass } from "./nbm-glass";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[#0074C7]/20 bg-black/50 backdrop-blur-xl overflow-hidden">
      {/* NBM Pattern Background */}
      <NBMPattern />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <NBMLogo className="w-32 h-auto" color="#1172BA" />
          </Link>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            The world is not flat. It's immersive. It's <NBMGlass size="sm" />.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto text-center md:text-left">
          <div>
            <h3 className="text-white text-sm mb-4 heading-subtitle">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-white/40 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link to="/careers" className="block text-white/40 hover:text-white text-sm transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="block text-white/40 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4 heading-subtitle">Services</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-white/40 hover:text-white text-sm transition-colors">
                All Services
              </Link>
              <Link to="/services/movie-conversion" className="block text-white/40 hover:text-white text-sm transition-colors">
                3D Conversion
              </Link>
              <Link to="/services/reels" className="block text-white/40 hover:text-white text-sm transition-colors">
                Immersive Reels
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4 heading-subtitle">Industries</h3>
            <div className="space-y-2">
              <Link to="/industries" className="block text-white/40 hover:text-white text-sm transition-colors">
                All Industries
              </Link>
              <Link to="/industries/film-studios" className="block text-white/40 hover:text-white text-sm transition-colors">
                Film Studios
              </Link>
              <Link to="/industries/creators" className="block text-white/40 hover:text-white text-sm transition-colors">
                Creators
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm mb-4 heading-subtitle">Resources</h3>
            <div className="space-y-2">
              <Link to="/work" className="block text-white/40 hover:text-white text-sm transition-colors">
                Work
              </Link>
              <Link to="/partnership" className="block text-white/40 hover:text-white text-sm transition-colors">
                Partnership
              </Link>
              <a href="#" className="block text-white/40 hover:text-white text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-white/40 hover:text-white text-sm transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0074C7]/20">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/nextbigmatch"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-[#0074C7]/40 text-[#0074C7] hover:bg-[#0074C7]/10 hover:border-[#0074C7] transition-all hover:scale-110"
                aria-label="Follow NBM on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/30 text-sm text-center">
              © 2025 <span className="font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>NBM™</span> (Next Big Match). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}