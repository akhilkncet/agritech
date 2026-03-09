import { motion } from "framer-motion";
import { GraduationCap, User, Phone } from "lucide-react";

const SponsorsSection = () => (
  <section id="coordinators" className="py-16 sm:py-24 bg-section-dark">
    <div className="max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center mb-12 sm:mb-16 px-4"
      >
        Event <span className="text-gradient">Coordinators</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Student Coordinators */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 group hover:glow-border transition-all duration-500"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-agri-green/20 flex items-center justify-center group-hover:bg-agri-green/30 transition-colors flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-agri-green" />
            </div>
            <h3 className="font-display font-bold text-agri-green text-base sm:text-lg md:text-xl">Student Coordinators</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">Imaiavan I</p>
              <p className="text-white/50 text-xs sm:text-sm mb-2">IV Year Student</p>
              <a 
                href="tel:8637446635" 
                className="flex items-center gap-2 text-agri-green hover:text-agri-lime transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm">8637446635</span>
              </a>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">Rejil S</p>
              <p className="text-white/50 text-xs sm:text-sm mb-2">III Year Student</p>
              <a 
                href="tel:6382812074" 
                className="flex items-center gap-2 text-agri-green hover:text-agri-lime transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm">6382812074</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Faculty Coordinators */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8 group hover:glow-border transition-all duration-500"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-agri-green/20 flex items-center justify-center group-hover:bg-agri-green/30 transition-colors flex-shrink-0">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-agri-green" />
            </div>
            <h3 className="font-display font-bold text-agri-green text-base sm:text-lg md:text-xl">Faculty Coordinators</h3>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">Dr. G. Kiruthika</p>
              <p className="text-white/50 text-xs sm:text-sm mb-2">Assistant Professor, AGE</p>
              <a 
                href="tel:7708334012" 
                className="flex items-center gap-2 text-agri-green hover:text-agri-lime transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm">7708334012</span>
              </a>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <p className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">Mr. S. Satheesh Kumar</p>
              <p className="text-white/50 text-xs sm:text-sm mb-2">Assistant Professor, AGE</p>
              <a 
                href="tel:8489715566" 
                className="flex items-center gap-2 text-agri-green hover:text-agri-lime transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm">8489715566</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SponsorsSection;
