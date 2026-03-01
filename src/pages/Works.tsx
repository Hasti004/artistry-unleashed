import { motion } from "framer-motion";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

const timelineData = [
  {
    year: "2022 — Present",
    title: "Master of Dimensions",
    description: "Exploring the boundaries between physical and digital art forms, pushing into immersive installations and mixed reality experiences.",
    artworks: [artwork4, artwork2],
  },
  {
    year: "2018 — 2022",
    title: "The Crimson Period",
    description: "A bold exploration of color theory and emotional resonance through abstract expressionism and large-scale canvases.",
    artworks: [artwork2, artwork3],
  },
  {
    year: "2012 — 2018",
    title: "Classical Revival",
    description: "Returning to renaissance techniques with a contemporary lens, creating haunting portraits and dramatic landscapes.",
    artworks: [artwork3, artwork1],
  },
  {
    year: "2005 — 2012",
    title: "Dreamscapes",
    description: "Surrealist explorations blending architecture, nature, and imagination into fantastical worlds.",
    artworks: [artwork5, artwork4],
  },
  {
    year: "1998 — 2005",
    title: "Origins",
    description: "Early works exploring traditional oil painting, developing foundational techniques and discovering a unique visual language.",
    artworks: [artwork1, artwork5],
  },
];

const Works = () => {
  return (
    <div className="min-h-screen bg-background pt-24 overflow-hidden">
      {/* Giant Title */}
      <section className="relative py-20 px-8">
        <motion.h1
          className="text-hero text-[clamp(4rem,15vw,14rem)] leading-[0.8] text-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          WORKS &<br />
          <span className="text-outline" style={{ WebkitTextStroke: '2px hsl(4 72% 45%)', color: 'transparent' }}>
            EXPERIENCE
          </span>
        </motion.h1>

        {/* Floating art pieces around the title */}
        <motion.div
          className="absolute top-10 left-[5%] w-32 h-40 gallery-frame overflow-hidden opacity-70 hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 0.7, scale: 1, rotate: -8 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <img src={artwork3} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute top-16 right-[8%] w-28 h-36 gallery-frame overflow-hidden opacity-60 hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 6 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          <img src={artwork5} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-[15%] w-24 h-32 gallery-frame overflow-hidden opacity-50 hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
          animate={{ opacity: 0.5, scale: 1, rotate: 4 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <img src={artwork1} alt="" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-[12%] w-36 h-28 gallery-frame overflow-hidden opacity-65 hidden lg:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 0.65, scale: 1, rotate: -3 }}
          transition={{ delay: 1.2, duration: 1.2 }}
        >
          <img src={artwork2} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className="relative mb-32"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* Year badge */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 mb-6 md:mb-0">
                <span className="text-body text-xs uppercase tracking-[0.2em] bg-primary text-primary-foreground px-4 py-2 inline-block">
                  {item.year}
                </span>
              </div>

              <div className={`md:grid md:grid-cols-2 md:gap-20 mt-12 ${index % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                {/* Content side */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                  <h3 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed max-w-md inline-block">
                    {item.description}
                  </p>
                </div>

                {/* Artwork side with floating effect */}
                <div className={`relative mt-8 md:mt-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:col-start-1 md:row-start-1 md:pr-16'}`}>
                  <div className="flex gap-4 items-start">
                    <motion.div
                      className="w-40 h-52 gallery-frame overflow-hidden"
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      style={{ rotate: index % 2 === 0 ? -5 : 5 }}
                    >
                      <img src={item.artworks[0]} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                      className="w-36 h-44 gallery-frame overflow-hidden mt-8"
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      style={{ rotate: index % 2 === 0 ? 3 : -3 }}
                    >
                      <img src={item.artworks[1]} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom marquee of all works */}
      <section className="py-16 bg-gallery-espresso overflow-hidden">
        <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
          {[artwork1, artwork2, artwork3, artwork4, artwork5, artwork1, artwork2, artwork3, artwork4, artwork5].map((src, i) => (
            <div key={i} className="w-56 h-72 flex-shrink-0 overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Works;
