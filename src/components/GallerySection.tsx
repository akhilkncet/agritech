import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg"
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12 sm:mb-16 px-4"
        >
          Event <span className="text-gradient">Gallery</span>
        </motion.h2>
        
        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px] md:min-h-[500px]">
              <img
                src={images[0]}
                alt="Gallery featured"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 p-3 sm:p-6">
                  <p className="text-white font-display font-semibold text-sm sm:text-base md:text-lg">AgriTech 3.0</p>
                  <p className="text-white/70 text-xs sm:text-sm">Innovation in Agriculture</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium images */}
          {images.slice(1, 3).map((src, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full aspect-square">
                <img
                  src={src}
                  alt={`Gallery ${i + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredIndex === i + 1 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}

          {/* Small images */}
          {images.slice(3).map((src, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full aspect-square">
                <img
                  src={src}
                  alt={`Gallery ${i + 4}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br from-agri-green/20 to-agri-lime/10 transition-opacity duration-300 ${hoveredIndex === i + 3 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
