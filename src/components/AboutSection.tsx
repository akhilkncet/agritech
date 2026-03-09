import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Sprout, Cpu } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Develop groundbreaking technology-driven solutions for agriculture challenges.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Address crop monitoring, irrigation, climate resilience, and supply chain improvements.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Leverage AI, IoT, data analytics, and smart farming tools for real impact.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-agri-gradient relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
            About the <span className="text-gradient">Hackathon</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-4">
            AgriTech 3.0 brings together talented individuals to develop technology-driven solutions
            for real-world agriculture challenges during a two-day hackathon (March 16–17, 2026), running 9:00 AM–5:00 PM each day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 sm:p-8 text-center group hover:glow-border transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-agri-green/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-agri-green/20 transition-colors">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-agri-green" />
              </div>
              <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
