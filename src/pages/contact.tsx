import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, MapPin } from "lucide-react";
import contactHeroImage from "figma:asset/3a08618e76f5a5243c7d19ca3586c880c163da7c.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

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
              Tell us about your project and we'll get back to you within 24 hours
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-[40px] bg-white/5 border border-white/10 rounded-3xl p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white mb-2 block">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 h-12"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="projectType" className="text-white mb-2 block">
                        Project Type *
                      </Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white h-12">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="movie">Feature Film</SelectItem>
                          <SelectItem value="short">Short Film</SelectItem>
                          <SelectItem value="reels">Reels & Vertical Content</SelectItem>
                          <SelectItem value="advertising">Advertising / Brand Film</SelectItem>
                          <SelectItem value="music">Music Video</SelectItem>
                          <SelectItem value="documentary">Documentary</SelectItem>
                          <SelectItem value="vr">VR / Vision Pro Prep</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-white mb-2 block">
                        Budget Range
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/20 text-white h-12">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                          <SelectItem value="flexible">Flexible / TBD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/30 min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0074C7]/20 backdrop-blur-xl border-2 border-[#0074C7]/40 text-white hover:bg-[#0074C7]/30 hover:border-[#0074C7]/60 h-14 text-lg transition-all cta-glow"
                  >
                    Start Project
                  </Button>

                  <p className="text-white/40 text-sm text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-[#0074C7]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#0074C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl text-white mb-3 heading-subtitle">Thank you!</h3>
                  <p className="text-white/60">
                    We've received your message and will be in touch soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
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