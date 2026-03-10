import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Lightbulb, Leaf, Cpu } from "lucide-react";

const mainPrizes = [
  { icon: Trophy, emoji: "🏆", title: "Best Solution: Drones & IoT", amount: "₹3,000", color: "from-green-400 to-green-600" },
  { icon: Trophy, emoji: "🏆", title: "Best Solution: Farm Implements", amount: "₹3,000", color: "from-green-400 to-green-600" },
  { icon: Trophy, emoji: "🏆", title: "Best Solution: Water Quality", amount: "₹3,000", color: "from-green-400 to-green-600" },
];


const PrizesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="prizes" className="py-16 sm:py-24 lg:py-32 bg-section-dark" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12 sm:mb-16 px-4"
        >
          Prizes for <span className="text-gradient">Each Theme</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainPrizes.map((prize, i) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${prize.color}`} />
              <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{prize.emoji}</span>
              <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-1 sm:mb-2">{prize.title}</h3>
              <p className="text-agri-green font-display font-bold text-xl sm:text-2xl">{prize.amount}</p>
              <p className="text-xs text-white/60 mt-2">One prize for the best solution in this theme</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-4 sm:p-6 text-center max-w-2xl mx-auto"
        >
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
            🏆 <span className="text-agri-green font-semibold">Each theme</span> will have <span className="text-agri-green font-semibold">one winning team</span> awarded <span className="text-agri-green font-semibold">₹3,000</span>.<br/>
            🎓 All participants will receive certificates of participation and opportunities to showcase their projects to industry professionals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
