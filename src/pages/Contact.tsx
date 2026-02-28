import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <p className="text-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Get in Touch</p>
            <h1 className="text-hero text-[clamp(3rem,10vw,9rem)] leading-[0.85]">
              LET'S<br />
              <span className="text-outline" style={{ WebkitTextStroke: '2px hsl(4 72% 45%)', color: 'transparent' }}>
                CREATE
              </span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-10"
            >
              <p className="text-elegant text-xl text-muted-foreground leading-relaxed">
                Whether you're interested in commissioning a piece, inquiring about an exhibition, 
                or simply want to discuss the beauty of art — I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</p>
                    <p className="text-body text-foreground">hello@arturomorales.art</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Studio</p>
                    <p className="text-body text-foreground">Barcelona, Spain</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground">Phone</p>
                    <p className="text-body text-foreground">+34 612 345 678</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-body text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground block mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-body text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-10 py-4 hover:bg-foreground transition-colors mt-4"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
