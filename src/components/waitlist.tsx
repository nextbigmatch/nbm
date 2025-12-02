import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend
    setTimeout(() => {
      setEmail("");
      setName("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="waitlist" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full"
      >
        {/* Glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
          <h2 className="text-4xl md:text-5xl text-white mb-4 text-center tracking-tight">
            Join the Waitlist
          </h2>
          
          <p className="text-blue-100/50 text-center mb-12 text-lg">
            Be among the first to experience <span className="font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>NBM™</span>
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-blue-200/30 backdrop-blur-xl h-14 px-6 text-lg rounded-xl focus:border-blue-400/50 focus:ring-blue-400/20"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-blue-200/30 backdrop-blur-xl h-14 px-6 text-lg rounded-xl focus:border-blue-400/50 focus:ring-blue-400/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 h-14 text-lg rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Reserve Your Spot
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl text-blue-200">You're on the list.</p>
              <p className="text-blue-100/50 mt-2">We'll be in touch soon.</p>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-blue-100/30 text-sm">
          © 2025 <span className="font-bold" style={{ fontFamily: 'Afacad Flux, sans-serif' }}>NBM™</span>. All rights reserved.
        </div>
      </motion.div>
    </div>
  );
}