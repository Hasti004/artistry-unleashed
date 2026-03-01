import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gallery-espresso/60" />
        </div>

        {/* Floating artwork frames */}
        <motion.div
          className="absolute top-20 left-[5%] w-36 h-48 gallery-frame overflow-hidden opacity-80 hidden lg:block cursor-grab active:cursor-grabbing z-20"
          drag
          dragMomentum={false}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          whileDrag={{ scale: 1.08, zIndex: 50 }}
        >
          <img src={artwork1} alt="Seascape" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-[8%] w-44 h-36 gallery-frame overflow-hidden opacity-70 hidden lg:block cursor-grab active:cursor-grabbing z-20"
          drag
          dragMomentum={false}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileDrag={{ scale: 1.08, zIndex: 50 }}
        >
          <img src={artwork2} alt="Abstract" className="w-full h-full object-cover pointer-events-none" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-[15%] w-28 h-36 gallery-frame overflow-hidden opacity-60 hidden lg:block cursor-grab active:cursor-grabbing z-20"
          drag
          dragMomentum={false}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileDrag={{ scale: 1.08, zIndex: 50 }}
        >
          <img src={artwork4} alt="Geometric" className="w-full h-full object-cover" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4">
          <motion.p
            className="text-elegant text-lg tracking-[0.3em] uppercase text-primary-foreground/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Portfolio of
          </motion.p>

          <motion.h1
            className="text-hero text-[clamp(3rem,12vw,10rem)] leading-[0.85] text-primary-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            THE ART
            <br />
            <span className="text-outline" style={{ WebkitTextStroke: '2px hsl(30 25% 95%)', color: 'transparent' }}>
              THAT
            </span>
            {" "}SPEAKS
          </motion.h1>

          <motion.p
            className="text-body text-sm tracking-[0.2em] uppercase text-primary-foreground/60 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Painter · Sculptor · Visionary
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-3 text-body text-xs uppercase tracking-[0.2em] text-primary-foreground border border-primary-foreground/30 px-8 py-4 hover:bg-primary-foreground/10 transition-colors"
            >
              View Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Side labels */}
        <motion.div
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 -rotate-90 whitespace-nowrap">
            Heritage Art Studio
          </p>
        </motion.div>

        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 rotate-90 whitespace-nowrap">
            Since 1998
          </p>
        </motion.div>
      </section>

      {/* Featured Works Strip */}
      <section className="py-24 bg-background">
        <div className="px-8 mb-12">
          <h2 className="text-display text-5xl md:text-7xl font-bold text-foreground">
            Selected<br />
            <span className="text-primary">Works</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee" style={{ width: 'max-content' }}>
            {[artwork1, artwork2, artwork4, artwork1, artwork2, artwork4].map((src, i) => (
              <div key={i} className="w-72 h-96 flex-shrink-0 overflow-hidden group cursor-pointer">
                <img
                  src={src}
                  alt={`Artwork ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 mt-12 flex justify-end">
          <Link
            to="/works"
            className="inline-flex items-center gap-3 text-body text-xs uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
          >
            View all works <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-gallery-espresso">
        <div className="max-w-4xl mx-auto text-center px-8">
          <motion.blockquote
            className="text-elegant text-3xl md:text-5xl italic text-primary-foreground/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "Art is not what you see, but what you make others see."
          </motion.blockquote>
          <motion.p
            className="text-body text-xs uppercase tracking-[0.3em] text-primary-foreground/40 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            — Edgar Degas
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-display text-xl font-bold">Arturo</p>
          <div className="flex gap-8">
            {["Instagram", "Behance", "Gallery"].map((s) => (
              <span key={s} className="text-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                {s}
              </span>
            ))}
          </div>
          <p className="text-body text-xs text-muted-foreground">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
