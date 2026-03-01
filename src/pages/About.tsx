import { motion } from "framer-motion";
import artistPortrait from "@/assets/artist-portrait.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const education = [
  { year: "1994 — 1998", institution: "Royal Academy of Fine Arts", degree: "Master of Fine Arts", location: "Florence, Italy" },
  { year: "1990 — 1994", institution: "School of Visual Arts", degree: "Bachelor of Arts in Painting", location: "New York, USA" },
  { year: "1989", institution: "Atelier de Paris", degree: "Summer Intensive — Classical Drawing", location: "Paris, France" },
];

const exhibitions = [
  "Venice Biennale 2022", "MOMA New York 2020", "Tate Modern London 2019",
  "Louvre Paris 2017", "Guggenheim Bilbao 2015", "Art Basel 2014",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="relative px-8 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">About the Artist</p>
            <h1 className="text-display text-5xl md:text-7xl font-bold text-foreground leading-[0.9] mb-8">
              Arturo<br />
              <span className="text-primary">Morales</span>
            </h1>
            <p className="text-elegant text-xl text-muted-foreground leading-relaxed mb-6">
              Born in 1972 in Barcelona, Arturo Morales is a contemporary painter and sculptor 
              whose work bridges the classical tradition with modern abstraction. His pieces 
              have been exhibited in over 40 countries and are held in permanent collections 
              across the world's most prestigious institutions.
            </p>
            <p className="text-body text-sm text-muted-foreground leading-relaxed">
              His artistic philosophy centers on the belief that art should provoke dialogue 
              between the past and present, creating emotional resonance through bold composition, 
              rich color theory, and meticulous craftsmanship.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="gallery-frame overflow-hidden">
              <img src={artistPortrait} alt="Arturo Morales" className="w-full h-auto" />
            </div>
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-40 gallery-frame overflow-hidden hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1 }}
            >
              <img src={artwork4} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-24 bg-gallery-espresso">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-display text-4xl md:text-6xl font-bold text-primary-foreground mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={i}
                className="border-b border-primary-foreground/10 pb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  <h3 className="text-display text-2xl font-bold text-primary-foreground">{item.institution}</h3>
                  <span className="text-body text-xs uppercase tracking-[0.2em] text-primary-foreground/40">{item.year}</span>
                </div>
                <p className="text-elegant text-lg text-primary-foreground/70">{item.degree}</p>
                <p className="text-body text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mt-1">{item.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-display text-4xl md:text-6xl font-bold text-foreground mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Notable <span className="text-primary">Exhibitions</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exhibitions.map((item, i) => (
              <motion.div
                key={i}
                className="border border-border p-6 hover:border-primary hover:bg-card transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
