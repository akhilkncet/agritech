import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Palette, Wrench, Sprout } from "lucide-react";

const participants = [
  { icon: GraduationCap, title: "Students", desc: "Undergrad, postgrad, and PhD students" },
  { icon: Code, title: "Developers", desc: "Full-stack, mobile, and embedded developers" },
  { icon: Palette, title: "Designers", desc: "UI/UX and product designers" },
  { icon: Wrench, title: "Engineers", desc: "Hardware and agricultural engineers" },
  { icon: Sprout, title: "Agri Enthusiasts", desc: "Anyone passionate about agriculture" },
];

const ParticipantsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-agri-gradient" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 px-4">
            Who Can <span className="text-gradient">Participate</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm px-4">Teams of 2–4 members from any background</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {participants.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 sm:p-6 text-center group hover:glow-border hover:scale-105 transition-all duration-300"
            >
              <p.icon className="w-6 h-6 sm:w-8 sm:h-8 text-agri-green mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">{p.title}</h3>
              <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
