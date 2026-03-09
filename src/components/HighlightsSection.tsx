import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Handshake, Globe, Target } from "lucide-react";

const highlights = [
  { icon: Rocket, title: "Innovation & Ideas", desc: "Build creative prototypes for real farming problems" },
  { icon: Users, title: "Expert Mentorship", desc: "Get guidance from industry leaders and professors" },
  { icon: Handshake, title: "Collaboration", desc: "Work in diverse teams across disciplines" },
  { icon: Globe, title: "Networking", desc: "Connect with agriculture and tech professionals" },
  { icon: Target, title: "Real Challenges", desc: "Solve actual problems faced by farmers today" },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 bg-section-dark relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12 sm:mb-16 px-4"
        >
          Event <span className="text-gradient">Highlights</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 sm:p-6 text-center group hover:glow-border hover:scale-105 transition-all duration-300 cursor-default"
            >
              <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-agri-green mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-white text-xs sm:text-sm mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
